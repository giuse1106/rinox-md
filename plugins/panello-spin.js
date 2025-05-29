let handler = async (m, { conn }) => {
  const spinPanel = `
┌──────────────┐
│   🎮 HELLP 🎰   │
├──────────────┤
│ ▶ Type: SLIDE │
│ ▶ Spins:   0  │
│ ▶ $2,500 → 1 spin │
└──────────────┘
`.trim()

  await conn.sendMessage(m.chat, { text: spinPanel }, { quoted: m })
}

handler.command = /^spin$/i
handler.tags = ['fun']
handler.help = ['spin']
export default handler