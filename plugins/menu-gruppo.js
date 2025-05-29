import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix }) => {
  let menuImage = await (await fetch("https://qu.ax/cSqEs.jpg")).buffer();

  let menuText = `
────── 🎛 *MENU GRUPPO* 🎛 ──────

🎲 *Economia e Giochi:*
- ${usedPrefix}soldi
- ${usedPrefix}topsoldi
- ${usedPrefix}scommessa [partita] [importo]
- ${usedPrefix}bonifico @utente [importo]
- ${usedPrefix}ruba @utente
- ${usedPrefix}grattavinci

📺 *Media e Musica:*
- ${usedPrefix}play [titolo/link YouTube]
- ${usedPrefix}ytsearch [titolo]

🛠 *Strumenti e Utilità:*
- ${usedPrefix}telefono [modello] (Scheda tecnica)
- ${usedPrefix}translate [lingua] [testo]
- ${usedPrefix}energy (Consiglio Red Bull/Monster)
- ${usedPrefix}qr [testo]
- ${usedPrefix}calcola [1+1]
- ${usedPrefix}meteo [città]
- ${usedPrefix}orariobus [città]
- ${usedPrefix}prezziaerei [città]
- ${usedPrefix}prezzitreni [città]

⚔️ *Divertimento e Memes:*
- ${usedPrefix}clashroyale (Personaggio di Clash Royale)
- ${usedPrefix}saiyan (Che Super Saiyan sei?)
- ${usedPrefix}traditore @utente
- ${usedPrefix}livellopotenza
- ${usedPrefix}say [testo]

🎮 *Giochi:*
- ${usedPrefix}tris
- ${usedPrefix}dama
- ${usedPrefix}crush @utente
- ${usedPrefix}topgays
- ${usedPrefix}topnazionali
- ${usedPrefix}creacoppia


🎙 *Messaggi e Testo:*
- ${usedPrefix}msg @utente [messaggio]
- ${usedPrefix}styletext [testo]
- ${usedPrefix}amore @utente
- ${usedPrefix}odio @utente

──────────────
🤖 *RinoxBot²⁴²* 🤖`.trim();

  await conn.sendMessage(m.chat, { 
    image: menuImage, 
    caption: menuText 
  }, { quoted: m });
};

// **Ora risponde SOLO a `.gruppo`, senza `.join`**
handler.command = ["gruppo"];
handler.category = "menu";
handler.desc = "Mostra tutti i comandi per il gruppo 🚀";

export default handler;