let handler = async (m, { conn }) => {
    // Lista di bibite disponibili
    const bibite = [
        "🥤 Coca Cola",
        "🥤 Pepsi",
        "🧃 Succo d'arancia",
        "🧃 Succo di mela",
        "🥛 Latte",
        "🧋 Bubble Tea",
        "🍵 Tè verde",
        "🍹 Mojito (analcolico)",
        "🍺 Birra (senza alcol)",
        "🥃 Whiskey (senza alcol, ovviamente 😆)",
        "☕ Caffè espresso",
        "🥤 Fanta",
        "🥤 Sprite",
        "🍷 Vino rosso (analcolico)"
    ];

    // Sceglie una bibita casuale
    let bibitaCasuale = bibite[Math.floor(Math.random() * bibite.length)];

    // Messaggio da inviare
    let messaggio = `🥂 *Ecco la tua bibita:* ${bibitaCasuale}!\n\n🍻 Salute!`;

    // Invia il messaggio
    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["bibita"];
export default handler;