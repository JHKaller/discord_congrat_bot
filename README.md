# The SEAL Bot

The SEAL Bot is a Discord bot designed to send a message to a designated channel whenever a member receives a new role in the server. This bot is ideal for servers with multiple roles and members where administrators need to keep track of changes in the roles of the server's members.

## Getting Started
To add The SEAL Bot to your Discord server, follow these simple steps:

1. Visit the Discord Developer Portal and create a new application.
2. In your new application, create a bot and copy its token.
3. Clone or download The SEAL Bot's source code.
4. Create a .env file in the root directory and add the following code:
`BOT_TOKEN=your-bot-token-goes-here`
5. Run the bot by opening a terminal, navigating to the root directory, and running npm start.
6. Invite the bot to your server by going to the following URL (replace YOUR_CLIENT_ID with your bot's client ID):
`https://discordapp.com/oauth2/authorize?&client_id=YOUR_CLIENT_ID&scope=bot&permissions=268528640`

## Usage
Once The SEAL Bot is added to your server, it will send a message to a designated channel whenever a member receives a new role. To set up the bot, you will need to define the following environment variables in your .env file:
- ``BOT_TOKEN``: Your bot's token.
- ``CHANNEL_ID``: The ID of the channel you want to send the notifications to.

## Contributing
If you encounter any bugs, issues or have suggestions for The SEAL Bot, please open an issue on this repository or feel free to fork the project and submit a pull request.

## License
The SEAL Bot is released under the ISC License.