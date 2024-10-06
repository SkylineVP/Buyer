import { useEffect, useState } from "react"

import "./App.css"
import { Button } from "@/components/ui/button.tsx"
import ThemeToggle from "@/components/ThemeToggle.tsx"
import Loader from "@/components/Loader"

function App() {
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

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
    setLoading(true)
    fetch("/api/count")
      .then((response) => response.json())
      .then((data) => setCount(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className=" bg-background flex items-center justify-center h-[100vh]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Button onClick={addCount}>Hello {!loading ? "+ " + count : ""}</Button>
          <Button className="ml-2" onClick={clearCount}>
            Clear Count
          </Button>
        </>
      )}

      <ThemeToggle className="absolute top-1 right-1" />
    </div>
  )
}

export default App
