"use client";

import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TRPCReactProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      {env.NODE_ENV !== "production" ? (
        <ReactQueryDevtools buttonPosition="bottom-right" position="bottom" />
      ) : null}
    </TRPCReactProvider>
  );
};

export default Providers;
