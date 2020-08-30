import React from "react"
import { createUseStyles } from "react-jss"
import facebooksprite from "../assets/facebooksprite.png"

const useStyles = createUseStyles({
  icon: {
    display: "inline-block",
    height: 18,
    width: 18,
    backgroundImage: `url(${facebooksprite})`,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: props => {
      switch(props.children.toLowerCase()) {
        case "like":
          return [[-19, -413]]
        case "comment":
          return [[0, -394]]
        default:
          return [[-19, -432]]
      }
    }
  },
  reaction: {
    border: "none",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    flex: [[1, 0]],
    height: 32,
    width: 135,
    justifyContent: "center",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "rgba(0, 0, 0, .05)",
      borderRadius: 2,
      textDecoration: "none"
    },
    '& span': {
      color: "#606770",
      fontWeight: 600,
      fontSize: 14,
      marginLeft: 8
    }
  }
})

function Reaction(props) {
  const classes = useStyles(props)
  return (
    <button className={classes.reaction}>
      <i className={classes.icon} />
      <span>{props.children}</span>
    </button>
  )
}

export default Reaction
