function s(e){window.enmity.plugins.registerPlugin(e)}function a(e,n,t,i){window.enmity.clyde.sendReply(e,n,t,i)}const d={name:"ClydeSpoofer",commands:[],onStart(){const e={id:"clyde-command",applicationId:EnmitySectionID,name:"clyde",displayName:"clyde",description:"Send messages as Clyde.",displayDescription:"Send messages as Clyde.",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltInText,options:[{name:"text",displayName:"text",description:"text for clyde to say.",displayDescription:"text for clyde to say.",type:ApplicationCommandOptionType.String,required:!0}],execute:async function(n,t){const i=n[0].value,o=t.channel;return a(o.id,i)}};this.commands.push(e)},onStop(){this.commands=[]}};s(d);
