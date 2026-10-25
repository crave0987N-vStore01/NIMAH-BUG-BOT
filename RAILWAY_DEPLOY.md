# Railway deployment — NIMAH BUG BOT PRO

## Website
1. Push the extracted `NIMAH BUG BOT PRO Web` folder to its own GitHub repository (so `package.json` is at repository root).
2. Create a Railway service from that repository.
3. Railway runs `npm start`; `PORT` and `/healthcheck` are supported.
4. Configure `OWNER_CODE`, `OWNER_TOKEN_SECRET`, `WORKER_SECRET`, and comma-separated `WORKER_SERVERS` in Railway Variables if using the worker API. Use strong private values. Without worker URLs, pairing/session API functions are unavailable.

## Bot runtime
Deploy `NIMAH BUG BOT PRO` as a separate Railway service/repository with its `package.json` at the repository root. Set a persistent volume for session data if you need sessions to survive redeploys. Configure any API keys the commands require as Railway Variables.

A website cannot permanently lock a phone display or disable OS controls; fullscreen requires a user gesture and browser support.
