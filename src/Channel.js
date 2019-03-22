import ReactDOM from "react-dom"
import React from "react"
import {
  Grid,
  Image,
  Segment,
  Divider,
  List,
  Input,
  Item,
  Label
} from "semantic-ui-react"

export default function Channel() {
  return (
    <Grid inverted divided>
      <Grid.Row>
        <Grid.Column
          width={11}
          className="d-flex flex-column px-3 pt-3 px-lg-5 pt-lg-5"
        >
          <ChannelInfo />
          <Messages />
          <ChatInputBox />
        </Grid.Column>
        <Grid.Column width={5} className="p-3 p-lg-5">
          <Members />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

function ChannelInfo() {
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

function ChatInputBox() {
  return (
    <div className="">
      <Input fluid placeholder="What's your thoughts..." />
    </div>
  )
}

function Messages() {
  return (
    <div className="h-100">
      <Divider className="py-4" horizontal>
        22/03/2018
      </Divider>
      <List>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
          />
          <List.Content>
            <List.Header>Rachel</List.Header>
            <List.Description className="my-2">Whatsaaap???</List.Description>
            <List.Description className="my-2">All good?</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </div>
  )
}

function Members() {
  return (
    <div className="h-100">
      <div className="d-flex align-items-center">
        <Label circular color="gray" size="mini" />
        <p className="my-1 ml-2">Alice</p>
      </div>
      <div className="d-flex align-items-center">
        <Label circular color="teal" size="mini" />
        <p className="my-1 ml-2">Karolis</p>
      </div>
    </div>
  )
}
