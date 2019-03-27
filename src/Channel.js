import React from 'react'
import ChannelInfo from './ChannelInfo'
import Messages from './Messages'
import ChatInputBox from './ChatInputBox'
import Members from './Members'
import { Alert, Button, Card, CardBody } from 'shards-react'

export default function Channel({ user, channelId }) {
  return (
    <div className="row h-100">
      <div className="col-8">
        <ChannelInfo channelId={channelId} />
        <br />
        <Messages user={user} channelId={channelId} />
        <br />
        <ChatInputBox user={user} channelId={channelId} />
      </div>
      <div className="col-4">
        <Members />
      </div>
    </div>
  )
}
