# Linker Admin

Painel da equipe para servidores de Hogwarts Legacy no ArcaneMP, feito pela Linker Network.

## Licença gratuita

O repositório é público. Qualquer pessoa pode baixar os arquivos. A licença de uso sai no site, de graça, e autoriza o IP do servidor.

1. Entre em [linkernetwork.dev](https://linkernetwork.dev) com o Discord
2. Abra o Linker Admin e reivindique a licença gratuita
3. Informe o IP do servidor
4. Baixe esta pasta e coloque `linker-admin` em `resources`
5. Reinicie o servidor

Sem a licença no IP certo, o painel não abre. O download público não substitui essa etapa.

## O que fica aberto

- `nui/locales.js` é o idioma do painel. Ele não é criptografado. Para um idioma novo, copie a entrada `"en"`, traduza os valores e mantenha as chaves em português e os marcadores `{count}` e `{amount}`.
- `shared/panel.json` escolhe o comando, o nome e o idioma ativo (`pt-BR` ou `en`).
- `shared/grades.js` define o que cada grau da equipe pode fazer. O grau 1 é o mais baixo e o grau 3 é o mais alto.

Não existe pasta `data` dentro deste resource, e o script não cria essa pasta depois. Se este servidor precisar de uma configuração diferente da que veio no download, crie `server/data/linker-admin.json` ao lado de `hmp-admin.json`, com os mesmos campos de `shared/panel.json`. Quando esse arquivo existe, ele vale mais. Sem ele, o painel usa `shared/panel.json`.

## Instalação

O servidor precisa do ArcaneMP 1.12 com as foundations do Hogwarts (`hmp-lib`, `hmp-mysql`, `hmp-core`, `hmp-inventory`, `hmp-admin`, `hmp-progression` e `hmp-spells`).

A pasta do resource precisa continuar com o nome `linker-admin`. Abra com `/painel`, `/ladmin`, `/paineladmin` ou Insert. Escape fecha.

## English

The repository is public. The free license is claimed at [linkernetwork.dev](https://linkernetwork.dev) and is tied to the server IP.

`nui/locales.js`, `shared/panel.json` and `shared/grades.js` stay readable. There is no `data` folder inside the resource, and the script does not create one. An optional `server/data/linker-admin.json`, next to `hmp-admin.json`, overrides `shared/panel.json` when you create it yourself.

Full English notes: [README.en.md](README.en.md).
