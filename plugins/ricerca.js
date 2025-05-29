let handler = async (m, { conn }) => {
  const searchInterface = `
💠 𝙎𝙀𝘼𝙍𝘾𝙃 𝙄𝙉𝙏𝙀𝙍𝙁𝘼𝘾𝙀 💠  
═╬═ SYSTEM: Online | Protocol 009 ═╬═

🎇 Welcome to Research Zone  
🌐 Data Layer: Active 🟢

🔧 Error Handling:  
→ ⚠️ Bug Upload  
→ ⚠️ Glitch Log
`.trim()

  await conn.sendMessage(m.chat, { text: searchInterface }, { quoted: m })
}

handler.command = /^trova-informazioni$/i
handler.tags = ['fun']
handler.help = ['trova-informazioni']
export default handler