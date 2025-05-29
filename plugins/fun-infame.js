const handler = async (msg, { client, conn }) => {
    // Genera una percentuale casuale tra 0 e 100
    const percent = Math.floor(Math.random() * 101);

    if (!conn || typeof conn.sendMessage !== 'function') {
        throw new Error("Connection object is not properly initialized or 'sendMessage' method is missing.");
    }
    
    const response = `👮‍♂️ Il tuo livello di infame è: *${percent}%* 🚔`;
    
    await conn.sendMessage(msg.chat, { text: response }, { quoted: msg });
  };
  
  // Configurazione del comando
  handler.command = ['infame', 'quantosbirro'];
  handler.category = 'fun';
  handler.desc = 'Scopri quanto sei infame 🚓';
  
  export default handler;