import fs from 'fs'
import archiver from 'archiver'

let handler = async (m, { text, conn, usedPrefix, command, __dirname }) => {
  // Controlla che sia stato passato il nome per il backup
  if (!text) return m.reply(`⚠️ Usa: ${usedPrefix + command} <nome_backup>`);
  
  let backupName = text.trim(); // Nome fornito dall'utente per il backup
  let backupPath = `./${backupName}.zip`;

  // Notifica l'inizio della compressione
  await m.reply(`🔄 Comprimendo la cartella dei plugin in ${backupName}.zip...`);

  // Crea lo stream di scrittura per il file ZIP
  const output = fs.createWriteStream(backupPath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Imposta la massima compressione
  });

  // Gestione dell'evento "close": una volta completata la compressione, invia il file
  output.on('close', async () => {
    console.log(`Archivio creato: ${archive.pointer()} bytes`);
    await m.reply(`✅ Archivio ${backupName}.zip creato con successo. Inviando...`);
    
    // Legge il file ZIP e lo invia come documento
    let fileData = fs.readFileSync(backupPath);
    await conn.sendMessage(m.chat, { 
      document: fileData, 
      mimetype: 'application/zip', 
      fileName: `${backupName}.zip`
    }, { quoted: m });
    
    // Rimuove il file temporaneo dopo l'invio
    fs.unlinkSync(backupPath);
  });

  // Gestione degli errori durante la compressione
  archive.on('error', (err) => {
    console.error(err);
    m.reply(`❌ Errore durante la compressione: ${err.message}`);
  });

  // Collega lo stream dell'archivio allo stream di scrittura
  archive.pipe(output);

  // Aggiunge la cartella dei plugin all'archivio
  archive.directory('./plugins/', false);

  // Finalizza l'archivazione
  await archive.finalize();
};

handler.command = /^backupplugins$/i;
handler.owner = true;  // Solo il proprietario può eseguire questo comando
export default handler;