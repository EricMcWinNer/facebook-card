import React from "react"
import web from "../assets/facebooksprite.png"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  threeDots: {
    background: `url(${web})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPosition: [[-21, -352]],
    height: 20,
    width: 20,
    border: "none",
    cursor: "pointer",
    display: "inline-block",
  },
})

const ThreeDots = (props) => {
  const classes = useStyles(props)
  return <button className={classes.threeDots}></button>
}

export default ThreeDots
