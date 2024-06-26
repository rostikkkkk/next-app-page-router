"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import React from "react";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
