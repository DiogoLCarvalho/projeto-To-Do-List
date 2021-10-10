let btnDelete = document.querySelector('.trash');
let inputText = document.querySelector('#content__text');
let btnAdd = document.querySelector('#add');
let ul = document.querySelector('#tasks__list');

function addTask() {
    if (inputText.value.trim() === '') {
        alert('Erro ao digitar nova tarefa, Tente Novamente');
    }else{
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


        newTask.querySelector('.trash').addEventListener('click',function() {
            taskRemove(this);
        });
    }
}

btnAdd.addEventListener('click', addTask);

// Adicionar Com Tecla Enter
inputText.addEventListener('keyup', function(e){ 
    var key = e.which || e.keyCode;
    if (key == 13) { 
        addTask();
    }
});

function taskRemove(parametro) {
    parametro.parentNode.remove(true);

    // Pegue o filho de newTask e remova

    // Referencia a this como se fosse um target, recebe a tarefa propria; 
    // Isso porque o escopo é o newTask. 
    // Estão é assim a cada vez que vc aperta o botão ele cria um proprio escobo para aquela unica li;
    // Dentro desta unica li vc pode modificar, é como vc estivesse modiicando o document (q vira newtask)
    // Por conta disso vc pode usar o this ele referencia o elemento q esta sendo criado
}