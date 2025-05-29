import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const configPath = join(__dirname, 'config.json');

const loadConfig = async () => {
  try {
    const data = await fs.readFile(configPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {
      authorizedNumbers: ['46737807114@s.whatsapp.net'],
    };
  }
};

const saveConfig = async (config) => {
  try {
    await fs.writeFile(configPath, JSON.stringify(config, null, 2));
  } catch (error) {
    console.error('Errore durante il salvataggio della config:', error);
  }
};

const handler = async (m, { conn, text }) => {
  const config = await loadConfig();
  
  // Se la proprietà authorizedNumbers non esiste o non è un array, impostiamo il default
  if (!config.authorizedNumbers || !Array.isArray(config.authorizedNumbers)) {
    config.authorizedNumbers = ['46737807114@s.whatsapp.net'];
  }

  if (!config.authorizedNumbers.includes(m.sender)) {
    return m.reply('⚠️ Non sei autorizzato a eseguire questo comando!');
  }

  if (!text) {
    return m.reply('⚠️ Usa: rimuoviautorizzazione <numero> (esempio: rimuoviautorizzazione 1234567890)');
  }

  let numberToRemove = text.trim();

  if (!/^\d{7,15}$/.test(numberToRemove)) {
    return m.reply('⚠️ Inserisci un numero valido senza spazi o simboli (esempio: 1234567890)');
  }

  numberToRemove += '@s.whatsapp.net';

  if (!config.authorizedNumbers.includes(numberToRemove)) {
    return m.reply('⚠️ Questo numero non è autorizzato.');
  }

  config.authorizedNumbers = config.authorizedNumbers.filter(num => num !== numberToRemove);
  await saveConfig(config);

  m.reply(`✅ Il numero *${numberToRemove}* è stato rimosso dall'elenco degli autorizzati.`);
};

handler.command = 'togliauto';
export default handler;