const handler = async (m, { conn, args, usedPrefix, command }) => {  
  if (!m.isGroup) return conn.sendMessage(m.chat, { text: "❌ Questo comando può essere usato solo nei gruppi." }, { quoted: m });  

  const groupMetadata = await conn.groupMetadata(m.chat);  
  const participants = groupMetadata.participants;  

  let target = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : args[0]);  

  if (!target) return conn.sendMessage(m.chat, { text: "𝐓𝐚𝐠 𝐦𝐚𝐧𝐜𝐚𝐧𝐭𝐞 !" }, { quoted: m });  

  const categorieStilizzate = {  
    'vip': '𝐕𝐢𝐩 💎',  
    'owner': '𝐎𝐰𝐧𝐞𝐫',  
    'coowner': '𝐂𝐨-𝐎𝐰𝐧𝐞𝐫',  
    'collaboratore': '𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐨𝐫𝐞 🤝🏼', 
    'moderatore': '𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐨𝐫𝐞 🚨',  
    'bot': '🌟 𝐁𝐨𝐭 🌟',  
    'veterano': '𝐕𝐞𝐭𝐞𝐫𝐚𝐧𝐨 ⭐',  
    'veterana': '𝐕𝐞𝐭𝐞𝐫𝐚𝐧𝐚 ⭐',   
  };  

  const categoria = args[1]?.toLowerCase();  

  if (!categoria || !categorieStilizzate[categoria]) {  
    return conn.sendMessage(m.chat, { text: "𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐚 𝐧𝐨𝐧 𝐯𝐚𝐥𝐢𝐝𝐚." }, { quoted: m });  
  }  

  const user = global.db.data.users[target] || {};  
  global.db.data.users[target] = { ...user, categoria: categorieStilizzate[categoria] };  

  conn.sendMessage(m.chat, {  
    text: `𝐋𝐚 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐚 𝐝𝐢 @${target.split('@')[0]} 𝐞̀ 𝐬𝐭𝐚𝐭𝐚 𝐢𝐦𝐩𝐨𝐬𝐭𝐚𝐭𝐚 𝐚: ${categorieStilizzate[categoria]}.`,  
    mentions: [target]  
  }, { quoted: m });  
};  

handler.command = /^(setcategoria)$/i;  
handler.owner = true;  
export default handler;