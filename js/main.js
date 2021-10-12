let btnDelete = document.querySelector('.trash');
let inputText = document.querySelector('#content__text');
let btnAdd = document.querySelector('#add');
let ul = document.querySelector('#tasks__list');
let mainTag = document.querySelector('#container');
let icons = document.querySelectorAll('.icon');

inputText.focus();

function addTask() {
    if (inputText.value.trim() === '') {
        alert('Erro ao digitar nova tarefa, Tente Novamente:');
    } else {
        const textLi = inputText.value;
        const li = document.querySelector('.list__item');
        const newTask = li.cloneNode(true);


        newTask.querySelector('.label__text').textContent = textLi.toLowerCase();
        newTask.querySelector('#checkbox__').setAttribute('id', `#checkbox__${ul.childElementCount}`);
        newTask.querySelector('#label').setAttribute('for', `#checkbox__${ul.childElementCount}`);


        newTask.classList.remove('list__item')
        newTask.classList.remove('hide')
        ul.appendChild(newTask);


        inputText.value = ''
        inputText.focus();


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

btnAdd.addEventListener('click', addTask);

// Adicionar Com Tecla Enter
inputText.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        addTask();
    }
});

function taskRemove(parametro) {
    parametro.parentNode.remove(true);

//Aumentar tamanho do container das tarefas
    if (ul.childElementCount < 15) {
        mainTag.style.height = '100vh';
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.top = '90%';
        }
    }

    // Pegue o filho de newTask e remova

    // Referencia a this como se fosse um target, recebe a tarefa propria; 
    // Isso porque o escopo é o newTask. 
    // Estão é assim a cada vez que vc aperta o botão ele cria um proprio escobo para aquela unica li;
    // Dentro desta unica li vc pode modificar, é como vc estivesse modiicando o document (q vira newtask)
    // Por conta disso vc pode usar o this ele referencia o elemento q esta sendo criado
}


// ++++++++++++++++++++++++++++++++++++++++++++++
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


// ++++++++++++++++++++++++++++++++++++++++++++++
let htmlTag = document.querySelector('html');
let darkmode = document.querySelector('input[type="checkbox"]#darkMode');

darkmode.addEventListener('click', function () {
    htmlTag.classList.toggle('dark-mode');
});