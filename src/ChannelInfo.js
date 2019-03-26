import React, { useState, useEffect } from 'react'
import useDoc from './useDoc'
import { db } from './firebase'
import { FaRegEdit, FaRegPaperPlane } from 'react-icons/fa'
import { Alert, Button, Card, CardBody, FormInput, Form } from 'shards-react'

export default function ChannelInfo({ channelId }) {
  let channel = useDoc(`channels/${channelId}`)
  const [topic, onTopicChange] = useState('')
  const [inputActive, toggleInput] = useState(false)

  useEffect(() => {
    toggleInput(false)
  }, [channelId])

  const handleSubmit = e => {
    e.preventDefault()
    db.doc(`channels/${channelId}`).set({ topic })
    toggleInput(false)
  }

  const handleChange = e => {
    onTopicChange(e.target.value)
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <h5 className="py-0 my-0 mr-2 font-weight-bold">Topic:</h5>
        <h5 className="py-0 my-0 text-center">
          {!inputActive && renderTopic()}
        </h5>
        {!inputActive && (
          <FaRegEdit size="1.5rem" onClick={() => toggleInput(true)} />
        )}
      </div>
      {inputActive && (
        <div className="d-flex align-items-center w-100">
          <Form onSubmit={handleSubmit} className="w-100">
            <FormInput
              size="md"
              onChange={handleChange}
              className="w-100"
              defaultValue={channel && channel.topic}
            />
          </Form>
          <FaRegPaperPlane
            className="ml-3"
            size="1.5rem"
            onClick={handleSubmit}
          />
        </div>
      )}
    </>
  )

  function renderTopic() {
    const noTopic = channel && channel.topic.length === 0
    if (noTopic) {
      return `No topic. . .  `
    }
    return channel && channel.topic
  }
}
