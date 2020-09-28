import { useRef, useState, useCallback, useEffect } from "react";

// This is just like the `useAsyncFn` from react-use,
//  that's used throughout the codebase, except that
//  it tries to align with the API of react-query

interface StateBase<R> {
  status: "idle" | "loading" | "error" | "success";
  data: undefined | R;
  error: null | unknown;
}

export interface IdleAsyncCallbackState<R> extends StateBase<R> {
  status: "idle";
  data: undefined;
  error: null;
}

export interface LoadingAsyncCallbackState<R> extends StateBase<R> {
  status: "loading";
  data: undefined;
  error: undefined;
}

export interface ErrorAsyncCallbackState<R> extends StateBase<R> {
  status: "error";
  data: undefined;
  error: unknown;
}

export interface SuccessAsyncCallbackState<R> extends StateBase<R> {
  status: "success";
  data: R;
  error: undefined;
}

export type AsyncCallbackState<R> =
  | IdleAsyncCallbackState<R>
  | LoadingAsyncCallbackState<R>
  | ErrorAsyncCallbackState<R>
  | SuccessAsyncCallbackState<R>;

export function useAsyncCallback<R = any, A extends any[] = any[]>(
  callback: (...args: A) => Promise<R>,
  options: {
    throwOnError?: boolean;
  } = {}
): [
  (...args: A) => Promise<void | R>,
  AsyncCallbackState<R> & {
    // promise: Promise<R>;
    reset: () => void;
  }
] {
  const latestCall = useRef({
    id: 0,
    options,
  });

  const isMounted = useMountedState();

  const latestCallback = useRef(callback);
  latestCallback.current = callback;

  const latestOptions = useRef(options);
  latestOptions.current = options;

  const [state, setState] = useState<AsyncCallbackState<R>>({
    status: "idle",
    data: undefined,
    error: null,
  });

  const execute = useCallback(
    (...args: A) => {
      const { id, options } = (latestCall.current = {
        id: latestCall.current.id + 1,
        options: latestOptions.current,
      });

      setState({
        status: "loading",
        data: undefined,
        error: undefined,
      });

      return latestCallback
        .current(...args)
        .then((value) => {
          if (isMounted() && latestCall.current.id === id) {
            setState({
              status: "success",
              data: value,
              error: undefined,
            });
          }

          return value;
        })
        .catch((error) => {
          if (isMounted() && latestCall.current.id === id) {
            setState({
              status: "error",
              data: undefined,
              error,
            });
          }

          if (options.throwOnError) {
            throw error;
          } else {
            // return void
          }
        });
    },
    [setState, isMounted]
  );

  const reset = useCallback(() => {
    latestCall.current = {
      id: latestCall.current.id + 1,
      options: latestOptions.current,
    };
    setState({
      status: "idle",
      data: undefined,
      error: null,
    });
  }, [setState]);

  return [
    execute,
    {
      ...state,
      reset,
    },
  ];
}

function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false);
  const isMounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  });

  return isMounted;
}
