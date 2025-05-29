import db from './soldi.js'; // Assumendo che `soldi.js` gestisca un oggetto JSON o simile

let handler = async (m, { conn, args, text }) => {
  // ✅ Controllo che l'utente abbia menzionato qualcuno
  let target = m.mentionedJid && m.mentionedJid[0] 
             ? m.mentionedJid[0] 
             : m.quoted && m.quoted.sender;

  if (!target) {
    return conn.reply(m.chat, '❌ *Devi menzionare qualcuno o rispondere a un messaggio per inviare soldi!*\n📌 *Esempio:* _.bonifico @utente 500_', m);
  }

  let amount = parseInt(args[1] || text.split(' ')[1]);
  if (isNaN(amount) || amount <= 0) {
    return conn.reply(m.chat, '❌ *Inserisci un importo valido!*\n📌 Esempio: _.bonifico @utente 500_', m);
  }

  // ✅ Inizializza saldo se assente
  db[m.sender] = db[m.sender] || 0;
  db[target] = db[target] || 0;

  // ❌ Controlla se ha abbastanza soldi
  if (db[m.sender] < amount) {
    return conn.reply(m.chat, '❌ *Non hai abbastanza soldi per questo bonifico!*', m);
  }

  // 🔁 Esegui trasferimento
  db[m.sender] -= amount;
  db[target] += amount;

  await conn.reply(m.chat, `✅ *Bonifico completato!*\n\nHai inviato 💸 ${amount} coins a @${target.split('@')[0]}`, m, { mentions: [target] });
};

handler.command = ['bonifico'];
handler.help = ['bonifico @utente 500'];
handler.tags = ['economia'];
handler.group = true;

export default handler;