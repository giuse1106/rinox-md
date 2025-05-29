import { exec } from 'child_process';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  // Il parametro "text" dovrebbe contenere il nome del pacchetto da installare, ad esempio "archiver"
  let packageName = text.trim();
  if (!packageName) {
    return m.reply("⚠️ Devi specificare il nome del pacchetto da installare. Es: `.install archiver`");
  }

  // Conferma l'avvio dell'installazione
  await m.reply(`🔄 Sto installando il pacchetto "${packageName}"...`);

  // Esegue il comando "npm install <packageName>"
  exec(`npm install ${packageName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Errore: ${error.message}`);
      return m.reply(`❌ Errore durante l'installazione: ${error.message}`);
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return m.reply(`⚠️ Installazione completata con avvisi:\n${stderr}`);
    }
    m.reply(`✅ Il pacchetto "${packageName}" è stato installato con successo.\nOutput: ${stdout}`);
  });
};

handler.command = /^install$/i;
handler.owner = true;  // Assicura che solo il proprietario possa eseguire questo comando
export default handler;