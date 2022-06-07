const axios = require("axios").default;

const { NOTION_KEY, NOTION_DB_KEY, BOT_KEY } = process.env;
const TG_API = `https://api.telegram.org/bot${BOT_KEY}/sendMessage`;

exports.handler = async (event) => {
  console.log("Received an update from Telegram!", event.body);
  console.log("NOTION_KEY", NOTION_KEY);

  await axios.post(TG_API, {
    chat_id: JSON.parse(event.body).message.chat.id,
    text: "I got your message!",
  });

  return { statusCode: 200 };
};
