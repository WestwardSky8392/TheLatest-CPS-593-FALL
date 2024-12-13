const messages = [
    {
      message_id : 55555,
      message: "Hello how are you?",
      user_photo: null,
      user_id: 15432
    },
    {
        message_id : 24356,
        message: "Hey crazy weather right?",
        user_photo: null,
        user_id: 77777
      },
      {
        message_id : 46373,
        message: "Wow this was an awesome post!!!",
        user_photo: null,
        user_id: 15432
      }
  ]
  
  let getMessages = () => messages
  
  module.exports = { getMessages }