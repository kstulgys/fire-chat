import 'semantic-ui-css/semantic.min.css'
import './styles.css'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Header, Segment, Item, Button } from 'semantic-ui-react'
import Channel from './Channel'
import Nav from './Nav'
import { firebase, db } from './firebase'

function App() {
  const user = useAuth()

  return user ? (
    <Grid divided className="m-0 p-5" style={{ height: '100vh' }}>
      <Grid.Row stretched>
        <Grid.Column width={2} />
        <Grid.Column width={2}>
          <Nav user={user} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Channel user={user} />
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>
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
      className="d-flex align-items-center justify-content-center"
    >
      <div>
        <div className="text-center">
          <Header>Fire-Chat!</Header>
        </div>
        <div className="text-center my-3">
          <Header>Meet friends and stuff...</Header>
        </div>
        <div className="text-center my-3">
          <Button onClick={handleSignIn}>Log In</Button>
        </div>

        {authError && (
          <>
            <div className="text-center my-3">
              <Header>Sorry there was a problem...</Header>
            </div>
            <div className="text-center my-3">
              <Header className="text-danger">{authError}</Header>
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
    return firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const { displayName, photoURL, uid } = firebaseUser
        const user = {
          displayName,
          photoURL,
          uid
        }
        setUser(user)
        db.doc(`users/${user.uid}`).set(user, { merge: true })
      } else {
        setUser(null)
      }
    })
  }, [])

  return user
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
