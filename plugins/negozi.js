import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("❌ *Devi specificare una città!* \nEsempio: _.negozi Milano_");
    }

    let query = encodeURIComponent(`orari negozi ${text}`);
    let url = `https://www.google.com/search?q=${query}`;

    let messaggio = `🏬 *Orari dei negozi a* _${text}_:\n🔎 *Cerca qui:* ${url}`;

    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["negozi"];
export default handler;