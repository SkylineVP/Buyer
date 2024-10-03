import { useState } from "react";

import "./App.css";
import { Button } from "@/components/ui/button.tsx";
import ThemeToggle from "@/components/ThemeToggle.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-background flex items-center justify-center h-[100vh]">
      <Button onClick={() => setCount(count + 1)}>Hello + {count}</Button>
      <ThemeToggle className="absolute top-1 right-1" />
    </div>
  );
}

export default App;
