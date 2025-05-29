let handler = async (m, { conn }) => {
  const shopPanel = `
✨ *TODAY’S OFFER* ✨    🛒

─── HELP ME! ───

╭🌟╮  FEATURED DEALS  ╭🌟╮
• Jada Sword ➤ 1400  
• Night World ➤ 3000  
• Nightmare Eye ➤ 800  
╰🌟╯

⚔️ Weapons:  
➡️ Sword: 200  
➡️ Axe: 300  
➡️ Katana: 500  
➡️ Double Sword: 300  
➡️ Shadow Sword: 8K  

🍀 Potions:  
➡️ Luck ×1: 100  
➡️ Luck ×10: 1K  
➡️ Luck ×100: 10K  

🛡️ Armors:  
➡️ Basic Armor: 800  
➡️ Shadow 👑: 20K  
➡️ Flame Emperor: 8K  
➡️ Sol: 600  
➡️ Void 🪖: 700  
➡️ Space Armor: 700  
➡️ Emperor 🪖: 3K  

📈 Points:  
➡️ 10 pts: 500  
➡️ 20 pts: 1K  
➡️ 30 pts: 7K  
➡️ 40 pts: 10K  
➡️ 50 pts: 20K  
➡️ 60 pts: 30K  

☣️ Specials:  
➡️ 🔥 Devaster: 68K  
➡️ 👻 Ice Spirit: 23K  
➡️ 🧬 God DNA: 2M  
➡️ 🧪 Sub Mind: 11K  
➡️ 🍀 Luck Style: 70K  
➡️ 🌀 Yoshimiya: 100K

___________________  
⏱️ Refresh: 11:30  
------------------------------

🔓 CODES →
`.trim()

  await conn.sendMessage(m.chat, { text: shopPanel }, { quoted: m })
}

handler.command = /^shop$/i
handler.tags = ['fun']
handler.help = ['shop']
export default handler