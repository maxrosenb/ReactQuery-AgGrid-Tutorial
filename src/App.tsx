import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import GuitarTable from "./GuitarTable/GuitarTable";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <GuitarTable />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
