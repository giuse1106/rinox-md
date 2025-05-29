import fetch from "node-fetch";

let handler = async (m, { conn, args }) => {
    if (args.length < 2) {
        return m.reply("⚠️ *Errore:* Devi specificare una lingua e un testo!\n📌 *Esempio:* _.translate en Ciao come stai?_");
    }

    const lang = args.shift(); // Il primo argomento è la lingua
    const text = encodeURIComponent(args.join(" ")); // Unisce il resto del testo

    try {
        // Usa il sito di Google Translate per la traduzione
        let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${text}`;
        let response = await fetch(url);
        let data = await response.json();

        if (!data || !data[0] || !data[0][0]) {
            return m.reply("❌ *Errore nella traduzione!* Controlla il codice lingua.");
        }

        let traduzione = data[0].map(t => t[0]).join(" ");
        let messaggio = `🌍 *Traduzione (${lang}):*\n\n${traduzione}`;

        await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });

    } catch (err) {
        console.error("❌ Errore nella traduzione:", err);
        m.reply("⚠️ *Errore nella traduzione!* Controlla la lingua o riprova più tardi.");
    }
};

// Configurazione del comando per Gab
handler.command = ["translate", "traduci", "tr"];
handler.category = "utility";
handler.desc = "Traduce un testo in qualsiasi lingua 🌍";

export default handler;