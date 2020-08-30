import React from "react"
import profilepic from "../assets/profilepic.jpg"
import image from "../assets/facebooksprite.png"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  profileLink: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    cursor: "pointer",
    "& img": {
      borderRadius: "50%",
      height: 18,
      width: 18,
    },
    "&:hover": {
      backgroundColor: "rgba(29, 33, 41, .04)",
      borderRadius: 2,
    },
  },
  arrow: {
    height: 8,
    width: 9,
    marginLeft: 4,
    backgroundImage: `url(${image})`,
    backgroundPosition: [[-50, -172]],
    display: "inline-block",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
  },
})

function ProfileLink(props) {
  const classes = useStyles(props)
  return (
    <div className={classes.profileLink}>
      <img src={profilepic} alt={props.name} />
      <i className={classes.arrow} />
    </div>
  )
}

export default ProfileLink
