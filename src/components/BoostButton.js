import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  button: {
    display: "inline-block",
    color: "white",
    fontWeight: 600,
    background: "rgb(24, 119, 242)",
    borderColor: "rgb(24, 119, 242)",
    borderWidth: 1,
    borderRadius: 2,
    padding: [[6, 11]],
    cursor: "pointer",
    '&:hover': {
      background: "rgba(14, 82, 176)"
    }
  }
})

function BoostButton(props) {
  const classes = useStyles(props)
  return <button className={classes.button}>{props.text}</button>
}

export default BoostButton
