# eslint-config-webteam

A shared [ESLint](http://eslint.org/) configuration for the web team.

## Installation

Get started by running this command in the root of your project:

```sh
npm install --save-dev eslint eslint-config-webteam eslint-plugin-import
```

Then add an `.eslintrc` file to the root of your project with the following content

```json
{
  "extends": [
    "webteam"
  ]
}
```

NOTE: `eslint` plugins are available for most modern text editors, like Atom, WebStorm, etc

## React Projects

For projects using React, add the following to your `.eslintrc` file

```json
{
  "extends": [
    "webteam",
    "webteam/rules/react"
  ]
}
```
Then install [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) and  [`eslint-plugin-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y):

```sh
npm install --save-dev eslint-plugin-react eslint-plugin-a11y
```
This gives your linting of React with jsx and some accessibility linting for jsx.

NOTE: You will have to instruct your IDE to lint jsx file extensions (e.g. with Atom, install the atom-react package) or use the eslint CLI:

```sh
  npm i -g eslint
  eslint . --ext=.js,.jsx
```

## Override rules

It is possible to override rules on project level. 

```json
{
  "extends": [
    "webteam",
    "webteam/rules/react"
  ],
  "rules": {
      "max-len": ["error", 80],
    }
}
```
