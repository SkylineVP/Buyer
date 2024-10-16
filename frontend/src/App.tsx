import { memo, useMemo } from "react"

import "./App.css"
import ThemeToggle from "@/components/ThemeToggle.tsx"

import { Link, Outlet } from "react-router-dom"
import { Button } from "./components/ui/button"

function App() {
  const user = useMemo(() => {
    return localStorage.getItem("token")
  }, [])

  return (
    <div className=" bg-background flex flex-col h-[100dvh]">
      <header className="flex w-full items-center p-4">
        {!user && (
          <Link className="ml-auto" to="auth/login">
            <Button>Login</Button>
          </Link>
        )}
        <ThemeToggle className="ml-2" />
      </header>
      <Outlet />
    </div>
  )
}

export default memo(App)
