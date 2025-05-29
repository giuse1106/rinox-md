let handler = async (m, { conn }) => {
    // Lista delle trasformazioni Saiyan
    const saiyanForms = [
        "🟡 Super Saiyan 1 – L’inizio della leggenda!",
        "🟠 Super Saiyan 2 – Potenza e fulmini ovunque!",
        "🔴 Super Saiyan 3 – Capelli lunghissimi e potenza devastante!",
        "🔵 Super Saiyan God – L’energia degli dèi scorre in te!",
        "🌌 Super Saiyan Blue – Unisci la potenza divina con quella Saiyan!",
        "🟣 Super Saiyan Rosé – Sei un Saiyan divino e malvagio!",
        "🟢 Super Saiyan Leggendario – Il potere incontenibile del vero mostro!",
        "⚫ Ultra Ego – La forma distruttiva di un vero guerriero!",
        "⚪ Ultra Istinto – Velocità e riflessi perfetti, nessuno può toccarti!",
        "💀 Saiyan Oozaru – Sei diventato una gigantesca scimmia dorata!"
    ];

    // Sceglie una trasformazione casuale
    let trasformazione = saiyanForms[Math.floor(Math.random() * saiyanForms.length)];

    // Messaggio da inviare
    let messaggio = `⚡ *Trasformazione Saiyan!* ⚡\n\n🧑‍🦱 @${m.sender.split('@')[0]}, la tua forma è:\n${trasformazione}\n\n🔥 *Sei pronto per la battaglia?*`;

    // Invia il messaggio con la menzione
    await conn.sendMessage(m.chat, { text: messaggio, mentions: [m.sender] }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["supersaiyan", "saiyan"];
export default handler;