const sendMessage = require("../../sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  await sendMessage(message.chat_id, "I got the message");

  return { statusCode: 200 };
};
