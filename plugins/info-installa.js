import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
import fs from 'fs'
const ims = './bb.jpg'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(4)
let prova = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"
}, "message": { 
"orderMessage": { text: ' ꙰ 𝟥𝟥𝟥 ꙰ 𝔹𝕆𝕋 ꙰ ︎︎🔮',
"itemCount": 2024,
"status": 1,
"surface" : 1,
    "message": '𝐒𝐜𝐚𝐫𝐢𝐜𝐚  ꙰ 𝟥𝟥𝟥 ꙰ 𝔹𝕆𝕋 ꙰ ︎︎ 🔮',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=15395490858:+1 (539) 549-0858\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
let info = `
══════ •⊰✦⊱• ══════
𝐕𝐄𝐑𝐒𝐈𝐎𝐍𝐄 𝐃𝐈 𝐓𝐄𝐑𝐌𝐔𝐗 𝐍𝐄𝐂𝐄𝐒𝐒𝐀𝐑𝐈𝐀
https://www.mediafire.com/file/0npdmv51pnttps0/com.termux_0.119.1-119_minAPI21(arm64-v8a,armeabi-v7a,x86,x86_64)(nodpi)_apkmirror.com.apk/file


══════ •⊰✦⊱• ══════
𝐕𝐄𝐑𝐒𝐈𝐎𝐍𝐄 𝐃𝐈 𝐌𝐓-𝐌𝐀𝐍𝐀𝐆𝐄𝐑 𝐍𝐄𝐂𝐂𝐄𝐒𝐒𝐀𝐑𝐈𝐀 𝐏𝐄𝐑 𝐋'𝐄𝐃𝐈𝐓 𝐃𝐄𝐋 𝐁𝐎𝐓
https://mt-manager.en.softonic.com/android?psafe_param=1&utm_source=SEM&utm_medium=paid&utm_campaign=IT_Italy_DSA_mobile&gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc6U6GJcHp-i1gZZS5OFs6OL8vXMvOx8zSo4Gm31AZcV1RgmVQgWO2BoClRIQAvD_BwE
══════ •⊰✦⊱• ══════
𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐩𝐞𝐫 𝐢𝐧𝐬𝐭𝐚𝐥𝐥𝐚𝐫𝐞
✧ termux-setup-storage
✧ pkg install ffmpeg -y
✧ pkg install git -y
✧ pkg upgrade -y && pkg update -y
✧ pkg install yarn
✧ pkg install imagemagick -y
✧ cd /sdcard && rm -rf BixbyBot && git clone https://github.com/numerofoxi/Gab.git
✧ cd /sdcard/Gab
✧ yarn install 
✧ npm install
✧ npm update
✧ npm start


*ATTENZIONE* Tutte le modifiche che vedrete in questo bot, non saranno presenti sulla fork in questione.
`.trim() 
conn.reply(m.chat, info,prova, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: ' ꙰ 𝟥𝟥𝟥 ꙰ 𝔹𝕆𝕋 ꙰ ︎︎﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(scarica|installa|git|install)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}