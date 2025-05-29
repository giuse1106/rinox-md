let handler = async (m, { conn }) => {
  const npcPanel = `
╔══════════════════╗
║    NPC STATS 👨‍🏭    ║
╚══════════════════╝

✦ Archiende   ✦ Luni  
✧ Kuro        ✧ St★r  
✦ Soldati     ✦ Ban  
✧ Sky         ✧ Iris  
✦ Devour      ✦ Incredi  
✧ Yimior      ✧ Death's
`.trim()

  await conn.sendMessage(m.chat, { text: npcPanel }, { quoted: m })
}

handler.command = /^npc$/i
handler.tags = ['fun']
handler.help = ['npc']
export default handler