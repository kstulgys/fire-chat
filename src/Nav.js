import React, { useState, useEffect } from 'react'
import { Grid, Image, Segment, Item, List } from 'semantic-ui-react'
import useCollection from './useCollection'
import { firebase } from './firebase'
import { Link } from '@reach/router'

export default function Nav({ user }) {
  const channels = useCollection('channels')

  return (
    <>
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
      <div className="mt-5 h-100">
        {channels.map(({ id }) => (
          <Link key={id} to={`/channel/${id}`}>
            <h4 className="my-3">#{id}</h4>
          </Link>
        ))}
      </div>
    </>
  )
}
