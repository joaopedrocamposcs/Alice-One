# Alice One

Agenda web para organizar tarefas, compromissos e objetivos em um só lugar. A proposta do Alice One é ajudar cada pessoa a planejar a rotina, acompanhar o que precisa ser feito e manter seus hábitos e anotações acessíveis.

> **Estado atual:** o projeto está em desenvolvimento. A tela de cadastro tem uma interface inicial; as demais páginas e arquivos JavaScript são apenas estrutura reservada. Ainda não existe autenticação funcional, gravação de dados ou integração com um servidor.

## Visão do produto

O site pretende oferecer:

- uma página inicial com resumo da rotina e próximos compromissos;
- gerenciamento de tarefas com prazo, prioridade e estado;
- calendário para visualizar tarefas e eventos por data;
- acompanhamento de hábitos e metas;
- anotações pessoais;
- cadastro, login e configurações de conta.

Esses itens descrevem o escopo planejado, não funcionalidades já disponíveis.

## Tecnologias

- HTML para a estrutura das páginas;
- CSS para o estilo e a adaptação a diferentes tamanhos de tela;
- JavaScript nativo para interações no navegador;
- `localStorage` ou uma API com banco de dados poderão ser avaliados para persistência. Nenhuma persistência está implementada atualmente.

Não há dependências de projeto ou processo de compilação configurados.

## Como abrir

É possível abrir `index.html` no navegador, mas o arquivo está vazio no estado atual. Para visualizar a tela de cadastro, abra `pages/autenticacao/cadrastro.html`.

Também é possível servir a pasta do projeto localmente, por exemplo com a extensão **Live Server** do Visual Studio Code. Não é necessário instalar dependências para a interface estática existente.

Os estilos específicos da tela de cadastro estão em [`css/cadastro.css`](./css/cadastro.css), e o fundo local usado por ela está em [`assets/auth-background.svg`](./assets/auth-background.svg).

## Estrutura do projeto

```text
.
├── index.html
├── README.md
├── documentação.txt
├── assets/
│   ├── auth-background.svg
│   ├── icons/
│   └── img/
├── css/
│   ├── cadastro.css
│   ├── responsivo.css
│   └── style.css
├── js/
│   ├── anotacoes.js
│   ├── app.js
│   ├── cadastro.js
│   ├── calendario.js
│   ├── configuracoes.js
│   ├── habitos.js
│   ├── inicio.js
│   ├── login.js
│   ├── metas.js
│   ├── storage.js
│   └── tarefas.js
└── pages/
    ├── anotacoes.html
    ├── calendario.html
    ├── configuraçoes.html
    ├── habitos.html
    ├── inicio.html
    ├── metas.html
    ├── tarefas.html
    └── autenticacao/
        ├── cadrastro.html
        └── login.html
```

Arquivos vazios são pontos de partida reservados para futuras páginas e módulos. Os nomes `cadrastro.html` e `configuraçoes.html` contêm grafias não convencionais; foram mantidos para corresponder aos caminhos existentes.

## Estado das páginas

| Área | Estado |
| --- | --- |
| Cadastro | Interface HTML/CSS e validação de confirmação de senha no navegador. Não cria conta nem envia dados a um serviço. |
| Login | Arquivo reservado; vazio. |
| Início | Arquivo reservado; vazio. |
| Tarefas | Arquivo reservado; vazio. |
| Calendário | Arquivo reservado; vazio. |
| Hábitos | Arquivo reservado; vazio. |
| Metas | Arquivo reservado; vazio. |
| Anotações | Arquivo reservado; vazio. |
| Configurações | Arquivo reservado; vazio. |
| Persistência | Não implementada. |

## Próximas etapas sugeridas

1. Criar uma página inicial e navegação entre as áreas.
2. Implementar o cadastro e o login com validações e serviço de autenticação apropriado.
3. Definir o modelo de dados e a persistência de tarefas.
4. Implementar criação, edição, conclusão e remoção de tarefas.
5. Integrar tarefas ao calendário e adicionar filtros por data, prioridade e estado.
6. Desenvolver hábitos, metas, anotações e configurações.
7. Adicionar testes e instruções de implantação quando houver lógica funcional.

## Segurança e dados

A tela atual é apenas uma interface no navegador. Não informe dados reais: eles não são enviados a um sistema de cadastro. Em uma futura implementação, senhas devem ser tratadas por um serviço seguro de autenticação e nunca armazenadas em texto puro no navegador.

## Documentação adicional

Consulte [`documentação.txt`](./documentação.txt) para a descrição detalhada do produto, das áreas previstas, dos dados e das etapas de implementação.
