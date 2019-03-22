import React from "react"
import { Grid, Image, Segment, Item, List } from "semantic-ui-react"

export default function Nav() {
  return (
    <div className="p-3 p-lg-5">
      <div className="d-flex align-items-center">
        <div>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
            size="tiny"
          />
        </div>
        <div className="ml-2">
          <p className="font-weight-bold">Rachel</p>
          <a href="#">Log Out</a>
        </div>
      </div>
      <Channels />
    </div>
  )
}

function Channels() {
  return (
    <div className="mt-5">
      <a href="/">
        <h4>#Food </h4>
      </a>
      <a href="/">
        <h4 className="my-3">#Sports</h4>
      </a>
      <a href="/">
        <h4 className="my-3">#Drinks</h4>
      </a>
    </div>
    // </div>
  )
}
