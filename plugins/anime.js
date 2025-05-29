let handler = async (m, { conn }) => {
    // Lista di anime consigliati
    const animeList = [
        { titolo: "Attack on Titan", genere: "Azione, Dramma, Fantasy", trama: "L'umanità combatte contro gigantesche creature chiamate Titani." },
        { titolo: "Death Note", genere: "Thriller, Psicologico", trama: "Uno studente trova un quaderno che gli permette di uccidere chiunque scriva al suo interno." },
        { titolo: "One Piece", genere: "Avventura, Azione, Fantasy", trama: "Monkey D. Luffy e la sua ciurma cercano il leggendario tesoro One Piece." },
        { titolo: "Naruto", genere: "Azione, Avventura, Ninja", trama: "La storia di Naruto Uzumaki, un ninja determinato a diventare Hokage." },
        { titolo: "Steins;Gate", genere: "Sci-Fi, Thriller", trama: "Un gruppo di amici scopre il viaggio nel tempo, scatenando conseguenze inaspettate." },
        { titolo: "Fullmetal Alchemist: Brotherhood", genere: "Azione, Fantasy", trama: "Due fratelli usano l'alchimia per cercare la Pietra Filosofale e recuperare ciò che hanno perso." },
        { titolo: "Demon Slayer", genere: "Azione, Fantasy", trama: "Tanjiro Kamado diventa un cacciatore di demoni per vendicare la sua famiglia." },
        { titolo: "Your Name", genere: "Romantico, Drammatico", trama: "Due ragazzi scoprono di poter scambiarsi i corpi in modo misterioso." },
        { titolo: "Tokyo Ghoul", genere: "Horror, Azione, Dramma", trama: "Un ragazzo viene trasformato in un ghoul e deve imparare a vivere con la sua nuova natura." },
        { titolo: "Re:Zero", genere: "Fantasy, Avventura", trama: "Un ragazzo viene trasportato in un mondo fantasy e scopre di poter tornare indietro nel tempo alla sua morte." }
    ];

    // Sceglie un anime casuale
    let animeCasuale = animeList[Math.floor(Math.random() * animeList.length)];

    // Messaggio da inviare
    let messaggio = `🎌 *Consiglio Anime!* 🎌\n\n📺 *Titolo:* ${animeCasuale.titolo}\n🎭 *Genere:* ${animeCasuale.genere}\n📖 *Trama:* ${animeCasuale.trama}\n\n🍿 Buona visione!`;

    // Invia il messaggio
    await conn.sendMessage(m.chat, { text: messaggio }, { quoted: m });
};

// Definizione del comando per Gab
handler.command = ["anime"];
export default handler;