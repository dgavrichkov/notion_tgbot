const sendMessage = require("../../sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  // const commandMatch = message.text.match(/(?<=\/).*?(?=$| |@)/);
  // const command = commandMatch ? commandMatch[0] : null;
  // const botNameMatch = message.text.match(/(?<=@).*?(?=($| ))/);
  // const botName = botNameMatch ? botNameMatch[0] : null;
  // const extraMatch = message.text.match(/(?<=\s).*?(?=$)/);
  // const extra = extraMatch ? extraMatch[0] : null;

  await sendMessage(message.chat.id, "I got your message!");

  // if (botName === "DitmarNotionNotes_bot" || botName === null) {
  // }

  return { statusCode: 200 };
};
