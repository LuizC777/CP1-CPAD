# 📱 Conecta FIAP

## a) Sobre o Projeto

O **Conecta FIAP** é uma aplicação mobile em React Native focada em otimizar a **gestão de disponibilidade e reserva de espaços físicos (laboratórios e salas de estudo)** da faculdade. Atualmente, os alunos enfrentam atrito logístico para descobrir quais ambientes estão livres fora do horário de aula. O aplicativo resolve esse problema atuando como um hub de alocação de recursos e fomento ao networking acadêmico.

**Evolução em relação ao CP1:**
Nesta segunda fase (CP2), o projeto evoluiu de um MVP estático para uma aplicação dinâmica e segura. As principais melhorias incluem a implementação de um sistema completo de autenticação, persistência de dados local, proteção de rotas privadas, validação rigorosa de formulários e personalização de perfil do usuário.

**Funcionalidades Implementadas:**
- **Autenticação de Usuários:** Fluxo completo de Cadastro e Login com validação de dados.
- **Sessão Persistida:** O usuário logado permanece autenticado mesmo após fechar o aplicativo, graças ao gerenciamento via AsyncStorage.
- **Rotas Protegidas:** Bloqueio de acesso às telas internas para usuários não autenticados.
- **Feed de Grupos de Estudo:** Visualização e inscrição em sessões disponíveis nos laboratórios da FIAP.
- **Networking Acadêmico (Conexões):** Lista interativa de alunos da instituição para fomento de networking.
- **Perfil do Aluno:** Central de dados do usuário logado e integração direta (Deep Linking) com apps externos (WhatsApp, LinkedIn, GitHub).
- **Personalização de Perfil:** Acesso à câmera e galeria do dispositivo para upload de foto de perfil personalizada do aluno.
- **Validação de Formulários Inline:** Tratamento de erros em tempo real diretamente abaixo dos campos, sem interrupções por modais.


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

**Telas de Autenticação (Cadastro/Login):**

<img width="250" alt="Login1" src="https://github.com/user-attachments/assets/d634209f-f89a-4c75-867f-9c67a6667606" /> <img width="250" alt="Login2" src="https://github.com/user-attachments/assets/ee81d719-5711-439f-b1c3-9da73280fa13" />

**Descrição:**

Essas são as telas de cadastro e login do aplicativo. No primeiro gif demonstra-se que há validação ao se cadastrar no Conecta FIAP, gerando mensagens de campo obrigatório e indicando que alguns dados tem requisitos a serem cumpridos. O segundo gif demonstra o cadastramento e o login de um usuário que foi bem sucedido.

**Telas Internas (Protegidas):**

- Tela de Feed/Grupos (Home):

<img width="250" alt="Home1" src="https://github.com/user-attachments/assets/a7e7de5f-b55a-419a-bee9-f0343d910d9f" /> <img width="250" alt="Home2" src="https://github.com/user-attachments/assets/d1e7ac12-ab46-4cb1-882e-d0ebccc2c763" />

**Descrição:**

Esta é a interface principal do aplicativo. No primeiro gif o aluno pode visualizar os grupos de estudo disponíveis, conferir informações detalhadas (disciplina, data e laboratório) e interagir com o botão de estado dinâmico para confirmar sua entrada na sessão. No segundo gif, nota-se que os dados do usuário persistem ao fechar e abrir o app devido ao uso de AsyncStorage.

- Tela de Conexões:

<img src="./assets/conexoes.gif" width="250" alt="GIF demonstrativo de Conexões">

**Descrição:**

Focada no networking acadêmico, esta tela apresenta uma lista de alunos e seus respectivos cursos. Há uma barra de pesquisa utilizando `TextInput`, que permite escrever, mas ainda não há funcionalidade de busca.

- Tela de Perfil:

<img width="250" alt="Profile" src="https://github.com/user-attachments/assets/8ac0dc11-f450-4ce8-90b7-752e200bcd8a" />

**Descrição:**

Interface de apresentação do usuário logado. Exibe dados institucionais (curso e turno) e conta com links de contato funcionais. Os comandos `TouchableOpacity` e `Linking` permitem que o clique redirecione o usuário diretamente para aplicativos externos, como GitHub, LinkedIn, Whatsapp e E-mail. Além disso, tem-se o acesso à câmera e galeria com `expo-image-picker`, permitindo que o usuário faça o upload de sua foto de perfil. E para finalizar, essa tela também conta com o botão de logout.


## e) Decisões Técnicas

A arquitetura do aplicativo foi estruturada para garantir a persistência de dados e a segurança do fluxo de navegação de forma eficiente.

- **Estruturação do Projeto:**
  A base de código utiliza o **Expo Router** com uma organização modular por grupos:
  - `/app`: Diretório raiz do roteamento.
    - `/(auth)`: Agrupa as rotas públicas de `login.js` e `cadastro.js`.
    - `/(tabs)`: Agrupa as telas internas (`HomeScreen.js`, `ConnectionScreen.js`, `ProfileScreen.js`) protegidas pela navegação em abas configurada no `_layout.js`.
    - `index.js`: Ponto de entrada que gerencia o redirecionamento inicial.
  - `/assets`: Repositório dedicado a mídias estáticas e imagens.

- **Autenticação e Persistência (AsyncStorage):**
  Como estratégia central de gerenciamento, utilizamos o **AsyncStorage** para suprir a necessidade de um estado global, garantindo que as informações sobrevivam ao fechamento do app:
  - `@registered_users`: Armazena o banco de dados local com os usuários cadastrados.
  - `@user_session`: Chave utilizada para validar se existe um usuário logado. A presença desta chave determina se o usuário é mantido na área restrita ou redirecionado para o login.
  - **Mídia do Usuário:** A URI da foto de perfil escolhida é persistida localmente, permitindo que o avatar personalizado seja carregado automaticamente em cada nova sessão.

- **Navegação Protegida:**
  A proteção das rotas é feita através de verificações lógicas de estado nos arquivos de layout. Caso a sessão no AsyncStorage seja nula, o aplicativo impede o acesso às telas contidas no grupo `/(tabs)`, garantindo que apenas usuários devidamente autenticados acessem as funcionalidades internas.


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
