# 📱 Conecta FIAP

## a) Sobre o Projeto

O **Conecta FIAP** é uma aplicação mobile em React Native focada em otimizar a **gestão de disponibilidade e reserva de espaços físicos (laboratórios e salas de estudo)** da faculdade. Atualmente, os alunos enfrentam atrito logístico para descobrir quais ambientes estão livres fora do horário de aula. O aplicativo resolve esse problema atuando como um hub de alocação de recursos e fomento ao networking acadêmico.

**Evolução em relação ao CP1:**
Nesta segunda fase (CP2), o projeto evoluiu de um MVP estático para uma aplicação dinâmica e segura. As principais melhorias incluem a implementação de um sistema completo de autenticação, persistência de dados local, proteção de rotas privadas, validação rigorosa de formulários e personalização de perfil do usuário.

**Funcionalidades Implementadas:**
- **Autenticação de Usuários:** Fluxo completo de Cadastro e Login com validação de dados e checagem de e-mails duplicados.
- **Sessão Persistida:** O usuário logado permanece autenticado mesmo após fechar o aplicativo.
- **Rotas Protegidas:** Bloqueio de acesso às telas internas para usuários não autenticados.
- **Feed de Grupos de Estudo:** Visualização e inscrição em sessões disponíveis nos laboratórios da FIAP.
- **Networking Acadêmico (Conexões):** Lista interativa de alunos da instituição para fomento de networking.
- **Perfil do Aluno:** Central de dados do usuário logado e integração direta (Deep Linking) com apps externos (WhatsApp, LinkedIn, GitHub).
- **Personalização de Perfil:** Acesso à câmera e galeria do dispositivo para upload de foto de perfil personalizada do aluno.
- **Validação de Formulários Inline:** Tratamento de erros em tempo real sem uso de modais/alerts interruptivos.


## b) Integrantes do Grupo

- **Luiz Claro Lima** - RM563014
- **Gabriel Nacarelli Pinheiro** - RM565298


## c) Como Rodar o Projeto

Para garantir a execução adequada do Conecta FIAP em seu ambiente local, siga as instruções abaixo.

**Pré-requisitos:**
- Node.js instalado (versão LTS recomendada).
- Aplicativo Expo Go no dispositivo móvel ou Emulador (Android Studio/Xcode).
- Expo SDK compatível com a versão atual do projeto.

**Passo a passo:**
1. Clone o repositório em sua máquina:
   `git clone https://github.com/LuizC777/fiap-cpad-cp2-Conecta-FIAP.git`
2. Acesse o diretório do projeto:
   `cd fiap-cpad-cp2-Conecta-FIAP`
3. Instale todas as dependências:
   `npm install`
4. Inicie o servidor de desenvolvimento:
   `npx expo start`
5. Escaneie o QR Code gerado no terminal com o app Expo Go ou pressione "a" para abrir no emulador Android.


## d) Demonstração Visual

**Telas de Autenticação:**
<img width="250" alt="Login1" src="https://github.com/user-attachments/assets/d634209f-f89a-4c75-867f-9c67a6667606" />

**Telas Internas (Protegidas):**
- Tela de Feed/Grupos (Home):
<img src="./assets/tela-feed.png" width="250" alt="Print da Tela Home">

- Tela de Conexões:

<img src="./assets/tela-conexoes.png" width="250" alt="Print da Tela de Conexões"> <img src="./assets/conexoes.gif" width="250" alt="GIF demonstrativo de Conexões">

- Tela de Perfil:
<img src="./assets/tela-perfil.png" width="250" alt="Print da Tela de Perfil">


**Fluxo Completo de Uso:**




## e) Decisões Técnicas

O projeto adotou padrões arquitetônicos focados em escalabilidade, separação de responsabilidades e segurança de dados no front-end.

- **Estruturação do Projeto:**
  - `/app`: Responsável exclusivamente pelo roteamento (Expo Router) e renderização das telas.
  - `/contexts`: Abriga as lógicas de estado global (Context API).
  - `/components`: Armazena componentes de UI reutilizáveis (ex: `ConnectionCard`, inputs padronizados).
  - `/assets`: Repositório de imagens e mídias estáticas.

- **Gerenciamento de Estado (Context API):**
  Criamos o `AuthContext` para atuar como o "motor" central da aplicação. Ele fornece para toda a árvore de componentes o estado do usuário (`user`), indicadores de carregamento (`isLoading`), além das funções globais de `login`, `register` e `logout`, garantindo que os dados de sessão não precisem ser passados via *prop drilling*.

- **Autenticação e Persistência (AsyncStorage):**
  A autenticação valida as credenciais submetidas contra um banco de dados local. Utilizamos o `AsyncStorage` com chaves bem definidas:
  - `@registered_users`: Armazena o array de objetos dos usuários cadastrados no app.
  - `@user_session`: Salva os dados não sensíveis do usuário recém-logado. O `useEffect` no Contexto lê essa chave ao montar o app para recuperar a sessão automaticamente.
  - **Mídia do Usuário:** A URI gerada ao escolher uma foto de perfil também é persistida no AsyncStorage. Isso garante que o avatar customizado do aluno não desapareça ao fechar e reabrir o aplicativo.

- **Navegação Protegida:**
  O Expo Router foi configurado com um padrão de *Layout Route*. Os arquivos `_layout.js` inspecionam o estado `user` fornecido pelo `AuthContext`. Se o estado for nulo, as rotas da área restrita redirecionam obrigatoriamente o fluxo (via método `router.replace`) de volta para a tela de Login, impedindo o acesso manual às URLs internas.


## f) Diferencial Implementado

**Diferencial Escolhido:** Acesso à Câmera e Galeria com `expo-image-picker` (Upload de Foto de Perfil).

**Justificativa:** Como o Conecta FIAP tem um forte viés de networking acadêmico, a personalização visual do perfil é fundamental. Permitir que o aluno adicione sua própria foto humaniza a plataforma, aumenta a credibilidade das interações e melhora significativamente a experiência do usuário (UX), aproximando o app de redes sociais reais.

**Implementação Técnica:**
Utilizamos a biblioteca oficial `expo-image-picker`. A implementação envolve a solicitação de permissões nativas do sistema operacional (Android/iOS) para acessar a biblioteca de mídia. Através do método assíncrono `launchImageLibraryAsync`, capturamos a imagem escolhida pelo usuário. A URI (caminho local) dessa imagem é então injetada no componente de renderização visual e salva no `AsyncStorage` para garantir a persistência do avatar nas próximas sessões de uso.


## g) Próximos Passos

Considerando a constante evolução da plataforma, as próximas features visam conectar a estrutura criada ao ecossistema real da faculdade e refinar a experiência:
1. **Barra de Pesquisa:** Tornar a busca da tela de Conexões totalmente funcional, utilizando efeitos colaterais para filtrar os contatos dinamicamente em tempo real enquanto o usuário digita.
2. **Integração de APIs:** Substituir o `AsyncStorage` de dados institucionais pelo consumo em tempo real da API de horários da FIAP.
3. **WebSockets:** Implementação de um chat instantâneo para permitir a comunicação dentro das "Sessões de Estudo" criadas no app.
4. **Notificações Locais:** Alertas push avisando o usuário sobre a proximidade do horário do seu grupo de estudo reservado.
