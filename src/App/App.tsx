import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "../Header";
import { Items } from "../Item";
import "./App.css";

export const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className='App'>
        <Header />
        <Items />
      </div>
    </QueryClientProvider>
  );
};
