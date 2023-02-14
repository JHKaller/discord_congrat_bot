require("dotenv").config()

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const token = process.env.TOKEN_ID;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  const betaCowRole = newMember.guild.roles.cache.find(
    (role) => role.name === "BetaCow"
  );
  if (
    !oldMember.roles.cache.has(betaCowRole.id) &&
    newMember.roles.cache.has(betaCowRole.id)
  ) {
    const channel = newMember.guild.channels.cache.find(
      (ch) => ch.name === "general"
    );
    if (!channel) return;
    channel.send(`Congrats ${newMember} on receiving the BetaCow role!`);
  }
});

client.login(token);
