const Discord = require('discord.js');
const client = new Discord.Client();
const devs = ['485380710656507914','342157331796328449'];
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var prefix = "-";
var adminprefix = "2"

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : ÚÏÏ ÇáÇÚÖÇÁ ÇáãÓÊáãíä`); 
 message.delete(); 
};     
});

client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__áíÓ áÏíß ÕáÇÍíÇÊ__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÔÎÕ ÇáãÑÇÏ ÓÍÈ ãäå ÇáÑÊÈÉ**' );
		if( !args[1] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÓÍÈåÇ ãä ÇáÔÎÕ**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÓÍÈåÇ ãä ÇáÔÎÕ**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] ÑÊÈÉ [ '+args[0]+' ] Êã ÓÍÈ ãä **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÓÍÈ ãä Çáßá ÑÊÈÉ**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÓÍÈ ãä ÇáÈæÊÇÊ ÑÊÈÉ**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÓÍÈ ãä ÇáÈÔÑííä ÑÊÈÉ**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÔÎÕ ÇáãÑÇÏ ÇÚØÇÆåÇ ÇáÑÊÈÉ**' );
		if( !args[1] ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÇÚØÇÆåÇ ááÔÎÕ**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: íÑÌì æÖÚ ÇáÑÊÈÉ ÇáãÑÇÏ ÇÚØÇÆåÇ ááÔÎÕ**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] ÑÊÈÉ [ '+args[0]+' ] Êã ÇÚØÇÁ **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÇÚØÇÁ Çáßá ÑÊÈÉ**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÇÚØÇÁ ÇáÈæÊÇÊ ÑÊÈÉ**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] Êã ÇÚØÇÁ ÇáÈÔÑííä ÑÊÈÉ**');
		} 
	} 
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} Êã ÊÛííÑ ÈáÇíäŞ ÇáÈæÊ Åáì **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Êã ÊÛííÑ ÃÓã ÇáÈæÊ Åáì`)
return message.reply("**áÇ íãßäß ÊÛííÑ ÇáÇÓã íÌÈ Úáíß ÇáÇäÊÙÂÑ áãÏÉ ÓÇÚÊíä . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : Êã ÊÛíÑ ÕæÑÉ ÇáÈæÊ`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**Êã ÊÛííÑ ÊæíÊÔ ÇáÈæÊ Åáì  ${argresult}**`)
}
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "-mute") {
          if(!message.channel.guild) return message.reply('**:x: ÇÓİ áßä åĞÇ ÇáÇãÑ ááÓíÑİÑÇÊ İŞØ **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** áÇ íæÌÏ áÏíß ÈÑãÔä 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**áÇ íæÌÏ ÇáÑæã ÇáãÑÇÏ ÇÑÓÇá ÇáãÚáæãÇÊ áå 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇğ **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('Êã ÇÚØÇÁ ÇáãíæÊ á', `${user.username}#${user.discriminator} `)
    .addField('ÇáÓÈÈ', '**ÊÚßíÑ äÙÇã ÇáÔÇÊ**')
    .addField('ÈæÇÓØÉ:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** áÇ íæÌÏ áÏí ÈÑãÔä Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "-unmute") {
          if(!message.channel.guild) return message.reply('**:x: ÇÓİ áßä åĞÇ ÇáÇãÑ ááÓíÑİÑÇÊ İŞØ **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** áÇ íæÌÏ áÏíß ÈÑãÔä 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **");
  if (!modlog) return message.reply("**áÇ íæÌÏ ÇáÑæã ÇáãÑÇÏ ÇÑÓÇá ÇáãÚáæãÇÊ áå 'console'**");
  if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇğ **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('Êã İß ÇáãíæÊ Úä', `${user.username}#${user.discriminator} `)
    .addField('ÈæÇÓØÉ:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** áÇ íæÌÏ áÏí ÈÑãÔä Manage Roles **');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }

};


});

client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: ÇÓİ áßä åĞÇ ÇáÇãÑ ááÓíÑİÑÇÊ İŞØ **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  áÇ íæÌÏ áÏíß ÕáÇÍíÉ áãÓÍ ÇáÔÇÊ**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``ÊÜÜã ãÓÍ ÇáÔÇÊ ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });
  
  client.on('message', (message) => {
    if (message.content.startsWith('-ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('åĞÇ ÇáÎÇÕíÉ ááÏÇÑÉ İŞØ');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'Êã ØÑÏ åĞÇ ÇáÔÎÕ ãä ÇáÓíÑİÑ');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});

client.on('message', message => {
	var prefix = "-";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``áÇÓÊÎÏÇã ÇáÃãÑ ÇßÊÈ åĞå ÇáÃãÑ : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`áŞÏ ŞãÊ ÈÓÍÈ <@${usermentioned}> Çáì ÇáÑæã ÇáÕæÊí ÇáÎÇÕ Èß? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``áÇ ÊÓÊØíÚ ÓÍÈ "+ message.mentions.members.first() +" `íÌÈ Çä íßæä åĞå ÇáÚÖæ İí Ñæã ÕæÊí`")
}
} else {
 message.channel.send("**``íÌÈ Çä Êßæä İí Ñæã ÕæÊí áßí ÊŞæã ÈÓÍÈ ÇáÚÖæ Ãáíß``**")
}
} else {
message.react("?")
 }}});
 
 client.on("message", message => {
    const prefix = "!"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  client.on('message', message => {
    if (message.content.startsWith("!avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if(message.content === `${prefix}voiceonline`) {
  message.guild.createChannel(`Voice Online : ${message.guild.members.filter(g => g.voiceChannel).size} ` , "voice").then(c => {
   c.overwritePermissions(message.guild.id, {CONNECT: false});
    message.channel.send(`**Voice Online : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
    setInterval(() => {
    c.setName(`Voice Online : ${message.guild.members.filter(g => g.voiceChannel).size} `)
    },1000);
  })

}
});

client.on('message', message => {
var prefix = "!";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__áíÓ áÏíß ÕáÇÍíÇÊ__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__Êã ÊŞİíá ÇáÔÇÊ__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__áíÓ áÏíß ÕáÇÍíÇÊ__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__Êã İÊÍ ÇáÔÇÊ__:white_check_mark:**")
              });
    }
       
});

client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help") {
	  message.channel.send('**Êã ÇÑÓÇáß İí ÇáÎÇÕ** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
             :robot:  Bot Command:robot: 
	-clear = áãÓÍ ÇáÔÇÊ
	-move  = áÓÍÈ ÇáÚÖæ Çáì ÇáÑæã
	-ban   = áØÑÏ ÇáÚÖæ ãä ÇáÓíÑİÑ
	-mute  = áÇÓßÇÊ ÇáÚÖæ
   -unmute = áÑİÚ ÇáÅÓßÇÊ Úä ÇáÚÖæ
    -role  = áÅÚØÇÁ ÚÖæ ÑÊÈÉ
  -removeRole = áÓÍÈ ÇáÑÊÈÉ ãä ÇáÚÖæ
  -avatar  = áÅÙåÇÑ ÕæÑÉ ÔÎÕ Çæ ÕæÑÊß
  -image   = áÅÙåÇÑ ÕæÑÉ ÇáÓíÑİÑ
  -mutechannel = áÅÛáÇŞ ÇáÔÇÊ 
  -unmutechannel = áİÊÍ ÇáÔÇÊ
  -voiceonline = áÊİÚíá ÎÇÕíÉ ÚÏÇÏ ÇáÇÔÎÇÕ
  -bc = ÑÓÇáÉ ÌãÇÚíå
  **:rose: äÊãäÇ áßã ÇÓÚÏ ÇáÃæŞÇÊ :rose: **
 `)
   message.author.sendEmbed(embed)
    
   }
   }); 
   
client.login(process.env.BOT_TOKEN);