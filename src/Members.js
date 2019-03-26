import React from 'react'

import { Badge, Card, CardBody } from 'shards-react'

export default function Members() {
  const members = ['Karolis', 'Alice', 'Nando', 'Camilo']
  return (
    <div style={{ paddingTop: 125 }} className="d-flex flex-column mt-5 ml-5">
      {members.map((m, i) => {
        return (
          <div key={i}>
            <Badge outline theme="success" className="mb-3">
              {m}
            </Badge>
          </div>
        )
      })}
    </div>
  )
}

// <div className="d-flex align-items-center">
//   <Label style={{ fontSize: 5 }} circular />
//   <p className="my-1 ml-2">Alice</p>
// </div>
// <div className="d-flex align-items-center">
//   <Label style={{ fontSize: 5 }} circular color="teal" />
//   <p className="my-1 ml-2">Karolis</p>
// </div>
