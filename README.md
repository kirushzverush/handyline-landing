# Handyline: landing page demo

A portfolio demo of a lead-generation landing page for a home repair service. The brand is fictional.

**Stack:** Next.js 16 (App Router), React 19 Server Actions, Tailwind CSS 4, TypeScript. Requests are sent to Telegram through the Bot API.

## Features
- Responsive layout with these sections: hero, services, how it works, reviews, FAQ and a call to action.
- Booking form that validates input on the server and has a honeypot field against spam bots.
- Each request is delivered to a Telegram chat. If no bot is configured, it works in demo mode and only logs the request on the server.

## Run locally
```bash
npm install
npm run dev
```

## Telegram setup (optional)
Create `.env.local`:
```
TELEGRAM_BOT_TOKEN=123456:ABC...
TELEGRAM_CHAT_ID=123456789
```
