import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Header } from "../Header/Header";
import { AppRoutes } from "./AppRoutes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <div className="container">
          <AppRoutes />
        </div>
      </div>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
