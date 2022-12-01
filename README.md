# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs,
check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

# Running application

clone repository from github
(recommended)

```shell
git clone git@github.com:rcode-link/vuejs.git
```

or with https

```shell
git clone https://github.com/rcode-link/vuejs.git
```

#### install dependencies

```shell
npm i
```

#### .env

create copy of `.env.example` and name it `.env`
open `.env`. In case that you what different configuration change params in `.env` file

#### run application

```shell
npm run dev
```

### Development

pages are located in `src -> pages` folder.
Only files that are called by router itself are supposed to be here.

All other components are located in `src -> components`

### Naming 

* Components => CamelCase
* pages => lowercase
* Variables => camelCase (with difference of first letter)