import React, { useEffect, useState } from "react"
import { Image, Divider, Header } from "semantic-ui-react"
import useCollection from "./useCollection"

export default function Messages() {
  const messages = useCollection("channels/food/messages", "createdAt")

  return (
    <div className="h-100">
      {messages.map((message, idx) => {
        return idx === 0 ? (
          <>
            <Divider className="py-4" horizontal>
              22/03/2018
            </Divider>
            <div className="d-flex align-items-center">
              <div>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                />
              </div>
              <div className="ml-1">
                <Header as="h5">Rachel</Header>
              </div>
            </div>
            <Header as="h5" className="pl-3 ml-4 my-0 font-weight-normal">
              {message.text}
            </Header>
          </>
        ) : (
          <Header as="h5" className="pl-3 ml-4 my-0 font-weight-normal">
            {message.text}
          </Header>
        )
      })}
    </div>
  )
}
