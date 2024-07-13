import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from "../../redux/store";
import {ReactQueryDevtools} from "react-query/devtools";

const ProviderConfig = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            {children}
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default ProviderConfig;
