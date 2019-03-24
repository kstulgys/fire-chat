import { useEffect, useState } from 'react'

import { db } from './firebase'

const cashe = {}
export default function useDocWithCashe(path) {
  const [doc, setDoc] = useState(null)

  useEffect(() => {
    if (cashe[path]) {
      setDoc(cashe[path])
      return
    }
    return db.doc(path).onSnapshot(doc => {
      const user = {
        id: doc.id,
        ...doc.data()
      }
      setDoc(user)
      cashe[path] = user
    })
  }, [])

  return doc
}
