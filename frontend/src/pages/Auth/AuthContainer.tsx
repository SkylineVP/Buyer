import classes from "./Auth.module.scss"
import { clsx } from "clsx"
import { Link, Outlet, useMatch } from "react-router-dom"

const AuthContainer = () => {
  const isLogin = useMatch("auth/login")
  console.log(isLogin)
  return (
    <div className="flex flex-col items-center h-full">
      <h1 className={clsx("font-serif font-bold text-5xl mb-[60px]", classes.hello)}>Hello</h1>
      <div className="border border-border p-4 px-8 rounded-lg w-fit min-w-[100%] lg:min-w-[320px]">
        <h2 className="font-mono font-semibold text-xl mb-[20px]">
          {isLogin ? "Sigh in to your account" : "Create account"}
        </h2>
        <Outlet />
        <div className="mt-4 text-[12px] text-center">
          {isLogin ? (
            <span>
              If you dont have account <Link to="register">Sign uo</Link>
            </span>
          ) : (
            <span>
              Already have account <Link to="login">Sign in</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthContainer
