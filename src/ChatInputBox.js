import React, { useState } from 'react'
import { Form, FormGroup, FormInput, Card, CardBody } from 'shards-react'

import { db } from './firebase'

export default function ChatInputBox({ user, channelId }) {
  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    db.collection(`channels/${channelId}/messages`).add({
      user: db.doc(`users/${user.uid}`),
      text: input,
      createdAt: new Date()
    })
    setInput('')
  }

  return (
    <Card
      className="m-0 p-0"
      style={{ position: 'absolute', bottom: 30, right: 0, width: '100%' }}>
      <CardBody className="m-0 p-0">
        <Form onSubmit={handleSubmit}>
          <FormInput
            size="lg"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder=""
          />
        </Form>
      </CardBody>
    </Card>
  )
}
