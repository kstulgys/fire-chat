import React, { useState, useEffect } from 'react'
import { Grid, Image, Segment, Item, List } from 'semantic-ui-react'
import useCollection from './useCollection'
import { firebase } from './firebase'

export default function Nav({ user }) {
  const channels = useCollection('channels')

  return (
    <div className="p-3 pt-lg-5 pl-lg-5">
      <div className="d-flex align-items-center">
        <div>
          <Image avatar src={user.photoURL} size="mini" />
        </div>
        <div className="ml-2 d-flex flex-column">
          <p className="font-weight-bold m-0">{user.displayName}</p>
          <a href="/" onClick={() => firebase.auth().signOut()}>
            Log Out
          </a>
        </div>
      </div>
      <div className="mt-5">
        {channels.map(({ topic, id }) => (
          <a key={id} href={`/channel/${id}`}>
            <h4 className="my-3">#{id}</h4>
          </a>
        ))}
      </div>
    </div>
  )
}
