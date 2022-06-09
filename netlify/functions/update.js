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
        await notion.createPage(extra);
        // if (extra) {
        //   await sendMessage(message.chat.id, "note added");
        // } else {
        //   await sendMessage("no message here");
        // }
        break;
      default:
        await sendMessage(message.chat.id, "I don't understand that command.");
    }
  }

  return { statusCode: 200 };
};
