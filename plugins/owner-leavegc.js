let handler = async (m, { conn, args, command }) => {
await m.reply('me so cagato il cazzo di fare il bot di turno qua dentro!💩') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|leave|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
export default handler
