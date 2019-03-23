import React from "react"
import { Grid } from "semantic-ui-react"
import ChannelInfo from "./ChannelInfo"
import Messages from "./Messages"
import ChatInputBox from "./ChatInputBox"
import Members from "./Members"

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
