# Lista de Tarefas (To do List) :open_book:
![tes](https://user-images.githubusercontent.com/84794798/137339113-12ab9938-5237-4e51-962b-88b46f8fa686.jpg)

## Teste por este link: :exclamation: :exclamation:
https://diogolcarvalho.github.io/projeto-To-Do-List/

## Passo a Passo :keyboard:

### Explicando Destaques <i>JavaScript</i>
A função <b>addTask</b> é a principal, é nela que a mágica acontece. Quando a função é inicializada, é executado um IF, verificando se o valor do input que o usuário digitou é válido (no caso, verifica se o input não está vazio). Depois da verificação, o valor do texto é retornado na variável textLi. O Li no documento HTML é selecionado, fazendo uma  cópia com o cloneNode e ele é adicionado no newTask. Esse Li é apenas um molde para manipulação, sendo que ele está oculto com a classe hide. 

![Captura de tela 2021-10-14 114237](https://user-images.githubusercontent.com/84794798/137340649-25be0b07-869a-45d3-80da-4f23c10ac9f4.jpg)

Depois de copiar o Li, o newTask funciona como um document, pois o que está dentro dele é manipulado. Primeiro,  faço que o Texto da Tag p dentro do Li seja o valor que o usuário digitou. Logo após, faço que o input e a label tenham o mesmo valor. Para isso uso o <b>ul.childElementCount</b>, utilizando os filhos de ul como contador.

![Captura de tela 2021-10-14 115554](https://user-images.githubusercontent.com/84794798/137343347-0ad48663-8af4-4cd6-9f7e-c74ddacefedd.png)
<br><br><b>Criando esse efeito:</b> <br><br>
![Captura de tela 2021-10-14 120337](https://user-images.githubusercontent.com/84794798/137344686-8445570b-4fc1-4bbf-b6b3-d20d3c2e14e2.png)

As classes <b>list__item</b> e <b>hide</b> são removidas para cada novo item criado, (classes do Li molde) que é adicionado no Ul do HTML. Limpo o valor do input e coloco um foco nele.  <br>
![Captura de tela 2021-10-14 120525](https://user-images.githubusercontent.com/84794798/137345022-ead20dbb-ed9c-4020-8456-cf4e6651abb5.png)

Quando o ul tiver 15 tarefas adicionadas, é aumentado a altura da tela e os ícones, <b>melhorando a visualização</b>.<br>
![Captura de tela 2021-10-14 121030](https://user-images.githubusercontent.com/84794798/137345859-f9bbaa6b-e80a-4306-b9af-b8db105f1d44.png)

#### Removendo Tarefas 

Ao clicar no ícone da lixeira é acionada a função taskRemove, que leva o <b>parâmetro this.</b> Ou seja, por conta do this ele seleciona apenas a Li que foi clicada, como se fosse um target, manipulando o escopo do newTask e removendo a tarefa. Ao final, temos um IF que volta ao normal a altura do container principal e os ícones. 

![Captura de tela 2021-10-14 121422](https://user-images.githubusercontent.com/84794798/137346752-86f4c2c9-f851-40a2-b780-d1f322b9208a.png)
![Captura de tela 2021-10-14 121500](https://user-images.githubusercontent.com/84794798/137346786-7c90ecd3-31be-49d9-89a3-51070b78a02d.png)

#### Adicionar Tarefa com a Tecla ENTER
![Captura de tela 2021-10-14 122736](https://user-images.githubusercontent.com/84794798/137349484-24c148f2-3efd-48de-abec-0c6d519cd91c.png)

#### Abrir e Fechar Ícone
A próxima função cria um efeito de abrir e fechar, utilizando  <b>data attributes</b>. O valor definido no terceiro ícone é adicionado em MenuTrueFalse, se for falso, ele vira verdadeiro, se for verdadeiro, ele vira falso. Ao final, o terceiro ícone recebe esse valor, que é  <b>manipulado no CSS.</b> 

![Captura de tela 2021-10-14 123232](https://user-images.githubusercontent.com/84794798/137349873-9893ebdf-9f75-4598-8ae6-38216fb83d9f.png)
<br><br><b>Criando esse efeito:</b> <br><br>
![Captura de tela 2021-10-14 123837](https://user-images.githubusercontent.com/84794798/137350915-5d42994e-5b9b-485e-9221-861baacbe557.png)

#### Modo Escuro
Aqui estão todos os comandos para deixar em modo escuro. Ao clicar no <b>Dark Mode</b> no terceiro ícone, uma classe na Tag HTML é criada, esta classe muda o valor das variáveis predefinidas (no arquivo CSS estão as variáveis que utilizo no projeto padrão). Quando o usuário decidir se utiliza o modo escuro ou o modo padrão, é criado um <b>Local Storage</b> para ficar predefinido no projeto, assim mesmo se o usuário fechar a página, o valor escolhido vai estar salvo. Sem necessidade de definir o tema novamente. A última linha é apenas um operador ternário, mostrando no console se o navegador suporta ou não Local Storage.  

![Captura de tela 2021-10-14 124026](https://user-images.githubusercontent.com/84794798/137351252-74c39c7b-392d-4e9c-905e-51c38e19be1b.png)

## Obrigado pela atenção :exclamation:
Desenvolvido por: <a href="https://diogolcarvalho.github.io/projeto-portfolio/" target="_blank"> Diogo Lima Carvalho</a> <br>
Estilo do projeto Inspirado em: <a href="https://dribbble.com/adriengervaix" target="_blank">Adrien Gervaix</a>
