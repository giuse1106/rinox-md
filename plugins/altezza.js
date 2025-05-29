const altezze = {
    'cristiano ronaldo': '1.87m',
    'messi': '1.70m',
    'lebron james': '2.06m',
    'the rock': '1.96m',
    'tom cruise': '1.70m',
    'zendaya': '1.78m',
    'dua lipa': '1.73m'
};

async function handleCommand(sock, sender, text) {
    const args = text.trim().toLowerCase().split(' ');
    const command = args.shift();

    if (command === '!ping') {
        await sock.sendMessage(sender, { text: 'Pong!' });
    } else if (command === '!altezza') {
        if (args.length === 0) {
            await sock.sendMessage(sender, { text: '❌ Devi specificare un nome! Esempio: *!altezza Cristiano Ronaldo*' });
            return;
        }

        const nome = args.join(' ');
        if (altezze[nome]) {
            await sock.sendMessage(sender, { text: `📏 *${nome.toUpperCase()}* è alto *${altezze[nome]}*` });
        } else {
            await sock.sendMessage(sender, { text: `❌ Altezza non trovata! Prova con: *${Object.keys(altezze).join(', ')}*` });
        }
    }
}

module.exports = { handleCommand };