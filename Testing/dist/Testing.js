function v(e){window.enmity.plugins.registerPlugin(e)}var l;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(l||(l={}));var g;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(g||(g={}));var b;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(b||(b={}));var B;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(B||(B={}));var r;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number"})(r||(r={}));var h;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(h||(h={}));const M="enmity";function x(e,s,u,t){window.enmity.clyde.sendReply(e,s,u,t)}const w={name:"BotSpoofer",commands:[],onStart(){const e={id:"botspoof-command",applicationId:M,name:"bot",displayName:"bot",description:"Spoof your messages as a bot.",displayDescription:"Spoof your messages as a bot.",type:g.Chat,inputType:b.BuiltIn,options:[{name:"bot",displayName:"bot",description:'Select "clyde", "discord", or "custom".',displayDescription:'Select "clyde", "discord", or "custom".',type:r.String,required:!0},{name:"text",displayName:"text",description:"Text the bot will say.",displayDescription:"Text the bot will say.",type:r.String,required:!0}],execute:(s,u)=>{const t=s[0].value,f=s[1].value,S=u.channel;x(S.id,f,t)}};this.commands.push(e)},onStop(){this.commands=[]}};v(w);
