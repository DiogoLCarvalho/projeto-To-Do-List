let btnDelete = document.querySelector('.trash');
let inputText = document.querySelector('#content__text');
let btnAdd = document.querySelector('#add');
let ul = document.querySelector('#tasks__list');
let mainTag = document.querySelector('#container');
let icons = document.querySelectorAll('.icon');

inputText.focus();

function addTask() {
    if (inputText.value.trim() === '') {
        alert('Erro ao digitar nova tarefa, Tente Novamente');
    } else {
        const textLi = inputText.value;
        const li = document.querySelector('.list__item');
        const newTask = li.cloneNode(true);

        // Tarefa recebe o texto e manipula atributos
        newTask.querySelector('.label__text').textContent = textLi.toLowerCase();
        newTask.querySelector('#checkbox__').setAttribute('id', `#checkbox__${ul.childElementCount}`);
        newTask.querySelector('#label').setAttribute('for', `#checkbox__${ul.childElementCount}`);

        // Remove classes e adiciona no HTML
        newTask.classList.remove('list__item')
        newTask.classList.remove('hide')
        ul.appendChild(newTask);

        // Limpa Input
        inputText.value = ''
        inputText.focus();

        // Chamando Função que remove tarefa
        newTask.querySelector('.trash').addEventListener('click', function () {
            taskRemove(this);
        });


        //Aumentar tamanho do container das tarefas
        if (ul.childElementCount === 15) {
            mainTag.style.height = '120vh';
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.top = '110%';
            }
        }
    }
}
// Adicionar Com Clique
btnAdd.addEventListener('click', addTask);

// Adicionar Com Tecla Enter
inputText.addEventListener('keyup', function (e) {
    let key = e.which || e.keyCode;
    if (key == 13) {
        addTask();
    }
});

// Função que remove
function taskRemove(parametro) {
    parametro.parentNode.remove(true);

    //Diminuindo tamanho do container das tarefas
    if (ul.childElementCount < 15) {
        mainTag.style.height = '100vh';
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.top = '90%';
        }
    }

    // Pegue o filho de newTask e remova
    // Referencia a this como se fosse um target, recebe a tarefa propria; 
    // Isso porque o escopo é o newTask. 
    // A cada vez que vc aperta o botão ele cria um proprio escopo para aquela única li;
    // Dentro desta unica li vc pode modificar, é como vc estivesse modiicando o document (q vira newtask)
    // Por conta disso vc pode usar o this ele referencia o elemento q esta sendo criado
}


// Abrir e fechar Terceiro ícone
let themeIcon = document.querySelector('.icon:nth-of-type(3)');
let MenuTrueFalse = themeIcon.dataset.aberto;

const ligaDesligaMenu = () => {
    if (MenuTrueFalse === 'false') {
        MenuTrueFalse = 'true'
    } else {
        MenuTrueFalse = 'false'
    }
    themeIcon.dataset.aberto = MenuTrueFalse;
};

themeIcon.addEventListener('click', ligaDesligaMenu);


// Dark Mode e Local Storage
let htmlTag = document.querySelector('html');
let darkmode = document.querySelector('input[type="checkbox"]#darkMode');


darkmode.addEventListener('click', function () {
    htmlTag.classList.toggle('dark-mode');
    localStorage.setItem('bgcolor', 'dark');

    if (htmlTag.getAttribute('class') === 'dark-mode') {
    } else {
        localStorage.setItem('bgcolor', 'padrão');
    }
});

if (localStorage.bgcolor === 'dark') {
    htmlTag.classList.toggle('dark-mode');
    darkmode.setAttribute('checked','checked');
}else{
    darkmode.removeAttribute('checked');
}

typeof(Storage)!='undefine' ? console.log('Seu navegador aceita armazenamento local') : console.log('Seu navegador não aceita armazenamento local')