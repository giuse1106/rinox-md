let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('il bot si è svegliato 🔔')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^sveglia$/i
handler.rowner = true
export default handler
