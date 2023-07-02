import React, {useState} from 'react'

const MgsContainer = ({disabled}) => {
      const [message, setMessage] = useState('')
  const [data, setData] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setData(message)
    setMessage('')
    
    // console.log(disabled);
  }
  return (
     <div className="container">
        <div id="msg_output_container">
          {data}
        </div>
        <div id="msg_control">
            <form action="" onSubmit={handleSubmit}>
              <textarea
                name="msg"
                id="msg"
                value={message}
                cols="55"
                rows="2"
                placeholder='type any msg...'
                onChange={(e) => setMessage(e.target.value)}
              />                  
            <div id="send_button_container">
               <button type='submit'>send</button>
            </div>
            </form>
        </div>
          
      </div>
  )
}

export default MgsContainer
