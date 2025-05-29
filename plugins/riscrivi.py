from telegram import Update
from telegram.ext import Application, CommandHandler, CallbackContext
from telegram.helpers import mention_html

async def riscrivi(update: Update, context: CallbackContext):
    # Recupera il testo del comando (escludendo /riscrivi)
    if context.args:
        testo = " ".join(context.args)  # Testo fornito dopo /riscrivi
    else:
        await update.message.reply_text("❗ Devi fornire un testo dopo il comando. Esempio: /riscrivi Questo è un esempio.")
        return

    # Recupera il nome utente dell'utente che invia il comando
    user_mention = mention_html(update.message.from_user.id, update.message.from_user.username)
    
    # Riscrive il testo con il template personalizzato
    await update.message.reply_text(
        f"✨ Riscrivo il tuo messaggio, {user_mention}👋\n\n"
        f"📝 <b>Testo Riscritto:</b>\n{testo}\n\n"
        "🌟 Powered by Gab & Army 🌟\n"
        "────────────────────────────",
        parse_mode="HTML"  # Usa HTML per il formato del messaggio
    )

def register(application: Application):
    # Aggiungi il comando /riscrivi
    application.add_handler(CommandHandler("riscrivi", riscrivi))