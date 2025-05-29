import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("❌ *Devi specificare una città!* \nEsempio: _.viaggi Milano_");
    }

    let queryVoli = encodeURIComponent(`prezzi voli ${text}`);
    let queryTreni = encodeURIComponent(`prezzi treni ${text}`);

    let urlVoli = `https://www.google.com/search?q=${queryVoli}`;
    let urlTreni = `https://www.google.com/search?q=${queryTreni}`;

    let messaggio = `🌍 *Prezzi di voli e treni per* _${text}_:\n\n✈️ *Voli:* [Clicca qui](${urlVoli})\n🚆 *Treni:* [Clicca qui](${urlTreni})\n\n🔎 *I dati sono aggiornati in tempo reale!*`;

    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["viaggi"];
export default handler;