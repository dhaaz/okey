/** 
  - Create By ZackMans Official
 - Contact Me on https://wa.me/+6281385062956
 - Follow iG : @salman_alfarizi_15
 - Thanks Dika Ardnt
*/

require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zmans = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const yogipw = require("tod-api")
const caliph = require("caliph-api")
const xfarr = require("xfarr-api")
const bochil = require("@bochilteam/scraper")
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const fetch = require('node-fetch')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const Database = require('./lib/database.js')
const { cerpen } = require('./lib/cerpen')
const dbs = new Database()
const primbon = new Primbon()
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl, styletext, mediafire, servermc } = require('./lib/scraper.js')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list.js')
const db_respon_list = JSON.parse(fs.readFileSync('./src/list/list.json'));
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')

const autosticker = JSON.parse(fs.readFileSync('./Atak/autosticker.json'))

// Check Bandwidth
let { sizeFormatter } = require("human-readable");
let formatd = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
async function checkBandwidth() {
var data = require("node-os-utils")
data = await data.netstat.stats()
let ind = 0
let out = 0
for (let i of data) {
ind = ind + i.inputBytes
out = out + i.outputBytes
}
return {
download: formatd(ind),
upload: formatd(out)
}
}

// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

// UCAPAN WAKTU ( MyMans APIs)
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }

// TANGGAL ( MyMans APIs )
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = mans = async (mans, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await mans.decodeJid(mans.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''     
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await mans.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

// Other
banUser = await mans.fetchBlocklist()
const isBan = banUser ? banUser.includes(m.sender) : false
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiDelete = m.isGroup ? ntidel.includes(from) : false
const AntiHidetag = m.isGroup ? ntihide.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const autkic = m.isGroup ? autkick.includes(from) : false
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false

// Quoted
const content = JSON.stringify(m.message)
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

const efff = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363039634404724@g.us" } : {})
},
message: { 
"extendedTextMessage": {
"text": "Topup Diamond Free Fire",
'jpegThumbnail': fs.readFileSync('./Image/diamond.jpg')
}
} 
}

// Anti Delete
if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
if (!AntiDelete) return
let key = m.message.protocolMessage.key
let msg = await mans.serializeM(await store.loadMessage(key.remoteJid, key.id))
let teks = `   「 Anti Delete Message 」
▸ User : @${msg.sender.split("@")[0]}
▸ Date : ${moment(msg.messageTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Type : ${msg.mtype}
            `
mans.sendText(m.chat, teks, msg, { mentions: [msg.sender] })
await mans.relayMessage(m.chat, msg.message, { messageId: msg.id })
}

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
if (autred === true) {
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
}
}

if (command) {
await mans.sendPresenceUpdate('composing', m.chat)
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}

const turbrek = `break`

// Send Order
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
mans.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Ketik join untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "391028153034238", fs.readFileSync('./media/image/mans.jpg'), 2022, "BarrGans ~ Multi Device", "6283155687629@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}

// Anti Hidetag X-Zons
if (AntiHidetag) {
if (m.mentionedJid.length === participants.length) {
if (!m.isGroup) return // Mendetect Groupnyee
if (!isBotAdmins) return // Mendetect Botnyee
m.reply("Jangan maenin hidetag babi!")
await mans.groupParticipantsUpdate(m.chat, [m.sender], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}

if (m.isGroup && isAutoSticker) {
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

// AntiLink
if (AntiLink) {
if (!isBotAdmins) return
linkgce = await mans.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await mans.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
mans.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

// Public & Self
if (!mans.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© BarrGans", m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© BarrGans", m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© BarrGans", m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, "© BarrGans", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© BarrGans", m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© BarrGans", m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© BarrGans", m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
mans.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
mans.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
mans.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) mans.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) mans.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) mans.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
mans.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) mans.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) mans.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
mans.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await mans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await mans.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: mans.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, mans.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
mans.ev.emit('messages.upsert', msg)
}

// Fake Reply
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //Gambarnye
},
"title": "MyMans APIs", //Kasih namalu 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "MyMans",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'MyMans', //Kasih namalu
orderTitle: 'Bang',
thumbnail: log0, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "120363043965529911@g.us",
"inviteCode": "HDmXvmHpEkE9wRJy3IO6OZ",
"groupName": "ZackMans Broadcast", 
"caption": "ZackMans Broadcast", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"ZackMans Official",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'ZackMans Official',
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"hallo bang",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `62882000383955@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "30",
"ptt": "true"
}
} 
}

// Reply
async function reply(teks) {
const relink = ['https://youtu.be/GBe1jHscqAY','https://chat.whatsapp.com/HDmXvmHpEkE9wRJy3IO6OZ']
const rurl = relink[Math.floor(Math.random() * relink.length)];
mamans = teks
mans.sendMessage(m.chat, {text:mamans, mentions: await mans.parseMention(mamans), contextInfo:{externalAdReply:{
title: `${ucapanWaktu} ${pushname}`,
body: "© BarrGans",
thumbnail: thum,
mediaType:1,
mediaUrl: rurl,
sourceUrl: rurl
}}}, {quoted:m})
}

// Jangan diapa apain om
const zckmn = await fetchJson("https://ZackMans.github.io/database/zackbotmans.json")
const ceknyai = require('./package.json').version
if (zckmn.update === ceknyai) {
cekbotinfo = ``
} else {
cekbotinfo = ``
}

let getjson = await mans.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: "KEDT4a47m1Q0A5yATttez0" } }]
})
let thnsto = getjson.content[0].content[0].content[0].content ? getjson.content[0].content[0].content[0].content.toString() : 'undefined'
let cBandwidth = await checkBandwidth()
let prefs = ` ▸ ${prefix}`
const listmn = `*XZYBOTZ WHATSAPP MULTI DEVICE*

${cekbotinfo}

STATISTICS BOT
 •> Library : Baileys - Multi Device
 •> Upload : ${cBandwidth.upload}
 •> Download : ${cBandwidth.download}
 •> Runtime : ${runtime(process.uptime())}

TOTAL USER XZYBOTZ
 -> Owner : ${owner.length}
 -> Rakyat : ${rkyt.length}

INFO XZYBOTZ
 -> Autoread : ${autred ? "on" : "off"}
 -> Antitags : ${antitags ? "on" : "off"}
 -> Anticall : ${anticals ? "on" : "off"}

INFO GROUP
 -> Antilink : ${AntiLink? "on" : "off"}
 -> Antihidetag : ${AntiHidetag? "on" : "off"}
 -> Autokick : ${autkic? "on" : "off"}
 -> Autorevoke : ${GcRvk? "on" : "off"}
 -> Welcome : ${welcm? "on" : "off"}
 -> Antidelete : ${AntiDelete? "on" : "off"}

GROUP MENU
${prefs}linkgroup
${prefs}setppgc
${prefs}setname
${prefs}setdesc
${prefs}hidetag
${prefs}tagall
${prefs}promote
${prefs}demote
${prefs}antidelete
${prefs}antilink
${prefs}antihidetag
${prefs}autokick
${prefs}welcome
${prefs}autorevoke
${prefs}setwelcome
${prefs}add
${prefs}kick
${prefs}revoke
${prefs}group
${prefs}editinfo

18+
${prefs}xnxxsearch
${prefs}xnxxvideo

DOWNLOADER
${prefs}instagram
${prefs}tiktok
${prefs}twitter
${prefs}facebook
${prefs}youtube
${prefs}igstory
${prefs}mediafire
${prefs}gitclone
${prefs}jpeg
${prefs}mp4

ANIME MENU 
${prefs}pinterest2
${prefs}naruto
${prefs}minato
${prefs}boruto
${prefs}hinata
${prefs}sasuke
${prefs}sakura
${prefs}kaneki
${prefs}toukachan
${prefs}rize
${prefs}akira
${prefs}itori
${prefs}kurumi
${prefs}miku

HENTAI MENU 
${prefs}chiisaihentai
${prefs}trap
${prefs}blowjob
${prefs}yaoi
${prefs}ecchi
${prefs}ahegao
${prefs}hololewd
${prefs}sideoppai
${prefs}animefeets
${prefs}animebooty
${prefs}animethighss
${prefs}hentaiparadise
${prefs}animearmpits
${prefs}hentaifemdom
${prefs}lewdanimegirls
${prefs}biganimetiddies
${prefs}animebellybutton
${prefs}hentai4everyone
${prefs}hentai
${prefs}ass
${prefs}bdsm
${prefs}cuckold
${prefs}cum
${prefs}ero
${prefs}femdom
${prefs}foot
${prefs}gangbang
${prefs}glasses
${prefs}jahy
${prefs}masturbation
${prefs}orgy
${prefs}panties
${prefs}pussy
${prefs}thighs
${prefs}yuri

RANDOM FOTO
${prefs}darkjokes
${prefs}meme
${prefs}ppcouple
${prefs}cecan2
${prefs}hijaber
${prefs}cogan
${prefs}waifu
${prefs}husbu
${prefs}loli
${prefs}milf
${prefs}cosplay
${prefs}walml
${prefs}neko

OTHER MENU
${prefs}translate
${prefs}namapeople
${prefs}faktaunik
${prefs}katabijak
${prefs}pantun
${prefs}bucin
${prefs}quotes
${prefs}randomnama
${prefs}halah
${prefs}hilih
${prefs}huluh
${prefs}heleh
${prefs}holoh
${prefs}kill
${prefs}cry
${prefs}hug
${prefs}pat
${prefs}lick
${prefs}kiss
${prefs}bite
${prefs}yeet
${prefs}bully
${prefs}bonk
${prefs}wink
${prefs}poke
${prefs}nom
${prefs}slap
${prefs}smile
${prefs}wave
${prefs}awoo
${prefs}blush
${prefs}smug
${prefs}glomp  
${prefs}happy
${prefs}dance
${prefs}cringe
${prefs}cuddle
${prefs}ighfive
${prefs}handhold
${prefs}dadu
${prefs}patrick
${prefs}amongus
${prefs}gawrgura
${prefs}anjing
${prefs}bucinstick

RANDOM CERITA
${prefs}cerpen
${prefs}ceritahoror
${prefs}cerpen-sejarah
${prefs}cerpen-sedih
${prefs}cerpen-sastra
${prefs}cerpen-romantis
${prefs}cerpen-rohani
${prefs}cerpen-rindu
${prefs}cerpen-remaja
${prefs}cerpen-ramadhan
${prefs}cerpen-petualangan
${prefs}cerpen-persahabatan
${prefs}cerpen-perpisahan
${prefs}cerpen-perjuangan
${prefs}cerpen-penyesalan
${prefs}cerpen-pengorbanan
${prefs}cerpen-pengalaman
${prefs}cerpen-pendidikan
${prefs}cerpen-penantian
${prefs}cerpen-patahhati
${prefs}cerpen-olahraga
${prefs}cerpen-nasionalisme
${prefs}cerpen-nasihat
${prefs}cerpen-motivasi
${prefs}cerpen-misteri
${prefs}cerpen-mengharukan
${prefs}cerpen-malaysia
${prefs}cerpen-liburan$
${prefs}cerpen-kristen
${prefs}cerpen-korea
${prefs}cerpen-kisahnyata
${prefs}cerpen-keluarga$
${prefs}cerpen-kehidupan
${prefs}cerpen-jepang
${prefs}cerpen-inspiratif
${prefs}cerpen-gokil
${prefs}cerpen-galau
${prefs}cerpen-cintasejati
${prefs}cerpen-cintasegitiga
${prefs}cerpen-cintasedih
${prefs}cerpen-cintaromantis
${prefs}cerpen-cintapertama
${prefs}cerpen-cintaislami
${prefs}cerpen-cinta
${prefs}cerpen-budaya
${prefs}cerpen-bahasasunda
${prefs}cerpen-bahasajawa
${prefs}cerpen-bahasainggris
${prefs}cerpen-bahasadaerah
${prefs}cerpen-anak

LOGO MENU
${prefs}candy
${prefs}3dchristmas
${prefs}sparklechristmas
${prefs}deepsea
${prefs}scifi
${prefs}rainbow
${prefs}waterpipe
${prefs}spooky
${prefs}pencil
${prefs}circuit
${prefs}discovery
${prefs}metalic
${prefs}fiction
${prefs}demon
${prefs}transformer
${prefs}berry
${prefs}magma
${prefs}3dstone
${prefs}brokenglass
${prefs}papercut
${prefs}graffitibike
${prefs}honey
${prefs}ice
${prefs}fruitjuice
${prefs}biscuit
${prefs}wood 
${prefs}chocolate
${prefs}matrix
${prefs}blood
${prefs}dropwater
${prefs}lava
${prefs}rock
${prefs}bloodglas
${prefs}hallowens
${prefs}darkgold
${prefs}joker
${prefs}wicker
${prefs}firework
${prefs}skeleton
${prefs}sand
${prefs}glue
${prefs}1917
${prefs}leaves
${prefs}tololserti
${prefs}shadow
${prefs}cup
${prefs}cup1
${prefs}romance
${prefs}smoke
${prefs}burnpaper
${prefs}lovemessage
${prefs}undergrass
${prefs}love
${prefs}coffe
${prefs}woodheart
${prefs}woodenboard
${prefs}summer3d
${prefs}wolfmetal
${prefs}nature3d
${prefs}}underwater
${prefs}golderrose
${prefs}summernature
${prefs}letterleaves
${prefs}glowingneon
${prefs}fallleaves
${prefs}flamming
${prefs}harrypotter
${prefs}carvedwood
${prefs}tiktokmaker
${prefs}ktpmaker
${prefs}arcade8bit
${prefs}battlefield4
${prefs}pubg
${prefs}pornhub
${prefs}glitch
${prefs}avenger
${prefs}space
${prefs}ninjalogo
${prefs}marvelstudio
${prefs}lionlogo
${prefs}wolflogo
${prefs}steel3d
${prefs}wallgravity
${prefs}coolgravity
${prefs}wetglass
${prefs}multicolor3d
${prefs}watercolor
${prefs}luxurygold
${prefs}galaxywallpaper
${prefs}lighttext
${prefs}beautifulflower
${prefs}puppycute
${prefs}royaltext
${prefs}heartshaped
${prefs}birthdaycake
${prefs}galaxystyle
${prefs}hologram3d
${prefs}greenneon
${prefs}glossychrome
${prefs}greenbush
${prefs}metallogo
${prefs}noeltext
${prefs}glittergold
${prefs}textcake$
${prefs}starsnight
${prefs}wooden3d
${prefs}textbyname
${prefs}writegalacy
${prefs}galaxybat
${prefs}snow3d
${prefs}birthdayday
${prefs}goldplaybutton
${prefs}silverplaybutton
${prefs}freefire
${prefs}blackpink
${prefs}neon
${prefs}greenneon
${prefs}advanceglow
${prefs}futureneon
${prefs}sandwriting
${prefs}sandsummer
${prefs}sandengraved
${prefs}metaldark
${prefs}neonlight
${prefs}holographic
${prefs}text1917
${prefs}minion
${prefs}deluxesilver
${prefs}newyearcard
${prefs}bloodfrosted
${prefs}halloween
${prefs}jokerlogo
${prefs}fireworksparkle
${prefs}natureleaves
${prefs}bokeh
${prefs}toxic
${prefs}strawberry
${prefs}box3d
${prefs}roadwarning
${prefs}breakwall
${prefs}icecold
${prefs}luxury
${prefs}cloud
${prefs}summersand
${prefs}horrorblood
${prefs}thunder

PHOTO FUNIA
${prefs}denimembroidery
${prefs}bracelet
${prefs}nightmare
${prefs}neondevil
${prefs}artpapercut
${prefs}neonwriting
${prefs}airballoon
${prefs}lovelock
${prefs}neonsign
${prefs}christmas
${prefs}cemeterygates

RANDOM VIDEO
${prefs}storyanime
${prefs}asupan
${prefs}asupan2
${prefs}bokep
${prefs}bocil
${prefs}santuy
${prefs}ukhty
${prefs}rikagusriani
${prefs}ghea

ISLAM MENU
${prefs}asmaulhusna
${prefs}iqra
${prefs}hadist
${prefs}juzamma
${prefs}listsurah
${prefs}jadwalsholat
${prefs}kisahnabi
${prefs}tafsirsurah

SEARCH MENU
${prefs}gimage
${prefs}ytsearch
${prefs}searchgc
${prefs}play
${prefs}happymod
${prefs}servermc
${prefs}mcpedl
${prefs}google
${prefs}pinterest

CONVERT MENU
${prefs}sticker
${prefs}smeme
${prefs}stickerwm
${prefs}styletext
${prefs}removebg
${prefs}ttp <query>
${prefs}attp <query>
${prefs}emojimix
${prefs}emojimix2
${prefs}tomp3
${prefs}tovn
${prefs}toaudio
${prefs}togif
${prefs}tourl
${prefs}tomp4
${prefs}toimage

TOOLS MENU
${prefs}profile
${prefs}inspect
${prefs}getcase
${prefs}getname
${prefs}getpic
${prefs}nulis
${prefs}nuliskiri
${prefs}nuliskanan
${prefs}foliokanan
${prefs}foliokiri
${prefs}kalkulator
${prefs}get
${prefs}quoted
${prefs}join
${prefs}fliptext
${prefs}tohuruf
${prefs}volume
${prefs}bass
${prefs}tempo
${prefs}translate

HAPPY MENU
${prefs}halah
${prefs}hilih
${prefs}huluh
${prefs}heleh
${prefs}holoh
${prefs}math
${prefs}tictactoe
${prefs}delttt
${prefs}tebak
${prefs}family100
${prefs}suitpvp

MAKER MENU
${prefs}textmaker

DATABASE
${prefs}setcmd
${prefs}listcmd
${prefs}delcmd
${prefs}lockcmd
${prefs}addmsg
${prefs}listmsg
${prefs}getmsg
${prefs}delmsg

OTHER
${prefs}owner
${prefs}listpc
${prefs}listgc
${prefs}mcserver
${prefs}ping
${prefs}thanksto
${prefs}afk
${prefs}spam
${prefs}cekupdate
${prefs}getscmd
${prefs}listblock
${prefs}delete
${prefs}infochat
${prefs}request
${prefs}report
${prefs}donate
${prefs}listonline

OWNER MENU
${prefs}self
${prefs}public
${prefs}bcall
${prefs}bcgroup
${prefs}chat
${prefs}anticall
${prefs}antitag
${prefs}autoread 
${prefs}ban
${prefs}block
${prefs}cowner
> / => / $ / <

${ucapanWaktu}
${jangwak}`
const qtod = m.quoted? "true":"false"

// Case Nye Sini Ngab
if (!m.isBaileys) { // Anti Respon BotBaileys
switch(command) {
case 'menu': case 'help': {
if (isBan) return m.reply(mess.ban)
const templateButtons = [
{index: 1, urlButton: {displayText: '', url: linkgrupss}}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: listmn,
footer: '© MyBarrGans',
templateButtons: templateButtons
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (isBan) return m.reply(mess.ban)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await mans.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
mans.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':{
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hentai':
case 'ahegao':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':{
let cndn = await fetchJson(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)
let random = cndn[Math.floor(Math.random() * cndn.length)]
mans.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'darkjokes':{
nyenye = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(nyenye);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: hasil }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'meme':{
nyaa = fs.readFileSync('./lib/meme.js');
                 jsonData = JSON.parse(nyaa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: memeall }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ppcp':
case 'ppcouple': {
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
mans.sendMessage(m.chat, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: m })
mans.sendMessage(m.chat, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: m })
}
break
case 'cecan2':{
imgd = await fetchJson('https://spybot-api.herokuapp.com/api/asupan/cecan?apikey=SpyBotApi')
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: { url: imgd.result.url } }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hijaber':{
imgd = await fetchJson('https://spybot-api.herokuapp.com/api/asupan/hijaber?apikey=SpyBotApi')
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: { url: imgd.result.url } }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'cecan':
case 'cogan':{
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':{
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
mans.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'asupan2':{
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
mans.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `asupan.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'ghea':{
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ghea?apikey=SpyBotApi`)
mans.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'ukhty':{
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ukty?apikey=SpyBotApi`)
mans.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'rikagusriani':{
hasifs = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/rikagusriani?apikey=SpyBotApi`)
mans.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'santuy':{
hasifs = await fetchJson(`https://raku-web.herokuapp.com/api/asupan/santuy?apikey=RakuKeyTod`)
mans.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'bocil':{
hasily = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/bocil?apikey=SpyBotApi`)
mans.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'bokep':{
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
mans.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
break
case 'storyanime':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
mans.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `storyanime.mp4`, caption: `Nih Story Animenya` }, { quoted: m })
}
break
case 'asupan': case 'asupansantuy': case 'asupanbocil': case 'asupanukhty': case 'asupanghea': case 'asupanrikagusriani':{
hasiltod = await fetchJson(`https://api.dapuhy.xyz/api/asupan/${command}?apikey=${dapkey}`)
hasiltt = await getBuffer(hasiltod.result)
let btn = [{
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      mans.send5Vid(m.chat, `Nih Kak`, mans.user.name, hasiltt, btn)
                      }
                      break
case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'neko':
case 'shota':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':{
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'xnxxsearch':
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    csksyu = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    csksyz = csksyu.result
                    ini_txt = ""
                    for (var x of csksyz) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xnxxvideo [link]`
mans.sendMessage(from, { text: anu }, { quoted: m })
break
case 'xnxxvideo':
if (args.length == 0) return m.reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    kohr = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    kohl = kohr.result
                    ini_txt = `Title : ${kohl.title}\n`
                    ini_txt += `Duration : ${kohl.duration}\n`
                    ini_txt += `View : ${kohl.view}\n`
                    ini_txt += `Rating : ${kohl.rating}\n`
                    ini_txt += `Like : ${kohl.like}\n`
                    ini_txt += `Dislike : ${kohl.dislike}\n`
                    ini_txt += `Comment : ${kohl.comment}\n`
                    ini_txt += `Tag : ${kohl.tag.join(", ")}\n`
                    ini_txt += `Description : ${kohl.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = kohl.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    fott = await getBuffer(kohl.thumbnail)
                    await mans.sendMessage(m.chat, { image: fott, caption: ini_txt }, { quoted: m})                  
                    break
case 'translate':
if (args.length < 1) return m.reply(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`👷Translate : ${Detek}\n🔎Hasil : ${Infoo}`)
break
case 'dadu':
case 'patrick':
case 'amongus':
case 'gawrgura':
case 'anjing':
case 'bucinstick':
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolkey}`)
mans.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
break
case 'faktaunik': 
case 'katabijak': 
case 'pantun': 
case 'bucin': {
kohg = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: kohg.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             if (!q) return m.reply(`Example : ${prefix + command} Barr`) 
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                mans.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: m })
             }
break
case 'denimembroidery': case 'bracelet': case 'nightmare': case 'artpapercut': case 'neonwriting': case 'airballoon': case 'lovelock': case 'neonsign': case 'cemeterygates':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} teks`)
txt1 = args[0]
imagetod = await getBuffer(`https://api.dapuhy.xyz/api/photofunia/${command}?text=${txt1}&apikey=${dapkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagetod }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'carvedwood':{
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} teks`)
txt1 = args[0]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pornhub':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
case 'coolgravity':{
if (args.length == 0) return m.reply(`Example: ${prefix + command} XzyBotz`)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ktpmaker':
if (args.length == 0) return m.reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    mans.sendMessage(m.chat, { image: ini_buffer, caption: `*KTP MAKER*` }, { quoted: m})
                    break
case 'tiktokmaker':{
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} teks1 teks2`)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6287721317870'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':{
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} teks1 teks2`)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'quotes':{
var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: teks,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'randomnama':
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
m.reply(anu.result)
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/Reply Teks Dengan Caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'handhold':
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
mans.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'attp':
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
mans.sendMessage(m.chat, { sticker: gehdhe }, { quoted: m })
break
case 'ttp':
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} Hai`)
veireuue = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
mans.sendMessage(m.chat, { sticker: veireuue }, { quoted: m })
break
case 'ceritahoror':{
pqdnw = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
csksw = pqdnw.result
ini_txt = `Title : ${csksw.title}\n`
ini_txt += `Desc : ${csksw.desc}\n`
ini_txt += `Story :\n${csksw.story}\n`
buff = await getBuffer(csksw.thumbnail)
let message = await prepareWAMessageMedia({ image: buff }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'Created By XzyBotz',
hydratedButtons: [{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6285850063401'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tafsirsurah': {
if (!args[0]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah* 」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
}
break
case 'asmaulhusna': {
kohj = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
kghw = kohj.result
ini_txt = `No : ${kghw.index}\n`
ini_txt += `Latin: ${kghw.latin}\n`
ini_txt += `Arab : ${kghw.ar}\n`
ini_txt += `Indonesia : ${kghw.id}\n`
ini_txt += `English : ${kghw.en}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'kisahnabi':
if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
wdwo = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
wdwp = wdwo.result
ini_txt = `Name : ${wdwp.name}\n`
ini_txt += `Lahir : ${wdwp.thn_kelahiran}\n`
ini_txt += `Umur : ${wdwp.age}\n`
ini_txt += `Tempat : ${wdwp.place}\n`
ini_txt += `Story : \n${wdwp.story}`
m.reply(ini_txt)
break
case 'jadwalsholat':	
if (args.length == 0) return m.reply(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
wdza = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
wdzs = wdza.result
ini_txt = `Wilayah : ${wdzs.wilayah}\n`
ini_txt += `Tanggal : ${wdzs.tanggal}\n`
ini_txt += `Sahur : ${wdzs.sahur}\n`
ini_txt += `Imsak : ${wdzs.imsak}\n`
ini_txt += `Subuh : ${wdzs.subuh}\n`
ini_txt += `Terbit : ${wdzs.terbit}\n`
ini_txt += `Dhuha : ${wdzs.dhuha}\n`
ini_txt += `Dzuhur : ${wdzs.dzuhur}\n`
ini_txt += `Ashar : ${wdzs.ashar}\n`
ini_txt += `Maghrib : ${wdzs.imsak}\n`
ini_txt += `Isya : ${wdzs.isya}`
m.reply(ini_txt)
break
case 'listsurah':
whqg = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
whqa = whqg.result
ini_txt = 'List Surah:\n'
for (var x in whqa) {
ini_txt += `${x}. ${whqa[x]}\n`
}
m.reply(ini_txt)
break
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
mans.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
}
break
case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan Tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis Yang Ke Berapa?\n\nContoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'juzamma': {
if (args[0] === 'pdf') {
mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
m.reply(`Mau Format Apa ? Example : ${prefix + command} pdf

Format Yang Tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'cerpen-anak':{
let cerpe = await cerpen(`anak`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let cerpe = await cerpen(`bahasa daerah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let cerpe = await cerpen(`bahasa Inggris`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let cerpe = await cerpen(`bahasa jawa`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let cerpe = await cerpen(`bahasa sunda`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
let cerpe = await cerpen(`budaya`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
let cerpe = await cerpen(`cinta`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
let cerpe = await cerpen(`cinta islami`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
let cerpe = await cerpen(`cinta pertama`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let cerpe = await cerpen(`cinta romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
let cerpe = await cerpen(`cinta sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
let cerpe = await cerpen(`cinta sejati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
let cerpe = await cerpen(`galau`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
let cerpe = await cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
let cerpe = await cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
let cerpe = await cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
let cerpe = await cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
let cerpe = await cerpen(`keluarga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let cerpe = await cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
let cerpe = await cerpen(`korea`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
let cerpe = await cerpen(`kristen`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
let cerpe = await cerpen(`liburan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
let cerpe = await cerpen(`malaysia`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
let cerpe = await cerpen(`mengharukan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
let cerpe = await cerpen(`misteri`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
let cerpe = await cerpen(`motivasi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
let cerpe = await cerpen(`nasihat`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let cerpe = await cerpen(`nasionalisme`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
let cerpe = await cerpen(`olahraga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
let cerpe = await cerpen(`penantian`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
let cerpe = await cerpen(`pendidikan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
let cerpe = await cerpen(`pengalaman pribadi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let cerpe = await cerpen(`pengorbanan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
let cerpe = await cerpen(`penyesalan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
if (isBan) return replyBan('Maaf Kamu Sudah Di Ban Silahkan Chat Owner Di Bawah Untuk Membuka Nya')
if (!isPrem) return replyPremium(mess.premium)
let cerpe = await cerpen(`perjuangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
let cerpe = await cerpen(`perpisahan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
let cerpe = await cerpen(`petualangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
let cerpe = await cerpen(`ramadhan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
let cerpe = await cerpen(`remaja`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
let cerpe = await cerpen(`rindu`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
let cerpe = await cerpen(`romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
let cerpe = await cerpen(`sastra`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
let cerpe = await cerpen(`sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
let cerpe = await cerpen(`sejarah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen':{
kohp = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
kohz = kohp.result
ini_txt = `Title : ${kohz.title}\n`
ini_txt += `Creator : ${kohz.creator}\n`
ini_txt += `Story :\n${kohz.cerpen}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'naruto':
case 'minato':
case 'boruto':
case 'hinata':
case 'sasuke':
case 'sakura':
case 'kaneki':
case 'toukachan':
case 'rize':
case 'akira':
case 'itori':
case 'kurumi':
case 'miku':
m.reply(mess.wait)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
mans.sendMessage(from, {image:{url:nye}, caption:"Done!"}, {quoted:m})
break                          
case 'topupff':
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
var Yy = 0
let secmmknya = [
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `5 💎`,
"rowId": `${prefix}topup5 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `12 💎`,
"rowId": `${prefix}topup12 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `50 💎`,
"rowId": `${prefix}topup50 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `70 💎`,
"rowId": `${prefix}topup70 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `140 💎`,
"rowId": `${prefix}topup140 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `355 💎`,
"rowId": `${prefix}topup355 ${txt1}`
}
]
}
,
{
"title": `LIST KE ${Yy+=1}`,
 rows: [
{
"title": `720 💎`,
"rowId": `${prefix}topup720 ${txt1}`
}
]
}
]
mans.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Topup Game By BotLu ", secmmknya, { quoted: efff })
break
case 'nuliskiri':{
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskiri* teks`)
m.reply(mess.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./Atak/FOTO/BUKU/sebelumkiri.jpg','-font','./Atak/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./Atak/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => m.reply('error'))
.on('exit', () => {
mans.sendMessage(from, { image: fs.readFileSync('./Atak/FOTO/BUKU/setelahkiri.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
})
}
break
case 'nuliskanan':{
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskanan* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./Atak/FOTO/BUKU/sebelumkanan.jpg','-font','./Atak/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./Atak/FOTO/BUKU/setelahkanan.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                mans.sendMessage(from, { image: fs.readFileSync('./Atak/FOTO/BUKU/setelahkanan.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokiri':{
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokiri* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Atak/FOTO/FOLIO/sebelumkiri.jpg','-font','./Atak/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./Atak/FOTO/FOLIO/setelahkiri.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
                mans.sendMessage(from, { image: fs.readFileSync('./Atak/FOTO/FOLIO/setelahkiri.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokanan':{
                if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokanan* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Atak/FOTO/FOLIO/sebelumkanan.jpg','-font','./Atak/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./Atak/FOTO/FOLIO/setelahkanan.jpg'])
                .on('error', () => m.reply(mess.error.api))
                .on('exit', () => {
                mans.sendMessage(from, { image: fs.readFileSync('./Atak/FOTO/FOLIO/setelahkanan.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'topup5':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 5 💎
HARGA : 2.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/ovoatak.jpg') }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/6285850063401'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup12':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 12 💎
HARGA : 3.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/ovoatak.jpg') }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/6285850063401'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup50':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 50 💎
HARGA : 8.500
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/ovoatak.jpg') }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/6285850063401'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup70':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 70 💎
HARGA : 11.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/ovoatak.jpg') }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/6285850063401'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup140':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 140 💎
HARGA : 21.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/ovoatak.jpg') }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/6285850063401'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup355':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 355 💎
HARGA : 54.500
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/ovoatak.jpg') }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/6285850063401'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'topup720':{
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
txt1 = args[0]
let dede = await caliph.search.freefireid(`${txt1}`)
donte = `
ID : ${txt1}
USERNAME : ${dede.result}
JUMLAH : 720 💎
HARGA : 115.000
_SCAN QRIS DI ATAS ISI SESUAI NOMINAL_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/ovoatak.jpg') }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: `Jika Sudah Bayar Sesuai Nominal Silahkan Chat Nomor Owner Di Bawah Untuk Mengkonfirmasikan Bahwa Data Nya Benar Atau Salah.`,
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Bot',
url: 'https://wa.me/6285850063401'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ffstalk': {
if (!args[0]) return m.reply(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return m.reply("Hanya angka")
let dede = await caliph.search.freefireid(args.join(" "))
teks = `Message : ${dede.message}\nId : ${encodeURI(q)}\nResult : ${dede.result}`
m.reply(teks)
}
break
case 'list':
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: 'Silahkan Pilih Produk Nya',
                buttonText: 'Click Here!',
                footer: 'My list', 
                sections: [{
                    title: groupName, rows: arr_rows
                }]
            }
            mans.sendMessage(from, listMsg)
            break
        case 'addlist':
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]                
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (isImage || isQuotedImage) {
            let { TelegraPh } = require('./lib/uploader')
                let media = await mans.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                        addResponList(from, args1, args2, true, `${anu}`, db_respon_list)
                        m.reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses set list message dengan key : *${args1}*`)
            }            
            break
        case 'dellist':
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            m.reply(`Sukses delete list message dengan key *${q}*`)            
            break
case 'antidelete': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiDelete) return m.reply('Sudah Aktif')
ntidel.push(from)
m.reply('Succes menyalakan antidelete di group ini')
} else if (args[0] === "off") {
if (!AntiDelete) return m.reply('Sudah Mati')
let off = ntidel.indexOf(from)
ntidel.splice(off, 1)
m.reply('Succes mematikan antidelete di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'gitclone':
if (isBan) return m.reply(mess.ban)
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) return m.reply('Linknya?')
if (!regx.test(args[0])) return m.reply('Linknya salah')
let [, user, repo] = args[0].match(regx) || []
repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${user}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
mans.sendFile(m.chat, hasdl, namafile, m)
break
case 'get': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Urlnya?")
if (!isUrl(text)) return m.reply("Hanya Link!")
try {
let gts = await fetchJson(args.join(" "))
m.reply(gts)
} catch {
m.reply("Error!")
}
}
break
case 'setwelcome': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
const arge = text.trim().split(/ +/).slice(1)
const wjoin = wjoind.find(i => m.isGroup ? i.jid.includes(m.chat) : false)
const wleave = wleaved.find(i => m.isGroup ? i.jid.includes(m.chat) : false)
if (!args[0]) return m.reply(`Example : @user, @subject\n- ${prefix + command} join <teks>\n- ${prefix + command} leave <teks>\n- ${prefix + command} default`)
try {
if (args[0] === "join") {
if (!arge[0]) return m.reply("Teksnya mana kak?")
if (wjoin) {
var  has = wjoind.find(i => i.jid == m.chat)
var chn = wjoind.indexOf(has)
wjoind[chn].message = arge.join(" ")
m.reply(`Succes change to ${arge.join(" ")}`)
} else {
wjoind.push({ jid: m.chat, message: arge.join(" ") })
m.reply(`Succes set to ${arge.join(" ")}`)
}
} else if (args[0] === "leave") {
if (!arge[0]) return m.reply("Teksnya mana kak?")
if (wleave) {
var  has = wleaved.find(i => i.jid == m.chat)
var chn = wleaved.indexOf(has)
wleaved[chn].message = arge.join(" ")
m.reply(`Succes change to ${arge.join(" ")}`)
} else {
wleaved.push({ jid: m.chat, message: arge.join(" ") })
m.reply(`Succes set to ${arge.join(" ")}`)
}
} else if (args[0] === "default") {
if (wjoin) {
var hasj = wjoind.find( i => i.jid == m.chat )
var posj = wjoind.indexOf(hasj)
wjoind.splice(posj, 1)
}
if (wleave) {
var hasl = wleaved.find( i => i.jid == m.chat )
var posl = wleaved.indexOf(hasl)
wleaved.splice(posl, 1)
}
m.reply("Succes to default")
break
}
} catch (err) {
m.reply(String(err))
}
}
break
case 'nomerhoki': case 'nomorhoki': {
if (isBan) return m.reply(mess.ban)
if (!Number(text)) return m.reply(`Example : ${prefix + command} 6281385062956`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nomor HP :* ${anu.message.nomer_hp}\n▸ *Angka Shuzi :* ${anu.message.angka_shuzi}\n▸ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n▸ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Mimpi :* ${anu.message.mimpi}\n▸ *Arti :* ${anu.message.arti}\n▸ *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman, 22, 7, 2015, Aina, 16, 3, 2015`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama Anda :* ${anu.message.nama_anda.nama}\n▸ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n▸ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n▸ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n▸ *Hasil :* ${anu.message.result}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman, 22, 7, 2015, Aina, 16, 3, 2015`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama Anda :* ${anu.message.nama_anda.nama}\n▸ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n▸ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n▸ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n▸ *Hasil :* ${anu.message.result}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman, 22, 7, 2015, Aina, 16, 3, 2015`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama Suami :* ${anu.message.suami.nama}\n▸ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n▸ *Nama Istri :* ${anu.message.istri.nama}\n▸ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n▸ *Hasil :* ${anu.message.result}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman, 22, 7, 2015, Aina, 16, 3, 2015`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama Anda :* ${anu.message.nama_anda.nama}\n▸ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n▸ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n▸ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n▸ *Sisi Positif :* ${anu.message.sisi_positif}\n▸ *Sisi Negatif :* ${anu.message.sisi_negatif}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama :* ${anu.message.nama}\n▸ *Arti :* ${anu.message.arti}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman, 22, 7, 2015`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama :* ${anu.message.nama}\n▸ *Lahir :* ${anu.message.tgl_lahir}\n▸ *Life Path :* ${anu.message.life_path}\n▸ *Destiny :* ${anu.message.destiny}\n▸ *Destiny Desire :* ${anu.message.destiny_desire}\n▸ *Personality :* ${anu.message.personality}\n▸ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman|Aina`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
mans.sendImage(m.chat,  anu.message.gambar, `▸ *Nama Anda :* ${anu.message.nama_anda}\n▸ *Nama Pasangan :* ${anu.message.nama_pasangan}\n▸ *Sisi Positif :* ${anu.message.sisi_positif}\n▸ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Tanggal Pernikahan :* ${anu.message.tanggal}\n▸ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (isBan) return m.reply(mess.ban)
if (!text)return m.reply(`Example : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Lahir :* ${anu.message.hari_lahir}\n▸ *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Lahir :* ${anu.message.hari_lahir}\n▸ *Rezeki :* ${anu.message.rejeki}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Lahir :* ${anu.message.hari_lahir}\n▸ *Pekerjaan :* ${anu.message.pekerjaan}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Analisa :* ${anu.message.analisa}\n▸ *Angka Akar :* ${anu.message.angka_akar}\n▸ *Sifat :* ${anu.message.sifat}\n▸ *Elemen :* ${anu.message.elemen}\n▸ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Analisa :* ${anu.message.analisa}\n▸ *Sektor :* ${anu.message.sektor}\n▸ *Elemen :* ${anu.message.elemen}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendImage(m.chat, anu.message.image, `▸ *Lahir :* ${anu.message.tgl_lahir}\n▸ *Simbol Tarot :* ${anu.message.simbol_tarot}\n▸ *Arti :* ${anu.message.arti}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama :* ${anu.message.nama}\n▸ *Lahir :* ${anu.message.tahun_lahir}\n▸ *Gender :* ${anu.message.jenis_kelamin}\n▸ *Angka Kua :* ${anu.message.angka_kua}\n▸ *Kelompok :* ${anu.message.kelompok}\n▸ *Karakter :* ${anu.message.karakter}\n▸ *Sektor Baik :* ${anu.message.sektor_baik}\n▸ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Lahir :* ${anu.message.tgl_lahir}\n▸ *Kala Tinantang :* ${anu.message.kala_tinantang}\n▸ *Info :* ${anu.message.info}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Lahir :* ${anu.message.tgl_lahir}\n▸ *Hasil :* ${anu.message.result}\n▸ *Info :* ${anu.message.info}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Hari Lahir :* ${anu.message.hari_lahir}\n▸ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n▸ *Hari Naas :* ${anu.message.hari_naas}\n▸ *Info :* ${anu.message.catatan}\n▸ *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Hari Lahir :* ${anu.message.hari_lahir}\n▸ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n▸ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Hari Lahir :* ${anu.message.hari_lahir}\n▸ *tanggal Lahir :* ${anu.message.tgl_lahir}\n▸ *Arah Rezeki :* ${anu.message.arah_rejeki}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman, 22, 7, 2015, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama :* ${anu.message.nama}\n▸ *Lahir :* ${anu.message.tgl_lahir}\n▸ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n▸ *Hasil :* ${anu.message.result}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 22, 7, 2015`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Tanggal :* ${anu.message.tanggal}\n▸ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n▸ *Watak Hari :* ${anu.message.watak_hari}\n▸ *Naga Hari :* ${anu.message.naga_hari}\n▸ *Jam Baik :* ${anu.message.jam_baik}\n▸ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman, 22, 7, 2015`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama :* ${anu.message.nama}\n▸ *Lahir :* ${anu.message.tgl_lahir}\n▸ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} Salman, 22, 7, 2015`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Nama :* ${anu.message.nama}\n▸ *Lahir :* ${anu.message.tgl_lahir}\n▸ *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Tanggal :* ${anu.message.tgl_memancing}\n▸ *Hasil :* ${anu.message.result}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Hasil :* ${anu.message.result}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return m.reply(date)
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Zodiak :* ${anu.message.zodiak}\n▸ *Nomor :* ${anu.message.nomor_keberuntungan}\n▸ *Aroma :* ${anu.message.aroma_keberuntungan}\n▸ *Planet :* ${anu.message.planet_yang_mengitari}\n▸ *Bunga :* ${anu.message.bunga_keberuntungan}\n▸ *Warna :* ${anu.message.warna_keberuntungan}\n▸ *Batu :* ${anu.message.batu_keberuntungan}\n▸ *Elemen :* ${anu.message.elemen_keberuntungan}\n▸ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n▸ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
mans.sendText(m.chat, `▸ *Hasil :* ${anu.message}`, m)
}
break
case 'thanksto': {
if (isBan) return m.reply(mess.ban)
const groupMet = await mans.groupMetadata("120363025425953421@g.us").catch(e => {})
const partic = await groupMet.participants
const groupAdms = await partic.filter(v => v.admin !== null).map(v => v.id)
const groupOwnr = groupMet.owner
const isBotAdmns = groupAdms.includes(botNumber)
const isAdms = groupAdms.includes(m.sender)
let dfg = await partic.map(v => v.id)
if (!dfg.includes(m.sender)) return m.reply(`Kamu belum bergabung digroup thanks to\nhttps://chat.whatsapp.com/KEDT4a47m1Q0A5yATttez0`)
if (!isBotAdmns) return
if (isAdms) {
if (!args[0]) return m.reply("Nama Kamu?")
await mans.groupUpdateDescription("120363025425953421@g.us", `${thnsto}, ${args.join(" ")}`).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
} else {
if (!args[0]) return m.reply("Nama Kamu?")
await mans.groupUpdateDescription("120363025425953421@g.us", `${thnsto}, ${args.join(" ")}`).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
await mans.groupParticipantsUpdate("120363025425953421@g.us", [m.sender], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'mediafire': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example : \n${prefix + command} <url>`)
if (!isUrl(args[0])) return m.reply("Hanya Url!")
try {
let fmedi = await mediafire(args[0])
teks = `     「 Mediafire Downloader 」

▸ Name : ${fmedi[0].name}
▸ MimeType : application/${fmedi[0].mime}
▸ Size :  ${fmedi[0].size}

${fmedi[0].link}`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: thum,
caption: teks,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4,
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
mans.sendMessage(m.chat, {document:{url:fmedi[0].link}, mimetype:fmedi[0].mime, fileName:fmedi[0].name}, {quoted:m})
} catch(err) {
m.reply(String(err))
}
}
break
case 'style': case 'styletext': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply('Masukkan Query text!')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `▸ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case 'emojimix': {
if (isBan) return m.reply(mess.ban)
let [emoji1, emoji2] = text.split`+`
if (isBan) return m.reply(mess.ban)
if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+🤔`)
try {
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await mans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
} catch {
m.reply("Mengerror!")
}
}
break
case 'emojimix2': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} 😅`)
try {
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await mans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
} catch {
m.reply("Tidak ditemukan!")
}
}
break
case 'autosticker':
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
					if (args[0] === '1') {
					if (isAutoSticker) return m.reply('Sudah Aktif Sebelumnya')
					autosticker.push(from)
					fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
m.reply(`Autosticker Berhasil Di Aktifkan !`)
					} else if (args[0] === '0') {
					autosticker.splice(from, 1)
						fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
m.reply(`Autosticker Berhasil Di Nonaktifkan !`)
					} else {
let buttons = [
{ buttonId: 'autosticker 1', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'autosticker 0', buttonText: { displayText: 'Off' }, type: 1 }
]
await mans.sendButtonText(m.chat, buttons, `Mode Autosticker`, mans.user.name, m)
}
					break
case 'autokick': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (autkic) return m.reply('Sudah Aktif')
autkick.push(from)
m.reply('Succes menyalakan autokick di group ini')
} else if (args[0] === "off") {
if (!autkic) return m.reply('Sudah Mati')
let off = autkick.indexOf(from)
autkick.splice(off, 1)
m.reply('Succes mematikan autokick di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'getcase': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Mau ngambil case apa?")
try {
m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./zackm.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
m.reply("Case tidak ditemukan")
}
}
break
case 'spam': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!m.quoted) return m.reply("Reply pesanya!")
if (!args[0]) return m.reply("Masukan jumlah spamnya")
if (!Number(args[0])) return m.reply("Hanya angka")
let jml = args[0]
if (isCreator) {
await sleep(1000)
for(let i=0;i<jml;i++){
quoted.copyNForward(m.chat, true)
}
} else if (isAdmins) {
if (args[0] > 100) return m.reply("Maximal 100")
await sleep(1000)
for(let i=0;i<jml;i++){
quoted.copyNForward(m.chat, true)
}
} else {
m.reply("Hanya bisa digunakan oleh admin group atau owner bot")
}
}
break
case 'getscmd': {
if (isBan) return m.reply(mess.ban)
mans.sendMessage(from, {sticker:{url:"https://ZackMans.github.io/media/menu.webp"}}, {quoted:m})
mans.sendMessage(from, {sticker:{url:"https://ZackMans.github.io/media/groupopen.webp"}}, {quoted:m})
mans.sendMessage(from, {sticker:{url:"https://ZackMans.github.io/media/groupclose.webp"}}, {quoted:m})
}
break
case 'textmaker': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return m.reply(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
mans.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return m.reply(`Example :\n${prefix + command + ' ' + args[0]} Barr`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
mans.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*List Text Maker :*\n•> glitch\n•> glow`)
}
}
break
case 'suitpvp': case 'suit': {
if (isBan) return m.reply(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await mans.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) mans.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'family100': {
if (isBan) return m.reply(mess.ban)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await mans.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await mans.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
mans.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© BarrGansl", m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,"©  BarrGansl", m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "©  BarrGans", m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "©  BarrGans", m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "©  BarrGans", m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "©  BarrGans", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return m.reply(mess.ban)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await mans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await mans.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
m.reply('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
if (isBan) return m.reply(mess.ban)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
mans.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'kuismath': case 'math': {
if (isBan) return m.reply(mess.ban)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./src/math')
if (!args.join(" ")) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
mans.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'delete': case 'del': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
mans.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted && !args.join(" ")) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case 'vote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (m.chat in vote) return m.reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
if (!args.join(" ")) return m.reply(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [args.join(" "), [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "©  BarrGans",
buttons: buttonsVote,
headerType: 1
}
mans.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return m.reply('Kamu Sudah Vote')
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "©  BarrGans",
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
mans.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return m.reply('Kamu Sudah Vote')
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© BarrGans",
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
mans.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${mans.user.id}
`
mans.sendTextWithMentions(m.chat, teks_vote, m)
}
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'listpc': {
if (isBan) return m.reply(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 List Personal Chat 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
}
mans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
if (isBan) return m.reply(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await mans.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
mans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'afk': {
if (isBan) return m.reply(mess.ban)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
m.reply(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'setcmd': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Pesan!')
if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
if (!args.join(" ")) return m.reply(`Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
if (isBan) return m.reply(mess.ban)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return m.reply(`Tidak ada hash`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply('You have no permission to delete this sticker command')
delete global.db.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
if (isBan) return m.reply(mess.ban)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
mans.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply('Reply Pesan!')
if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return m.reply('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
}
break
case 'addmsg': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Message Yang Ingin Disave Di Database')
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} nama file`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return m.reply(`'${args.join(" ")}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'
    
Akses dengan ${prefix}getmsg ${args.join(" ")}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'delmsg': case 'deletemsg': {
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
case 'getmsg': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${args.join(" ")}' tidak terdaftar di list pesan`)
mans.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
if (isBan) return m.reply(mess.ban)
try {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
listMsgs = []
for (let i of seplit) {
listMsgs.push({
title: `${i.nama}`, rowId: `${i.nama}`, description: `${getContentType(i.message).replace(/Message/i, '')}`})
}
const sections = [
{
title: "Total Message " + seplit.length,
rows: listMsgs
}
]

const listMessage = {
text: "ketuk button dibawah untuk melihat daftar list respon message, ketuk lagi untuk menjalankan fiturnya",
footer: "© BarrGans",
title: "     「 List Respon Message 」",
buttonText: "List Message",
sections
}
mans.sendMessage(from, listMessage, {quoted:m})
} catch {
m.reply(`Belum ada respon message yang ditambahkan dalam list`)
}
}
break
case 'fliptext': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext MyMans`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'tohuruf': {
if (isBan) return m.reply(mess.ban)
if (!Number(args[0])) return m.reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
m.reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
m.reply("Error")
}
}
break
case 'welcome': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Succes menyalakan welcome di group ini')
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Succes mematikan welcome di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'autorevoke': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (GcRvk) return m.reply('Sudah Aktif')
gcrevoke.push(from)
m.reply('Succes menyalakan autorevoke di group ini')
} else if (args[0] === "off") {
if (!GcRvk) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
gcrevoke.splice(off, 1)
m.reply('Succes mematikan autorevoke di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antihidetag': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiHidetag) return m.reply('Sudah Aktif')
ntihide.push(from)
m.reply('Succes menyalakan antihidetag di group ini')
} else if (args[0] === "off") {
if (!AntiHidetag) return m.reply('Sudah Mati')
let off = ntihide.indexOf(from)
ntihide.splice(off, 1)
m.reply('Succes mematikan antihidetag di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antilink': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini')
var groupe = await mans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
mans.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'listonline': case 'listaktif': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
mans.sendText(m.chat, '     「 List Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'chat': {
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const cpese = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args.join(" ") ? args.join(" ") + "@s.whatsapp.net" : false
const nony = cpese.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT FITUR |*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
mans.sendMessage(nony, {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await m.reply("Succes")
break
case 'cowner': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Pilih add atau del`)
orgnye = m.mentionedJid[0] ? m.mentionedJid[0].split("@")[0] : m.quoted ? m.quoted.sender.split("@")[0] : args[1] ? args[1] : false
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
case 'ban': case 'block': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Pilih add atau del`)
orgnye = m.mentionedJid[0] ? m.mentionedJid[0] : Number(args[1]) ? Number(args[1]) + "@s.whatsapp.net" : m.quoted ? m.quoted.sender : false
if (!orgnye) return m.reply(`Example : \n- ${prefix + command} del/add <number/tag/reply>\n- ${prefix + command} del 6281385062956`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return m.reply('User sudah dibanned')
mans.updateBlockStatus(orgnye, 'block')
m.reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('User tidak dibanned')
mans.updateBlockStatus(orgnye, 'unblock')
m.reply(`Succes delban`)
} else {
m.reply("Error")
}
}
break
case 'request': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
mans.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
mans.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'report': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
mans.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
mans.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'mcserver': case 'mcquery': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.Barr.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return m.reply("ipnya mana kak?")
if (!portnya) return m.reply("portnya mana kak?")

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
m.reply(jsonformat(success));
return q.basicStat()
})
.then(success => {
m.reply(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'happymod': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'searchgc': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
if (isBan) return m.reply(mess.ban)
if (args[0]) {
bebed = args[0]
} else if (!args[0]) {
bebed = "1"
}
if (!Number(args[0])) return m.reply(`Example :\n${prefix + command} 1`)
servermc(bebed).then(async(res) => {
let teks = '*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `▸ Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'autoread': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autred === true) return
global.autred = true
m.reply(`Berhasil mengaktifkan autoread!`)
} else if (args[0] === 'off') {
if (autred === false) return
global.autred = false
m.reply(`Berhasil menonaktifkan autoread!`)
} else {
m.reply('Pilih on atau off')
}
}
break
case 'antitag': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
m.reply(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
m.reply(`Berhasil menonaktifkan antitag!`)
} else {
m.reply('Pilih on atau off')
}
}
break
case 'anticall': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (anticals === true) return
global.anticals = true
m.reply(`Berhasil mengaktifkan anticall!`)
} else if (args[0] === 'off') {
if (anticals === false) return
global.anticals = false
m.reply(`Berhasil menonaktifkan anticall!`)
} else {
m.reply('Pilih on atau off')
}
}
break
case 'yts': case 'ytsearch': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} dj 30 detik`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
listSerch = []
teskd = `\nResult From ${args.join(" ")}, klik tombol dibawah untuk melihat list youtube search, dan pilih salah satu untuk mendownload video tersebut\n`
for (let i of search.all) {
listSerch.push({
title: i.title, rowId: `ytdl ${i.url}`, description: `Author : ${i.author.name} / ${i.timestamp}`})
}
const sections = [
{
title: "Total Search " + search.all.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: "© BarrGans",
title: "     「 Youtube Search Downloader 」",
buttonText: "List Search",
mentions: await mans.parseMention(teskd),
sections
}
mans.sendMessage(from, listMessage, {quoted:m})
}
break
case 'infochat': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
mans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'setname': case 'setsubject': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply('Text ?')
await mans.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply('Text ?')
await mans.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppbot': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await mans.downloadAndSaveMediaMessage(quoted)
await mans.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await mans.downloadAndSaveMediaMessage(quoted)
await mans.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
mans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (isQuotedSticker) {
let media = await mans.downloadAndSaveMediaMessage(quoted)
mans.sendMessage(m.chat, { sticker : fs.readFileSync(media), mentions: participants.map(a => a.id)}, { quoted: m })
await fs.unlinkSync(media)
} else if (isQuotedImage) {
let media = await mans.downloadAndSaveMediaMessage(quoted)
mans.sendMessage(m.chat, { image : fs.readFileSync(media), caption:m.quoted ? m.quoted.caption : "", mentions: participants.map(a => a.id)}, { quoted: m })
await fs.unlinkSync(media)
} else if (isQuotedVideo) {
let media = await mans.downloadAndSaveMediaMessage(quoted)
mans.sendMessage(m.chat, { video : fs.readFileSync(media), mimetype:"video/mp4", caption:m.quoted ? m.quoted.caption : "", mentions: participants.map(a => a.id)}, { quoted: m })
await fs.unlinkSync(media)
} else if (isQuotedAudio) {
let media = await mans.downloadAndSaveMediaMessage(quoted)
mans.sendMessage(m.chat, { audio : fs.readFileSync(media), mimetype:"audio/mp4", ptt:true, mentions: participants.map(a => a.id)}, { quoted: m })
await fs.unlinkSync(media)
} else {
mans.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : m.quoted.text ? m.quoted.text : "-" , mentions: participants.map(a => a.id)}, { quoted: m })
}
}
break
case 'linkgroup': case 'linkgc': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
let response = await mans.groupInviteCode(m.chat)
mans.sendMessage(m.chat, {text:`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
mimetype: "image/jpeg",
text: "BarrGans",
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `BarrGans`,
"body": `BarrGans`,
"previewType": "PHOTO",
"thumbnailUrl": thum,
"thumbnail": thum,
"sourceUrl": "https://youtu.be/jKAawPBWe5k"
}}}, { quoted: m, detectLink: true })
}
break
case 'revoke': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
mans.groupRevokeInvite(m.chat)
}
break
case 'ephemeral': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!args[0]) return m.reply('Masukkan value enable/disable')
if (args[0] === 'enable') {
await mans.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await mans.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'editinfo': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === 'open'){
await mans.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await mans.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 BarrGans 」*\n\nChange Info, Select Open Or Close`,
footer: "© MyBarr",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case 'group': case 'grup': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === 'close'){
await mans.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await mans.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 BarrGans 」*\n\nChange Group Setting, Select Open Or Close`,
footer: "© MyBarr",
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case 'promote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'kick': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'bcgc': case 'bcgroup': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply("Reply pesan yang ingin di broadcast!")
let getGroups = await mans.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
quoted.copyNForward(i, true, {quoted:fgclink})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply("Reply pesan yang ingin di broadcast!")
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
quoted.copyNForward(yoi, true, {quoted:fgclink})
}
m.reply('Sukses Broadcast')
}
break
case 'profile': {
if (isBan) return m.reply(mess.ban)
const jidny = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender ? m.sender : false
const ddny = await store.chats.all().filter(v => v.id.includes(jidny)).map(v => v)
const isblocks = await mans.fetchBlocklist()
const isBlock = isblocks.includes(jidny)
texnr = `     「 Profile Inspector 」
▸ Number : ${jidny.split("@")[0]}
▸ Mention : @${jidny.split("@")[0]}
▸ Name : ${mans.getName(jidny)}
▸ Biography : ${jsonformat(await mans.fetchStatus(jidny).catch(() => {}))}
▸ Business : ${jsonformat(await mans.getBusinessProfile(jidny))}
▸ LastChat : ${ddny[0] ? moment(ddny[0].conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss") : "undefined"}
▸ Chat : ${ddny[0] ? ddny[0].unreadCount +" chat" : "0 chat"}
▸ Blockir : ${isBlock}
▸ Device : ${m.quoted ? zmans.getDevice(m.quoted.id) + " (+" + m.quoted.sender.split("@")[0] + ")": zmans.getDevice(m.id) + " (+" + m.sender.split("@")[0] + ")"}`
try {
ppuser = await mans.profilePictureUrl(jidny, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mans.sendMessage(m.chat, {image:{url:ppuser},caption:texnr, mentions: await mans.parseMention(texnr)}, {quoted:m})
}
break
case 'inspect': {
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
mans.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await mans.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
mans.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await mans.parseMention(tekse) })
})
}
break
case 'join': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return m.reply("Link invalid!")
if (isCreator) {
await mans.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
mans.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 50) {
teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./media/image/mans.jpg'), 2022, "BarrGans ~ Multi Device", "6283155687629@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 50) {
await mans.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
m.reply("Error")
}
}).catch(_ => _)
}
}
break
case 'volume': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await mans.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
mans.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
mans.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'tempo': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await mans.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'bass': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await mans.downloadAndSaveMediaMessage(quoted, "bass")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {audio:hah, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {video:hah, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case 'nulis': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix}nulis MyMainas|91|#ff020a|Manusia terganteng adalah salman alfarizi`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await m.reply('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return m.reply("Jumlah teks kelas maximal 4")
if (nams.length > 34) return m.reply("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return m.reply("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./media/image/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./media/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./storage/hasilnulis.jpg'
])
.on('error', () => m.reply('Error') )
.on('exit', () => {
mans.sendMessage(from, {image:fs.readFileSync('./storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => m.reply('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
})
exec(`npm i marker`)
}
break
case 'kalkulator': case 'kal': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
case 'public': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
mans.public = true
m.reply('Sukse Change To Public Usage')
mans.setStatus(`Mode : Public`)
}
break
case 'self': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
mans.public = false
m.reply('Sukses Change To Self Usage')
mans.setStatus(`Mode : Self`)
}
break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) return m.reply(mess.ban)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\n⏰ Runtime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'toimage': case 'toimg': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await mans.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buffer = fs.readFileSync(ran)
mans.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await mans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await mans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
mans.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (isBan) return m.reply(mess.ban)
if (/document/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
mans.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${mans.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (isBan) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!m.quoted) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
mans.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await mans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await mans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
if (isBan) return m.reply(mess.ban)
m.reply(mess.wait)
let media = await mans.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'q': case 'quoted': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await mans.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'getname': {
if (isBan) return m.reply(mess.ban)
if (qtod === "true") {
namenye = await mans.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
mans.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
case 'getpic': {
if (isBan) return m.reply(mess.ban)
if (qtod === "true") {
try {
pporg = await mans.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mans.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await mans.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mans.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
case 'owner': case 'creator': {
mans.sendContact(m.chat, global.owner, m)
}
break
case 'translate': case 'terjemahan': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
break
case 'gimage': case 'gig': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: "© MyBarr",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - BarrGans",
body:"© BarrGans",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/jKAawPBWe5k",
sourceUrl: "https://youtu.be/jKAawPBWe5k"
}}
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'google': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'pinterest':
if (args.length == 0) return m.reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await mans.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: m})                  
                    break
case 'pinterest2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    dwxwdw = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lolkey}&query=${query}`)
                    vdcdns = dwxwdw.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(vdcdns[x])
                        await await mans.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: m})                  
                    }
                    break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
if (isBan) return m.reply(mess.ban)
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `block del ${i.split("@")[0]}`, description: "ketuk untuk mengunblockir"})
}
teskd += `\n\nketuk button untuk mengunblockir`
const sections = [
{
title: "Total Blockir " + banUser.length,
rows: listBloxk
}
]

const listMessage = {
text: teskd,
footer: "© BarrGans",
title: "     「 List Participants Blockir 」",
buttonText: "List Blockir",
mentions: await mans.parseMention(teskd),
sections
}
mans.sendMessage(from, listMessage, {quoted:m})
} catch {
m.reply("Tidak ada user yang diblockir")
}
}
break
case 'igstory': case 'instagramstory': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} salman_alfarizi_15`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
}
break
case 'igdl': case 'instagram': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4
}
mans.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
}
break
case 'ig': {
if (args[0] === "mp4") {
mans.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
mans.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
m.reply(" Error! ")
}
}
break
case 'mp4' : {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
try {
mans.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - BarrGans",
body:"© BarrGans",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/jKAawPBWe5k",
sourceUrl: "https://youtu.be/jKAawPBWe5k"
}}}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'jpeg': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
try {
mans.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - BarrGans",
body:"© BarrGans",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/jKAawPBWe5k",
sourceUrl: "https://youtu.be/jKAawPBWe5k"
}}}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'twitter': case 'twdl': case 'twmp4': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Pilih kualitas video dibawah dengan cara mengklik tombolnya_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: "© MyBarr",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"BarrGans",
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
} catch {
m.reply(" Link Error!")
}
}
break
case 'twddl': {
if (isBan) return m.reply(mess.ban)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© MyBarr",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"BarrGans",
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'facebook': case 'fbdl': case 'fbmp4': case 'fb': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_Untuk kualitas hd anda bisa klik tombol dibawah_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: "© MyBarr",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"BarrGans - facebook downloader",
body:"facebook downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
} catch {
m.reply("Link invalid!")
}
}
break
case 'fbddl': {
if (isBan) return m.reply(mess.ban)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© MyMans APIs - MyMainas",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"MyBarr",
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'ttdl': case 'tiktok': case 'ttmp4': case 'ttmp3': case 'tiktoknowm': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command} <url>\nUses :\n${prefix + command} https://vt.tiktok.com/ZSdDo97dC/`)
if (!isUrl(args[0])) return m.reply(`masukan url yg benar!`)
let res = await hx.ttdownloader(args[0]) // atau bisa pake aiovideodl
// let Ttnye = await bochil.savefrom(args[0])
if (isUrl(args[0])) {
twks = `*| TIKTOK DOWNLOADER |*

Caption : Undefined

${args[0]}

_Pilih watermak atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `ttvd ${args[0]}}`, buttonText: {displayText: '× Watermak'}, type: 1},
{buttonId: `ttad ${args[0]}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
video: {url:res.nowm},
caption: twks,
footer: "© BarrGans",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"BarrGans - Tiktok Downloader",
body: "Downloader!", // Ttnye.meta.title ? Ttnye.meta.title : "Downloader!"
thumbnail: thum, // {url:Ttnye.thumb ? Ttnye.thumb : thum}
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
} else {
m.reply("Link Error!")
}
}
break
case 'ttad': {
if (isBan) return m.reply(mess.ban)
let res = await hx.ttdownloader(args[0]) // atau bisa pake aiovideodl
// let Ttnye = await bochil.savefrom(args[0])
mans.sendMessage(from, {audio:{url:res.wm}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"BarrGans - Tiktok Downloader",
body: "Downloader!", // Ttnye.meta.title ? Ttnye.meta.title : "Downloader!",
thumbnail: thum, // {url:Ttnye.thumb ? Ttnye.thumb : thum},
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}}, {quoted:m})
}
break
case 'ttvd': {
if (isBan) return m.reply(mess.ban)
let res = await hx.ttdownloader(args[0]) // atau bisa pake aiovideodl
// let Ttnye = await bochil.savefrom(args[0])
twks = `*| TIKTOK DOWNLOADER |*

Caption : undefined

${args[0]}

_Pilih watermak atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:res.wm},
caption: twks,
footer: "© Barr",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"BarrGans - Tiktok Downloader",
body: "Downloader!", //Ttnye.meta.title ? Ttnye.meta.title : "Downloader!",
thumbnail: thum, // {url:Ttnye.thumb ? Ttnye.thumb : thum},
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'play': case 'ytplay': {
if (isBan) return m.reply(mess.ban)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `ytvd ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*| YOUTUBE PLAY |*

⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: "© BarrGans",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: "© BarrGans",
thumbnail: log0,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytdl': case 'yt': case 'youtube': case 'ytmp4': case 'ytmp3': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

⭔ Title : ${res.title}
⭔ Size : ${res.size}
⭔ Quality : ${res.quality}

_Pilih video atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: "© BarrGans",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: "© BarrGans",
thumbnail: thum,
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
m.reply("Linknya Error!")
}
}
break
case 'ytvd': {
if (isBan) return m.reply(mess.ban)
mans.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - MyBarr",
body:"© BarrGans",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/jKAawPBWe5k",
sourceUrl: "https://youtu.be/jKAawPBWe5k"
}}}, {quoted:m})
}
break
case 'ytad': {
if (isBan) return m.reply(mess.ban)
mans.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - BarrGans",
body:"© BarrGans",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/jKAawPBWe5k",
sourceUrl: "https://youtu.be/jKAawPBWe5k"
}}}, {quoted:m})
}
break
case 'swm': case 'stickerwm': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example :\nswm MyMans APIs | MyMainas`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
mans.downloadAndSaveMediaMessage(quoted, "gifee")
mans.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'smeme': case 'smm': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply("Masukan Textnya!")
if (/image/.test(mime)) {
var media = await mans.downloadAndSaveMediaMessage(quoted)
imgbbUploader('67bb63bdcb5c234b7aba60c618a2b903', media)
.then(async (data) => {
atast = args.join(" ").split('|')[0] ? args.join(" ").split('|')[0] : '-'
bawaht = args.join(" ").split('|')[1] ? args.join(" ").split('|')[1] : '-'
if (bawaht) {
lohd = atast + "/" + bawaht
} else {
lohd = " /" + args.join(" ")
}
var urls = data.display_url
let meme = `https://api.memegen.link/images/custom/${lohd ? lohd : "-"}.png?background=${urls}`
mans.sendImageAsSticker(m.chat, meme, m, { packname:global.packname, author: global.packname2 })
await fs.unlinkSync(media)
}).catch(err => {
return m.reply(err)
})
} else {
m.reply("Kirim foto dengan caption smeme")
}
}
break
case 'sticker': case 's': case 'stiker': case 'stick': case 'stik': {
if (isBan) return m.reply(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
// Eval Ada Disini
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!isCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(String(err))
if (stdout) return m.reply(stdout)
})
}
// Anti Tag ( MyMans APIs )
const listTag = ["2348054364833@s.whatsapp.net"]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( MyMans APIs )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
// Antitag Via Tag ( MyMans APIs )
if (budy.includes("@2348054364833")) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
mans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
} // Switch
} // isBaileys

} catch (err) {
for (let i of owner) {
mans.sendMessage(i + "@s.whatsapp.net", {text:String(err)}, {quoted:m})
}
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})