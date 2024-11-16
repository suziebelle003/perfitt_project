# 👟 LLM 기반 신발사이즈 추천앱 README

![readme_mokupPage_](https://github.com/user-attachments/assets/269d1c71-d329-4238-8c95-fdfa137148c3)


- 배포 URL :
<h1 align="middle">perfitt X footprint</h1>
<p align="middle">LLM 기반의 AI기술 활용한 신발추천 웹 앱 어플리케이션</p>
<p align="center">
<img src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" /><img alt="npm-v9.8.1" src="https://img.shields.io/badge/npm-v9.8.1-aa96da" />
<img alt="node-v18.18.0" src="https://img.shields.io/badge/node-v18.18.0-ffc7c7" />
<a href="https://slashpage.com/dodoesdid" target="_blank"><img src="https://img.shields.io/badge/-introduction-green?style=square&logo=google-chrome&logoColor=white" /></a>
</p>


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
