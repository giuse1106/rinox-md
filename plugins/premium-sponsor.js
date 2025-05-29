import 'os';
import 'util';
import 'human-readable';
import '@whiskeysockets/baileys';
import 'fs';
import 'perf_hooks';

let handler = async (_0x1ece27, { conn: _0x4d8805, usedPrefix: _0x2b0a49 }) => {
  
  let _0x2d215f = {
    'key': {
      'participants': "0@s.whatsapp.net",
      'fromMe': false,
      'id': 'Halo'
    },
    'message': {
      'locationMessage': {
        'name': "𝐌𝐞𝐧𝐮 𝐒𝐩𝐨𝐧𝐬𝐨𝐫  ",
        'jpegThumbnail': await (await fetch("https://qu.ax/cSqEs.jpg")).buffer(),
        'vcard': `BEGIN:VCARD
VERSION:3.0
N:;Unlimited;;;
FN:Unlimited
ORG:Unlimited
TITLE:
item1.TEL;waid=19709001746:+1 (970) 900-1746
item1.X-ABLabel:Unlimited
X-WA-BIZ-DESCRIPTION:ofc
X-WA-BIZ-NAME:Unlimited
END:VCARD`
      }
    },
    'participant': "0@s.whatsapp.net"
  };


  let _0x3f08c2 = https://chat.whatsapp.com/HduxPu3fzCvHD68VAWWnDU`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ꙰ 𝟥𝟥𝟥 ꙰ 𝔹𝕆𝕋 ꙰
`;

  let _0x575cba = global.db.data.nomedelbot || " ꙰ 𝟥𝟥𝟥 ꙰ 𝔹𝕆𝕋 ꙰ ";
  
  await _0x4d8805.sendMessage(_0x1ece27.chat, {
    text: _0x3f08c2,
    contextInfo: {
      mentionedJid: _0x4d8805.parseMention(wm),
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363379966417373@newsletter",
        serverMessageId: '',
        newsletterName: _0x575cba
      }
    }
  }, {
    quoted: _0x2d215f
  });
};

handler.help = ["menu"];
handler.tags = ['menu'];
handler.command = /^(sponsor)$/i;
handler.admin = true;
export default handler;

// Formattazione del tempo (il tempo non esiste per Youns perche lui è immortale)
function clockString(_0xd0d91e) {
  let _0x27c45a = Math.floor(_0xd0d91e / 3600000);
  let _0x42617d = Math.floor(_0xd0d91e / 60000) % 60;
  let _0x1bf8dc = Math.floor(_0xd0d91e / 1000) % 60;
  return [_0x27c45a, _0x42617d, _0x1bf8dc].map(_0x2d1849 => _0x2d1849.toString().padStart(2, '0')).join(':');
}
