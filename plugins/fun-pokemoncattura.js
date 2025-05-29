import fs from 'fs'

let handler = async (m, { conn }) => {
    let user = m.sender
    let username = `@${user.split('@')[0]}`

    let pokemon = pickRandom([
        { name: 'Pikachu', type: 'Elettrico', image: './icone/pikachu.png' },
        { name: 'Charizard', type: 'Fuoco/Volante', image: './icone/charizard.png' },
        { name: 'Bulbasaur', type: 'Erba/Veleno', image: './icone/bulbasaur.png' },
        { name: 'Squirtle', type: 'Acqua', image: './icone/squirtle.png' },
        { name: 'Gengar', type: 'Spettro/Veleno', image: './icone/gengar.png' },
        { name: 'Eevee', type: 'Normale', image: './icone/eevee.png' },
        { name: 'Snorlax', type: 'Normale', image: './icone/snorlax.png' },
        { name: 'Mewtwo', type: 'Psico', image: './icone/mewtwo.png' },
        { name: 'Jigglypuff', type: 'Normale/Folletto', image: './icone/jigglypuff.png' },
        { name: 'Lucario', type: 'Lotta/Acciaio', image: './icone/lucario.png' }
    ])

    let success = Math.random() < 0.7  
    let message = success 
        ? `🎉 ${username} ha catturato con successo *${pokemon.name}*! 🔥\n\n✨ *Tipo*: ${pokemon.type}`
        : `😢 ${username} ha provato a catturare *${pokemon.name}*, ma è scappato!`

    let captureImage = { 
        "key": { "participants": "0@s.whatsapp.net", "fromMe": false, "id": "Capture" },
        "message": { 
            "locationMessage": { 
                name: success ? 'Pokémon Catturato!' : 'Oh no! È scappato!',
                "jpegThumbnail": fs.readFileSync(pokemon.image)
            }
        }, 
        "participant": "0@s.whatsapp.net"
    }

    conn.reply(m.chat, message, captureImage, { mentions: [user] })
}

handler.help = ['cattura']
handler.tags = ['pokemon']
handler.command = /^cattura$/i

export default handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}