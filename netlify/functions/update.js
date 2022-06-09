const sendMessage = require("../../sendMessage");
const messageParts = require("../../messageParts");
const hashnode = require("../../hashnode");
const notion = require("../../api/notion");

const BOT_NAME = "DitmarNotionNotes_bot";

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);
  const { command, botName, extra } = messageParts(message.text);

  if (botName === BOT_NAME || botName === null) {
    switch (command) {
      case "echo":
        await sendMessage(message.chat.id, extra || "ECHO!");
        break;
      case "hashnodefeatured":
        const { storiesFeed } = await hashnode.getFeaturedPosts();
        const reply = `
          ${storiesFeed[0].title} by ${storiesFeed[0].author.username}
          ${storiesFeed[1].title} by ${storiesFeed[1].author.username}
          ${storiesFeed[2].title} by ${storiesFeed[2].author.username}
          https://hashnode.com/featured
        `;
        await sendMessage(message.chat.id, reply);
        break;
      case "notion":
        const notionThing = await notion.handler();
        console.log("Notion data:", JSON.parse(notionThing.body).results[0]);
        // await sendMessage(message.chat.id, "notion asked");
        break;
      case "create":
        await notion.createPage(extra);
        break;
      case "db":
        await sendMessage(message.chat.id, process.env.NOTION_DB_KEY);
        break;
      default:
        await sendMessage(message.chat.id, "I don't understand that command.");
    }
  }

  return { statusCode: 200 };
};
