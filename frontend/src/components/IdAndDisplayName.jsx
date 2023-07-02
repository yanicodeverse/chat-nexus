import React, { useState } from 'react'
import {v4 as uuIdv4} from 'uuid'

const IdAndDisplayName = ({setIsDisabled, setID, myID, displayName, setDisplayName}) => {
    const [friendID, setFriendID] = useState('')

    const generateID = () => {
        let newUUID = uuIdv4() // Generate UUID v4 for unique identification of user
        setID(newUUID)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if ((displayName === '') && (friendID === '')) {
            alert('Please enter value')
        } else {
            setFriendID('')
            console.log(displayName, friendID)
            setIsDisabled(false);
        }
    }
  return (
      <div id='Id_And_Display_Name_container'>
        <h3>Create a chat-room</h3>
        <form action="" onSubmit={handleSubmit}>
            <p>Display Name:</p>      
              <input
                  type="text"
                  name="username"
                  id="username"
                  value={displayName}
                  onChange={(e) => {setDisplayName(e.target.value)}}
                  placeholder='Your username...'
              />
              <div className="generate_id_button">
                  <button type='submit' onClick={generateID}>Generate ID</button>
              </div>
              <p>Your Chat id: {myID}</p>
              <div id="join_chat">
                  <p>Enter your friend's ID:</p>
                  <input
                      type="text"
                      name='joinChat'
                      id='joinChat'
                      placeholder='Enter Id...'
                      value={friendID}
                      onChange={(e) => setFriendID(e.target.value)}
                  />
                  <div id="join_chat_button">
                      <button>Join Chat!</button>
                  </div>
              </div>
        </form>
    </div>
  )
}

export default IdAndDisplayName
