const { Client } = require("@notionhq/client");
const { NOTION_KEY, NOTION_DB_KEY } = process.env;

const notion = new Client({
  auth: NOTION_KEY,
});

exports.handler = async function () {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DB_KEY,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: e.toString(),
    };
  }
};

exports.createPage = async function (message) {
  const title = message.substring(0, 14);
  const response = await notion.pages.create({
    parent: {
      database_id: NOTION_DB_KEY,
    },
    icon: {
      type: "emoji",
      emoji: "🥬",
    },
    cover: {
      type: "external",
      external: {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg",
      },
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
    },
    children: [
      // {
      //   object: "block",
      //   type: "heading_2",
      //   heading_2: {
      //     rich_text: [
      //       {
      //         type: "text",
      //         text: {
      //           content: "Lacinato kale",
      //         },
      //       },
      //     ],
      //   },
      // },
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [
            {
              type: "text",

              text: {
                content: message,
              },
            },
          ],
        },
      },
    ],
  });

  console.log(response);
};
