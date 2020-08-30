import React from "react"
import Name from "./components/Name"
import Notice from "./components/Notice"
import BoostButton from "./components/BoostButton"
import welcomebanner from "./assets/welcomebanner.jpg"
import Reaction from "./components/Reaction"
import ProfileLink from "./components/ProfileLink"
import ThreeDots from "./components/ThreeDots"
import "./App.css"
import { createUseStyles } from "react-jss"

{/* THIS COMPONENT USES JSS (CSS IN JS) FOR STYLING. YOU CAN READ MORE ABOUT IT HERE: https://cssinjs.org/?v=v10.4.0*/}
{/* YOU CAN READ MORE ABOUT REACT-JSS HERE: https://cssinjs.org/react-jss?v=v10.4.0 */}

const useStyles = createUseStyles({
  "@global": {
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f2f7ff",
      fontFamily: ["Helvetica", "Arial", "sans-serif"],
    },
  },
  facebookCard: {
    display: "flex",
    flexDirection: "column",
    width: 500,
    backgroundColor: "#fff",
    border: [[1, "solid", "#dddfe2"]],
    borderRadius: 3,
    margin: [[15, 0]],
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: [[12]],
  },
  image: {
    width: "100%",
    height: 250,
    backgroundImage: `url(${welcomebanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer"
  },
  hr: {
    width: "100%",
    height: 1,
    marginBottom: 10,
    marginTop: 25,
    backgroundColor: "#ddd",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: [[0, 12]],
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    padding: 12,
    borderTop: [[1, "solid", "#ddd"]],
    marginTop: 10,
  },
  threeDots: {
    display: "inline-block",

  }
})

function App(props) {
  const classes = useStyles(props)
  return (
    <div className={classes.facebookCard}>
      <div className={classes.header}>
        {/* Each of these are individual components that match the one on the blog post. */}
        <Name name="Eric McWinNEr" date="June 14, 2017" />
        <ThreeDots />
      </div>
      <div className={classes.image} />
      <Notice
        type="Messenger"
        content="Eric McWinNEr updated their info in the about section."
      />
      <div className={classes.hr} />
      <div className={classes.buttonContainer}>
        <BoostButton text="Boost Post" />
      </div>
      <div className={classes.actions}>
        <Reaction>Like</Reaction>
        <Reaction>Comment</Reaction>
        <Reaction>Share</Reaction>
        <ProfileLink name="Eric McWinNEr" />
      </div>
    </div>
  )
}

export default App
