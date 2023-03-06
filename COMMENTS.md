## Decisões 

### 1. Front-end
Decidi primeiro pensar na estrutura de projeto do front-end. Para começar cogitei utilizar a estrutura de átomos, moléculas e organismos para a separação de componentes, mas como seria um projeto pequeno decidi manter o mais simples possível apenas com uma pasta para componentes.

A segunda decisão foi de manter os arquivos de css utilizando css modules sempre dentro da mesma pasta do componente e da página, igualmente com seu arquivo de teste unitário caso fosse feito. 

A partir disso, decidi construir uma Home mais robusta, para atrair a atenção do usuário e implementar os dois campos propostos pela imagem do desafio, pensando em uma alternativa de bloqueio da outra opção para que fosse mais intuitivo para o usuário para além do "ou" apresentado.

A lista de tribuinais do select é retornada por uma rota do back-end que será melhor explicada na seção abaixo.

Além disso foi implementado também uma checagem em regex para garantir que o usuário só consiga buscar um processo caso o número CNJ seja do tipo NNNNNNN-NN.NNNN.N.NN.NNNN. Isso foi também uma decisão pois pensei em criar um aviso em uma página 404 indicando que o usuário checasse se o número estava com NNNNNNN-NN.NNNN.N.NN.NNNN, mas pensei por fim que a outra opção seria mais intuitiva.  Dentro desse pensamento, uma mensagem 404 ainda é apresentada quando um número do formato NNNNNNN-NN.NNNN.N.NN.NNNN não é correlacionada com nenhum processo existente.

Um erro também é apresentado caso o usuário tente buscar sem ter preenchido nenhum dos dois possíveis inputs.

Como processo futuro gostaria de melhorar a aparência dessas mensagens de erro quando o SearchBar está no Header, com uma mensagem mais agradável e talvez um toast note com um timeout.

Consegui garantir uma mínima responsividade para tablets mas como *to-do* futuro no front-end gostaria também de implementar uma responsividade para celular e melhorar a do tablet.

-----------------

### 2. Back-end
Para começar, decidi fazer um tipo CRUD server side com rotas apenas de GET em Node.JS, para isso decidi usar o Express.js um framework Node para facilitar a organização e a crição dessa aplicação. Decidi também, separar o projeto entre um arquivo para os controllers, outro para a inicialização da aplicação e outro para as rotas afim de facilitar a leitura dessa parte do projeto.

De início fiz toda a parte do controller e sua requisição em cima de um arquivo JSON com os dados presentes em `server\mock\lawsuits.js`. Minha ideia era ao finalizar o front-end e os testes, caso fosse possível, utilizar o PostgreSQL para criar um banco de dados e substituir as chamadas JSON no controller por chamadas SQL dentro de um banco populado, mas não deu tempo de fazer esta parte e ficou como um *to-do* futuro.

Na criação do formulário lá no front-end, percebi que seria mais legal para a manutenção do código a criação de uma rota no back-end que me retornasse uma lista de todos os Tribuinais usados nos dados para disponibilizar no select do formulário e assim fiz uma pequena função com reduce para esse retorno nos controllers.
Uma segunda rota para o retorno de todos os projeto de uma determinada região tribunal e uma terceira rota de chamada de um processo específico também foram criadas.

--------------------


### 3. Testes e outros

Para os testes unitários, decidi criar um teste para cada componente e um teste para cada página, testando renderizações e movimentações do axios. Apenas para o Header não criei testes pois ele apenas renderiza o SearchBar.
Nos testes e2e decidi usar o cypress e percorrer o formulário da home, checar seu fluxo e suas mensagens de erro.
Pensei em utilizar o cypress também para os testes em componentes, mas como o jest também faria esse papel e não tive muito contato em utilizar o cypress para teste de componentes decidi manter a estrutura citada acima.
Alguns pontos a adicionar:
- To-do: Para o futuro, pensei em automatizar os scripts para rodar o back-end e o front-end em apenas um comando
