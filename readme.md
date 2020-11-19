# Post-workshop assessment

Gist:

- a "deep dive" assessment akin to a mini real-world-project, that also covers/embedds some of the most important technologies from the workshops week;
- individually assessed;
- timeframe of 1 full day.

Technologies:

- workshop technologies included: TypeScript, React Native (incl. react-navigation), Context, custom/other hooks;

## Docs

- [App](./docs/app.md)
- [Setup](./docs/setup.md)

## Instructions to run the app
This repo contains both front-end (`/app`) and backend (`/server`) in the same repo

1. Clone the repo.
2. Open 2 terminal windows, on one each directory and run `npm install` on both
3. Create your own ElephantSQL, set in config.json => migrate and seed
4. On the `app/lib/axios.ts`, you need to change the url to use your own IP address. This is because the server is running on your laptop not on your phone, so you have to make the requests there.

```ts
// src/lib/axios.js
export default axios.create({
  baseURL: "http://<YOUR_IP>:<SERVER_PORT>",
});
```
