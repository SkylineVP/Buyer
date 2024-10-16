import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider.tsx"
import { Toaster } from "@/components/ui/sonner"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "@/pages/ErrorPage.tsx"
import Dashboard from "@/pages/Dahsboard"
import AuthContainer from "@/pages/Auth/AuthContainer.tsx"
import Login from "@/pages/Auth/Forms/Login.tsx"
import Register from "@/pages/Auth/Forms/Register.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "auth",
        element: <AuthContainer />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <>
      <RouterProvider router={router} />
      <Toaster duration={2000} />
    </>
  </ThemeProvider>,
)
