const express = require("express");//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
const app = express();

app.listen(() => console.log("Started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js')//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
const ms = require('ms')
const client = new Discord.Client()
client.config = require('./config/bot.json');
client.colors = require('./config/colors.json');
const { registerFont } = require('canvas');//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
const { Canvas, resolveImage } = require('canvas-constructor');
const chalk = require('chalk')
const canvacord = require('canvacord')
const nomsy = require('nomsy-paste')//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
const token = (client.config.token);
const prefix = (client.config.prefix);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
const dev = (client.config.dev);
const cStatus = (client.config.status);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
const db = require('quick.db')
const rewards = (client.config.rewards)
client.on('ready', () => {
    console.log(chalk.greenBright(`Logged In As:`) + chalk.blue(` ${client.user.tag}`))
    console.log(chalk.green(`All Copyrights Goes To TFC Mahmoud 2021-2022`))
})

const red = (client.colors.red)

const green = (client.colors.green)

const blue = (client.colors.blue)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022

const white = (client.colors.white)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022

const orange = (client.colors.orange)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022

const darkblue = (client.colors.darkblue)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022

const darkgreen = (client.colors.darkgreen)

const yellow = (client.colors.yellow)

const purple = (client.colors.purple)

const pink = (client.colors.pink)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022




client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if(prf === null) prf = prefix;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (message.content.startsWith(prf + 'set-prefix')) {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (!message.guild) return //All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command **')
        const args = message.content.split(" ").slice(1).join(" ")
        if (!args) {
            db.set(`prefix_${message.guild.id}`, prefix)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
            message.channel.send(`**✅ | Prefix Has Been Reset!**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
            return
        }//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (args.length > 3) return message.channel.send('**⛔ | You Cant Have A Prefix With More Characters Than 3!**')
        if (args === prf) return message.channel.send(`**⛔ | You Already Have This Prefix!**`)
        const embed = new Discord.MessageEmbed()//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        .setAuthor('Set Prefix')
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription(`
        **Old Prefix: ${prf}**

        **New Prefix: ${args}**
        `)
        .setFooter('All Copyrights Goes To TFC Mahmoud And Ottawa 2021-2022')
        .setThumbnail(message.guild.iconURL())//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        message.channel.send(embed)
        db.set(`prefix_${message.guild.id}`, args)
    } 
})


client.on('message', tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if (prf === null) prf = prefix;
    if(tfcm.content.startsWith(prefix + "mute")){
    if (!tfcm.guild) return
    var user = tfcm.mentions.members.first();
    if (!user) return tfcm.channel.send('**Mention The Member First Please!**');
    if (!tfcm.guild) return;
    if (tfcm.author.bot) return;
    if (!tfcm.member.permissions.has("KICK_MEMBERS")) return tfcm.channel.send('You dont have permissions!');
    
        let muterole =tfcm.guild.roles.cache.find(role => role.name === 'Muted');//role name/اسم الرول
        if(!muterole) return tfcm.channel.send("**Hey There! I Cant Find The Role `Muted` Please Make A Role Called `Muted` And Put The Permission`Send Messages` To Off Please!**")
        user.roles.add(muterole);
        tfcm.channel.send(`**Done! I Have Muted ${user} Successfully!**`)//Code By TFC Mahmoud
      }
    });
    
    client.on('message', tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if (prf === null) prf = prefix;
    if(tfcm.content.startsWith(prefix + "unmute")){
    if (!tfcm.guild) return
    var user = tfcm.mentions.members.first();
    if (!user) return tfcm.channel.send('**Mention The Member First Please!**');//Code By TFC Mahmoud
    if (!tfcm.guild) return;
    if (tfcm.author.bot) return;
    if (!tfcm.member.permissions.has("KICK_MEMBERS")) return tfcm.channel.send('You dont have permissions!');
    
        let muterole =tfcm.guild.roles.cache.find(role => role.name === 'Muted');//role name/اسم الرول
    if(!muterole) return tfcm.channel.send("**Hey There! I Cant Find The Role `Muted` Please Make A Role Called `Muted` And Put The Permission`Send Messages` To Off Please!**")
        user.roles.remove(muterole);
        tfcm.channel.send(`**Done! I Have Unmuted ${user} Successfully!**`)
      }
    });

    client.on('message', tfcm => {
        let prf = db.fetch(`prefix_${tfcm.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (prf === null) prf = prefix;
        if(tfcm.content.startsWith(prf + "tempmute")){
        var user = tfcm.mentions.members.first();
        if (!user) return tfcm.channel.send('**Mention The Member First Please!**');
        if (!tfcm.guild) return;
        if (tfcm.author.bot) return;
        if (!tfcm.member.permissions.has("MANAGE_ROLES")) return tfcm.channel.send('You dont have permissions!');
        const time = tfcm.content.split(" ")[2];
        if (!time) return tfcm.channel.send("Type The Time Like 10s 10m 10h 10d")//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        let ggg = ['d', "m", "h", "s"];
        if (ggg.some(c => time.endsWith(c))) {
        const timee = ms(time);
        console.log(timee);
        if (timee <= 9999) return tfcm.channel.send(`**You Can't Make Tempmute Time Less Than 10sec**`);
        if (timee > 2592000000) return tfcm.channel.send(`**You Can't Make Tempmute Time More Than 30Day**`)
       }
        
            let muterole = tfcm.guild.roles.cache.find(role => role.name === 'Muted');//role name/اسم الرول
            if(!muterole) return tfcm.channel.send("**Hey There! I Cant Find The Role `Muted` Please Make A Role Called `Muted` And Put The Permission`Send Messages` To Off Please!**")
            user.roles.add(muterole.id);
            tfcm.channel.send(`**Done! I Have Temp Muted ${user} For ${time} Successfully!**`)//Code By TFC Mahmoud
            setTimeout(async function(){
                user.roles.remove(muterole.id)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
            
              }, ms(time)) 
          }
        });


client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if(prf === null) prf = prefix;
    if (message.content == prf + 'help') {
        if (!message.guild) return//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        var embed = new Discord.MessageEmbed()//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
.setTitle(`\`${client.user.username}\` Commands ✨`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
.setFooter('Project Made By TFC Mahmoud')
.setTimestamp()//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
.setColor('#ff00ec')//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
.setDescription(`
_**General✨**_
\`${prf}bal\`/\`${prf}credit\` , \`${prf}give\` , \`${prf}daily\` , \`${prf}package\` , \`${prf}rolelist\` , \`${prf}server\` , \`${prf}avatar\`, \`${prf}user\`

_**Fun😂**_
\`${prf}sus\` , \`${prf}meme\` , \`${prf}gay\` , \`${prf}delete\` , \`${prf}shit\`, \`${prf}jail\` , \`${prf}hitler\` , \`${prf}wasted\` , \`${prf}facepalm\` , \`${prf}clyde\`

_**Mods💻**_
\`${prf}ban\` , \`${prf}kick\` , \`${prf}lock\` , \`${prf}unlock\` , \`${prf}hide\` , \`${prf}show\` , \`${prf}warn\` , \`${prf}warns\` , \`${prf}mute\` , \`${prf}unmute\` ,
\`${prf}tempmute\` , \`${prf}vote\` , \`${prf}set-prefix\` , \`${prf}set-welcome\` , \`${prf}remove-welcome\` , \`${prf}set-autorole\` , \`${prf}remove-autorole\` , \`${prf}temproom\` , \`${prf}say\` , \`${prf}reset-warns\` , 
\`${prf}set-autogif\` , \`${prf}remove-autogif\` , \`${prf}clear\`

_**Giveaways🎉**_
\`${prf}gcreate\` , \`${prf}greroll\`, \`${prf}gdelete\`

_**Dev🤖**_
\`${prf}test\` , \`${prf}restart\` , \`${prf}add-credit\` , \`${prf}remove-credit\`
`)
message.channel.send(embed)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    }
})//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022

client.on('message', tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if(prf === null) prf = prefix;
    if(tfcm.content.startsWith(prf + `clear`)) {
     const messageArray = tfcm.content.split(' ');
     const args = messageArray.slice(1);
      if(!tfcm.channel.guild) return;
   
       if (!tfcm.member.permissions.has("MANAGE_MESSAGES")) return tfcm.channel.send('***You Dont Have The Permission `MANAGE_MESSAGES` !***');
   
      if (!args[0]) {
           tfcm.channel.bulkDelete(100, true);
           return tfcm.channel.send(`\`\`\`js\n 100 messages has been deleted.\n\`\`\``).then(tfcm => { tfcm.delete({timeout: 3000})})
       }
   
       let deleteAmount; //Code By TFC Mahmoud
   
       if (isNaN(args[0])) { return tfcm.channel.send(`\`\`\`js\n Please Put A Number Only!\n\`\`\``).then(tfcm => { tfcm.delete({timeout: 3000})}) }
   
       if (parseInt(args[0]) > 100) {
           return tfcm.channel.send('\`\`\`js\n Hey, I Cant Do That. I Only Can Delete 100 Messages At A Time!\n\`\`\`').then(tfcm => { tfcm.delete({timeout: 3000})})
       } else {
           deleteAmount = parseInt(args[0]);
       } // Clear Code V12 By TFC Mahmoud
       if (parseInt(args[0]) == 1) {
           tfcm.channel.bulkDelete(deleteAmount, true);
           return tfcm.channel.send(`\`\`\`js\n ${deleteAmount} message has been deleted.\n\`\`\``).then(tfcm => { tfcm.delete({timeout: 3000})})
       }
   
       tfcm.channel.bulkDelete(deleteAmount, true);
       tfcm.channel.send(`\`\`\`js\n ${deleteAmount} messages has been deleted.\n\`\`\``).then(tfcm => { tfcm.delete({timeout: 3000})})}
      });

  client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (prf === null) prf = prefix;
    let moment = require("moment");//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (message.content.startsWith(prf + 'user')) {
      var args = message.content.split(' ').slice(1);
      let user = message.mentions.users.first();
      let user2 = message.guild.member(message.mentions.members.first());//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      var men = message.mentions.users.first();
      let uus = message.mentions.users.first() || message.author;
      const member = message.mentions.members.first() || message.member;
      if(member.presence.status === 'dnd') member.presence.status = '⛔ DND'
      if(member.presence.status === 'idle') member.presence.status = '🌛 Idle'
      if(member.presence.status === 'online') member.presence.status = '🟢 Online'//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      if(member.presence.status === 'invisible') member.presence.status = '👻 Invisible'
      if(member.presence.status === 'offline') member.presence.status = '⚫ Offline'
          const roles = member.roles.cache
              .sort((a, b) => b.position - a.position)
              .map(role => role.toString())//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
              .slice(0, -1);
          const userFlags = member.user.flags.toArray();
      message.guild.fetchInvites().then(invites => {
        let personalInvites = invites.filter(
          i =>
            i.inviter.id === uus.id
        );
   
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
   
        var heg;
        if (men) {
          heg = men;
        } else {
          heg = message.author;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        }
        var mentionned = message.mentions.members.first();//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        var h;
        if (mentionned) {
          h = mentionned;
        } else {
          h = message.member;
        }
       var cr = 'RANDOM';
        moment.locale('en');
        const user = new Discord.MessageEmbed()//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
          .setColor(`${cr}`)
          .setTitle('User info')
          .addField('**Username📛  :**', `<@${uus.id}>`, true)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
          .addField('**Invite Count:tada: :**',`${inviteCount}`,true)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
          .addField('**Id :**',`${uus.id}`,true)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
          .addField(
            '**Joined Discord At:**',
            `\`${moment(heg.createdTimestamp).format(
              'YYYY/M/D'
            )}\` **\n** ${moment(heg.createdTimestamp).fromNow()}`,
            true
          )
          //All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
          .addField(
            '**Joined Server :**',
            ` \`${moment(h.joinedAt).format('YYYY/M/D')}\` \n ${moment(
              h.joinedAt
            ).fromNow()}`,
            true
          )
          .addField(`Status:` , `${member.presence.status}`, true)
  
  .setTimestamp()
          .setFooter(`${message.author.username}`, message.author.displayAvatarURL());//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        message.channel.send(user);
      });
    }
  });



client.on('message', message =>{
  let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  if (prf === null) prf = prefix;
  if(message.content.startsWith(prf + 'avatar')){
      let args = message.content.substring(prefix.length).split(" ");
      
      const user = message.mentions.users.first()//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      if (!user && !args[1]) {
         
         const uavatar = message.author.avatarURL({ size: 4096, dynamic: true })
         const embed3 = new Discord.MessageEmbed()
             .setTitle(`${message.member.user.username} avatar`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
             .setDescription(`[Avatar URL of **${message.member.user.username}**](${uavatar})`)
             .setColor('RANDOM')
             .setImage(uavatar)
         message.channel.send(embed3)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
     } 
    


     if (args[1] === 'server') {
      
      const savatar = message.guild.iconURL({ size: 4096, dynamic: true })//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      const embed2 = new Discord.MessageEmbed()
          .setTitle(`${message.guild.name} avatar`)
          .setDescription(`[Avatar URL of **${message.guild.name}**](${savatar})`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
          .setColor('RANDOM')
          .setImage(savatar)
      message.channel.send(embed2)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
     
     }
     
             
             
     
             if (user) {
                 const avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
     
     
                 const embed = new Discord.MessageEmbed()
                     .setTitle(`${user.username} avatar`)
                     .setDescription(`[Avatar URL of **${user.username}**](${avatar})`)
                     .setColor('RANDOM')//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
                     .setImage(avatar)
                 message.channel.send(embed)
             }
     }//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
})



client.on("message", tfcm => {
  let prf = db.fetch(`prefix_${tfcm.guild.id}`)
  if (prf === null) prf = prefix;
  if (tfcm.content === prf + "server") {


    let embed = new Discord.MessageEmbed()//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    .setTitle(`${tfcm.guild.name}`)
    .setFooter(`Code By TFC Mahmoud`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      .setDescription(`**
 🌎 Region : ${tfcm.guild.region}

 🆔 ID Server : ${tfcm.guild.id}

 👑 Owner Server : ${tfcm.guild.owner}

 📆 Created : ${tfcm.guild.createdAt.toLocaleString()}

 👦 Members : ${tfcm.guild.memberCount}

 💬 Channels : ${tfcm.guild.channels.cache.size}
  **`);
  tfcm.channel.send(embed);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  }
});



const { GiveawaysManager } = require('discord-giveaways');
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    updateCountdownEvery: 10000,
    hasGuildMembersIntent: false,
    default: {
        botsCanWin: false,
        exemptPermissions: ['MANAGE_MESSAGES', 'ADMINISTRATOR'],
        embedColor: '#FF0000',
        embedFooter: 'Giveaway! Powered By TFC',
        reaction: '🎉'
    }
});//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
client.giveawaysManager = manager;
client.on('message', (message) => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if (prf === null) prf = prefix;
    const args = message.content.slice(prf.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'gcreate') {
      if (!args) return
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**');
        // gcreate 10m 1 prize
        // will create a giveaway with a duration of two days, with one winner and the prize will be "Awesome prize!"
 
        client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(' '),
            winnerCount: parseInt(args[1]),
            messages: {
              embedFooter: 'Powered By TFC',
              giveaway: '🎉🎉 **GIVEAWAY** 🎉🎉',
              giveawayEnded: '🎉🎉 **GIVEAWAY ENDED** 🎉🎉',
            }
        })
        // And the giveaway has started!
    }//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
});
client.on('message', (message) => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if (prf === null) prf = prefix;
    const args = message.content.slice(prf.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if (command === 'greroll') {
        if (!args) return
        let messageID = args[0];
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send('Success! Giveaway rerolled!');
        }).catch((err) => {
            message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
        });//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    }
});//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
 
client.on('message', (message) => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if (prf === null) prf = prefix;
    const args = message.content.slice(prf.length).trim().split(/ +/g);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    const command = args.shift().toLowerCase();
 
    if (command === 'gedit') {
        if (!args) return
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**');
        let messageID = args[0];
        client.giveawaysManager.edit(messageID, {
            newWinnerCount: parseInt(args[1]),
            newPrize: args.slice(2).join(' '),//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
            addTime: 3000
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('Success! Giveaway will updated in less than ' + numberOfSecondsMax + ' seconds.');
        }).catch((err) => {
            message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
        });
    }
});
client.on('message', (message) => {
  let prf = db.fetch(`prefix_${message.guild.id}`)
    if (prf === null) prf = prefix;
    const args = message.content.slice(prf.length).trim().split(/ +/g);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    const command = args.shift().toLowerCase();
 
    if (command === 'gdelete') {
        if (!args) return
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**');
        let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send('Giveaway deleted, Guess No Party Today😢');//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        })
        .catch((err) => {
            message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
        });
    }
});



client.on('message', message => {
  let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  if (prf === null) prf = prefix;
  if (!message.guild) return;
  if (message.content.startsWith(prf + 'ban')) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**');//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    const args = message.content.split(" ")
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (user) {
      const member = message.guild.member(user);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      if (member) {
        member
          .ban({
            reason: 'BAN!',
          })
          .then(() => {
            message.reply(`✅ | Successfully banned ${member.user.tag} ✈`);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
          })
          .catch(err => {
            message.reply(`I Was Unable To Ban ${member.user.tag}`);
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("❌ | You didn't mention the user to ban!");//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    }
  }
});



client.on('message', message=>{
  let prf = db.fetch(`prefix_${message.guild.id}`)
  if (prf === null) prf = prefix;
  if (message.content === prf + 'rolelist') {
    const rolel = message.guild.roles.cache.map(tfcm => tfcm.toString()).join(" ");
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name} Roles List`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    .setDescription(rolel)

    message.channel.send(embed);
  }
})




client.on('message', message => {
  let prf = db.fetch(`prefix_${message.guild.id}`)
  if (prf === null) prf = prefix;
  if (message.content.startsWith(prf + 'vote')) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**');//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  const args = message.content.split(' ').slice(1).join(' ')
  
  if (!args) return message.channel.send('**Type Your Message For The Vote!**')
  message.delete()

  const embed = new Discord.MessageEmbed()
  .setAuthor(`A Vote For ${message.guild.name}`)
  .setDescription(`**${args}**`)
  .setColor('RANDOM')
  message.channel.send(embed).then(message => {
  message.react('👍')
  message.react('👎')
  })//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  }
  })


client.on('message', message =>{
  let prf = db.fetch(`prefix_${message.guild.id}`)
  if (prf === null) prf = prefix;
  if(message.content === prf + "hide"){
  if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**');
  let everyone = message.guild.roles.cache.find(role => role.name === '@everyone');
          message.channel.createOverwrite(everyone, {
                VIEW_CHANNEL : false
              }).then(() => {
                message.channel.send(`**✅ | I Have Hiddin This Room**`)
              })
  }
  })//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022

  client.on('message', message =>{
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if (prf === null) prf = prefix;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if(message.content === prf + "show"){
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**');
    let everyone = message.guild.roles.cache.find(role => role.name === '@everyone');
            message.channel.createOverwrite(everyone, {
                  VIEW_CHANNEL : true
                }).then(() => {
                  message.channel.send(`**✅ | I Have Shown This Room**`)
                })
    }//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    });

    client.on("message", message => {
      let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      if (prf === null) prf = prefix;
      if(!message.channel.guild) return;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      if(message.content.startsWith(prf + `kick`)) {
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`**⛔ | You Dont Have The Permission To Preform This Command**`)
      const user = message.mentions.users.first();
      if (!user) return message.channel.send(`**⛔ | Mention A Member First**`)
      const member = message.guild.member(user);
          member.kick()
          message.channel.send(`**✅ |${user} Has Been Kicked From The Server ✈**`)
      }
    })

    client.on('message', message =>{
      let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      if (prf === null) prf = prefix;
      if(message.content === prf + "lock"){
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**');
      let everyone = message.guild.roles.cache.find(tfcm => tfcm.name === '@everyone');
              message.channel.createOverwrite(everyone, {
                     SEND_MESSAGES: false
                  }).then(() => {
                      message.channel.send("**✅ | Room Has Been Locked**")
                      })//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      }
      });//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022


      client.on('message', message =>{
        let prf = db.fetch(`prefix_${message.guild.id}`)
        if (prf === null) prf = prefix;
        if(message.content === prf +"unlock"){
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**');
        let everyone = message.guild.roles.cache.find(tfcm => tfcm.name === '@everyone');
                message.channel.createOverwrite(everyone, {
                       SEND_MESSAGES: true
                    }).then(() => {
                      message.channel.send('**✅ | Room Has Been Unlocked**')
                    })
        }
        });


client.on('message', msg => {
    let prf = db.fetch(`prefix_${msg.guild.id}`)
    if(prf === null) prf = prefix;
    if (msg.content.startsWith(prf + 'say')) {
        const args = msg.content.split(" ").slice(1).join(" ")
        if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**')
        if (!args) return msg.channel.send('**⛔ | Type The Message**')
        msg.delete()
        msg.channel.send(args)
    }
})//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022


client.on('message', async tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if (prf === null) prf = prefix;
    if(tfcm.content.startsWith(prf + "clyde")) {
      const user = tfcm.mentions.users.first() || tfcm.author; 
      const avatar = user.displayAvatarURL({format : 'png'})
      var msg = tfcm.content.split(" ").slice(1).join(" ")
      if (!msg) return tfcm.channel.send(`**⛔ | Please Provide A Message**`)
  
      
      const image = await canvacord.Canvas.clyde(msg)
  
      tfcm.channel.send(
        new Discord.MessageAttachment(image, 'image.jpeg'))
    }
  });


client.on('message', async tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if (prf === null) prf = prefix;
    if(tfcm.content.startsWith(prf + "facepalm")) {
      const user = tfcm.mentions.users.first() || tfcm.author; 
      const avatar = user.displayAvatarURL({format : 'png'})
      
      const image = await canvacord.Canvas.facepalm(avatar)
  
      tfcm.channel.send(
        new Discord.MessageAttachment(image, 'image.jpeg'))
    }
  });//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022



client.on('message', async tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if (prf === null) prf = prefix;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if(tfcm.content.startsWith(prf + "wasted")) {
      const user = tfcm.mentions.users.first() || tfcm.author; 
      const avatar = user.displayAvatarURL({format : 'png'})
      
      const image = await canvacord.Canvas.wasted(avatar)
  
      tfcm.channel.send(
        new Discord.MessageAttachment(image, 'image.jpeg'))
    }
  });
  


client.on('message', async tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if (prf === null) prf = prefix;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if(tfcm.content.startsWith(prf + "hitler")) {
      const user = tfcm.mentions.users.first() || tfcm.author; 
      const avatar = user.displayAvatarURL({format : 'png'})
      
      const image = await canvacord.Canvas.hitler(avatar)
  
      tfcm.channel.send(
        new Discord.MessageAttachment(image, 'image.jpeg'))
    }
  });


client.on('message', async tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (prf === null) prf = prefix;
    if(tfcm.content.startsWith(prf + "delete")) {
      const user = tfcm.mentions.users.first() || tfcm.author; 
      const avatar = user.displayAvatarURL({format : 'png'})
      
      const image = await canvacord.Canvas.delete(avatar)
  
      tfcm.channel.send(
        new Discord.MessageAttachment(image, 'image.jpeg'))
    }
  });

  client.on('message', async tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if (prf === null) prf = prefix;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if(tfcm.content.startsWith(prf + "jail")) {
      const user = tfcm.mentions.users.first() || tfcm.author; 
      const avatar = user.displayAvatarURL({format : 'png'})
      
      const image = await canvacord.Canvas.jail(avatar)
  
      tfcm.channel.send(
        new Discord.MessageAttachment(image, 'image.jpeg'))
    }
  });

  client.on('message', async tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if (prf === null) prf = prefix;
    if(tfcm.content.startsWith(prf + "shit")) {
      const user = tfcm.mentions.users.first() || tfcm.author; 
      const avatar = user.displayAvatarURL({format : 'png'})//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      
      const image = await canvacord.Canvas.shit(avatar)
  
      tfcm.channel.send(
        new Discord.MessageAttachment(image, 'image.jpeg'))
    }
  });

client.on('message', async tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if (prf === null) prf = prefix;
    if(tfcm.content.startsWith(prf + "gay")) {
      const user = tfcm.mentions.users.first() || tfcm.author; 
      const avatar = user.displayAvatarURL({format : 'png'})//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      
      const image = await canvacord.Canvas.rainbow(avatar)
  
      tfcm.channel.send(
        new Discord.MessageAttachment(image, 'image.jpeg'))
    }
  });

const got = require(`got`);
client.on('message', tfcm => {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
let prf = db.fetch(`prefix_${tfcm.guild.id}`)
if (prf === null) prf = prefix;
if (tfcm.content.startsWith(prf + "meme")) {
const embed = new Discord.MessageEmbed()
got('https://www.reddit.com/r/memes/random/.json').then(response => {
    let content = JSON.parse(response.body);
    let permalink = content[0].data.children[0].data.permalink;
    let memeUrl = `https://reddit.com${permalink}`;
    let memeImage = content[0].data.children[0].data.url;
    let memeTitle = content[0].data.children[0].data.title;
    let memeUpvotes = content[0].data.children[0].data.ups;
    let memeNumComments = content[0].data.children[0].data.num_comments;
    embed.setTitle(`${memeTitle}`)
    embed.setURL(`${memeUrl}`)
    embed.setImage(memeImage)
    embed.setColor('RANDOM')
    embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`)
    tfcm.channel.send(embed);
    })//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  }
})



client.on('message', async tfcmandmrawan => {
    let prf = db.fetch(`prefix_${tfcmandmrawan.guild.id}`)
    if (prf === null) prf = prefix;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if(tfcmandmrawan.content.startsWith(prf + "temproom")){
      if (!tfcmandmrawan.member.permissions.has("MANAGE_CHANNELS")) return tfcmandmrawan.channel.send('You dont have permissions!');
      tfcmandmrawan.delete();
      let namechannel = tfcmandmrawan.content.split(" ")[1];
      if (!namechannel) return tfcmandmrawan.channel.send(`Please Type The Room Name Like This ${prefix}temproom name `)
      const time = tfcmandmrawan.content.split(" ")[2];
      if (!time) return tfcmandmrawan.channel.send("Type The Time Like 10s 10m 10h 10d")
      let ggg = ['d', "m", "h", "s"];
      if (ggg.some(c => time.endsWith(c))) {
      const timee = ms(time);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      console.log(timee);
      if (timee <= 9999) return tfcmandmrawan.channel.send(`**You Can't Make Temproom Time Less Than 10sec**`);
      if (timee > 2592000000) return tfcmandmrawan.channel.send(`**You Can't Make Temproom Time More Than 30Day**`)
      }
      tfcmandmrawan.channel.send(`**Done! I Have Created ${namechannel} As A Temp Channel!**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      const mr = await tfcmandmrawan.guild.channels.create(`${namechannel}`, { type: 'text' });
      mr.send(`**This Is A Temporary Channel And Will Get Deleted In ${time}**`);
      setTimeout(async function(){
        mr.delete()
    
      }, ms(time))
      
      
            }
    }); 

client.on('message', async tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (prf === null) prf = prefix;
    if(tfcm.content.startsWith(prf + "sus")) {
    const user = tfcm.mentions.users.first() || tfcm.author; 
    userimg = user.displayAvatarURL({format : 'png'}),
    AVATAR = await resolveImage(userimg)
    const susy =
    'https://media.discordapp.net/attachments/822919361379434527/826538309999656980/4ijtmi.png?width=331&height=676';
  
    const image = await resolveImage(susy);
  
    async function tfc() {
      const ctx = new Canvas(331,676)
  
      .printImage(image, 0, 0, 331,676)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      .printCircularImage(AVATAR , 237 , 538, 40)
  
  
  
  
  .toBuffer();
  
              return ctx;
  
  
          }
  
          tfcm.channel.send({
              files: [{ attachment: await tfc(), name: 'sus.png' }]//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
           }) 
     }
  });


client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if (prf === null) prf = prefix;
    if (message.content.startsWith(prf + 'warn')) {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (message.content.startsWith(prf + 'warns')) return
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**')
    const member = message.mentions.members.first()
    if (!member) return message.channel.send('**⛔ | Mention A Member First**')
    if (member.id === message.author.id) return message.channel.send('**⛔ | You Cant Warn Yourself**')
    if (member.user.bot) return message.channel.send('**⛔ | You Cant Warn Bots**')
    let warns = db.fetch(`warns_${member.id}`)
    if (warns === null) warns = 0;
    db.add(`warns_${member.id}`, 1)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    message.channel.send(`**✅ | You Have Warned ${member} Successfuly**`)
    }
})

client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if (prf === null) prf = prefix;
    if (message.content.startsWith(prf + 'warns')) {
    let user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])  || message.author//All Copyrights Goes To ROTNDAM 2021-2022
    if (user.bot) return message.channel.send('**⛔ | Bots Do Not Have Warnings**')
    let warns = db.fetch(`warns_${user.id}`)
    if (warns === null) warns = 0;
    const embed = new Discord.MessageEmbed()//All Copyrights Goes To ROTNDAM 2021-2022
    .setAuthor('Warns')
    .setDescription(`
    **${user.username} Warn Count:**
    \`${warns}\`
    `)
    .setColor(`RED`)
    message.channel.send(embed)
    }
})

client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if (prf === null) prf = prefix;
    if (message.content.startsWith(prf + 'reset-warns')) {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        const member = message.mentions.members.first() || message.author
        if (member.bot) return message.channel.send('**⛔ | Bots Do Not Have Warnings**')
        let warns = db.fetch(`warns_${member.id}`)
        if (warns === null) warns = 0;
        if (warns === 0) return message.channel.send(`**⛔ | ${member} Does Not Have Any Warns**`)
        db.subtract(`warns_${member.id}`, warns)
        message.channel.send(`**✅ | ${member.user.username} Warns Reseted**`)
    }
})


client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if (prf === null) prf = prefix;
    if (message.content.startsWith(prf + 'remove-credit')) {
      if (!dev.includes(message.author.id)) return message.channel.send(`**⛔ | Your Not A Dev**`)
      const member = message.mentions.members.first()
      if (!member) return message.channel.send(`**⛔ | Mention A Member First**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      let money = db.fetch(`money_${member.id}`)
      if (money === null) return message.channel.send(`**⛔ | User Does Not Have Credits**`)
      const args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.channel.send(`**⛔ | Type How Many Credits You Want To Remove Or Type all For All**`)
      if (args === 'all') {
        console.log(chalk.green(`${message.author.tag} Has Reseted ${member.user.tag}'s Money Successfuly`))
        message.channel.send(`**✅ | You Have Successfuly Reseted ${member.user.tag}'s Money, Money Before: \`$${money}\`**`)
        return db.subtract(`money_${member.id}`, money)
      }
      if (isNaN(args)) return message.channel.send(`**⛔ | Type How Many Credits You Want To Remove Or Type all For All**`)
      if (args > money) return message.channel.send(`**⛔ | ${member.user.tag} Does Not Have That Much Money, Use : ${prf}remove-credit all. To Remove All The Credits**`)
      console.log((`${message.author} Has Removed ${args} From ${member.user.tag}`))//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      message.channel.send(`**✅ | You Have Removed $${args} From ${member.user.tag}**`)
      db.subtract(`money_${member.id}`, args)
    }
})


client.on('message', message => {
  let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  if (prf === null) prf = prefix;
  if (message.content.startsWith(prf + 'add-credit')) {
    if (!dev.includes(message.author.id)) return message.channel.send(`**⛔ | Your Not A Dev**`)
    const member = message.mentions.members.first()
    if (!member) return message.channel.send(`**⛔ | Mention A Member First**`)
    const args = message.content.split(" ").slice(2).join(" ")
    if (!args) return message.channel.send(`**⛔ | Type How Many Credits You Want To Add**`)
    if (isNaN(args)) return message.channel.send(`**⛔ | Type How Many Credits You Want To Add**`)
    console.log(chalk.green(`${message.author.tag} Has Added ${args} To ${member.user.tag}`))
    message.channel.send(`**✅ | You Have Added $${args} Credits To ${member.user.tag}**`)
    db.add(`money_${member.id}`, args)
  }//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
})

client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if(prf === null) prf = prefix;
    if (message.content.startsWith(prf + 'set-welcome')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command **')
        const channel = message.mentions.channels.first()
        if (!channel) return message.channel.send('**⛔ | Mention A Channel First**')
        db.set(`welc_${message.guild.id}`, channel.id)
        message.channel.send(`**✅ | Set Welcome Channel As ${channel}**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    }
})

client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if(prf === null) prf = prefix;
    if (message.content == prf + 'remove-welcome') {
        const welc = db.fetch(`welc_${message.guild.id}`)
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**')
        if (welc === null) return message.channel.send(`**⛔ | You Dont Have A Welcome Channel**`)
        db.delete(`welc_${message.guild.id}`)
        message.channel.send(`**✅ | Deleted Welcome Channel**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    }
})


client.on('message', message => {
  let prf = db.fetch(`prefix_${message.guild.id}`)
  if(prf === null) prf = prefix;
  if (message.content.startsWith(prf + 'set-autogif')) {
      if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command **')
      const channel = message.mentions.channels.first()
      if (!channel) return message.channel.send('**⛔ | Mention A Channel First**')
      let link = message.content.split(" ").slice(2).join(" ")
      if (!link) return message.channel.send(`**⛔ | Put A Gif Link**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      db.set(`gif_${message.guild.id}`, channel.id)
      db.set(`giflink_${message.guild.id}`, link)
      message.channel.send(`**✅ | Set Auto Gif Channel As ${channel}**`)
  }
})

client.on('message', message => {
  let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  if(prf === null) prf = prefix;
  if (message.content == prf + 'remove-autogif') {
      const gif = db.fetch(`gif_${message.guild.id}`)
      const giflink = db.fetch(`giflink_${message.guild.id}`)
      if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('**⛔ | You Dont Have The Permission To Preform This Command**')
      if (gif === null) return message.channel.send(`**⛔ | You Dont Have A Gif**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      db.delete(`gif_${message.guild.id}`)
      db.delete(`giflink_${message.guild.id}`)
      message.channel.send(`**✅ | Deleted Auto Gif**`)
  }
})

client.on('message', message => {
  let gif = db.fetch(`gif_${message.guild.id}`)
  const giflink = db.fetch(`giflink_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  if (gif === null) return
  if (giflink === null) return
  if (message.channel.id != gif) return;
  if (message.author.bot) return//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  message.channel.send(giflink)
})


client.on('guildMemberAdd', async member => {
    const image = await resolveImage(blue);//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    //Go To README.md To See The Setup
    userimg = member.user.displayAvatarURL({format : 'png'}),
    AVATAR = await resolveImage(userimg)
  
    let chnid = db.fetch(`welc_${member.guild.id}`)
    if (chnid === null) return  
    var chnl =  member.guild.channels.cache.get(chnid)
    if(!chnl) return //All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  
    async function tfcs() {
      const ctx = new Canvas(1262,546)
  
      .printImage(image, 0, 0, 1262,546)
      .printCircularImage(AVATAR , 283 , 273, 240)
  
      .setTextSize(80) //All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      .printText(`${member.user.username}`, 590, 340)
  
  
  
  .toBuffer(); //All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  
              return ctx;
  
  
          }
  
          chnl.send({
              files: [{ attachment: await tfcs(), name: 'welcome.png' }] 
          }); 
        chnl.send(`** >  \`-\` Welcome To ${member.guild.name} 
      > \`-\`User : ${member}
      > \`-\`Member Counts : ${member.guild.memberCount} **`)
   
  });

client.on('message', message => {
    if (!message.guild) return
    let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if(prf === null) prf = prefix;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (message.content.startsWith(prf + 'bal') || message.content.startsWith(prf + 'credit')) {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        let user = message.mentions.users.first() || message.author || client.users.cache.get(message.content.split(' ')[1])
        let money = db.fetch(`money_${user.id}`) //All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (money === null) money = 0;
        console.log(chalk.green(`${user.username} has $${money}`))
        message.channel.send(`**:bank: |  ${user.username}, your account balance is \`$${money}\`.**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    }
})

client.on('message', tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)
    if(prf === null) prf = prefix;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (tfcm.author.bot) return;
    if (!tfcm.guild) return;
    if (tfcm.content.startsWith(prf + 'ping')) {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    console.log(chalk.green(`${tfcm.author.id} just pinged the bot and got:
    Time taken: ${Date.now() - tfcm.createdTimestamp} ms
    Discord API: ${Math.round(client.ws.ping)} ms
    `))
    tfcm.channel.send(`
    \`\`\`Time taken: ${Date.now() - tfcm.createdTimestamp} ms \nDiscord API: ${Math.round(client.ws.ping)} ms \`\`\`
    `);
    }
  });//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022


client.on('message', async message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if(prf === null) prf = prefix;
    let timeout = '86400000'//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    let amount = Math.floor((Math.random() * 2000) + 500);
    let daily = await db.fetch(`daily_${message.author.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (message.content == prf + 'daily') {
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily))
            message.channel.send(`**⏳ |  You Already Claimed Your Daily Reward You Need To Wait: \`${time}\`**`)
        } else {
            message.channel.send(`**💰 ${message.author}, you got 💵 ${amount} daily money!**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
            db.add(`money_${message.author.id}`, amount)
            db.set(`daily_${message.author.id}`, Date.now())//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        }
    }
})


client.on('message', async message => {
        let rreward = rewards[Math.floor(Math.random() * rewards.length)]//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        let timeout = '600000'
        let cooldown = await db.fetch(`pcooldown_${message.author.id}`)
        let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (prf === null) prf = prefix;
        if (message.content == prf + 'package') {
            let tauthor = message.author
            if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
            let time = ms(timeout - (Date.now() - cooldown))
            message.channel.send(`**⌚ | You Already Opened A Package, You Need To Wait: ${time}**`)
            } else {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Package')//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
            .setDescription(`
            **Are You Lucky?**
            **You Won:**
            **${rreward}**
            `)
            message.channel.send(embed)
            console.log(`${tauthor.tag} Just Opened A Package And Got: ${rreward}`)
            db.set(`pcooldown_${message.author.id}`, Date.now())
        }
    }
})


client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)
    if(prf === null) prf = prefix;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (message.content.startsWith(prf + 'give')) {
        const member = message.mentions.members.first()
        if (!member) return message.channel.send(`**⛔ | Mention Member First**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (member.user.bot) return message.channel.send(`**⛔ | You Cant Give Bots Money**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (member.id === message.author.id) return message.channel.send('**⛔ | You Can Give Yourself Money**')//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        const user2 = db.fetch(`money_${message.author.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        const args = message.content.split(" ").slice(2).join(" ")//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (!args) return message.channel.send('**⛔ | Type The Money You Want To Give**')//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (isNaN(args)) return message.channel.send(`**⛔ | Type A Number Only**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        if (user2 < args) return message.channel.send(`**⛔ | You Dont Have Enough Money**`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        var one = Math.floor(Math.random() * 9) + 1;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        var two = Math.floor(Math.random() * 9) + 1;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        var three = Math.floor(Math.random() * 9) + 1;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        var four = Math.floor(Math.random() * 9) + 1;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
     //All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        var number = `${one}${two}${three}${four}`;//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
     
        message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, You Have 15s To Type The Numbers**`).then(m => {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
          message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 15000}).then(c => {
            if(c.first().content === number) {
              m.delete();
              db.add(`money_${member.id}`, args)
              db.subtract(`money_${message.author.id}`, args)
              console.log(chalk.green(`${message.author.tag} Just Transfered ${args} To ${member.user.tag}`))
              message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`$${args}\` to ${member}**`)
            } else if(c.first.content !== number) {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
              m.delete();
              console.log(chalk.red(`${message.author.tag} Just Typed The Numbers Wrong`))
              message.channel.send(`** :money_with_wings: | You Have Typed The Numbers Wrong Or Time Is Out**`);
            }
          });
        });
    }
})


client.on('message', msg => {
    let prf = db.fetch(`prefix_${msg.guild.id}`)
    if(prf === null) prf = prefix;
    if (msg.content.includes(client.user.id)) {
        if (msg.author.bot) return//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        console.log(`${msg.author.tag} Just Mentioned Me!`)
        msg.channel.send(`**Server Prefix Is ${prf} Do ${prf}help For Help!**`)
    }
})


client.on('message', msg => {
    let prf = db.fetch(`prefix_${msg.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if(prf === null) prf = prefix;
    if (msg.content == prf + 'restart') {
        if (!dev.includes(msg.author.id)) return
        client.destroy()
        client.login(token)
        msg.channel.send('✅ | Restarted!')
    }
})

client.on('ready', () => {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    client.user.setPresence({
        status: "online",
        activity: {
            name: cStatus,
            type: 'PLAYING',
            url: 'https://www.twitch.tv/tfc_mahmoud'
        }
    })
})

client.on('message', message => {
    let prf = db.fetch(`prefix_${message.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (prf === null) prf = prefix;
    if (message.content == prf + 'test') {
        if (!dev.includes(message.author.id)) return//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        console.log(chalk.green(`The Dev ${message.author.tag} Just Tested The Bot And The Results Was :
        Success
        `))
        message.channel.send('**Working!**')
    }
})


client.on('message', tfcm => {
    let prf = db.fetch(`prefix_${tfcm.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (prf === null) prf = prefix
    if (tfcm.content.startsWith(prf + 'set-autorole')) {
        const role = tfcm.mentions.roles.first()
        if (!role) return tfcm.channel.send('**⛔ | Please Mention A Role First**')//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
        db.set(`role_${tfcm.guild.id}`, role.id)
        tfcm.channel.send(`**✅ | Set ${role} As Auto Role**`)
    }
})

client.on('message', tfcm => {
  let prf = db.fetch(`prefix_${tfcm.guild.id}`)//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
  if (prf === null) prf = prefix
  if (tfcm.content.startsWith(prf + 'remove-autorole')) {
      let autorole = db.fetch(`role_${tfcm.guild.id}`)
      if (autorole === null) return tfcm.channel.send('**⛔ | You Dont Have An Autorole Set**')//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
      db.delete(`role_${tfcm.guild.id}`)
      tfcm.channel.send(`**✅ | Removed Autorole**`)
  }
})


client.on("guildMemberAdd", member => {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    let role = db.fetch(`role_${member.guild.id}`)
    if (!role) return//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    if (role === null) return//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    member.roles.add(role)
    console.log(`Member add role ${member.user.username} `)
    })


client.login(token).catch(err => {//All Copyrights Goes To TFC Mahmoud And Ottawa Codes 2021-2022
    console.log(chalk.red(`Invalid Token!`))
    console.log(chalk.yellowBright(`All Copyrights Goes To TFC Mahmoud 2021-2022`))
})
