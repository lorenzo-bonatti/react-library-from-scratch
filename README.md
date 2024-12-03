# react-library-from-scratch

Template for creating a React library from scratch.

---

This project includes the minimum but necessary configuration to create a React library from scratch.

> The project is built with Node **v22.11.0**

## Features

- [x] React with Vite
- [x] TypeScript
- [x] ESLint (strict rules)
- [x] Prettier
- [x] Husky (pre-commit)
- [x] Lint-staged (run linters on staged files)
- [ ] Vitest

## Getting Started

### GitHub Template

1. Click on the `Use this template` button
2. Fill in the repository name and description
3. Click on the `Create repository` button

### Manual

1. Clone the repository

```zsh
git clone https://github.com/lorenzo-bonatti/react-library-from-scratch.git my-library
```

2. Install the dependencies

```zsh
cd my-library
yarn install # or npm install
```

3. Update the `package.json` file with your library information

## Build the library

To build the library, run the following command:

```zsh
yarn build # or npm run build
```

The library will be built in the `dist` folder with the `package.json` name.

The format is set to `es` by default, but you can change it in the `vite.config.ts` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
