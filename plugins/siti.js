import { makeWASocket, useSingleFileAuthState, MessageType } from '@adiwajshing/baileys';

// Caricamento dell'autenticazione
const { state, saveState } = useSingleFileAuthState('auth_info.json');

// Creazione della connessione
const sock = makeWASocket({
  auth: state
});

// Funzione per consigliare siti per passare il tempo
const recommendSites = () => {
  const sites = [
    { name: 'Akinator', url: 'https://www.akinator.com/' },
    { name: 'Bored Panda', url: 'https://www.boredpanda.com/' },
    { name: 'Little Alchemy 2', url: 'https://littlealchemy2.com/' },
    { name: 'Window Swap', url: 'https://window-swap.com/' },
    { name: 'FutureMe', url: 'https://www.futureme.org/' },
  ];

  let message = 'Ecco alcuni siti per passare il tempo:\n\n';
  sites.forEach((site, index) => {
    message += `${index + 1}. ${site.name}: ${site.url}\n`;
  });

  return message;
};

// Definizione del comando handler
const handler = async (sock, message) => {
  const from = message.key.remoteJid;
  const text = message.message.conversation;

  // Comando per consigliare siti
  if (text.match(/!siti$/i)) {
    const sitesMessage = recommendSites();
    await sock.sendMessage(from, { text: sitesMessage });
  }
};

// Assegnazione del comando usando il pattern regex
handler.command = /!siti$/i;

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