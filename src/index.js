import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import './styles.css'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Alert, Button } from 'shards-react'
import Channel from './Channel'
import Nav from './Nav'
import { firebase, db } from './firebase'
import { Router, Redirect } from '@reach/router'

function App() {
  const user = useAuth()
  // const user = true
  return user ? (
    <div
      className="container bg-light"
      style={{
        height: '100vh'
      }}>
      <div className="row h-100">
        <div className="col-3">
          <Nav user={user} />
        </div>
        <Router className="col-9">
          <Channel path="channel/:channelId" user={user} />
          <Redirect from="/" to="channel/general" />
        </Router>
      </div>
    </div>
  ) : (
    <LogIn />
  )
}

function LogIn() {
  const [authError, setAuthError] = useState(null)

  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      await firebase.auth().signInWithPopup(provider)
    } catch (e) {
      setAuthError(e.message)
    }
  }
  return (
    <div
      style={{ height: '80vh' }}
      className="d-flex align-items-center justify-content-center">
      <div>
        <div className="text-center">
          <h5>Fire-Chat!</h5>
        </div>
        <div className="text-center my-3">
          <h5>Meet friends and stuff...</h5>
        </div>
        <div className="text-center my-3">
          <Button onClick={handleSignIn}>Log In</Button>
        </div>

        {authError && (
          <>
            <div className="text-center my-3">
              <h5>Sorry there was a problem...</h5>
            </div>
            <div className="text-center my-3">
              <h5 className="text-danger">{authError}</h5>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function useAuth() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async userFromFirebase => {
      const firebaseUser = await userFromFirebase
      if (firebaseUser) {
        const user = {
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          uid: firebaseUser.uid
        }
        // console.log('user after login', user)
        await db
          .collection('users')
          .doc(user.uid)
          .set(user, { merge: true })
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  return user
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
