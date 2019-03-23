import React from "react"
import {
  Grid,
  Image,
  Segment,
  Divider,
  List,
  Input,
  Item,
  Label,
  Header
} from "semantic-ui-react"

export default function ChannelInfo() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <p className="">Topic: Best exercise</p>
      </div>
      <div>
        <p className="font-weight-bold">#Sports</p>
      </div>
    </div>
  )
}
