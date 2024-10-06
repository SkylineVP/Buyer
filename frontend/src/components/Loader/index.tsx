import React from "react"
import classes from "./Loader.module.scss"

const Loader: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
    </div>
  )
}

export default Loader
