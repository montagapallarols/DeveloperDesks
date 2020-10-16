import React from "react";
import { desksDummyData } from "./dummyData";
import { ReactQueryConfigProvider } from "react-query";
import axios from "./axios";
import { useSetAppState } from "./appstate";

export type DeskResult = {
  id: number;
  uri: string;
  latitude: number;
  longitude: number;
  developer: {
    id: number;
    name: string;
    email: string;
  };
};

export type DesksListResult = {
  total: number;
  results: DeskResult[];
};

export type SignupResult = {
  name: string;
  email: string;
  token: string;
};

export async function fetchDesksList(): Promise<DesksListResult> {
  try {
    const response = await axios.get<DesksListResult>(`/desks`);
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function fetchDesk(id: number): Promise<DeskResult> {
  try {
    const response = await axios.get<DeskResult>(`/desks/${id}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.message);
    return e;
  }
}

export async function signup(
  name: string,
  email: string,
  password: string
): Promise<SignupResult> {
  try {
    const response = await axios.post<SignupResult>("/auth/signup", {
      email,
      password,
      name,
    });
    return response.data;
  } catch (e) {
    console.log(e.message);
    return e;
  }
}

export async function login(
  email: string,
  password: string
): Promise<SignupResult> {
  try {
    const response = await axios.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (e) {
    console.log(e.message);
    return e;
  }
}

export function ApiQueryConfigProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <ReactQueryConfigProvider
      config={{
        queries: {
          refetchOnMount: false,
          refetchOnWindowFocus: false,
        },
      }}
    >
      {children}
    </ReactQueryConfigProvider>
  );
}
