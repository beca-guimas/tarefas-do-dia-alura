# Aplicação Lista de Tarefas (To-Do List)


Esta aplicação foi criada com foco no aprendizado de conceitos fundamentais do desenvolvimento de software para a web, a partir do terceiro e último desafio da Imersão em Engenharia de Software com IA promovida pela Alura! 

Particularmente gostei muito desse projeto, não vivo sem agenda e checklists, faz parte do meu dia a dia e nunca tinha pensado em fazer um projeto nesse sentido.


---

## Estrutura de Arquivos

```text
lista-de-tarefas/
│
├── index.html   # Estrutura e marcação da página (O Esqueleto)
├── style.css    # Estilos visuais, cores e layout (O Visual)
├── script.js    # Lógica de interação, eventos e armazenamento (O Cérebro)
└── README.md    # Este guia explicativo
```

---

## Como Cada Componente Funciona

### 1. `index.html` (HTML)
- Define quais elementos aparecem na tela: o título, a caixa de texto (`<input>`), o botão de adicionar (`<button>`) e o local onde as tarefas serão listadas (`<ul>`).
- Conecta o arquivo de estilo através da tag `<link rel="stylesheet" href="style.css">`.
- Conecta a lógica através da tag `<script src="script.js"></script>`.

### 2. `style.css` (CSS)
- Define a estética: cores modernas, cantos arredondados, sombras suaves e espaçamento confortável.
- Utiliza **Flexbox** para alinhar os elementos facilmente na horizontal e na vertical.
- Aplica distinções visuais claras para tarefas pendentes (borda azul, badge azul) e concluídas (borda verde, fundo esverdeado suave, texto riscado e em itálico, badge verde).

### 3. `script.js` (JavaScript)
- **Seleção de Elementos (DOM):** localiza os botões e inputs usando `document.getElementById()`.
- **Manipulação de Dados:** guarda as tarefas como uma lista (`Array`) de objetos Javascript na memória.
- **Renderização Dinâmica:** cria dinamicamente o HTML das tarefas, aplicando classes (`pendente` vs `concluida`) e badges informativos.
- **Eventos:** escuta quando o usuário clica no botão ou aperta a tecla `Enter`.
- **LocalStorage:** salva os dados no armazenamento interno do navegador para que suas tarefas não sumam se você fechar ou atualizar a página.

---

### Funcionalidades:

* **Adicionar Tarefas:** Digite no campo de texto e clique em "Adicionar" (ou apenas pressione Enter).
* **Concluir Tarefas:** Marque a caixinha (checkbox). O texto da tarefa é tachado e o contador é atualizado em tempo real.
* **Remover Tarefas:** Clique no botão vermelho `×` ao lado de qualquer tarefa para excluí-la.
* **Persistência Automática (localStorage):** Se você atualizar a página (F5) ou fechar o navegador, as tarefas continuam salvas no seu computador.



### Como Executar:

Não é necessário instalar nenhum programa extra, Node.js ou servidor local.

1. Navegue até a pasta:
   ```
   C:\Users\pc\.gemini\antigravity\scratch\lista-de-tarefas
   ```
2. Dê um **duplo clique no arquivo `index.html`**. Ele abrirá imediatamente no seu navegador padrão (Google Chrome, Microsoft Edge, Firefox, etc.).

---

### Outras possibilidades de desafios para praticar: 

Tente fazer estas pequenas melhorias/ajustes:

1. **Mudar as cores:** abra `style.css` e altere `#4f46e5` para sua cor favorita.
2. **Botão de limpar tudo:** adicione um botão no HTML e uma função no JavaScript para remover todas as tarefas de uma vez.
3. **Data/Hora:** adicione o dia e horário em que a tarefa foi criada logo abaixo do texto dela.


### 🛠️ Tecnologias e Ferramentas

* **HTML5:** Estruturação semântica da página.
* **CSS3:** Estilização moderna e transições visuais fluidas.
* **JavaScript (Vanilla):** Lógica de negócios e manipulação do DOM.
* **Google Antigravity:** Ferramenta auxiliar de desenvolvimento.


### Autor:

Desenvolvido por Beca Guimas :))

