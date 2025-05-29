import { makeWASocket, useSingleFileAuthState, MessageType } from '@adiwajshing/baileys';

// Caricamento dell'autenticazione
const { state, saveState } = useSingleFileAuthState('auth_info.json');

// Creazione della connessione
const sock = makeWASocket({
  auth: state
});

// Funzione per suggerire giochi di ruolo
const recommendRPGs = () => {
  const rpgs = [
    { name: 'The Witcher 3: Wild Hunt', description: 'Un gioco di ruolo epico con una trama complessa e un mondo aperto' },
    { name: 'Final Fantasy VII Remake', description: 'Un remake modernizzato del classico gioco di ruolo giapponese' },
    { name: 'Elden Ring', description: 'Un action RPG con un vasto mondo esplorabile e combattimenti impegnativi' },
    { name: 'The Elder Scrolls V: Skyrim', description: 'Un gioco di ruolo open-world che permette una totale libertà di esplorazione' },
    { name: 'Cyberpunk 2077', description: 'Un gioco di ruolo futuristico ambientato in una metropoli distopica' },
  ];

  let message = 'Ecco alcuni giochi di ruolo che potresti provare:\n\n';
  rpgs.forEach((rpg, index) => {
    message += `${index + 1}. ${rpg.name}: ${rpg.description}\n`;
  });

  return message;
};

// Handler per i comandi
const handler = async (sock, message) => {
  const from = message.key.remoteJid;
  const text = message.message.conversation;

  // Comando per suggerire giochi di ruolo
  if (text.match(/!gioco$/i)) {
    const rpgMessage = recommendRPGs();
    await sock.sendMessage(from, { text: rpgMessage });
  }
};

// Assegnazione del comando usando il pattern regex
handler.command = /!gioco$/i;

// Gestore di eventi per nuovi messaggi
sock.ev.on('messages.upsert', async ({ messages }) => {
  const message = messages[0];

  // Verifica se il messaggio è una conversazione e chiama il handler
  if (message.message && message.message.conversation) {
    await handler(sock, message);
  }
});

// Avvio del bot
sock.connect().then(() => {
  console.log('Bot connesso!');
});

export default handler;