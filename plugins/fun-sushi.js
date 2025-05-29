import { performance } from "perf_hooks";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let handler = async (message, { conn, text }) => {  
    let messages = [  
        `🍣 Inizio a preparare un Sushi per *${text || "te"}*...`,  
        `🔪 Sto tagliando il pesce fresco!`,  
        `🍚 Preparo il riso con aceto di riso...`,  
        `🥑 Aggiungo un tocco di avocado e altri ingredienti.`,  
        `🌿 Un pizzico di alga nori per avvolgerlo perfettamente!`,  
        `🍱 Sto impiattando con cura...`,  
        `🎌 Voilà! Sushi servito per *${text || "te"}*!`  
    ];  

    for (let msg of messages) {  
        await conn.reply(message.chat, msg, message);  
        await delay(2000);  
    }  

    let start = performance.now();  
    let end = performance.now();  
    let time = (end - start).toFixed(3);  

    let finalMessage = `🍣 Sushi preparato in *${time}ms*! Buon appetito, *${text || "belo/a"}*!`;  
    await conn.reply(message.chat, finalMessage, message);  
};  

handler.command = ['sushi'];  
handler.tags = ['fun'];  
handler.help = ['.sushi <nome>'];  

export default handler;