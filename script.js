// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Obtém os elementos do formulário e da área de resultado
    const form = document.getElementById("study-plan-form");
    const resultContainer = document.getElementById("study-plan-result");

    // Função para gerar o plano de estudos com base nas escolhas
    function gerarPlanoDeEstudos(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        // Obtém os valores das seleções
        const faculdade = document.getElementById("college").value;
        const cidade = document.getElementById("city").value;
        const curso = document.getElementById("course").value;

        // Geração de um plano de estudos básico com base nas escolhas
        let planoDeEstudos = `
            <h3>Plano de Estudos para o Curso de ${curso}</h3>
            <p><strong>Faculdade:</strong> ${faculdade}</p>
            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Curso Selecionado:</strong> ${curso}</p>
            <h4>Plano de Estudos Sugerido:</h4>
        `;

        // Conteúdo de estudos baseado no curso escolhido (exemplo simples)
        let conteudoEstudos = '';
        switch (curso) {
            case 'curso1':
                conteudoEstudos = 'Estudo intensivo de Matemática, Física e Química.';
                break;
            case 'curso2':
                conteudoEstudos = 'Estudo focado em Linguagens de Programação, Algoritmos e Estruturas de Dados.';
                break;
            case 'curso3':
                conteudoEstudos = 'Estudo de Gestão, Marketing e Empreendedorismo.';
                break;
            default:
                conteudoEstudos = 'Conteúdo não disponível.';
        }

        // Adiciona o conteúdo de estudos ao plano
        planoDeEstudos += `
            <p>${conteudoEstudos}</p>
            <h4>Horário Sugerido de Estudo:</h4>
            <ul>
                <li>08:00: Estudo de Teoria</li>
                <li>08:30: Prática e Exercícios</li>
                <li>09:00: Revisão e Preparação para Provas</li>
                <li>09:30: Acompanhamento de Tutorias ou Estudos em Grupo</li>
            </ul>
        `;

        // Exibe o plano de estudos na página
        resultContainer.innerHTML = planoDeEstudos;
    }

    // Adiciona o ouvinte de evento para quando o formulário for enviado
    form.addEventListener("submit", gerarPlanoDeEstudos);
});
// Geração de um plano de estudos básico com base nas escolhas
let planoDeEstudos = `
    <h3>Plano de Estudos Personalizado</h3>
    <p><strong>Faculdade escolhida:</strong> ${faculdade}</p>
    <p><strong>Cidade:</strong> ${cidade}</p>
    <p><strong>Curso desejado:</strong> ${curso}</p>
    <p>Recomendamos iniciar seus estudos com:</p>
    <ul>
        <li><strong>1º mês:</strong> Fundamentos de ${curso}</li>
        <li><strong>2º mês:</strong> Prática com projetos e exercícios</li>
        <li><strong>3º mês:</strong> Revisões e simulados de vestibulares</li>
    </ul>
    <p>Lembre-se de revisar semanalmente e tirar dúvidas com professores ou fóruns online!</p>
`;

// Exibe o plano de estudos gerado na página
resultContainer.innerHTML = planoDeEstudos;


// Adiciona o listener ao formulário
if (form) {
    form.addEventListener("submit", gerarPlanoDeEstudos);
}
function toggleMaterias(elemento) {
    const materias = elemento.nextElementSibling;
    materias.classList.toggle('ativo');
  }
  // Adiciona o listener ao formulário
if (form) {
    form.addEventListener("submit", gerarPlanoDeEstudos);
}
function toggleMaterias(elemento) {
    const materias = elemento.nextElementSibling;
    materias.classList.toggle('ativo');
  }
  // Adiciona o listener ao formulário
if (form) {
    form.addEventListener("submit", gerarPlanoDeEstudos);
}
function toggleMaterias(elemento) {
    const materias = elemento.nextElementSibling;
    materias.classList.toggle('ativo');
  }
  // Adiciona o listener ao formulário
if (form) {
    form.addEventListener("submit", gerarPlanoDeEstudos);
}
function toggleMaterias(elemento) {
    const materias = elemento.nextElementSibling;
    materias.classList.toggle('ativo');
  }
  // Adiciona o listener ao formulário
if (form) {
    form.addEventListener("submit", gerarPlanoDeEstudos);
}
function toggleMaterias(elemento) {
    const materias = elemento.nextElementSibling;
    materias.classList.toggle('ativo');
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      const usuario = document.getElementById("Usuário").value.trim();
      const senha = document.getElementById("Senha").value.trim();
  
      if (usuario && senha) {
        // Redireciona para index.html
        window.location.href = "index.html";
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  });
  