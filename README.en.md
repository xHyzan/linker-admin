# Linker Admin

Staff panel for Hogwarts Legacy roleplay servers on ArcaneMP, by Linker Network.

## Free license

This repository is public. Anyone can download the files. The usage license is claimed for free on the website and authorizes the server IP.

1. Sign in with Discord at [linkernetwork.dev](https://linkernetwork.dev)
2. Open Linker Admin and claim the free license
3. Set the server IP on that license
4. Download this folder and place `linker-admin` in `resources`
5. Restart the server

The panel stays closed until the license matches the server IP. Downloading the public repository does not grant that license.

## Files you can edit

- `nui/locales.js` is the panel language. It is not encrypted. To add a language, copy the `"en"` entry, translate the values, and keep the Portuguese keys and placeholders such as `{count}` and `{amount}`.
- `shared/panel.json` sets the command, the display name, and the active language (`en` or `pt-BR`).
- `shared/grades.js` sets what each staff rank can do. Rank 1 is the lowest and rank 3 is the highest.

There is no `data` folder inside this resource, and the script does not create one later. To override the downloaded settings on one server, create `server/data/linker-admin.json` next to `hmp-admin.json`, using the same fields as `shared/panel.json`. That file wins when it exists. Otherwise the panel reads `shared/panel.json`.

## Install

The server needs ArcaneMP 1.12 and the Hogwarts foundations (`hmp-lib`, `hmp-mysql`, `hmp-core`, `hmp-inventory`, `hmp-admin`, `hmp-progression`, and `hmp-spells`).

Keep the resource folder named `linker-admin`. Open the panel with `/painel`, `/ladmin`, `/paineladmin`, or Insert. Escape closes it.

## Português

O repositório é público e a licença gratuita sai do site. O idioma, o nome do painel e os graus ficam abertos. O passo a passo em português está no [README.md](README.md).
