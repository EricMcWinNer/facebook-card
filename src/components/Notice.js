import React from "react"
import ActionButton from "./ActionButton"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  notice: {
    backgroundColor: "#EAEBEC",
    padding: 12,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      background: "rgba(230, 231, 232, 1)",
    },
  },
  type: {
    color: "#606770",
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 10,
  },
  content: {
    color: "#1d2129",
    fontWeight: 600,
    fontSize: 17,
    lineHeight: "24px",
  },
  vertical: {
    display: "flex",
    flexDirection: "column",
  },
})

function Notice(props) {
  const classes = useStyles(props)
  return (
    <div className={classes.notice}>
      <div className={classes.vertical}>
        <p className={classes.type}>{props.type.toUpperCase()}</p>
        <p className={classes.content}>{props.content}</p>
      </div>
      <ActionButton type="messenger" />
    </div>
  )
}

export default Notice
