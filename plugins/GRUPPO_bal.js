import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'

const handler = async (m, { conn, usedPrefix, command }) => {
  const mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.quoted;
  const who = mention ? mention : m.sender;
  const user = global.db.data.users[who] || {};

  if (!global.db.data.users[who]) {
    global.db.data.users[who] = { money: 0, warn: 0, warnlink: 0, muto: false, banned: false, messaggi: 0, blasphemy: 0, command: 0, age: "👶🏼🍼" }
  }
    
    let gender = global.db.data.users[who].gender
    
    gender = gender == 'Maschio' ? 'M' : gender == 'Femmina' ? 'F' : 'Transformer'

    const groups = Object.values(await conn.groupFetchAllParticipating())
  const gruppincuiseiadmin = groups
    .filter(group => group.participants.some(participant => participant.id === who && participant.admin))
    .map(group => group.subject)
    
  let pic
  try {
    pic = await conn.profilePictureUrl(who, 'image');
  } catch (error) {
    pic = null
  }

  conn.sendMessage(m.chat, {
    text: `${gruppincuiseiadmin.length ? `══════ •⊰✦⊱• ══════\n👑 𝐆𝐞𝐬𝐭𝐢𝐬𝐜𝐞 𝐢 𝐠𝐫𝐮𝐩𝐩𝐢:\n${gruppincuiseiadmin.join('\n')}\n` : ''}` +
      `══════ •⊰✦⊱• ══════\n` +
  ` 💬 𝐌𝐞𝐬𝐬𝐚𝐠𝐠𝐢: ${user.messaggi || 0}\n` +
  `${user.blasphemy ? ` 🤬 𝐁𝐞𝐬𝐭𝐞𝐦𝐦𝐢𝐞: ${user.blasphemy || 0}\n` : ''}` +
  ` ⚠️ 𝐖𝐚𝐫𝐧: ${user.warn || 0} / 3\n` +
  `${user.warnlink ? ` ⚠️ 𝐖𝐚𝐫𝐧 𝐥𝐢𝐧𝐤: ${user.warnlink || 0} / 3\n` : ''}` +
  `${user.muto ? ` 🔇 𝐌𝐮𝐭𝐚𝐭𝐨: Si\n` : ''}` +
  `${user.banned ? ` 🚫 𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐛𝐥𝐨𝐜𝐜𝐚𝐭𝐢: Si\n` : ''}` +
  `${user.command ? ` 🎨 𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐞𝐬𝐞𝐠𝐮𝐢𝐭𝐢: ${user.command || 0}\n` : ''}` +
  `${user.instagram ? ` 🔗 instagram.com/${user.instagram}` : ' 🔗 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: 𝐍𝐨𝐧 𝐢𝐦𝐩𝐨𝐬𝐭𝐚𝐭𝐨'}\n` +
 `══════ •⊰✦⊱• ══════`,
    contextInfo: {
      mentionedJid: [who],
      forwardingScore: 99,
    isForwarded: true,                    forwardedNewsletterMessageInfo: {
   newsletterJid: '120363341274693350@newsletter',
serverMessageId: '', 
newsletterName: nomebot },
      externalAdReply: {
        title: `${user.name && user.name.trim(who) !== '' ? user.name : 'Sconosciuto'} | ${user.age} | ${gender}`,
          body: `${user.instagram ? `` : `${usedPrefix}𝐬𝐞𝐭𝐢𝐠 + 𝐧𝐨𝐦𝐞 𝐢𝐠 𝐩𝐞𝐫 𝐢𝐦𝐩𝐨𝐬𝐭𝐚𝐫𝐞 𝐢𝐧𝐬𝐭𝐚`}`,
        sourceUrl: "https://wa.me/" + (mention ? mention.split("@")[0] : m.sender.split("@")[0]),
        thumbnail: pic ? await (await fetch(pic)).buffer() : await (await fetch('https://telegra.ph/file/560f1667a55ecf09650cd.png')).buffer(),
      }
    }
  }, { quoted: null })
}

handler.command = /^(bal|msg|attività|attivitá|attivita|profilo|info)$/i
export default handler;