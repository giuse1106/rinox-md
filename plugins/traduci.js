const translate = require("translate-google-api");

module.exports = {
    name: "translate",
    async execute(bot, chatId, args) {
        if (args.length < 2) {
            bot.sendMessage(chatId, "⚠️ *Errore:* Devi specificare una lingua e un testo! \n📌 Esempio: `.translate en Ciao come stai?`");
            return;
        }

        const lang = args.shift(); // Prima parola è il codice lingua
        const text = args.join(" "); // Unisce il resto del messaggio

        try {
            const result = await translate(text, { to: lang });
            bot.sendMessage(chatId, `🗣 *Traduzione (${lang}):*\n${result}`);
        } catch (err) {
            console.error("Errore nella traduzione:", err);
            bot.sendMessage(chatId, "❌ Errore nella traduzione! Controlla il codice lingua.");
        }
    },
};