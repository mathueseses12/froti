// Selecionando os elementos do HTML
const btnTema = document.getElementById('btn-tema');
const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');
const totalTarefas = document.getElementById('total-tarefas');

// 1. Interação: Alternar entre Modo Claro e Modo Escuro
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        btnTema.textContent = '🌙 Modo Escuro';
    }
});

// Função para atualizar o contador de tarefas
function atualizarContador() {
    totalTarefas.textContent = listaTarefas.children.length;
}

// Função para criar e adicionar uma nova tarefa
function adicionarTarefa() {
    const texto = inputTarefa.value.trim();

    if (texto === '') {
        alert('Por favor, digite uma tarefa antes de adicionar!');
        return;
    }

    // Criando o elemento <li>
    const li = document.createElement('li');

    // Criando o texto da tarefa
    const span = document.createElement('span');
    span.textContent = texto;

    // Criando a div para os botões de ação
    const divAcoes = document.createElement('div');
    divAcoes.classList.add('acoes');

    // 2. Interação: Botão de Concluir Tarefa
    const btnConcluir = document.createElement('button');
    btnConcluir.textContent = '✓';
    btnConcluir.classList.add('btn-concluir');
    btnConcluir.title = 'Concluir tarefa';
    btnConcluir.addEventListener('click', () => {
        li.classList.toggle('concluida');
    });

    // 3. Interação: Botão de Excluir Tarefa
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = '✕';
    btnExcluir.classList.add('btn-excluir');
    btnExcluir.title = 'Excluir tarefa';
    btnExcluir.addEventListener('click', () => {
        li.remove();
        atualizarContador();
    });

    // Montando a estrutura
    divAcoes.appendChild(btnConcluir);
    divAcoes.appendChild(btnExcluir);
    li.appendChild(span);
    li.appendChild(divAcoes);
    listaTarefas.appendChild(li);

    // Limpando o campo e atualizando contador
    inputTarefa.value = '';
    inputTarefa.focus();
    atualizarContador();
}

// 4. Interação: Adicionar tarefa clicando no botão ou apertando Enter
btnAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});
