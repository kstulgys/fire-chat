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

export default function Members() {
  return (
    <div className="h-100">
      <div className="d-flex align-items-center">
        <Label circular size="mini" />
        <p className="my-1 ml-2 text-white">Alice</p>
      </div>
      <div className="d-flex align-items-center">
        <Label circular color="teal" size="mini" />
        <p className="my-1 ml-2 text-white">Karolis</p>
      </div>
    </div>
  )
}
