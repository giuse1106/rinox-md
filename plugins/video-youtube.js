const { default: makeWASocket, useSingleFileAuthState, MessageType } = require('@adiwajshing/baileys');
const ytdl = require('ytdl-core');
const fs = require('fs');

// Caricamento dell'autenticazione
const { state, saveState } = useSingleFileAuthState('auth_info.json');

// Creazione della connessione
const sock = makeWASocket({
  auth: state
});

// Funzione per inviare il video
const sendVideo = async (sock, from, videoUrl) => {
  try {
    const videoStream = ytdl(videoUrl, { filter: 'audioandvideo' });

    const videoPath = './video.mp4';
    const file = fs.createWriteStream(videoPath);

    videoStream.pipe(file);

    file.on('finish', async () => {
      // Una volta che il video è stato scaricato, invialo al contatto
      await sock.sendMessage(from, {
        video: fs.createReadStream(videoPath),
        caption: 'Ecco il video richiesto!',
      });

      // Rimuovi il file dopo l'invio
      fs.unlinkSync(videoPath);
    });

    videoStream.on('error', (error) => {
      console.error('Errore nel download del video:', error);
    });
  } catch (error) {
    console.error('Errore durante l\'invio del video:', error);
  }
};

// Comando handler
const commandHandler = async (sock, message) => {
  const from = message.key.remoteJid;
  const text = message.message.conversation;

  // Comando per inviare il video
  if (text === '!video') {
    const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // URL del video
    await sendVideo(sock, from, videoUrl);
  }
};

// Gestore di eventi per nuovi messaggi
sock.ev.on('messages.upsert', async ({ messages }) => {
  const message = messages[0];

  // Verifica se il messaggio è una conversazione e chiama il handler
  if (message.message && message.message.conversation) {
    await commandHandler(sock, message);
  }
});

// Avvio del bot
sock.connect().then(() => {
  console.log('Bot connesso!');
});