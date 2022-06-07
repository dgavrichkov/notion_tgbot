const sendMessage = require("../../sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);

  await sendMessage(message.chat.id, "stand by");

  return { statusCode: 200 };
};
