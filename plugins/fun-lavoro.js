const handler = async (m, { conn, isPrems }) => {
  const money = Math.floor(Math.random() * 2000);
  const user = global.db.data.users[m.sender];
  const timeRemaining = user.lastwork + 7200000 - new Date();

  if (timeRemaining > 0) {
    throw `⚔️ *𝐀𝐬𝐩𝐞𝐭𝐭𝐚 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨, 𝐥𝐚𝐯𝐨𝐫𝐚𝐭𝐨𝐫𝐞!*\n\n` +
          `*—◉ 𝐏𝐨𝐭𝐫𝐚𝐢 𝐫𝐢𝐩𝐫𝐞𝐧𝐝𝐞𝐫𝐞 𝐚 𝐥𝐚𝐯𝐨𝐫𝐚𝐫𝐞 𝐭𝐫𝐚:* 
          ${msToTime(timeRemaining)} ⏳`;
  }

  conn.sendMessage(m.chat, {
    text: `≿━━━━༺❀༻━━━━≾
              *🏞️ 𝐋𝐀𝐕𝐎𝐑𝐎* 🛠️
    
📜 *Mestiere:* ${pickRandom(global.work)}
💰 *Guadagno:* ${money} €

🎉 *𝐁𝐞𝐥 𝐥𝐚𝐯𝐨𝐫𝐨! 𝐈𝐥 𝐭𝐮𝐨 𝐜𝐨𝐧𝐭𝐨 è 𝐬𝐭𝐚𝐭𝐨 𝐚𝐠𝐠𝐢𝐨𝐫𝐧𝐚𝐭𝐨.*  

≿━━━━༺❀༻━━━━≾`,
  }, { quoted: m });

  user.moneyy += money;
  user.lastwork = new Date().getTime();
};

handler.help = ['work'];
handler.tags = ['money'];
handler.command = /^(lavoro)$/i;
handler.fail = null;

export default handler;

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  return `${hours} ora${hours !== 1 ? 'e' : ''} ` +
         `${minutes} minuto${minutes !== 1 ? 'i' : ''} ` +
         `${seconds} secondo${seconds !== 1 ? 'i' : ''}`;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

global.work = [
  '🔮 Sei un maestro alchimista, distilli pozioni misteriose alla ricerca di segreti perduti.',
  '🎥 Reciti in un film di successo e diventi una star del cinema!',
  '🏆 Partecipi a una gara di cucina e vinci con la tua ricetta segreta!',
  '💰 Scopri un antico tesoro nascosto nelle profondità di una caverna misteriosa.',
  '🚀 Esplori lo spazio e fai una scoperta rivoluzionaria per l’umanità!',
  '🐉 Addestri un drago raro e lo vendi a un collezionista per una fortuna.',
  '🎩 Diventi un illusionista famoso, lasciando tutti a bocca aperta con i tuoi trucchi.',
  '🕵️‍♂️ Risolvi un caso misterioso come il miglior detective della città!',
  '⚒️ Forgi una spada leggendaria che verrà ricordata nei secoli.',
  '📚 Scrivi un libro che diventa un best seller in tutto il mondo.',
  '🎼 Componi una canzone che diventa la hit dell’anno!',
  '👨‍🚀 Vieni scelto per una missione spaziale storica e diventi un eroe.',
  '🎮 Vinci un torneo di e-sports e diventi un campione internazionale!',
  '🏹 Cacci un raro animale mitologico e ottieni una ricompensa straordinaria.',
  '🧪 Crei una nuova invenzione che rivoluziona il mondo della scienza.',
  '💼 Avvii una startup innovativa e diventi un imprenditore di successo!',
  '⚔️ Guidi un esercito in battaglia e vieni celebrato come un grande stratega.',
  '🌊 Scopri una città sommersa e sveli antichi segreti della civiltà perduta.',
  '🔫 Lavori come spia internazionale e smascheri un complotto segreto.',
  '🏗️ Costruisci un grattacielo futuristico che diventa un simbolo della città.',
  '🛠️ Ripari una macchina del tempo e viaggi nel passato per riscrivere la storia!',
  '🦸‍♂️ Diventi un supereroe e salvi la città da una minaccia pericolosa!',
  '🎭 Reciti in un’opera teatrale e ricevi una standing ovation!',
  '🛳️ Parti per un’avventura in mare aperto e scopri un’isola sconosciuta.',
  '🏰 Diventi consigliere reale e prendi decisioni cruciali per il regno.',
  '🐾 Addomestichi un animale leggendario che diventa il tuo compagno di viaggio.',
  '🌍 Esplori terre inesplorate e trovi un’antica civiltà perduta.',
  '🔍 Scopri una cospirazione mondiale e vieni acclamato come eroe della verità.',
  '🚜 Gestisci una fattoria di creature magiche e ottieni grandi profitti.',
  '💎 Trovi un diamante raro e lo vendi per una cifra da capogiro.',
];