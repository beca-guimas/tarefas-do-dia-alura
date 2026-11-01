/* ==========================================================================
   1. SELEÇÃO DOS ELEMENTOS DO HTML (DOM)
   Aqui buscamos os elementos da página que precisamos manipular via código.
   ========================================================================== */
const tarefaInput = document.getElementById("tarefa-input");
const adicionarBtn = document.getElementById("adicionar-btn");
const listaTarefas = document.getElementById("lista-tarefas");
const contadorTarefas = document.getElementById("contador-tarefas");

/* ==========================================================================
   2. ESTADO DA APLICAÇÃO (DADOS NA MEMÓRIA)
   Uma lista (Array) de objetos para guardar cada tarefa.
   Cada tarefa tem a estrutura: { id: number, texto: string, concluida: boolean }
   ========================================================================== */
let tarefas = carregarTarefasDoLocalStorage();

/* ==========================================================================
   3. FUNÇÕES PRINCIPAIS
   ========================================================================== */

/**
 * Função para adicionar uma nova tarefa à lista
 */
function adicionarTarefa() {
  const texto = tarefaInput.value.trim();

  // Validação: não permitir adicionar tarefa vazia
  if (texto === "") {
    alert("Por favor, digite o nome de uma tarefa!");
    tarefaInput.focus();
    return;
  }

  // Criação do objeto da nova tarefa
  const novaTarefa = {
    id: Date.now(), // Usamos a data atual em milissegundos como um ID único
    texto: texto,
    concluida: false
  };

  // Adiciona a nova tarefa no início da nossa lista
  tarefas.unshift(novaTarefa);

  // Limpa o campo de texto e mantém o foco nele
  tarefaInput.value = "";
  tarefaInput.focus();

  // Salva e atualiza o que o usuário vê na tela
  salvarTarefasNoLocalStorage();
  renderizarTarefas();
}

/**
 * Alterna o estado de uma tarefa entre concluída e pendente
 * @param {number} id - O identificador único da tarefa
 */
function alternarConclusao(id) {
  tarefas = tarefas.map((tarefa) => {
    if (tarefa.id === id) {
      return { ...tarefa, concluida: !tarefa.concluida };
    }
    return tarefa;
  });

  salvarTarefasNoLocalStorage();
  renderizarTarefas();
}

/**
 * Remove uma tarefa da lista pelo seu ID
 * @param {number} id - O identificador único da tarefa
 */
function removerTarefa(id) {
  // Filtramos a lista mantendo apenas as tarefas que NÃO têm esse id
  tarefas = tarefas.filter((tarefa) => tarefa.id !== id);

  salvarTarefasNoLocalStorage();
  renderizarTarefas();
}

/**
 * Atualiza o HTML para refletir o estado atual das tarefas
 */
function renderizarTarefas() {
  // 1. Limpa a lista atual na tela
  listaTarefas.innerHTML = "";

  // 2. Se a lista estiver vazia, exibe uma mensagem amigável
  if (tarefas.length === 0) {
    listaTarefas.innerHTML = `
      <li style="text-align: center; color: #94a3b8; padding: 20px 0;">
        Nenhuma tarefa por aqui. Adicione uma acima!
      </li>
    `;
    atualizarContador();
    return;
  }

  // 3. Cria o elemento HTML para cada tarefa existente
  tarefas.forEach((tarefa) => {
    const itemLi = document.createElement("li");
    
    // Adiciona classe 'concluida' ou 'pendente' de acordo com o estado
    itemLi.className = `tarefa-item ${tarefa.concluida ? "concluida" : "pendente"}`;

    itemLi.innerHTML = `
      <div class="tarefa-lado-esquerdo">
        <label class="tarefa-conteudo">
          <input 
            type="checkbox" 
            ${tarefa.concluida ? "checked" : ""} 
            onchange="alternarConclusao(${tarefa.id})"
          >
          <span class="tarefa-texto">${escaparHTML(tarefa.texto)}</span>
        </label>
        
        <!-- Etiqueta visual de status (Badge) -->
        <span class="badge ${tarefa.concluida ? "badge-concluida" : "badge-pendente"}">
          ${tarefa.concluida ? "✓ Concluída" : "Pendente"}
        </span>
      </div>

      <button 
        class="remover-btn" 
        title="Excluir tarefa" 
        onclick="removerTarefa(${tarefa.id})"
      >
        &times;
      </button>
    `;

    listaTarefas.appendChild(itemLi);
  });

  atualizarContador();
}

/**
 * Atualiza a contagem de tarefas e exibe quantas foram concluídas
 */
function atualizarContador() {
  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;

  if (total === 0) {
    contadorTarefas.textContent = "0 tarefas no total";
  } else {
    contadorTarefas.textContent = `${concluidas} de ${total} tarefa(s) concluída(s)`;
  }
}

/**
 * Segurança: evita que texto digitado pelo usuário execute código malicioso (XSS)
 */
function escaparHTML(texto) {
  const div = document.createElement("div");
  div.innerText = texto;
  return div.innerHTML;
}

/* ==========================================================================
   4. PERSISTÊNCIA COM LOCALSTORAGE
   Permite que as tarefas continuem salvas mesmo se a página for recarregada.
   ========================================================================== */
function salvarTarefasNoLocalStorage() {
  localStorage.setItem("minhas_tarefas", JSON.stringify(tarefas));
}

function carregarTarefasDoLocalStorage() {
  const dadosSalvos = localStorage.getItem("minhas_tarefas");
  return dadosSalvos ? JSON.parse(dadosSalvos) : [];
}

/* ==========================================================================
   5. OUVINTES DE EVENTOS (EVENT LISTENERS)
   Aqui conectamos as interações do usuário com as nossas funções.
   ========================================================================== */

// Clique no botão "Adicionar"
adicionarBtn.addEventListener("click", adicionarTarefa);

// Pressionar a tecla "Enter" dentro da caixa de texto
tarefaInput.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});

// Renderização inicial ao abrir a página
renderizarTarefas();
