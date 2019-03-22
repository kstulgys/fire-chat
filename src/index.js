import "semantic-ui-css/semantic.min.css"
import "./styles.css"
import React from "react"
import ReactDOM from "react-dom"
import { Grid, Image, Segment, Item, List } from "semantic-ui-react"
import Channel from "./Channel"
import Nav from "./Nav"

function App() {
  return (
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
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
