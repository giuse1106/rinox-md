import yts from "yt-search";

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("❌ *Devi scrivere qualcosa da cercare!*\n📌 *Esempio:* _.ytsearch Dragon Ball Opening_");
    }

    try {
        let searchResults = await yts(text);

        if (!searchResults || !searchResults.videos.length) {
            return m.reply("❌ *Nessun risultato trovato! Prova con un altro titolo.*");
        }

        let results = searchResults.videos.slice(0, 5); // Mostra solo i primi 5 risultati
        let messaggio = `🔎 *Risultati per:* _${text}_\n\n`;

        results.forEach((video, index) => {
            messaggio += `🎬 *${index + 1}. ${video.title}*\n🔗 ${video.url}\n⏳ *Durata:* ${video.timestamp}\n📅 *Pubblicato:* ${video.ago}\n\n`;
        });

        await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });

    } catch (err) {
        console.error("❌ Errore durante la ricerca YouTube:", err);
        m.reply("⚠️ *Errore durante la ricerca! Riprova più tardi.*");
    }
};

// Definizione del comando per Gab
handler.command = ["ytsearch", "ytcerca", "ytfind"];
handler.category = "media";
handler.desc = "Cerca video su YouTube senza API Key.";

export default handler;