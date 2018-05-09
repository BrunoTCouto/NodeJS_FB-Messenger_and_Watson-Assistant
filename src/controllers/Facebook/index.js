import { load } from "dotenv"
import axios from "axios"

load()

export const auth =  (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN
      
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);      
      }
    }
  };

  export const sendMessage = async (recipient, text) => {
    return new Promise((resolve, reject) => {
      axios.post("https://graph.facebook.com/v2.6/me/messages", {
        recipient: {id: recipient},
        message:{text: text},
        "access_token": process.env.FB_ACCESS_TOKEN
      },{headers:{
       'Content-type': 'application/json',
       "access_token": process.env.FB_ACCESS_TOKEN
      }}).then(resolve).catch(reject)
    })

  }

