# Series Journal

Este é um projeto de gerenciamento de séries assistidas desenvolvido com React para a disciplina de Desenvolvimento de Sistemas Frontend da PUCRS. A aplicação permite o cadastro, listagem, edição estática e exclusão de séries de forma simples e intuitiva.

## Como executar o projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone o repositório ou baixe o código-fonte.
2. Abra o terminal na pasta raiz do projeto.
3. Instale as dependências executando:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
5. A aplicação abrirá automaticamente no seu navegador padrão no endereço `http://localhost:3000`.

## Páginas

* **Página Inicial:**
  ![Página Inicial](src\assets\about.png)
  `Home`: Apresenta as boas-vindas ao sistema.

* **Formulário de Cadastro:**
  ![Cadastro de Séries](src\assets\register.png)
  `RegisterSeries`: Envolve o `SerieForm` com o layout centralizado.
* **Lista de Séries (com edição/exclusão):**
  ![Lista de Séries](src\assets\list.png)
  `ListSeries`: Envolve o `SerieList` e implementa uma barra de busca dinâmica por títulos.

* **Página Sobre:**
    ![Página Sobre](src\assets\about.png)
    `About`: Página informativa sobre o propósito do projeto.

## Descrição dos Componentes

* **`NavBar`**: Componente de navegação fixo no topo. Utiliza a biblioteca `react-router-dom` (`<Link>`) para permitir a transição suave entre as páginas sem recarregar o navegador.
* **`SerieForm`**: Responsável pelo formulário de adição de novas séries. Ele possui:
  * Gerenciamento de estado interno das entradas.
  * Validação básica (impede submissões vazias ou com número de temporadas negativo/zero).
  * Renderização de feedbacks visuais (mensagens de erro em vermelho e sucesso em verde) estáticos, sem quebrar o layout da página.
* **`SerieList`**: Componente que recebe a lista de séries via *props* e as renderiza. Implementa botões para edição e exclusão. A edição foi construída de forma *inline*, transformando o texto em inputs para uma experiência mais fluida.