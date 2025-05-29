let handler = async function (m, { conn, text, usedPrefix }) {
	
	let chat = global.db.data.chats[m.chat]
    if (chat.rules === '') throw `ⓘ 𝐆𝐥𝐢 𝐚𝐝𝐦𝐢𝐧 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐩𝐨 𝐚𝐭𝐭𝐮𝐚𝐥𝐦𝐞𝐧𝐭𝐞 𝐧𝐨𝐧 𝐡𝐚𝐧𝐧𝐨 𝐬𝐞𝐭𝐭𝐚𝐭𝐨 𝐧𝐞𝐬𝐬𝐮𝐧𝐚 𝐫𝐞𝐠𝐨𝐥𝐚`
     m.reply(`📜 *𝐑𝐞𝐠𝐨𝐥𝐞 𝐝𝐞𝐥 𝐆𝐫𝐮𝐩𝐩𝐨*\n\n${chat.rules}`)
     
}
handler.help = ['rules']
handler.tags = ['group']
handler.command = ['rules', 'regole'] 
handler.admin = true
export default handler