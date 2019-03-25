import React, { useState, useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import useDoc from './useDoc'
import { db } from './firebase'

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

  const onEnter = e => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <div
          className="d-flex align-items-center"
          onClick={() => toggleInput(true)}>
          <p className="p-0 m-0 mr-2 font-weight-bold">Topic:</p>
          <p>{!inputActive && renderTopic()}</p>
        </div>
        {inputActive && (
          <>
            <input
              type="text"
              onChange={handleChange}
              className="p-0 m-0 ml-2"
              defaultValue={channel && channel.topic}
              onKeyPress={onEnter}
            />
            <Icon className="ml-2" name="send" onClick={handleSubmit} />
          </>
        )}
      </div>
      <div>
        <p className="font-weight-bold">#{channel && channel.id}</p>
      </div>
    </div>
  )
  function renderTopic() {
    const noTopic = channel && channel.topic.length === 0
    if (noTopic) {
      return 'Click me to add the topic :)'
    }
    return channel && channel.topic
  }
}
