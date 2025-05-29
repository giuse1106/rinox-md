import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';


let handler = async (m, { conn, command, args, usedPrefix }) => {

  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, `*𝗖𝗢𝗦𝗔 𝗩𝗨𝗢𝗜 𝗖𝗘𝗥𝗖𝗔𝗥𝗘?*`, m);
const url = 'https://duckduckgo.com/?t=h_&q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `*𝗥𝗜𝗦𝗨𝗟𝗧𝗔𝗧𝗢 𝗗𝗜 _${text}_*\n\n${url}\n\n`
for (let g of res) {
teks += `_*${g.title}*_\n_${g.link}_\n_${g.snippet}_\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, m)
})
} 
handler.help = ['google', 'googlef'].map((v) => v + ' <pencarian>');
handler.tags = ['internet'];
handler.command = /^google|cerca|search?$/i;
export default handler;