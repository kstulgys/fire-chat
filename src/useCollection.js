import { useEffect, useState } from "react"
import { db } from "./firebase"

export default function useCollection(path, order) {
  const [docs, setDocs] = useState([])
  useEffect(
    () => {
      let docRef = db.collection(path)

      if (order) {
        docRef = docRef.orderBy(order)
      }
      return docRef.onSnapshot(snapshot => {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setDocs(docs)
      })
    },
    [path, order]
  )
  return docs
}
