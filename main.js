import dotenv from 'dotenv';

dotenv.config();

import { getRandomBar, markdownEscape } from './lib.js';
import { Telegraf } from 'telegraf'


const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Telegraf(token, { username: 'batumi_bar_chooser_bot' });

const keywords = ["куда сходить", "какой бар"];

bot.on('message', async ctx => {
    for (const keyword of keywords) {
        const message = (ctx.message.text || "").toLowerCase().trim();
        if (message) {
            if (message.includes(keyword)) {
                const bar = await getRandomBar();
                const name = bar.name.Ru || bar.name.En || 'Generic bar';
                const address = bar.addr ? (bar.addr.Ru || bar.addr.En || '') : '';
                const description = bar.description ? (bar.description.Ru || bar.description.En || '') : '';
                const link = 'https://modiak.ge/#/batumi/firm/' + bar.id;
                const website = bar.website || '';
                const arrayContent = [`*${name}*`, markdownEscape(description), markdownEscape(address), markdownEscape(website), `[Подробности](${link})`];
                const markdownContent = arrayContent.filter(x => x).join('\n').replace(/\-/g, '');
                if (!bar.noImage && bar.mainImage){
                    await ctx.replyWithPhoto('https://modiak.ge/images/' + bar.mainImage)
                }
                await ctx.replyWithMarkdownV2(markdownContent);
                await ctx.replyWithLocation(bar.lat, bar.lng);

                return;
            }
        }
    }
});
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));