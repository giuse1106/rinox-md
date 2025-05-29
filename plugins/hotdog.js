let delay = (ms) => new Promise(res => setTimeout(res, ms));

let handler = async (message, { conn, text }) => {
    // Messaggi personalizzati per il comando Hot Dog
    let messages = [
        `🌭 Inizio a preparare un Hot Dog per *${text || "te"}*...`,
        `🔥 Sto scaldando il wurstel sulla griglia!`,
        `🥖 Taglio il panino a metà...`,
        `🧀 Aggiungo il formaggio fuso (opzionale).`,
        `🌶️ Un tocco di salse segrete: senape, ketchup, maionese...`,
        `🍽️ Il Hot Dog è quasi pronto...`,
        `🎉 Voilà! Hot Dog servito per *${text || "te"}*!`
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

    let finalMessage = `🌭 Hot Dog preparato in *${time}ms*! Buon appetito, *${text || "belo/a"}*!`;
    await conn.reply(message.chat, finalMessage, message);
};

// Configurazione del comando
handler.command = ['hotdog'];
handler.tags = ['fun'];
handler.help = ['.hotdog <nome>'];

export default handler;