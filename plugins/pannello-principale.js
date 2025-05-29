let handler = async (m, { conn }) => {
  const panel = `
╔═════════[ *TALEDET LEARNER* ]═════════╗
║  🎯 *Win Streak:*       ♦️             ║
║  ⚔️ *Abilities:*         ♦️             ║
║  ⏫ *Evolving %:*        ♦️             ║
║  🛡️ *Arsenal:*           ♦️             ║
║  🍀 *Luck Boost:*        ♦️             ║
║  🧱 *Formazioni:*        ♦️             ║
║  ✨ *Incantesimi:*       ♦️             ║
║  🔁 *Spin Type:*         ♦️             ║
║  👤 *NPC Stats:*         ♦️             ║
║  📜 *Advice:*            ♦️             ║
╚════════════════════════════════════╝
        ▸ *Entra nel Negozio:* 🛒♦️
`.trim()

  await conn.sendMessage(m.chat, { text: panel }, { quoted: m })
}

handler.command = /^panello$/i
handler.tags = ['fun']
handler.help = ['panello']
export default handler