import React from "react"
import profilepic from "../assets/profilepic.jpg"
import web from "../assets/facebooksprite.png"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  Name: {
    display: "flex",
    alignItems: "center",
  },
  profilePic: {
    borderRadius: "50%",
    flexShrink: 1,
    display: "flex",
    cursor: "pointer"
  },
  text: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
  name: {
    border: "none",
    backgroundColor: "transparent",
    color: "#385898",
    textDecoration: "none",
    fontWeight: 600,
    padding: 0,
    fontSize: 16,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "@global p": {
    margin: 0,
  },
  date: {
    fontSize: 14,
    color: "#616770",
    marginTop: 5,
    cursor: "pointer",
    '&:hover': {
      textDecoration: "underline"
    }
  },
  meta: {
    display: "flex",
    alignItems: "center",
    "@global *": {
      margin: [[0, 2]],
    },
  },
  web: {
    width: 12,
    height: 12,
    backgroundImage: `url(${web})`,
    backgroundPosition: [[-51, -590]],
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    bottom: -1,
    marginTop: -2,
    position: "relative",
    verticalAlign: "top",
  },
})

function Name(props) {
  const classes = useStyles(props)
  return (
    <div className={classes.Name}>
      <img src={profilepic} className={classes.profilePic} alt={props.name} />
      <div className={classes.text}>
        <button className={classes.name}>{props.name}</button>
        <div className={classes.meta}>
          <p className={classes.date}>{props.date}</p>
          <p>·</p>
          <i className={classes.web} />
        </div>
      </div>
    </div>
  )
}

export default Name
