import React from "react"
import { createUseStyles } from "react-jss"
import actionsSprite from "../assets/facebookactionsprite.png"

const useStyles = createUseStyles({
  type: {
    width: 14,
    height: 14,
    backgroundImage: `url(${actionsSprite})`,
    backgroundPosition: [[0, 0]],
    display: "inline-block",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    bottom: -1,
    marginTop: -2,
    position: "relative",
    verticalAlign: "top",
    marginRight: 5
  },
  message: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: "#4b4f56"
  },
  button: {
    width: 180,
    display: "flex",
    alignItems: "center",
    height: 30,
    backgroundColor: "#eff1f3",
    justifyContent: "center",
    borderColor: "#bec3c9",
    borderWidth: 1,
    marginLeft: 10,
    cursor: "pointer"

  }
})

function ActionButton(props) {
  const classes = useStyles(props)
  return (
    <button className={classes.button}>
      <i className={classes.type} />
      {/* Just showing a oneline way of displaying an element only if a certain condition is true */}
      {props.type === "messenger" && (
        <span className={classes.message}>Send Message</span>
      )}
    </button>
  )
}

export default ActionButton
