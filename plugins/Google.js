import fetch from "node-fetch";

let handler = async (m, { conn, args }) => {
    if (!args[0]) {
        return conn.sendMessage(m.chat, { text: "❌ *Devi inserire qualcosa da cercare!*\n📌 _Esempio:_ *.google miglior telefono 2024*" }, { quoted: m });
    }

    let query = args.join(" ");
    let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    let message = `🔎 *Risultati per:* _${query}_\n\n` +
                  `📌 *Clicca qui per vedere i risultati:* [Google](${searchUrl})\n\n` +
                  `⚠️ *Nota:* Google potrebbe mostrare risultati personalizzati in base alla tua posizione e cronologia.`;

    await conn.sendMessage(m.chat, { text: message }, { quoted: m });
};

handler.command = /^(google|cerca)$/i;
export default handler;