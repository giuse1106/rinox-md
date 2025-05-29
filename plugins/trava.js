let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command }) => {
    // Variabile globale per gestire il ciclo infinito
    global.isRunningDeathCommand = global.isRunningDeathCommand || false;

    const delay = (time) => new Promise((res) => setTimeout(res, time));

    switch (command) {
        case "death":
            if (global.isRunningDeathCommand) {
                await conn.sendMessage(m.chat, { text: "Il comando è già in esecuzione!" });
                return;
            }

            global.isRunningDeathCommand = true;
            await conn.sendMessage(m.chat, { text: "Inizio ciclo infinito 'mannaggia'..." });

            // Loop infinito
            while (global.isRunningDeathCommand) {
                // Invia il messaggio "mannaggia"
                let sentMessage = await conn.sendMessage(m.chat, { text: "mannaggia" });

                // Aspetta un breve periodo prima di cancellare
                await delay(1000);

                // Cancella il messaggio inviato
                await conn.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        id: sentMessage.key.id,
                        participant: sentMessage.key.participant || m.sender,
                    },
                });

                // Aspetta un altro breve periodo prima di ricominciare
                await delay(1000);
            }
            break;

        case "basta":
            if (!global.isRunningDeathCommand) {
                await conn.sendMessage(m.chat, { text: "Il comando non è attualmente in esecuzione!" });
                return;
            }

            global.isRunningDeathCommand = false;
            await conn.sendMessage(m.chat, { text: "Ciclo infinito 'mannaggia' terminato." });
            break;

        default:
            await conn.sendMessage(m.chat, { text: "Comando non riconosciuto!" });
            break;
    }
};

handler.command = /^(death)$/i;
handler.group = true;
handler.fail = null;

module.exports = handler;
