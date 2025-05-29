let handler = async (m, { conn, text, isOwner }) => {
    if (!isOwner) {
        return m.reply("❌ *Solo l'owner del bot può usare questo comando!*");
    }

    if (!text || !text.includes("https://chat.whatsapp.com/")) {
        return m.reply("❌ *Devi fornire un link di invito valido!* \n📌 *Esempio:* _.join https://chat.whatsapp.com/xxxxxxxxxx_");
    }

    try {
        let link = text.split("https://chat.whatsapp.com/")[1]; // Estrai il codice del gruppo
        let response = await conn.groupAcceptInvite(link);

        if (response) {
            m.reply("✅ *Sono entrato nel gruppo con successo!* 🎉");
        } else {
            m.reply("❌ *Errore! Non posso entrare nel gruppo. Forse l'invito è scaduto o il bot è stato bloccato.*");
        }
    } catch (err) {
        console.error("❌ Errore nel join del gruppo:", err);
        m.reply("⚠️ *Errore! Non posso entrare nel gruppo. Assicurati che il link sia valido e che io abbia i permessi.*");
    }
};

// Configurazione del comando per Gab (Solo Owner)
handler.command = ["join"];
handler.category = "owner";
handler.desc = "Fa entrare il bot in un gruppo tramite link (Solo Owner) 🔗";
handler.owner = true; // Permette l'uso solo all'owner

export default handler;