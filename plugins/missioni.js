let handler = async (m, { conn }) => {
  const missionPanel = `
─────────────────────────────
   𝙴𝚟𝚘𝚕𝚟𝚒𝚗𝚐 → 𝙼𝚒𝚜𝚜𝚒𝚘𝚗 𝙼𝚘𝚍 🏴‍☠️
─────────────────────────────

                🆘 𝐇𝐄𝐋𝐏  
─────────────────────────────

      𝙂𝙧𝙖𝙙𝙚 𝙼𝙞𝙨𝙨𝙞𝙤𝙣𝙨 ↙️

       G
      Ｆ  
      Ｃ  
      Ｄ  
      Ｂ  
      Ａ  

─────────────────────────────

             𝙎𝙚𝙡𝙚𝙘𝙩 𝘿𝙞𝙛𝙛𝙞𝙘𝙪𝙡𝙩𝙮 📊

      Ｓ  
      Ｓ𝑠  
      Ｓ𝑠𝑠＋  
      Ｚ  
      Ｚ＋  

─────────────────────────────

            *解 → 𝙂𝙤𝙤𝙙𝙡𝙮 🔘*  
─────────────────────────────
`.trim()

  await conn.sendMessage(m.chat, { text: missionPanel }, { quoted: m })
}

handler.command = /^missioni$/i
handler.tags = ['fun']
handler.help = ['missioni']
export default handler