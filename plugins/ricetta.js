const axios = require('axios');

async function handleCommand(sock, sender, text) {
    const args = text.trim().toLowerCase().split(' ');
    const command = args.shift();

    if (command === '!ping') {
        await sock.sendMessage(sender, { text: 'Pong!' });
    } else if (command === '!ingredienti') {
        if (args.length === 0) {
            await sock.sendMessage(sender, { text: '❌ Devi specificare una ricetta! Esempio: *!ingredienti carbonara*' });
            return;
        }

        const nomeRicetta = args.join(' ');
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${A–Z a–z 0–9 - _ . ! ~ * ' ( )(nomeRicetta)}`;

        try {
            const response = await axios.get(apiUrl);
            const ricette = response.data.meals;

            if (!ricette) {
                await sock.sendMessage(sender, { text: `❌ Ricetta non trovata! Prova con un altro nome.` });
                return;
            }

            const ricetta = ricette[0];
            let ingredienti = '';

            for (let i = 1; i <= 20; i++) {
                const ingrediente = ricetta[`strIngredient${i}`];
                const misura = ricetta[`strMeasure${i}`];

                if (ingrediente && ingrediente.trim() !== '') {
                    ingredienti += `🍽️ ${misura} ${ingrediente}\n`;
                }
            }

            await sock.sendMessage(sender, { text: `🍽️ *Ingredienti per ${ricetta.strMeal}*:\n\n${ingredienti}` });
        } catch (error) {
            console.error('Errore durante il recupero degli ingredienti:', error);
            await sock.sendMessage(sender, { text: '⚠️ Errore nel recupero della ricetta. Riprova più tardi!' });
        }
    }
}

module.exports = { handleCommand };