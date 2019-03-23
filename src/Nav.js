import React, { useState, useEffect } from "react"
import { Grid, Image, Segment, Item, List } from "semantic-ui-react"
import useCollection from "./useCollection"

export default function Nav() {
  const channels = useCollection("channels")

  return (
    <div className="p-3 pt-lg-5 pl-lg-5">
      <div className="d-flex align-items-center ml-lg-5 pl-lg-5">
        <div>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
            size="tiny"
          />
        </div>
        <div className="ml-2">
          <p className="font-weight-bold">Rachel</p>
          <a href="/">Log Out</a>
        </div>
      </div>
      <div className="mt-5">
        {channels.map(({ topic, id }) => (
          <a key={id} href={`/channel/${id}`}>
            <h4 className="my-2">#{id}</h4>
          </a>
        ))}
      </div>
    </div>
  )
}
