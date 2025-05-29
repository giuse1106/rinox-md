async function handleCommand(sock, sender, text) {
    const command = text.trim().toLowerCase();

    if (command === '!ping') {
        await sock.sendMessage(sender, { text: 'Pong!' });
    } else if (command === '!girarouota') {
        const risultati = ['💰 Jackpot!', '🔥 Riprova!', '🎉 Hai vinto un premio!', '💎 Bonus Extra!', '❌ Nessuna vincita'];
        const risultatoCasuale = risultati[Math.floor(Math.random() * risultati.length)];

        await sock.sendMessage(sender, { text: `🎡 La ruota gira... \n\n**Risultato:** ${risultatoCasuale}` });
    }
}

module.exports = { handleCommand };