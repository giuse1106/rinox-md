let handler = async (m, { conn }) => {
  const abilityPanel = `
──────────────────────────────
         🚀 Help Console
──────────────────────────────

        | BASE ABILITY |

Yimior :: good energy 👼  
Deaths :: death energy 💀

          ↓↓↓

      *| TREE SKILLS |*

> Survive  
> Up  
> 1 eternal step  
> Evolution tree  

──────────────────────────────

| Ricerche Di rami ---> search 🔎 |
`.trim()

  await conn.sendMessage(m.chat, { text: abilityPanel }, { quoted: m })
}

handler.command = /^ability$/i
handler.tags = ['fun']
handler.help = ['ability']
export default handler