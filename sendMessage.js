const axios = require("axios").default;

const { NOTION_KEY, NOTION_DB_KEY, BOT_KEY } = process.env;
const TG_API = `https://api.telegram.org/bot${BOT_KEY}/sendMessage`;

module.exports = async (chat_id, text) => {
  await axios.post(TG_API, {
    chat_id,
    text,
  });

  return true;
};
