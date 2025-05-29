//Plugin fatto da Gabs & 333 Staff
const handler = async (m, { conn, args }) => {
  if (args.length < 2)
    return conn.reply(
      m.chat,
      "Uso: .promemoria <tempo> [@user] <messaggio>\nEsempi:\n.promemoria 18:30 @user Messaggio\n.promemoria @user 18:30 Messaggio\n.promemoria 10m Messaggio",
      m
    );

  // Funzione per verificare se una stringa è un tempo valido (HH:mm oppure tempo relativo con s, m, h)
  const isValidTimeInput = (str) => {
    if (str.includes(":")) {
      const parts = str.split(":");
      if (parts.length !== 2) return false;
      const [h, min] = parts;
      return !isNaN(Number(h)) && !isNaN(Number(min));
    } else if (["s", "m", "h"].some((u) => str.endsWith(u))) {
      const numPart = str.slice(0, -1);
      return !isNaN(Number(numPart));
    }
    return false;
  };

  let target, timeInput, reminderMessage;

  // Se il primo argomento è un tempo valido, lo consideriamo come timeInput
  if (isValidTimeInput(args[0])) {
    timeInput = args[0].trim();
    // Se viene menzionato un utente, lo prendiamo (indipendentemente dalla posizione negli args)
    if (m.mentionedJid && m.mentionedJid.length > 0) {
      target = m.mentionedJid[0];
      // Se il secondo argomento inizia con "@" (la stringa della menzione) saltiamo quel parametro
      if (args[1] && args[1].startsWith("@")) {
        reminderMessage = args.slice(2).join(" ").trim();
      } else {
        reminderMessage = args.slice(1).join(" ").trim();
      }
    } else {
      target = m.sender;
      reminderMessage = args.slice(1).join(" ").trim();
    }
  } else {
    // Se il primo argomento non è un tempo, controlliamo se c'è una menzione
    if (m.mentionedJid && m.mentionedJid.length > 0) {
      target = m.mentionedJid[0];
      // In questo caso ci aspettiamo che il tempo sia il secondo argomento, se presente e valido
      if (args[1] && isValidTimeInput(args[1])) {
        timeInput = args[1].trim();
        reminderMessage = args.slice(2).join(" ").trim();
      } else {
        timeInput = null;
        reminderMessage = args.slice(1).join(" ").trim();
      }
    } else {
      // Nessun tempo valido e nessuna menzione: usiamo il primo argomento come tempo (se valido) altrimenti errore
      return conn.reply(
        m.chat,
        "Uso: .promemoria <tempo> [@user] <messaggio>\nEsempi:\n.promemoria 18:30 @user Messaggio\n.promemoria @user 18:30 Messaggio\n.promemoria 10m Messaggio",
        m
      );
    }
  }

  if (!reminderMessage)
    return conn.reply(m.chat, "Inserisci il messaggio del promemoria.", m);

  let delay = 0;
  if (timeInput) {
    const now = new Date();
    if (timeInput.includes(":")) {
      const [hStr, mStr] = timeInput.split(":");
      const hours = Number(hStr);
      const minutes = Number(mStr);
      if (
        isNaN(hours) ||
        isNaN(minutes) ||
        hours < 0 ||
        hours > 23 ||
        minutes < 0 ||
        minutes > 59
      )
        return conn.reply(m.chat, "Formato orario non valido! Usa HH:mm.", m);
      const targetTime = new Date(now);
      targetTime.setHours(hours, minutes, 0, 0);
      if (targetTime <= now) targetTime.setDate(targetTime.getDate() + 1);
      delay = targetTime.getTime() - now.getTime();
    } else {
      const unit = timeInput.slice(-1);
      const value = parseInt(timeInput.slice(0, -1));
      if (isNaN(value))
        return conn.reply(m.chat, "Tempo non valido.", m);
      switch (unit) {
        case "s":
          delay = value * 1000;
          break;
        case "m":
          delay = value * 60 * 1000;
          break;
        case "h":
          delay = value * 60 * 60 * 1000;
          break;
        default:
          return conn.reply(m.chat, "Unità di tempo non valida.", m);
      }
    }
  }

  let confirmMsg =
    target === m.sender
      ? `🔔 Promemoria impostato per te!\n\nMessaggio: "${reminderMessage}"\nTempo: ${timeInput || "immediato"}`
      : `🔔 Promemoria impostato per @${target.split("@")[0]}!\n\nMessaggio: "${reminderMessage}"\nTempo: ${timeInput || "immediato"}`;

  await conn.reply(
    m.chat,
    confirmMsg,
    m,
    { mentions: target === m.sender ? [] : [target] }
  );

  setTimeout(async () => {
    await conn.sendMessage(target, { text: `PROMEMORIA\n${reminderMessage}` });
  }, delay);
};

handler.command = /^promemoria$/i;
handler.help = ["promemoria"];
handler.tags = ["utility"];

export default handler;