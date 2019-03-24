import React from 'react'
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
} from 'semantic-ui-react'

export default function Members() {
  return (
    <div className="h-100">
      <div className="d-flex align-items-center">
        <Label style={{ fontSize: 5 }} circular />
        <p className="my-1 ml-2">Alice</p>
      </div>
      <div className="d-flex align-items-center">
        <Label style={{ fontSize: 5 }} circular color="teal" />
        <p className="my-1 ml-2">Karolis</p>
      </div>
    </div>
  )
}
