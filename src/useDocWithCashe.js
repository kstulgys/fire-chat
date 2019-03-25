import { useEffect, useState } from 'react'

import { db } from './firebase'

const cashe = {}
export default function useDocWithCashe(path) {
  const [doc, setDoc] = useState(cashe[path])

  useEffect(() => {
    if (cashe[path]) {
      return
    }
    return db.doc(path).onSnapshot(item => {
      const res = {
        id: item.id,
        ...item.data()
      }
      cashe[path] = res
      setDoc(res)
    })
  }, [path])

  return doc
}
