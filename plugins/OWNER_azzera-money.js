const handler = async (m) => {
const mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
const user = global.db.data.users[mention]
if (!user) return conn.reply(m.chat, 'Inserisci la menzione nel comando!')
conn.reply(m.chat, `Ho azzerato i soldi di @${mention.split`@`[0]}`, null, {mentions: [mention]}), user.money = 0
}
handler.command = /^(azzeramoney)$/i
handler.rowner = true
export default handler