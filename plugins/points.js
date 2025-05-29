let handler = async (m, { conn }) => {
  const pointsPanel = `
────────────────────────
       𝗛𝗘𝗟𝗣
────────────────────────

      | 𝗘𝗩𝗢𝗟𝗨𝗧𝗜𝗢𝗡: 𝟭 |

𝗦𝘁𝗮𝘁𝘀 --->  
  𝗦𝘁𝗿𝗲𝗻𝗴𝘁𝗵    — 0  
  𝗥𝗲𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲  — 23  
  𝗔𝗴𝗶𝗹𝗶𝘁𝘆    — 0  
  𝗩𝗲𝗹𝗼𝗰𝗶𝘁à    — 0  
  𝗜𝗤        — 0  
  𝗤𝘂𝗮𝗻𝘁𝗶𝘁à 𝗲𝗻𝗲 — 0  

          \`Evolve min: 100 stats / max: 300 stats\`
`.trim()

  await conn.sendMessage(m.chat, { text: pointsPanel }, { quoted: m })
}

handler.command = /^points$/i
handler.tags = ['fun']
handler.help = ['points']
export default handler