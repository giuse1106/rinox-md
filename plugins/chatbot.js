let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)


if (/^e$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `𝐂𝐡𝐞 𝐁𝐞𝐥𝐥𝐨 𝐒𝐚𝐩𝐞𝐫𝐞 𝐋𝐚 𝐋𝐞𝐭𝐭𝐞𝐫𝐚 𝐄`, m)

}

if (/^@+46737807114|@46737807114$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*_[ ⚠ ️] 𝐏𝐄𝐑 𝐅𝐀𝐕𝐎𝐑𝐄 𝐍𝐎𝐍 𝐓𝐀𝐆𝐆𝐀𝐑𝐄 𝐈𝐋 𝐌𝐈𝐎 𝐎𝐖𝐍𝐄𝐑 𝐒𝐄𝐍𝐙𝐀 𝐌𝐎𝐓𝐈𝐕𝐎 𝐕𝐀𝐋𝐈𝐃𝐎_*`, m)

}


if (/^botrules|regolebot|normebot$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `*┌───⊷ *${lb}*
┆ ───────•••───────
┆ ⚠️ 𝗥𝗘𝗚𝗢𝗟𝗘 𝗗𝗘𝗟 𝗕𝗢𝗧 ⚠️
┆───────•••───────
┆➽❌ 𝐏𝐫𝐨𝐢𝐛𝐢𝐭𝐨 𝐂𝐡𝐢𝐚𝐦𝐚𝐫𝐞 𝐈𝐥 𝐁𝐨𝐭
┆➽❌ 𝐏𝐫𝐨𝐢𝐛𝐢𝐭𝐨 𝐒𝐩𝐚𝐦𝐦𝐚𝐫𝐞 𝐀𝐥 𝐁𝐨𝐭
┆ 
┆ 「 333 bots 」
╰──────────────────`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

if (/^cose un bot?|cos'è un bot?|cosa è un bot?|cos'è un bot|cose un bot|cosa è un bot$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `┌───⊷ *${lb}*
┆ ───────•••───────
┆ *☆::𝐂𝐎𝐒𝐄 𝐔𝐍 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓?::☆*
┆───────•••───────
┆𝐔𝐧 𝐁𝐨𝐭 è 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐳𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥𝐞 𝐜𝐡𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐳𝐚 𝐚𝐭𝐭𝐢𝐯𝐢𝐭à
┆𝐜𝐡𝐞 𝐠𝐥𝐢 𝐯𝐞𝐧𝐠𝐨𝐧𝐨 𝐢𝐧𝐝𝐢𝐜𝐚𝐭𝐞 𝐜𝐨𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐢, 𝐧𝐞𝐥 𝐜𝐚𝐬𝐨 𝐝𝐢 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩
┆𝐩𝐮ò 𝐬𝐜𝐚𝐫𝐢𝐜𝐚𝐫𝐞 𝐦𝐮𝐬𝐢𝐜𝐚, 𝐯𝐢𝐝𝐞𝐨,
┆𝐜𝐫𝐞𝐚𝐫𝐞 𝐥𝐨𝐠𝐨 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐳𝐚𝐭𝐢 𝐞 𝐦𝐨𝐥𝐭𝐨 𝐚𝐥𝐭𝐫𝐨,
┆𝐢𝐧 𝐦𝐨𝐝𝐨 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜𝐨, 𝐨 𝐬𝐞𝐧𝐳𝐚 𝐜𝐡𝐞 𝐮𝐧 𝐮𝐦𝐚𝐧𝐨
┆𝐧𝐨𝐧 𝐢𝐧𝐭𝐞𝐫𝐯𝐞𝐧𝐠𝐚 𝐧𝐞𝐥 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐨
┆𝐏𝐞𝐫 𝐯𝐞𝐝𝐞𝐫𝐞 𝐢𝐥 𝐦𝐞𝐧𝐮 𝐝𝐞𝐥 𝐛𝐨𝐭 𝐝𝐢𝐠𝐢𝐭𝐚 .menu
┆ 
┆ 「 333 bots」
╰──────────────────`, m) 

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}