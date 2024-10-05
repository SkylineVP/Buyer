import { useEffect, useState } from "react"

import "./App.css"
import { Button } from "@/components/ui/button.tsx"
import ThemeToggle from "@/components/ThemeToggle.tsx"

function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    fetch("/api/addCount", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => setCount(data))
  }

  const clearCount = () => {
    fetch("/api/count", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => setCount(data))
  }

  useEffect(() => {
    fetch("/api/count")
      .then((response) => response.json())
      .then((data) => setCount(data))
  }, [])

  return (
    <div className=" bg-background flex items-center justify-center h-[100vh]">
      <Button onClick={addCount}>Hello + {count}</Button>
      <Button className="ml-2" onClick={clearCount}>
        Clear Count
      </Button>

      <ThemeToggle className="absolute top-1 right-1" />
    </div>
  )
}

export default App
