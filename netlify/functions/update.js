const axios = require("axios").default;
const sendMessage = require("../../sendMessage");
const { NOTION_KEY, NOTION_DB_KEY, BOT_KEY } = process.env;
const TG_API = `https://api.telegram.org/bot${BOT_KEY}/sendMessage`;

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  console.log(message);
  // await axios.post(TG_API, {
  //   chat_id: JSON.parse(event.body).message.chat.id,
  //   text: "I got your message again",
  // });
  await sendMessage(message.chat.id, "stand by");

  return { statusCode: 200 };
};
