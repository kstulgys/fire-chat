import React, { useState, useEffect } from 'react'
import useCollection from './useCollection'
import { firebase } from './firebase'
import { Link } from '@reach/router'
import { Alert, Button, Card, CardBody } from 'shards-react'
import { Location } from '@reach/router'

export default function Nav({ user }) {
  const channels = useCollection('channels')
  // const [pathname, setPathname] = useState(window.location.pathname)

  // useEffect(() => {
  //   setPathname(window.location.pathname)
  // }, [window.location.pathname])

  return (
    <>
      <div className="d-flex align-items-center mt-5">
        <div>
          <img
            style={{ width: 45 }}
            className="rounded-circle"
            src={user.photoURL}
          />
        </div>
        <div className="d-flex flex-column ml-3">
          <p className="font-weight-bold m-0 p-0">{user.displayName}</p>
          <a
            className="m-0 p-0"
            href="/"
            onClick={() => firebase.auth().signOut()}>
            Log Out
          </a>
        </div>
      </div>

      <ChannelList channels={channels} />
    </>
  )
}

function ChannelList({ channels }) {
  return (
    <div className="mt-5">
      {channels.map(({ id }) => (
        <Location key={id}>
          {({ location }) => {
            return (
              <Link to={`/channel/${id}`}>
                <h5
                  className={`my-3 ${
                    location.pathname.includes(id) ? 'font-weight-bold' : ''
                  }`}>
                  #{id}
                </h5>
              </Link>
            )
          }}
        </Location>
      ))}
    </div>
  )
}
