const challenges = {};

let handler = async (m, { conn, command, text, args, usedPrefix }) => {
  const users = global.db.data.users;
  const senderId = m.sender;

  switch (command) {
    case 'fight':
      await handleFight(m, users[senderId], users, text, usedPrefix, conn);
      break;
  }
};

const handleFight = async (m, user, users, text, usedPrefix, conn) => {
  const opponentId = m.mentionedJid && m.mentionedJid[0]
    ? m.mentionedJid[0]
    : (m.quoted ? m.quoted.sender : null);

  if (!opponentId)
    throw `Tagga la persona con cui vuoi combattere!\nEsempio: ${usedPrefix}fight @tag`;

  if (opponentId === m.sender)
    throw "Non puoi sfidare te stesso!";

  const opponent = users[opponentId];
  if (!opponent)
    throw "L'avversario non è presente nel sistema.";

  if (challenges[m.sender] || challenges[opponentId])
    throw "C'è già una sfida in corso per uno dei due.";

  challenges[opponentId] = { from: m.sender, timeout: null };
  challenges[m.sender] = { to: opponentId, timeout: null };

  const promptText = `⚔️ *Sfida al Combattimento!* ⚔️\n\n@${opponentId.split('@')[0]}: vuoi combattere con @${m.sender.split('@')[0]}?\nRispondi con "si" per accettare o "no" per rifiutare.\nHai 60 secondi per rispondere.`;
  await conn.sendMessage(m.chat, { text: promptText, mentions: [opponentId, m.sender] }, { quoted: m });

  const timeoutCallback = () => {
    if (challenges[opponentId]) {
      const cancelText = `La sfida tra @${m.sender.split('@')[0]} e @${opponentId.split('@')[0]} è stata annullata per mancata risposta.`;
      conn.sendMessage(m.chat, { text: cancelText, mentions: [m.sender, opponentId] });
      delete challenges[opponentId];
      delete challenges[m.sender];
    }
  };
  challenges[opponentId].timeout = setTimeout(timeoutCallback, 60000);
  challenges[m.sender].timeout = challenges[opponentId].timeout;
};

handler.before = async (m) => {
  if (!m.text) return;
  const challenge = challenges[m.sender];
  if (!challenge) return;

  clearTimeout(challenge.timeout);

  if (/^no$/i.test(m.text.trim())) {
    const fromUser = challenge.from || m.sender;
    delete challenges[fromUser];
    delete challenges[m.sender];
    return m.reply(`❌ Sfida rifiutata.`);
  }

  if (/^si$/i.test(m.text.trim())) {
    const fromUser = challenge.from;
    const toUser = m.sender;
    let healthFrom = 100;
    let healthTo = 100;
    let battleLog = '';

    // Invia un unico messaggio iniziale che poi aggiorneremo
    let sentMsg = await conn.sendMessage(m.chat, { text: `⚔️ *Inizio Combattimento!* ⚔️\n\n` , mentions: [fromUser, toUser] });
    // Presupponiamo che la risposta contenga l'id del messaggio
    const battleMessageId = sentMsg.key ? sentMsg.key.id : null;

    // Funzione per aggiornare il messaggio di battaglia
    const updateBattleMessage = async (msg) => {
      battleLog += msg + '\n';
      // Utilizza la funzione di modifica del messaggio (deve essere supportata dalla tua API)
      await conn.editMessage(m.chat, { text: battleLog, mentions: [fromUser, toUser] }, { messageId: battleMessageId });
    };

    // Simulazione del combattimento aggiornando il messaggio ogni 2 secondi
    while (healthFrom > 0 && healthTo > 0) {
      let damage = Math.floor(Math.random() * 20) + 5;
      healthTo -= damage;
      if (healthTo < 0) healthTo = 0;
      await new Promise(resolve => setTimeout(resolve, 2000));
      await updateBattleMessage(`@${fromUser.split('@')[0]} attacca @${toUser.split('@')[0]} infliggendo ${damage} danni. (Vita rimanente: ${healthTo})`);
      if (healthTo <= 0) break;

      let counterDamage = Math.floor(Math.random() * 20) + 5;
      healthFrom -= counterDamage;
      if (healthFrom < 0) healthFrom = 0;
      await new Promise(resolve => setTimeout(resolve, 2000));
      await updateBattleMessage(`@${toUser.split('@')[0]} contrattacca infliggendo ${counterDamage} danni. (Vita rimanente: ${healthFrom})`);
    }

    const winner = healthFrom > 0 ? fromUser : toUser;
    await new Promise(resolve => setTimeout(resolve, 2000));
    await updateBattleMessage(`🏆 *Il vincitore è: @${winner.split('@')[0]}!*`);

    delete challenges[fromUser];
    delete challenges[toUser];
  }
};

handler.command = ['fight'];
handler.group = true;

export default handler;