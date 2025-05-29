let handler = async (m, { conn, command, text, args, usedPrefix }) => {
  const words = ['javascript', 'nodejs', 'programming', 'hangman', 'developer']; // Parole da indovinare
  const chosenWord = words[Math.floor(Math.random() * words.length)]; // Scegli una parola casuale
  let guessedWord = Array(chosenWord.length).fill('_'); // Stato attuale della parola
  let attempts = 6; // Numero di tentativi
  let wrongGuesses = []; // Lettere sbagliate

  let testo = `🎮 *Gioco dell'Impiccato* 🎮\n\n` +
              `Indovina la parola:\n${guessedWord.join(' ')}\n\n` +
              `Tentativi rimanenti: ${attempts}\n\n` +
              `Lettere sbagliate: ${wrongGuesses.join(', ') || 'Nessuna'}`;

  conn.reply(m.chat, testo, m);

  const filter = (msg) => msg.sender === m.sender && /^[a-z]$/i.test(msg.text); // Controlla input valido (una lettera)
  const collector = conn.createMessageCollector(m.chat, filter, { time: 60000 }); // Timeout 1 minuto

  collector.on('collect', async (msg) => {
    const letter = msg.text.toLowerCase();
    if (wrongGuesses.includes(letter) || guessedWord.includes(letter)) {
      return conn.reply(m.chat, `❌ Hai già provato questa lettera!`, m);
    }

    if (chosenWord.includes(letter)) {
      for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) guessedWord[i] = letter;
      }
      if (guessedWord.join('') === chosenWord) {
        collector.stop('won');
        return conn.reply(m.chat, `🎉 Hai vinto! La parola era *${chosenWord}* 🎉`, m);
      }
    } else {
      wrongGuesses.push(letter);
      attempts--;
      if (attempts === 0) {
        collector.stop('lost');
        return conn.reply(m.chat, `💀 Hai perso! La parola era *${chosenWord}* 💀`, m);
      }
    }

    testo = `🎮 *Gioco dell'Impiccato* 🎮\n\n` +
            `Indovina la parola:\n${guessedWord.join(' ')}\n\n` +
            `Tentativi rimanenti: ${attempts}\n\n` +
            `Lettere sbagliate: ${wrongGuesses.join(', ') || 'Nessuna'}`;
    conn.reply(m.chat, testo, m);
  });

  collector.on('end', (_, reason) => {
    if (reason === 'time') {
      conn.reply(m.chat, `⏳ Tempo scaduto! La parola era *${chosenWord}*`, m);
    }
  });
};

handler.command = /^impiccato$/i; // Comando per avviare il gioco
export default handler;