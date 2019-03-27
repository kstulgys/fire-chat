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
    <Form
      onSubmit={handleSubmit}
      style={{ position: 'absolute', bottom: 30, left: 0, width: '100%' }}>
      <FormInput
        className="w-100"
        size="lg"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder=""
      />
    </Form>
  )
}
