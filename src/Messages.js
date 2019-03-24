import React, { useEffect, useState } from 'react'
import { Image, Divider, Header } from 'semantic-ui-react'
import useCollection from './useCollection'
import { db } from './firebase'

export default function Messages() {
  const messages = useCollection('channels/food/messages', 'createdAt')
  return (
    <div className="h-100">
      {messages.map((message, idx) => {
        const prevMessage = messages[idx - 1]
        const showAvatar =
          !prevMessage || message.user.id !== prevMessage.user.id
        const showDay = true

        return showAvatar ? (
          <FirstMessageFromUser
            key={message.id}
            message={message}
            showDay={showDay}
          />
        ) : (
          <Header
            key={message.id}
            as="h5"
            className="pl-3 ml-4 my-0 font-weight-normal"
          >
            {message.text}
          </Header>
        )
      })}
    </div>
  )
}

function useDoc(path) {
  const [doc, setDoc] = useState(null)

  useEffect(() => {
    return db.doc(path).onSnapshot(doc => {
      setDoc({
        id: doc.id,
        ...doc.data()
      })
    })
  }, [])

  return doc
}

function FirstMessageFromUser({ message, showDay }) {
  const author = useDoc(message.user.path)

  return (
    <div key={message.id}>
      {showDay && (
        <Divider className="py-4" horizontal>
          22/03/2018
        </Divider>
      )}
      <div className="d-flex align-items-center">
        <div>
          <Image avatar src={author && author.photoURL} />
        </div>
        <div className="ml-1">
          <Header as="h5">{author && author.displayName}</Header>
        </div>
      </div>
      <Header as="h5" className="pl-3 ml-4 my-0 font-weight-normal">
        {message.text}
      </Header>
    </div>
  )
}
