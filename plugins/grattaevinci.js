let handler = async (m, { conn }) => {
    // Possibili esiti
    const risultati = [
        "🎉 *Hai VINTO!* 💰 Hai trovato il biglietto fortunato!",
        "😢 *Hai perso!* Il biglietto era sfortunato...",
        "🎊 *Hai VINTO!* 🤑 Raddoppi il tuo premio!",
        "💸 *Hai perso!* Ma non mollare, tenta di nuovo!",
        "🏆 *JACKPOT!* 💎 Hai vinto il premio massimo!",
        "🤦‍♂️ *Hai perso!* Il biglietto era falso... rimborsati 2 centesimi. 😂"
    ];

    // Sceglie un risultato casuale
    let risultatoCasuale = risultati[Math.floor(Math.random() * risultati.length)];

    // Messaggio da inviare
    let messaggio = `🎟️ *GRATTA E VINCI!* 🎟️\n\n${risultatoCasuale}`;

    // Invia il messaggio
    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["grattaevinci", "gratta"];
export default handler;