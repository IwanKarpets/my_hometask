# SETUP PROJECT

- Open terminal
- Type command
  text
  `yarn add --dev jest` (must appears node_modules folder)
- Check the 'package.json' file if the dev dependency was added

```json
  "devDependencies": {
    "jest": "^29.2.2"
  }
```

- You can face with follow mistake:
  text
  `The engine "node" is incompatible with this module.`
- A follow command will help you:
  text
  `yarn config set ignore-engines true`

# RUN PROJECT

- Type command
  text
  `yarn test` in terminal
