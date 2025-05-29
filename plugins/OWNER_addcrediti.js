import fs from 'fs/promises';
import { existsSync } from 'fs';

const CREDITS_DB = './credits.json';

const readCreditsDatabase = async () => {
  if (!existsSync(CREDITS_DB)) {
    await fs.writeFile(CREDITS_DB, JSON.stringify({}, null, 2));
  }
  const data = await fs.readFile(CREDITS_DB, 'utf8');
  try {
    return JSON.parse(data);
  } catch (err) {
    console.error('Errore nel parsing del database:', err);
    return {};
  }
};

const writeCreditsDatabase = async (data) => {
  await fs.writeFile(CREDITS_DB, JSON.stringify(data, null, 2));
};

const handler = async (m, { conn, args }) => {
  if (args.length < 2) {
    return conn.reply(
      m.chat,
      "❌ *Formato errato! Usa:* .addcredits <numero> <comando>",
      m
    );
  }

  const numero = args[0].replace(/\D/g, ""); 
  const comando = args.slice(1).join(" ").toLowerCase().trim().replace(/\s+/g, "_");

  const creditsDb = await readCreditsDatabase();

  if (!creditsDb[numero]) {
    creditsDb[numero] = [];
  }

  if (!creditsDb[numero].includes(comando)) {
    creditsDb[numero].push(comando);
    await writeCreditsDatabase(creditsDb);
    return conn.reply(
      m.chat,
      `✅ *Aggiunto credito per @${numero} al comando ${comando}*`,
      m,
      { mentions: [`${numero}@s.whatsapp.net`] }
    );
  } else {
    return conn.reply(
      m.chat,
      "⚠️ *Questo utente ha già il credito per questo comando!*",
      m
    );
  }
};

handler.command = /^addcredits$/i;
handler.group = true;
handler.admin = true;
handler.rowner= true;

export default handler;