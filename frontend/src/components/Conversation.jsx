import React from 'react'
import { useContact } from './context/ContactsProvider'
import {ListGroup, Card} from 'react-bootstrap'

export default function Conversation() {
  // const {contacts} = useContact()

  const contacts = [
    {
        "id": "6eec0f5c-1fbe-4f79-8b51-99ec94470534",
        "name": "yani",
        "isActive": true
    },
    
    {
        "id": "7d2ed4ea-ffbe-43a9-8e46-e5dddc68b406",
        "name": "justina",
        "isActive": false
    },
    {
        "id": "6eec0f5c-1fbe-4f79-8b51-99ec94470534",
        "name": "rakshak",
        "isActive": true
    },
    {
        "id": "7d2ed4ea-ffbe-43a9-8e46-e5dddc68b406",
        "name": "sam",
        "isActive": false
    }
]
  return (
    <>
      <Card className='mt-3 p-2'>
        <h3>Active</h3>
        <ListGroup>
          {contacts.map(contact => {
            const {id, name, isActive} = contact
            return (
              <ListGroup.Item key={id} className='d-flex justify-content-between align-items-center' style={{ fontSize: '1.2rem' }}>{name}
              {isActive ? <span className='fs-2 d-flex justify-content-center text-success'>•</span>: <span className='fs-2 d-flex justify-content-center text-secondary'>•</span>}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Card>
    </>
  )
}
// WORKING ON THIS