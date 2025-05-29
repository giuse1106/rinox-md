let handler = async (m, { conn }) => {
  const advicePanel = `
═════════════════
      HELP
═════════════════

| SEARCH ADVICE.. |

*Good luck for your searching, for bugs or glitches please report it below 😄*

⬇️  
⬇️  
⬇️  
⬇️  

➤ ⚠️ _Bug report_ ⚠️  
  ⚠️ _Glitch report_ ⚠️
`.trim()

  await conn.sendMessage(m.chat, { text: advicePanel }, { quoted: m })
}

handler.command = /^advice$/i
handler.tags = ['fun']
handler.help = ['advice']
export default handler