function S(e){window.enmity.plugins.registerPlugin(e)}var f;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(f||(f={}));var d;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(d||(d={}));var c;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(c||(c={}));var h;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(h||(h={}));var u;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number"})(u||(u={}));var B;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(B||(B={}));const v="enmity";function g(e,r,b,s){window.enmity.clyde.sendReply(e,r,b,s)}const D={name:"BotSpoofer",commands:[],onStart(){const e={id:"botspoof-command",applicationId:v,name:"bot",displayName:"bot",description:"Spoof your messages as a bot.",displayDescription:"Spoof your messages as a bot.",type:d.Chat,inputType:c.BuiltIn,options:[{name:"bot",displayName:"bot",description:'Select "clyde", "discord", or custom.',displayDescription:'Select "clyde", "discord", or custom.',type:u.String,required:!0},{name:"text",displayName:"text",description:"Text the bot will say.",displayDescription:"Text the bot will say.",type:u.String,required:!0},{name:"pfp",displayName:"pfp",description:"Profile picture link for your custom bot.",displayDescription:"Profile picture link for your custom bot.",type:u.String,required:!1}],execute:(r,b)=>{const s=r[0].value,t=r[1].value,w=r[2].value,l=b.channel,o="https://www.shitpostbot.com/img/sourceimages/clyde-5e1c9d21abece.png";s.toLocaleLowerCase()==="clyde"?g(l.id,t,"Clyde",o):s.toLocaleLowerCase()==="discord"?g(l.id,t,"Discord","https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg"):o.toLocaleLowerCase!==null?g(l.id,t,s,w):g(l.id,t,s,o)}};this.commands.push(e)},onStop(){this.commands=[]}};S(D);
