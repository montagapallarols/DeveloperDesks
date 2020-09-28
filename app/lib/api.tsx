import React from "react";
import { desksDummyData } from "./dummyData";
import { ReactQueryConfigProvider } from "react-query";

export type DeskResult = {
  id: number;
  uri: string;
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

export function fetchDesksList(): Promise<DesksListResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ total: desksDummyData.length, results: desksDummyData });
    }, Math.random() * 500);
  });
}

export function fetchDesk(id: number): Promise<DeskResult> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const desk = desksDummyData.find((r) => r.id === id);
      if (desk) {
        resolve(desk);
      } else {
        reject("Desk does not exist");
      }
    }, Math.random() * 500);
  });
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
