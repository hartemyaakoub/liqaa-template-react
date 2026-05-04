<div align="center">

# React + Vite + LIQAA Template

**Minimal Vite + React + TypeScript starter with LIQAA video wired in.**

[![vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![react](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![liqaa](https://img.shields.io/badge/LIQAA-Cloud-1d4ed8?style=flat-square)](https://liqaa.io)
[![license](https://img.shields.io/badge/license-MIT-475569?style=flat-square)](./LICENSE)

```bash
npx degit hartemyaakoub/liqaa-template-react my-app
cd my-app && npm install && npm run dev
```

</div>

---

## Important

This template is **frontend-only**. The browser cannot exchange identity for an SDK token directly (that requires `sk_live_` which is server-only). You need either:

- A backend (Node/PHP/Python/Go — see [liqaa-template-nextjs](https://github.com/hartemyaakoub/liqaa-template-nextjs) for an all-in-one)
- A serverless function (Vercel/Netlify/Cloudflare) that wraps the token exchange

For local development, this template lets you **paste a token manually** to test the SDK.

## What's included

- Vite 5 + React 19 + TypeScript strict
- `@liqaa/js` wired with `LIQAACallButton` example
- Manual token input form for testing without a backend
- ESLint + Prettier
- Ready for SPA hosting (Netlify, Cloudflare Pages, GitHub Pages)

## License

[MIT](./LICENSE)
