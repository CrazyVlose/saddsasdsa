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
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : ��� ������� ���������`); 
 message.delete(); 
};     
});

client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__��� ���� �������__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: ���� ��� ����� ������ ��� ��� ������**' );
		if( !args[1] ) return message.reply( '**:x: ���� ��� ������ ������ ����� �� �����**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: ���� ��� ������ ������ ����� �� �����**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] ���� [ '+args[0]+' ] �� ��� �� **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] �� ��� �� ���� ����**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] �� ��� �� ������� ����**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] �� ��� �� �������� ����**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: ���� ��� ����� ������ ������� ������**' );
		if( !args[1] ) return message.reply( '**:x: ���� ��� ������ ������ ������� �����**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: ���� ��� ������ ������ ������� �����**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] ���� [ '+args[0]+' ] �� ����� **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] �� ����� ���� ����**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] �� ����� ������� ����**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] �� ����� �������� ����**');
		} 
	} 
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} �� ����� ������ ����� ��� **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : �� ����� ��� ����� ���`)
return message.reply("**�� ����� ����� ����� ��� ���� �������� ���� ������ . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : �� ���� ���� �����`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**�� ����� ����� ����� ���  ${argresult}**`)
}
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "-mute") {
          if(!message.channel.guild) return message.reply('**:x: ��� ��� ��� ����� ��������� ��� **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** �� ���� ���� ����� 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** �� ���� ���� ������ 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**�� ���� ����� ������ ����� ��������� �� 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** ��� ���� ������ ����� **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('�� ����� ������ �', `${user.username}#${user.discriminator} `)
    .addField('�����', '**����� ���� �����**')
    .addField('������:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** �� ���� ��� ����� Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "-unmute") {
          if(!message.channel.guild) return message.reply('**:x: ��� ��� ��� ����� ��������� ��� **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** �� ���� ���� ����� 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** �� ���� ���� ������ 'Muted' **");
  if (!modlog) return message.reply("**�� ���� ����� ������ ����� ��������� �� 'console'**");
  if (message.mentions.users.size < 1) return message.reply('** ��� ���� ������ ����� **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('�� �� ������ ��', `${user.username}#${user.discriminator} `)
    .addField('������:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** �� ���� ��� ����� Manage Roles **');

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
                  if(!message.channel.guild) return message.reply('**:x: ��� ��� ��� ����� ��������� ��� **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**?  �� ���� ���� ������ ���� �����**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``���� ��� ����� ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });
  
  client.on('message', (message) => {
    if (message.content.startsWith('-ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('��� ������� ������ ���');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + '�� ��� ��� ����� �� �������');
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
 return message.channel.send("``�������� ����� ���� ��� ����� : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`��� ��� ���� <@${usermentioned}> ��� ����� ������ ����� ��? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``�� ������ ��� "+ message.mentions.members.first() +" `��� �� ���� ��� ����� �� ��� ����`")
}
} else {
 message.channel.send("**``��� �� ���� �� ��� ���� ��� ���� ���� ����� ����``**")
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

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__��� ���� �������__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__�� ����� �����__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__��� ���� �������__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__�� ��� �����__:white_check_mark:**")
              });
    }
       
});

client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help") {
	  message.channel.send('**�� ������ �� �����** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
             :robot:  Bot Command:robot: 
	-clear = ���� �����
	-move  = ���� ����� ��� �����
	-ban   = ���� ����� �� �������
	-mute  = ������ �����
   -unmute = ���� ������� �� �����
    -role  = ������ ��� ����
  -removeRole = ���� ������ �� �����
  -avatar  = ������ ���� ��� �� �����
  -image   = ������ ���� �������
  -mutechannel = ������ ����� 
  -unmutechannel = ���� �����
  -voiceonline = ������ ����� ���� �������
  -bc = ����� ������
  **:rose: ����� ��� ���� ������� :rose: **
 `)
   message.author.sendEmbed(embed)
    
   }
   }); 
   
client.login(process.env.BOT_TOKEN);