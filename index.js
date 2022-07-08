require('dotenv').config()
const { Telegraf, Markup } = require('telegraf')
const data = require('./data.js')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('start', (ctx) => {
	ctx.replyWithHTML('<b><i><u>Приветствую, мой милый Жирафчик 🦒</u></i></b>\n\nПеред тобой <u><b>уникальный бот</b></u> 🤖, созданный с одной и единственной целью - поздравить тебя с <u><b>Днём рождения❕</b></u> 🎂\n\nКак только ты нажмешь на кнопку внизу ⏬, он начнет поздравлять тебя, разве ли это не круто? 🤩\n\n<i>Всего будет 9️⃣9️⃣ поздравлений, ведь это волшебное число 🧙‍♀️, если ты понимаешь о чем я 😉\n\nКроме того, девятки в этом боте встречаются везде - на аватарке, в количестве поздравлений и даже разрешении открыток - по самой широкой стороне они все по 999 пикселей 😏\n\n<b>It\'s Magic... 🔮</b></i>\n\nБот автоматически посчитает, сколько времени осталось до конца твоего Дня рождения ⏰ и в равных дозах будет присылать тебе новое поздравление от меня❕ 🎉\n\nПоэтому не стоит медлить, скорее нажимай кнопку внизу 👇\n\n<b><i>Ты готова❔</i></b>', Markup.inlineKeyboard([
		[Markup.button.callback('Конечно я готова❕🙌🐰😊', 'yep')]
	]))
})

bot.action('yep', async (ctx) => {
	setTimeout(async () => {
		await ctx.answerCbQuery()
		const date = new Date()
		const birthday = new Date(2022, 6, 10, 0, 0, 0)
		const gap = (birthday - date) / 99
		let index = 1
		setInterval(async () => {
			if (index < data.length + 1) {
				await ctx.replyWithPhoto({ source: `./img/${index}.jpg` })
				await ctx.replyWithHTML(`<i>${data[index - 1]}</i>\n\n<b>Твой Кот 😽</b>`)
				index += 1
			}
		}, gap)
	}, 1000)
})

bot.launch()