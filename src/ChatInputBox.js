import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'
import { db } from './firebase'

export default function ChatInputBox({ user }) {
  const [input, setInput] = useState('')

  const handleInputChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    db.collection('channels/food/messages').add({
      user: db.doc(`users/${user.uid}`),
      text: input,
      createdAt: new Date()
    })
    e.target.reset()
    console.log(input)
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <Input
        fluid
        placeholder="What's your thoughts..."
        onChange={handleInputChange}
      />
    </form>
  )
}
