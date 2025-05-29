let handler = async (m, { conn, args }) => {
    if (!args[0]) return conn.sendMessage(m.chat, { text: "❌ *Devi inserire un nome!*\n📌 _Esempio:_ *.nickname Invincible*" }, { quoted: m });

    let name = args.join(" ");
    
    // Liste di stili diversi
    let styles = [
        `★彡 ${name} 彡★`,
        `✧･ﾟ:* ${name} *:･ﾟ✧`,
        `𝙄𝙣𝙫𝙞𝙘𝙞𝙗𝙡𝙚🔥`,
        `♛ ${name} ♛`,
        `🖤 𝑴𝒊𝒔𝒕𝒆𝒓𝒚 ${name} 🖤`,
        `ツ ${name} ッ`,
        `${name} ⚡`,
        `🅽🅴🆆 🅱🆁🅴🅴🅳 🅰🆁🆁🅸🆅🅴🅳`,
        `🔥 ${name.toUpperCase()} 🔥`,
        `${name} 🐉`,
        `⛓️ 𝕯𝖆𝖗𝖐 ${name} ⛓️`,
        `🚀 ${name} 🚀`,
        `${name} ☠️`
    ];

    let coolName = styles[Math.floor(Math.random() * styles.length)];

    await conn.sendMessage(m.chat, { text: `✨ *Ecco il tuo nome stilizzato!*\n\n👉 *${coolName}*` }, { quoted: m });
};

handler.command = /^(nickname|stile)$/i;
export default handler;