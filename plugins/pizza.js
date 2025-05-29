let delay = (ms) => new Promise(res => setTimeout(res, ms));

let handler = async (message, { conn, text }) => {
    // Messaggi personalizzati per la preparazione della Pizza
    let messages = [
        `🍕 Inizio a preparare una pizza per *${text || "te"}*...`,
        `👨‍🍳 Sto impastando la base della pizza!`,
        `🍅 Aggiungo la passata di pomodoro...`,
        `🧀 Metto la mozzarella filante sopra!`,
        `🌿 Un tocco di basilico e olio d'oliva.`,
        `🔥 Inforno la pizza a 250°C...`,
        `⏳ Aspetta qualche minuto, la pizza sta cuocendo!`,
        `🚀 La pizza è pronta e profumata!`,
        `🎉 Voilà! Pizza servita per *${text || "te"}*!`
    ];

    // Sequenza dei messaggi con ritardo
    for (let msg of messages) {
        await conn.reply(message.chat, msg, message);
        await delay(2000); // Ritardo di 2 secondi tra i messaggi
    }

    // Calcolo del tempo di preparazione
    let start = performance.now();
    let end = performance.now();
    let time = (end - start).toFixed(3); // Limitato a 3 cifre decimali

    let finalMessage = `🍕 Pizza preparata in *${time}ms*! Buon appetito, *${text || "belo/a"}*!`;
    await conn.reply(message.chat, finalMessage, message);
};

// Configurazione del comando
handler.command = ['pizza'];
handler.tags = ['fun'];
handler.help = ['.pizza <nome>'];

export default handler;