# Lecrev Demo Function

This repository is a minimal Node.js function intended for Lecrev's Git deploy flow.

## Demo Deploy Values

- Repository: `https://github.com/theg1239/lecrev-demo-function.git`
- Entrypoint: `src/index.js`
- Runtime: `node22`

## Function Contract

The entrypoint exports:

```js
export async function handler(event, context) {
  return { ... };
}
```

The handler echoes the incoming payload and includes basic runtime metadata so it is easy to verify a successful deployment during the demo.
