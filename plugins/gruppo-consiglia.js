const consigli = [
    { type: '🎬 Film', title: 'Inception', genre: 'Sci-Fi, Thriller' },
    { type: '🎬 Film', title: 'The Dark Knight', genre: 'Action, Crime, Drama' },
    { type: '📺 Serie TV', title: 'Stranger Things', genre: 'Drama, Fantasy, Horror' },
    { type: '📺 Serie TV', title: 'Breaking Bad', genre: 'Crime, Drama, Thriller' },
    { type: '🎬 Film', title: 'Interstellar', genre: 'Adventure, Drama, Sci-Fi' },
    { type: '📺 Serie TV', title: 'The Crown', genre: 'Biography, Drama, History' },
    { type: '🎬 Film', title: 'Fight Club', genre: 'Drama' },
    { type: '📺 Serie TV', title: 'Game of Thrones', genre: 'Fantasy, Drama, Action' }
];

// 📌 Funzione per selezionare un consiglio casuale
const getConsiglio = () => consigli[Math.floor(Math.random() * consigli.length)];

// 📌 Handler del comando
let handler = async (m, { conn }) => {
    let utente = `@${m.sender.split("@")[0]}`;
    let consiglio = getConsiglio();

    let risposta = `🎬 *Hey ${utente}, ecco un consiglio per te!* 🎬\n\n` +
                   `📌 *Tipo*: ${consiglio.type}\n` +
                   `🎭 *Genere*: ${consiglio.genre}\n` +
                   `🎥 *Titolo*: *${consiglio.title}*\n\n` +
                   `🍿 *Buona visione!*`;

    await conn.sendMessage(m.chat, { text: risposta, mentions: [m.sender] });
};

// 📌 Configurazione del comando
handler.command = /^(consiglia)$/i;
handler.group = true;

export default handler;