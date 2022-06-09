const sendMessage = require("../../api/sendMessage");
const messageParts = require("../../utils/messageParts");
const notion = require("../../api/notion");

const BOT_NAME = "DitmarNotionNotes_bot";

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  const { command, botName, extra } = messageParts(message.text);

  if (botName === BOT_NAME || botName === null) {
    switch (command) {
      case "create":
        if (extra) {
          await notion.createPage(extra);
          await sendMessage(message.chat.id, "note added");
        } else {
          await sendMessage(message.chat.id, "no message here");
          console.log(message);
        }
        break;
      default:
        await sendMessage(message.chat.id, "I don't understand that command.");
    }
  }

  return { statusCode: 200 };
};
