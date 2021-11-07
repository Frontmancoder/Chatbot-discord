const { Client } = require("discord.js");
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
  partials: ["CHANNEL"]
});
const smartestchatbot = require("smartestchatbot");
const x = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by Dark side");
});
client.on("messageCreate", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  message.content = message.content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
    return message.reply({
      content: `**:x: Why ping the kid,he might be busy 😭**`
    });
  }
  if (!message.content)
    return message.reply({
      content: "I dont know what to say"
    });
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "The Dark Side#3255",
    user: message.author.id,
    language: "en"
  }).then(reply => {
    message.channel.sendTyping();
    message.reply(`${reply}`);
  });
});
client.login(process.env.TOKEN); //login using the token
