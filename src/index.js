import "semantic-ui-css/semantic.min.css"
import "./styles.css"
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Grid, Header, Segment, Item, Button } from "semantic-ui-react"
import Channel from "./Channel"
import Nav from "./Nav"
import { firebase } from "./firebase"

function App() {
  const [user, setUser] = useState(null)

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    console.log(result)
    setUser(result.user)
  }
  return user ? (
    <Grid
      inverted
      divided
      className="m-0 p-5 p-sm-2"
      style={{ height: "100vh" }}
    >
      <Grid.Row stretched>
        <Grid.Column width={4}>
          <Nav />
        </Grid.Column>
        <Grid.Column width={12}>
          <Channel />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ) : (
    <div
      style={{ height: "80vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div>
        <div className="text-center">
          <Header>Fire-Chat!</Header>
        </div>
        <div className="text-center my-3">
          <Header>Meet friends and stuff...</Header>
        </div>
        <div className="text-center my-3">
          <Button onClick={handleSignIn}>Log In</Button>
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
