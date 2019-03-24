import React from 'react'
import { Grid } from 'semantic-ui-react'
import ChannelInfo from './ChannelInfo'
import Messages from './Messages'
import ChatInputBox from './ChatInputBox'
import Members from './Members'

export default function Channel({ user, channelId }) {
  return (
    <Grid divided stretched style={{ height: '93vh' }}>
      <Grid.Row stretched>
        <Grid.Column stretched width={13} className="d-flex flex-column">
          <ChannelInfo />
          <Messages user={user} channelId={channelId} />
          <ChatInputBox user={user} channelId={channelId} />
        </Grid.Column>
        <Grid.Column width={3} className="">
          <Members />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
