import React from 'react'
import { Image, Divider, Header } from 'semantic-ui-react'
import useCollection from './useCollection'
import useDocWithCashe from './useDocWithCashe'
import distanceInWords from 'date-fns/distance_in_words'
import isSameDay from 'date-fns/is_same_day'

export default function Messages({ channelId }) {
  const messages = useCollection(`channels/${channelId}/messages`, 'createdAt')
  return (
    <div className="h-100">
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
  console.log(getTimeDistance)
  return (
    <div key={message.id}>
      {showDay && (
        <Divider className="pt-4" horizontal>
          22/03/2018
        </Divider>
      )}
      <div className="d-flex align-items-center mt-4">
        <Image avatar src={author && author.photoURL} />
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
