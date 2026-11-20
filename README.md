# AliceFlow

Agenda pessoal com tarefas, calendário, hábitos, metas e anotações. Feita só com HTML, CSS e JavaScript, sem framework e sem servidor. Cada usuário tem conta própria e os dados ficam salvos no navegador.

## Funcionalidades

- **Conta de usuário:** cadastro, login e logout. Cada conta enxerga apenas os próprios dados.
- **Início:** saudação, anel de progresso das tarefas do dia, contadores e atalhos para tarefas e hábitos de hoje.
- **Tarefas:** criar com data, concluir, excluir e filtrar por todas, hoje, pendentes ou concluídas.
- **Calendário:** visão mensal com marcação nos dias que têm tarefa. Clicar em um dia mostra e cria compromissos.
- **Hábitos:** marcação dos últimos 7 dias e contagem de dias seguidos.
- **Metas:** total definido por você, botões de mais e menos e barra de progresso.
- **Anotações:** título e texto, com busca em tempo real.
- **Ajustes:** nome, tema (automático, claro ou escuro), apagar dados e excluir conta.
- **Responsivo:** no celular o menu lateral vira uma barra fixa na parte de baixo.

## Tecnologias

- HTML5
- CSS3 (variáveis, grid, flexbox)
- JavaScript (ES6+)
- localStorage para persistência
- Web Crypto API (SHA-256) para o hash das senhas

## Como rodar

Não precisa instalar nada.

1. Baixe ou clone o projeto.
2. Abra o `index.html` no navegador.

No VS Code, o jeito mais prático é usar a extensão **Live Server**: botão direito no `index.html` e **Open with Live Server**.

Na primeira vez, clique em **Criar conta**, preencha os dados e você já entra no painel.

> As fontes vêm do Google Fonts. Sem internet o app funciona normalmente, só com a fonte padrão do sistema.

## Estrutura do projeto

```
Alice-One/
├── index.html
├── README.md
├── documentacao.txt
├── .gitignore
├── assets/
├── css/
│   ├── style.css
│   ├── responsivo.css
│   ├── login.css
│   ├── cadastro.css
│   └── landing.css
├── js/
│   ├── storage.js
│   ├── app.js
│   ├── landing.js
│   ├── login.js
│   ├── cadastro.js
│   ├── inicio.js
│   ├── tarefas.js
│   ├── calendario.js
│   ├── habitos.js
│   ├── metas.js
│   ├── anotacoes.js
│   └── configuracoes.js
└── pages/
    ├── inicio.html
    ├── tarefas.html
    ├── calendario.html
    ├── habitos.html
    ├── metas.html
    ├── anotacoes.html
    ├── configuracoes.html
    └── autenticacao/
        ├── login.html
        └── cadastro.html
```

## Como o código se organiza

| Arquivo | Responsabilidade |
|---|---|
| `js/storage.js` | Único ponto de acesso ao localStorage. Usuários, sessão e dados de cada coleção. |
| `js/app.js` | Roda em todas as páginas internas: proteção de rota, menu lateral, tema e funções comuns. |
| `js/<pagina>.js` | Lógica de uma página específica. |
| `css/style.css` | Cores, tipografia e componentes usados em todo o app. |
| `css/responsivo.css` | Ajustes para telas de até 760px. |

Toda página interna carrega os scripts nesta ordem: `storage.js`, `app.js` e depois o script da própria página.

## Onde os dados ficam

Tudo no `localStorage`, com o prefixo `af:`.

| Chave | Conteúdo |
|---|---|
| `af:users` | Lista de contas cadastradas |
| `af:session` | Id do usuário logado |
| `af:<idUsuario>:tasks` | Tarefas |
| `af:<idUsuario>:habits` | Hábitos |
| `af:<idUsuario>:goals` | Metas |
| `af:<idUsuario>:notes` | Anotações |
| `af:<idUsuario>:cfg` | Preferências (tema) |

Para ver ou apagar manualmente: F12, aba **Application** (ou **Aplicativo**), **Local Storage**.

## Personalizando o visual

As cores ficam no topo do `css/style.css`, em variáveis:

```css
:root{
  --bg:#eef0f6;   /* fundo da página */
  --card:#fff;    /* fundo dos cartões */
  --tx:#1b1f3b;   /* texto */
  --mu:#666b8a;   /* texto secundário */
  --ln:#dcdfeb;   /* bordas */
  --ac:#3b4fe0;   /* cor de destaque */
  --ok:#1f9d6b;   /* sucesso */
  --bad:#c93c4b;  /* erro e ações destrutivas */
}
```

Para mudar a identidade do app inteiro, basta trocar esses valores. O tema escuro tem o próprio bloco logo abaixo, duplicado para o modo automático e para a escolha manual.

## Limitações

Este é um projeto de estudo. Vale saber:

- Os dados ficam só no navegador e no aparelho em que foram criados. Não sincroniza entre dispositivos.
- Limpar os dados do navegador apaga tudo, inclusive as contas.
- Senhas são guardadas com SHA-256, sem sal. Não use uma senha que você usa em outros lugares.
- A sessão não expira. Quem abrir o navegador depois continua logado até clicar em **Sair**.
- Tarefas e anotações não podem ser editadas depois de criadas, só excluídas.

## Próximos passos

- Editar tarefas e anotações
- Prioridade e categorias nas tarefas
- Tarefas recorrentes
- Exportar e importar dados em JSON
- Lembretes com a Notification API
- Backend com banco de dados para sincronizar entre aparelhos

## Documentação

A documentação técnica completa está em [`documentacao.txt`](documentacao.txt).