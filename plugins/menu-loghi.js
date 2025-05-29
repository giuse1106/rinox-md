import 'node-fetch';
let handler = async (_0x223bd5, {
  conn: _0x21c626,
  usedPrefix: _0x23e251,
  usedPrefix: _0x26a7b5,
  __dirname: _0x3067b1,
  text: _0x199108,
  isPrems: _0x29c1cd
}) => {
  if (_0x23e251 == 'a' || _0x23e251 == 'A') {
    return;
  }
  try {
    let {
      money: _0x377ea5,
      joincount: _0x3ffdf3
    } = global.db.data.users[_0x223bd5.sender];
    let {
      exp: _0x1d80d4,
      limit: _0x1bd88a,
      level: _0x54d242,
      role: _0x47d2a1
    } = global.db.data.users[_0x223bd5.sender];
    let _0x247309 = "══════ •⊰✧⊱• ══════\n✧ 𝐔𝐒𝐎 𝐃𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎\n✧‌⃟ᗒ .logo (effetto) (testo)\n✧‌⃟ᗒ .logo (effetto) (testo|testo)\n════════════════\n✧‌⃟ᗒ .logo 3d-deep-sea-metal\n✧‌⃟ᗒ .logo American-flag-3D\n✧‌⃟ᗒ .logo 3D-sci-fi\n✧‌⃟ᗒ .logo 3D-water-pipe\n✧‌⃟ᗒ .logo Halloween-skeleton\n✧‌⃟ᗒ .logo a-spooky-Halloween\n✧‌⃟ᗒ .logo a-cinematic-horror\n✧‌⃟ᗒ .logo a-sketch\n✧‌⃟ᗒ .logo blue-circuit-style\n✧‌⃟ᗒ .logo space\n✧‌⃟ᗒ .logo a-metallic\n✧‌⃟ᗒ .logo Creat-glossy-metalic\n✧‌⃟ᗒ .logo a-Captain-America\n✧‌⃟ᗒ .logo science-fiction\n✧‌⃟ᗒ .logo Video-game-classic-8-bit\n✧‌⃟ᗒ .logo green-horror-style\n✧‌⃟ᗒ .logo a-transformer\n✧‌⃟ᗒ .logo berry\n✧‌⃟ᗒ .logo layered\n✧‌⃟ᗒ .logo Online-thunder--generator\n✧‌⃟ᗒ .logo a-magma-hot\n✧‌⃟ᗒ .logo 3D-stone-cracked-cool\n✧‌⃟ᗒ .logo 3D-neon-light\n✧‌⃟ᗒ .logo impressive-glitch\n✧‌⃟ᗒ .logo a-glitch\n✧‌⃟ᗒ .logo Harry-Potter\n✧‌⃟ᗒ .logo embossed--on-cracked-surface\n✧‌⃟ᗒ .logo Broken-glass\n✧‌⃟ᗒ .logo art-paper-cut\n✧‌⃟ᗒ .logo Online-3D-gradient--generator\n✧‌⃟ᗒ .logo a-3D-glossy-metal\n✧‌⃟ᗒ .logo 3D-realistic--on-the-beach\n✧‌⃟ᗒ .logo a-watercolor\n✧‌⃟ᗒ .logo Online-multicolor-3D-paper-cut\n✧‌⃟ᗒ .logo Write-text-on-foggy-window\n✧‌⃟ᗒ .logo neon-devil-wings\n✧‌⃟ᗒ .logo 3D-underwater--generator\n✧‌⃟ᗒ .logo Online-black-and-white-bear-mascot-logo-creation\n✧‌⃟ᗒ .logo wonderful-graffiti-art\n✧‌⃟ᗒ .logo a-cool-graffiti-text-on-the-wall\n✧‌⃟ᗒ .logo cool-wall-graffiti\n✧‌⃟ᗒ .logo a-christmas-holiday-snow\n✧‌⃟ᗒ .logo a-futuristic-technology-neon-light\n✧‌⃟ᗒ .logo snow--for-winter-holidays\n✧‌⃟ᗒ .logo a-cloud--on-the-sky\n✧‌⃟ᗒ .logo 3D-luxury-gold\n✧‌⃟ᗒ .logo 3D-gradient\n✧‌⃟ᗒ .logo Blackpink-logo-style\n✧‌⃟ᗒ .logo realistic-vintage-style-light-bulb\n✧‌⃟ᗒ .logo realistic-cloud\n✧‌⃟ᗒ .logo a-cloud--in-the-sky\n✧‌⃟ᗒ .logo Write-in-Sand-Summer-Beach\n✧‌⃟ᗒ .logo Sand-Writing\n✧‌⃟ᗒ .logo Sand-engraved-3d\n✧‌⃟ᗒ .logo a-summery-sand-writing\n✧‌⃟ᗒ .logo Foil-Balloon--For-Birthday\n✧‌⃟ᗒ .logo 3d-glue--with-realistic-style\n✧‌⃟ᗒ .logo space-3D\n✧‌⃟ᗒ .logo Metal-Dark-Gold\n✧‌⃟ᗒ .logo Glitch--Style-Tik-Tok\n✧‌⃟ᗒ .logo a-Stone\n✧‌⃟ᗒ .logo Neon-Light--With-Galaxy-Style\n✧‌⃟ᗒ .logo 1917-Style\n✧‌⃟ᗒ .logo 80's-Retro-Neon\n✧‌⃟ᗒ .logo Minion--3D\n✧‌⃟ᗒ .logo Pornhub-Style-Logo\n✧‌⃟ᗒ .logo Double-Exposure--Black-&-White\n✧‌⃟ᗒ .logo Holographic-3D\n✧‌⃟ᗒ .logo 3D-Avengers-logo\n✧‌⃟ᗒ .logo Metal-Purple-Dual-Effect\n✧‌⃟ᗒ .logo logo-style-Marvel-studios-Ver:-metal\n✧‌⃟ᗒ .logo logo-style-Marvel-studios\n✧‌⃟ᗒ .logo Deluxe-Silver\n✧‌⃟ᗒ .logo Color-Full-Luxury-Metal\n✧‌⃟ᗒ .logo Glossy-Blue-Metal\n✧‌⃟ᗒ .logo Deluxe-Gold\n✧‌⃟ᗒ .logo Glossy-Carbon\n✧‌⃟ᗒ .logo Fabric\n✧‌⃟ᗒ .logo Neon\n✧‌⃟ᗒ .logo New-Year-Cards-3D-By-Name\n✧‌⃟ᗒ .logo Happ-new-year-card-firework-gif\n✧‌⃟ᗒ .logo Fullcolor-Balloon\n✧‌⃟ᗒ .logo Text-Logo-3D-Metal\n✧‌⃟ᗒ .logo avatar-gold\n✧‌⃟ᗒ .logo Text-Logo-3D-Metal-Silver\n✧‌⃟ᗒ .logo Text-Logo-3D-Metal-Rose-Gold\n✧‌⃟ᗒ .logo Text-Logo-3D-Metal-Gold\n✧‌⃟ᗒ .logo Text-Logo-3D-Metal-Galaxy\n✧‌⃟ᗒ .logo Xmas-Cards-3D\n✧‌⃟ᗒ .logo Blood-Text-On-The-Frosted-Glass\n✧‌⃟ᗒ .logo Halloween-Fire\n✧‌⃟ᗒ .logo Metal-Dark-Gold\n✧‌⃟ᗒ .logo Lion-Logo-Mascot\n✧‌⃟ᗒ .logo Wolf-Logo-Black-&-White\n✧‌⃟ᗒ .logo Wolf-Logo-Galaxy\n✧‌⃟ᗒ .logo Ninja-Logo\n✧‌⃟ᗒ .logo Logo-Joker\n✧‌⃟ᗒ .logo Wicker\n✧‌⃟ᗒ .logo Natural-Leaves\n✧‌⃟ᗒ .logo Firework-Sparkle\n✧‌⃟ᗒ .logo Skeleton\n✧‌⃟ᗒ .logo Red-Foil-Balloon\n✧‌⃟ᗒ .logo Purple-Foil-Balloon\n✧‌⃟ᗒ .logo Pink-Foil-Balloon\n✧‌⃟ᗒ .logo Green-Foil-Balloon\n✧‌⃟ᗒ .logo Cyan-Foil-Balloon\n✧‌⃟ᗒ .logo Blue-Foil-Balloon\n✧‌⃟ᗒ .logo Gold-Foil-Balloon\n✧‌⃟ᗒ .logo Steel\n✧‌⃟ᗒ .logo Ultra-Gloss\n✧‌⃟ᗒ .logo Denim\n✧‌⃟ᗒ .logo Decorate-Green\n✧‌⃟ᗒ .logo Decorate-Purple\n✧‌⃟ᗒ .logo Peridot-Stone\n✧‌⃟ᗒ .logo Rock\n✧‌⃟ᗒ .logo Lava\n✧‌⃟ᗒ .logo Yellow-Glass\n✧‌⃟ᗒ .logo Purple-Glass\n✧‌⃟ᗒ .logo Orange-Glass\n✧‌⃟ᗒ .logo Green-Glass\n✧‌⃟ᗒ .logo Cyan-Glass\n✧‌⃟ᗒ .logo Blue-Glass\n✧‌⃟ᗒ .logo Red-Glass\n✧‌⃟ᗒ .logo Purple-Shiny-Glass\n✧‌⃟ᗒ .logo Captain-America\n✧‌⃟ᗒ .logo Robot-R2-D2\n✧‌⃟ᗒ .logo Rainbow-Equalizer\n✧‌⃟ᗒ .logo Toxic\n✧‌⃟ᗒ .logo Pink-Sparkling-Jewelry\n✧‌⃟ᗒ .logo Blue-Sparkling-Jewelry\n✧‌⃟ᗒ .logo Green-Sparkling-Jewelry\n✧‌⃟ᗒ .logo Purple-Sparkling-Jewelry\n✧‌⃟ᗒ .logo Gold-Sparkling-Jewelry\n✧‌⃟ᗒ .logo Red-Sparkling-Jewelry\n✧‌⃟ᗒ .logo Cyan-Sparkling-Jewelry\n✧‌⃟ᗒ .logo Purple-Glass\n✧‌⃟ᗒ .logo Decorative-Glass\n✧‌⃟ᗒ .logo Chocolate-Cake\n✧‌⃟ᗒ .logo Strawberry\n✧‌⃟ᗒ .logo Koi-Fish\n✧‌⃟ᗒ .logo Bread\n✧‌⃟ᗒ .logo Matrix-Style\n✧‌⃟ᗒ .logo Horror-Blood\n✧‌⃟ᗒ .logo Neon-Light\n✧‌⃟ᗒ .logo Thunder\n✧‌⃟ᗒ .logo 3D-Box\n✧‌⃟ᗒ .logo Neon\n✧‌⃟ᗒ .logo Road-Warning\n✧‌⃟ᗒ .logo 3D-Steel\n✧‌⃟ᗒ .logo Bokeh\n✧‌⃟ᗒ .logo Green-Neon\n✧‌⃟ᗒ .logo Free-Advanced-Glow\n✧‌⃟ᗒ .logo Dropwater\n✧‌⃟ᗒ .logo Break-Wall\n✧‌⃟ᗒ .logo Chrismast-Gift\n✧‌⃟ᗒ .logo Honey\n✧‌⃟ᗒ .logo Plastic-Bag-Drug\n✧‌⃟ᗒ .logo Horror-Gift\n✧‌⃟ᗒ .logo Marble-Slabs\n✧‌⃟ᗒ .logo Marble\n✧‌⃟ᗒ .logo Ice-Cold\n✧‌⃟ᗒ .logo Fruit-Juice\n✧‌⃟ᗒ .logo Rusty-Metal\n✧‌⃟ᗒ .logo Abstra-Gold\n✧‌⃟ᗒ .logo Biscuit\n✧‌⃟ᗒ .logo Bagel\n✧‌⃟ᗒ .logo Wood\n✧‌⃟ᗒ .logo SCI---Fi\n✧‌⃟ᗒ .logo Metal-Rainbow\n✧‌⃟ᗒ .logo Purple-Gem\n✧‌⃟ᗒ .logo Shiny-Metal\n✧‌⃟ᗒ .logo Yellow-Jewelry\n✧‌⃟ᗒ .logo Silver-Jewelry\n✧‌⃟ᗒ .logo Red-Jewelry\n✧‌⃟ᗒ .logo Purple-Jewelry\n✧‌⃟ᗒ .logo Orange-Jewelry\n✧‌⃟ᗒ .logo Green-Jewelry\n✧‌⃟ᗒ .logo Cyan-Jewelry\n✧‌⃟ᗒ .logo Blue-Jewelry\n✧‌⃟ᗒ .logo Hot-Metal\n✧‌⃟ᗒ .logo Hexa-Golden\n✧‌⃟ᗒ .logo Blue-Glitter\n✧‌⃟ᗒ .logo Purple-Glitter\n✧‌⃟ᗒ .logo Pink-Glitter\n✧‌⃟ᗒ .logo Green-Glitter\n✧‌⃟ᗒ .logo Silver-Glitter\n✧‌⃟ᗒ .logo Gold-Glitter\n✧‌⃟ᗒ .logo Bronze-Glitter\n✧‌⃟ᗒ .logo Eroded-Metal\n✧‌⃟ᗒ .logo Carbon\n✧‌⃟ᗒ .logo Pink-Candy\n✧‌⃟ᗒ .logo Blue-Metal\n✧‌⃟ᗒ .logo Blue-Gem\n✧‌⃟ᗒ .logo Black-Metal\n✧‌⃟ᗒ .logo 3D-Glowing-Metal\n✧‌⃟ᗒ .logo 3D-Chrome│𖣘⃟ᗒ .loli (txt)\n✧‌⃟ᗒ .neon (txt)\n✧‌⃟ᗒ .devil (txt)\n✧‌⃟ᗒ .wolf (txt)\n✧‌⃟ᗒ .pornhub (txt) + (txt)\n══════ •⊰✧⊱• ══════".trim();
    if (_0x223bd5.isGroup) {
      let _0xa741d5 = {
        'key': {
          'participants': "0@s.whatsapp.net",
          'remoteJid': "status@broadcast",
          'fromMe': false,
          'id': "Halo"
        },
        'message': {
          'contactMessage': {
            'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=" + _0x223bd5.sender.split('@')[0x0] + ':' + _0x223bd5.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
          }
        },
        'participant': "0@s.whatsapp.net"
      };
      _0x21c626.sendMessage(_0x223bd5.chat, {
        'image': imagen4,
        'caption': _0x247309.trim(),
        'mentions': [..._0x247309.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x320fc8 => _0x320fc8[0x1] + "@s.whatsapp.net")
      }, {
        'quoted': _0xa741d5
      });
    } else {
      let _0x3a30b7 = {
        'key': {
          'participants': '0@s.whatsapp.net',
          'remoteJid': "status@broadcast",
          'fromMe': false,
          'id': "Halo"
        },
        'message': {
          'contactMessage': {
            'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=" + _0x223bd5.sender.split('@')[0x0] + ':' + _0x223bd5.sender.split('@')[0x0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
          }
        },
        'participant': "0@s.whatsapp.net"
      };
      _0x21c626.sendMessage(_0x223bd5.chat, {
        'image': imagen4,
        'caption': _0x247309.trim(),
        'mentions': [..._0x247309.matchAll(/@([0-9]{5,16}|0)/g)].map(_0x2e4534 => _0x2e4534[0x1] + "@s.whatsapp.net")
      }, {
        'quoted': _0x3a30b7
      });
    }
  } catch {
    _0x21c626.reply(_0x223bd5.chat, "*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*", _0x223bd5);
  }
};
handler.command = /^(menuloghi|loghi)$/i;
export default handler;
function clockString(_0x39b4a5) {
  let _0x2d6dbf = isNaN(_0x39b4a5) ? '--' : Math.floor(_0x39b4a5 / 0x36ee80);
  let _0x50dd2d = isNaN(_0x39b4a5) ? '--' : Math.floor(_0x39b4a5 / 0xea60) % 0x3c;
  let _0x2c4197 = isNaN(_0x39b4a5) ? '--' : Math.floor(_0x39b4a5 / 0x3e8) % 0x3c;
  return [_0x2d6dbf, _0x50dd2d, _0x2c4197].map(_0x3a222a => _0x3a222a.toString().padStart(0x2, 0x0)).join(':');
}