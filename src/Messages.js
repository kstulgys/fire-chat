import React, { useRef, useEffect } from 'react'
import useCollection from './useCollection'
import useDocWithCashe from './useDocWithCashe'
import distanceInWords from 'date-fns/distance_in_words'
import isSameDay from 'date-fns/is_same_day'
import { Alert, Button, Card, CardBody } from 'shards-react'

function useChatScroll(ref) {
  useEffect(() => {
    const node = ref.current
    node.scrollTop = ref.scrollHeight
  })
}

export default function Messages({ channelId }) {
  const messages = useCollection(`channels/${channelId}/messages`, 'createdAt')

  const scrollerRef = useRef()
  useChatScroll(scrollerRef)

  // console.log(window.innerHeight)
  return (
    <div ref={scrollerRef} style={{ height: '70vh', overflowY: 'scroll' }}>
      {messages.map((message, idx) => {
        const prevMessage = messages[idx - 1]
        const showAvatar = shouldShowAvatar(prevMessage, message)
        const showDay = shouldShowDay(prevMessage, message)

        return showAvatar ? (
          <FirstMessageFromUser
            key={message.id}
            message={message}
            showDay={showDay}
          />
        ) : (
          <p key={message.id} style={{ marginLeft: 39 }} className="py-0 my-0">
            {message.text}
          </p>
        )
      })}
    </div>
  )
}

function FirstMessageFromUser({ message, showDay }) {
  const author = useDocWithCashe(message.user.path)
  const getTimeDistance = () => {
    return distanceInWords(message.createdAt.toDate(), new Date())
  }
  return (
    <div key={message.id}>
      {showDay && (
        <div className="mt-5">
          <p className="text-center font-weight-bold p-0 my-2">22/03/2018</p>
          <hr className="p-0 m-0" />
        </div>
      )}
      <div className="d-flex align-items-center mt-4">
        <img
          className="rounded-circle"
          style={{ width: 35 }}
          src={author && author.photoURL}
        />
        <div className="ml-2">
          <p className="p-0 m-0 font-weight-bold">
            {author && author.displayName}
          </p>
        </div>
        <span className="ml-2 text-secondary">{getTimeDistance()} ago...</span>
      </div>
      <p style={{ marginLeft: 39 }} className="my-0 py-0">
        {message.text}
      </p>
    </div>
  )
}

function shouldShowDay(prevMessage, currentMessage) {
  const isFirst = !prevMessage
  if (isFirst) {
    return true
  }

  const isNewDay = !isSameDay(
    prevMessage.createdAt.toDate(),
    currentMessage.createdAt.toDate()
  )

  return isNewDay
}

function shouldShowAvatar(prevMessage, currentMessage) {
  const isFirst = !prevMessage
  if (isFirst) {
    return true
  }

  const isDifferentUser = currentMessage.user.id !== prevMessage.user.id
  if (isDifferentUser) {
    return true
  }
  const hasBeenAWhile =
    currentMessage.createdAt.seconds - prevMessage.createdAt.seconds > 300
  if (hasBeenAWhile) {
    return true
  }
  return false
}
