import { Plugin, registerPlugin } from "enmity-api/plugins";
import { sendReply } from "enmity-api/clyde";

// Thanks to beerpsi for idea, zoey for this awesome tool, and jaidan for helping me fix compiler errors!!

const ClydeSpoofer: Plugin = {
    name: "ClydeSpoofer",
    commands: [],

    onStart() {
        const clydespoof: Command = {
            id: "clyde-command",
            applicationId: EnmitySectionID,

            name: "clyde",
            displayName: "clyde",

            description: "Send messages as Clyde.",
            displayDescription: "Send messages as Clyde.",

            type: ApplicationCommandType.Chat,
            inputType: ApplicationCommandInputType.BuiltIn,

            options: [
                {
                    name: "text",
                    displayName: "text",

                    description: "text for clyde to say.",
                    displayDescription: "text for clyde to say.",

                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ],

            execute: (args, message): void => {
                const text = args[0].value;
                const channel = message.channel;

                sendReply(channel.id, text);
            }
        }
        this.commands.push(clydespoof);
    },

    onStop() {
      this.commands = [];
    }
}

registerPlugin(ClydeSpoofer);