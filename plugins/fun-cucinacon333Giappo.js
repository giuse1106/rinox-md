const handler = async (m, { conn, text, command }) => {
    const menuPiatti = [
        "Sushi", "Ramen", "Tempura", "Udon", "Soba", 
        "Okonomiyaki", "Takoyaki", "Yakitori", "Katsudon", "Onigiri"
    ];

    const ricette = {
        sushi: {
            nome: "Sushi",
            ingredienti: ["300g Riso per sushi", "200g Pesce crudo (salmone, tonno)", "Alga nori", "Aceto di riso", "Wasabi", "Salsa di soia"],
            preparazione: "1️⃣ Cuoci il riso per sushi e condiscilo con aceto di riso. 2️⃣ Disponi l'alga nori su una stuoia di bambù. 3️⃣ Aggiungi riso e pesce crudo, poi arrotola. 4️⃣ Taglia a pezzi e servi con salsa di soia e wasabi."
        },
        ramen: {
            nome: "Ramen",
            ingredienti: ["200g Noodles", "Brodo di pollo", "Uovo sodo", "Maiale chashu", "Alghe nori", "Cipollotto"],
            preparazione: "1️⃣ Prepara il brodo di pollo. 2️⃣ Cuoci i noodles e scolali. 3️⃣ Assembla in una ciotola: noodles, brodo, maiale chashu, uovo e cipollotto. 4️⃣ Aggiungi nori e servi caldo."
        },
        tempura: {
            nome: "Tempura",
            ingredienti: ["100g Gamberi", "100g Verdure (zucchine, carote)", "Farina", "Acqua frizzante ghiacciata", "Olio per friggere"],
            preparazione: "1️⃣ Prepara una pastella leggera con farina e acqua frizzante fredda. 2️⃣ Immergi gamberi e verdure nella pastella. 3️⃣ Friggi in olio caldo fino a doratura. 4️⃣ Servi con salsa per tempura."
        },
        udon: {
            nome: "Udon",
            ingredienti: ["200g Noodles Udon", "Brodo dashi", "Salsa di soia", "Mirin", "Cipollotto", "Kamaboko (surimi giapponese)"],
            preparazione: "1️⃣ Cuoci gli udon e scolali. 2️⃣ Prepara il brodo con dashi, salsa di soia e mirin. 3️⃣ Servi gli udon in brodo con cipollotto e kamaboko."
        },
        okonomiyaki: {
            nome: "Okonomiyaki",
            ingredienti: ["100g Farina", "1 Uovo", "100g Cavolo tritato", "100g Pancetta", "Salsa okonomiyaki", "Maionese giapponese"],
            preparazione: "1️⃣ Mescola farina, uovo e cavolo tritato. 2️⃣ Versa il composto in padella e aggiungi la pancetta sopra. 3️⃣ Cuoci fino a doratura. 4️⃣ Servi con salsa okonomiyaki e maionese."
        }
    };

    if (command === 'menugiapponese') {
        let menuTesto = "🍽️ *Menù Giapponese* 🇯🇵\n";
        menuPiatti.forEach((piatto, index) => {
            menuTesto += `${index + 1}. ${piatto}\n`;
        });
        menuTesto += "\nℹ️ Per ricevere la ricetta, digita: *!ricettagiapponese [nome_piatto]*\nEsempio: *!ricettagiapponese sushi*";
        return await conn.sendMessage(m.chat, { text: menuTesto }, { quoted: m });
    }

    if (command === 'ricettagiapponese') {
        if (!text) {
            return await conn.sendMessage(m.chat, { text: "❌ Devi scrivere il nome del piatto! Esempio: *!ricettagiapponese sushi*" }, { quoted: m });
        }

        const piatto = text.toLowerCase().trim();
        if (ricette[piatto]) {
            const ricetta = ricette[piatto];
            let risposta = `🍽️ *${ricetta.nome}*\n\n🛒 *Ingredienti per 2 persone:*\n`;
            ricetta.ingredienti.forEach(ingrediente => risposta += `- ${ingrediente}\n`);
            risposta += `\n👨‍🍳 *Preparazione:*\n${ricetta.preparazione}`;

            return await conn.sendMessage(m.chat, { text: risposta }, { quoted: m });
        } else {
            return await conn.sendMessage(m.chat, { text: "❌ Ricetta non trovata! Assicurati di aver scritto il nome correttamente." }, { quoted: m });
        }
    }
};

handler.command = ['menugiapponese', 'ricettagiapponese'];
export default handler;