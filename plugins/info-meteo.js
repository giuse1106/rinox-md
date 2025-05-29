import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("❌ *Devi specificare una città!* \nEsempio: _.meteo Milano_");
    }

    let query = encodeURIComponent(`meteo ${text}`);
    let url = `https://www.google.com/search?q=${query}`;

    let messaggio = `🌍 *Meteo per* _${text}_:\n🔎 *Cerca qui:* ${url}`;

    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["meteo"];
export default handler;