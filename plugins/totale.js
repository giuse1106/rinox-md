import fs from 'fs';

const FILE_PATH = './database/soldi.json';
let db = {};

// Carica i dati se esiste
if (fs.existsSync(FILE_PATH)) {
  db = JSON.parse(fs.readFileSync(FILE_PATH));
}

// Salva i dati ogni volta che vengono modificati
function saveDB() {
  fs.writeFileSync(FILE_PATH, JSON.stringify(db, null, 2));
}

// Recupera saldo
export function getSaldo(user) {
  db[user] = db[user] || 0;
  return db[user];
}

// Aggiunge o sottrae
export function modificaSaldo(user, amount) {
  db[user] = getSaldo(user) + amount;
  saveDB();
}

// Set saldo manualmente
export function setSaldo(user, value) {
  db[user] = value;
  saveDB();
}

export default {
  getSaldo,
  modificaSaldo,
  setSaldo
};