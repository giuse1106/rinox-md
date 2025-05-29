import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("❌ *Devi specificare il porn0!* \nEsempio: _.Pornhub_");
    }

    let query = encodeURIComponent(`Porn0 trovati ${text}`);
    let url = `https://www.google.com/search?q=${query}`;

    let messaggio = ` *Risultati* _${text}_:\n🔎 *Cerca qui:* ${url}`;

    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["cercaporno"];
export default handler;