import React from 'react'
import { Grid } from 'semantic-ui-react'
import ChannelInfo from './ChannelInfo'
import Messages from './Messages'
import ChatInputBox from './ChatInputBox'
import Members from './Members'

export default function Channel({ user }) {
  return (
    <Grid divided stretched>
      <Grid.Row>
        <Grid.Column width={11} className="d-flex flex-column">
          <ChannelInfo />
          <Messages user={user} />
          <ChatInputBox user={user} />
        </Grid.Column>
        <Grid.Column width={5} className="">
          <Members />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
