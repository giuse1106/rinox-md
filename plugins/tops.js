import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, participants }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if (command == 'topgays') {
let vn = './media/gay2.mp3'
let top = `*🌈𝐓𝐎𝐏 10 𝐋𝐆𝐁𝐓🌈*
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
conn.sendMessage(m.chat, { quoted: m })    
//conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
    
if (command == 'topnazi') {
let vn = './media/otaku.mp3'
let top = `*𝐓𝐎𝐏 10 𝐍𝐀𝐙𝐈* 
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
conn.sendMessage(m.chat, { quoted: m })
}


if (command == 'topsexy') {
let vn = './media/otaku.mp3'
let top = `*𝐓𝐨𝐩 10 𝐒𝐄𝐗𝐘*
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
conn.sendMessage(m.chat, { quoted: m })    
    
//conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}

if (command == 'toptroie') {
let vn = './media/otaku.mp3'
let top = `*𝐓𝐨𝐩 10 𝐓𝐑𝐎𝐈𝐄 *
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
conn.sendMessage(m.chat, { quoted: m })    
    
//conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}}

handler.help = handler.command = ['topgays','topnazi', 'topsexy','toptroie']
handler.tags = ['games']
handler.group = true
handler.admin = true
export default handler  

