import { Plugin, registerPlugin } from "enmity-api/plugins";
import { Command, EnmitySectionID, ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType } from "enmity-api/commands";
import { sendReply } from "enmity-api/clyde";

// Thanks to beerpsi for idea, zoey for this awesome tool, and jaidan for helping me fix compiler errors!!

const BotSpoofer: Plugin = {
    name: "BotSpoofer",
    commands: [],

    onStart() {
        const botspoof: Command = {
            id: "botspoof-command",
            applicationId: EnmitySectionID,

            name: "bot",
            displayName: "bot",

            description: "Spoof your messages as a bot.",
            displayDescription: "Spoof your messages as a bot.",

            type: ApplicationCommandType.Chat,
            inputType: ApplicationCommandInputType.BuiltIn,

            options: [
                {
                    name: "bot",
                    displayName: "bot",

                    description: "Select \"clyde\", \"discord\", or custom.",
                    displayDescription: "Select \"clyde\", \"discord\", or custom.",

                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "text",
                    displayName: "text",

                    description: "Text the bot will say.",
                    displayDescription: "Text the bot will say.",

                    type: ApplicationCommandOptionType.String,
                    required: true

                },
                {
                    name: "pfp",
                    displayName: "pfp",

                    description: "Profile picture link for your custom bot.",
                    displayDescription: "Profile picture link for your custom bot.",

                    type: ApplicationCommandOptionType.String,
                    required: false

                }
            ],

            execute: (args, message): void => {
                const bot = args[0].value;
                const text = args[1].value;
                const pfp = args[2].value;
                const channel = message.channel;
                const defaultpfp = 'https://www.shitpostbot.com/img/sourceimages/clyde-5e1c9d21abece.png';
                if (bot.toLocaleLowerCase() === 'clyde'){
                    sendReply(channel.id, text, 'Clyde', defaultpfp);
                }
                else if(bot.toLocaleLowerCase() === 'discord')
                {
                    sendReply(channel.id, text, 'Discord', 'https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg');
                }   
                else if(pfp.toLocaleLowerCase() === '')
                {
                    sendReply(channel.id, text, bot, defaultpfp);
                }
                else
                {
                    sendReply(channel.id, text, bot, pfp);
                }
            }
        }
        this.commands.push(botspoof);
    },

    onStop() {
      this.commands = [];
    }
}

registerPlugin(BotSpoofer);