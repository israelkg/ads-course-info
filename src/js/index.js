
// const btnNav = document.getElementsByTagName("button")
// btnNav.forEach(function(event) {
//     event.preventDefault();
//     if(window.location.pathname !== './src/home.html') {
//         window.location.href = "./src/home.html"
//     }    
// })




// UTFPR
function btnAddHtmlGt() {
  var textGridT = document.querySelector("#text-grid-utfpr")
  
  if(textGridT.innerHTML.trim() === ''){
    textGridT.innerHTML = `
    <div class="anos"> 
          <h1>1° Ano</h1>
          <ul>
              <li>Algoritmos e Programação Estruturada</li>
              <li>Lógica Computacional</li>
              <li>Modelagem de Dados</li>
              <li>Análise e Modelagem de Sistemas</li>
              <li>Projeto de Software</li>
              <li>Programação Orientada a Objetos</li>
              <li>Estruturas de Dados</li>
              <li>Banco de Dados</li>
              <li>Engenharia de Software</li>
              <li>Redes de Computadores</li>
          </ul>
        </div>
    
        <div class="anos">
          <h1>2° Ano</h1>
          <ul>
              <li>Desenvolvimento Web</li>
              <li>Sistemas Operacionais</li>
              <li>Segurança da Informação</li>
              <li>Gestão de Projetos</li>
              <li>Inteligência Artificial</li>
              <li>Desenvolvimento Mobile</li>
              <li>Arquitetura de Computadores</li>
              <li>Empreendedorismo e Inovação</li>
              <li>Tópicos Avançados em Desenvolvimento de Sistemas</li>
              <li>Estágio Supervisionado</li>
          </ul>
        </div>
    
        <div class="anos">
          <h1>3° Ano</h1>
          <ul>
              <li>Computação em Nuvem</li>
              <li>Big Data e Análise de Dados</li>
              <li>Desenvolvimento de Jogos</li>
              <li>Projeto Integrador</li>
              <li>Trabalho de Conclusão de Curso (TCC)</li>
              <li>Tecnologias Emergentes</li>
              <li>Gestão de TI</li>
              <li>Ética e Legislação em TI</li>
              <li>Projeto Final de TCC</li>
          </ul>
        </div> `
    console.log(true);
  } else{
    textGridT.innerHTML = '';
  }
}

function btnAddHtmlLt() {
  var textLocaT = document.querySelector('#text-loca-utfpr')

  if(textLocaT.innerHTML.trim() === ''){
    textLocaT.innerHTML = `
      <div class="div-add">
        <ul>
          <li class="paragraph">Cornélio Procópio - PR</li>
          <li class="paragraph">Pato Branco - PR</li>
          <li class="paragraph">Ponta Grossa - PR</li>
        </ul>
      </div>`
  } else{
    textLocaT.innerHTML = ""
  }
}

function btnAddHtmlSt() {
  var textShiftT = document.querySelector('#text-shift-utfpr')

  if(textShiftT.innerHTML.trim() === ''){
    textShiftT.innerHTML = `
    <div class="div-add">
      <ul>
        <li class="paragraph">Turno Noturno: As aulas ocorrem de segunda a sábado, das 19:00 às 23:00.</li>
        <li class="paragraph">O curso é oferecido no turno noturno 12. Isso permite que os alunos possam conciliar os estudos com outras atividades durante o dia.</li>
      </ul>  
    </div>`
  } else{ textShiftT.innerHTML = ''; }
}

function btnAddHtmlNt() {
  var textNotationT = document.querySelector('#text-notation-utfpr')

  if(textNotationT.innerHTML.trim() === '') {
    textNotationT.innerHTML = `
    <div class="div-add">
      <li class="paragraph">O curso obteve a nota máxima(5) na recente avaliação realizada pelo Ministério da Educação (MEC)</li>
    </div>
    `
  } else{ textNotationT.innerHTML = '';}
}
function btnAddHtmlTt() {
  var textTimeT = document.querySelector('#text-time-utfpr')

  if(textTimeT.innerHTML.trim() === '') {
    textTimeT.innerHTML = `
    <div class="div-add">
      <ul>
        <li class="paragraph">Carga horária total: 2400 horas.</li>
        <li class="paragraph">Duração miníma de 3 anos.</li>
        <li class="paragraph">Duração máxima de 6 anos.</li>
      </ul>
    </div>`
  } else { textTimeT.innerHTML = '';}
}




// UFPR
function btnAddHtmlGu() {
  var textGridU = document.querySelector("#text-grid-ufpr")

  if(textGridU.innerHTML.trim() === ''){
    textGridU.innerHTML = `
    <div class="anos"> 
          <h1>1° Ano</h1>
          <ul>
            <li>Introdução à Programação
            <li>Estrutura de Dados
            <li>Sistemas Operacionais
            <li>Desenvolvimento Web
            <li>Linguagens de Programação
            <li>Engenharia de Software
            <li>Redes de Computadores
          </ul>
        </div>
    
        <div class="anos">
          <h1>2° Ano</h1>
          <ul>
              <li>Modelagem de Sistemas</li>
              <li>Programação Orientada a Objetos</li>
              <li>Banco de Dados</li>
              <li>Segurança da Informação</li>
              <li>Integração de Sistemas</li>
              <li>Desenvolvimento de Aplicações Móveis</li>
              <li>Gestão de Projetos</li>
          </ul>
        </div>
    
        <div class="anos">
          <h1>3° Ano</h1>
          <ul>
              <li>Arquitetura de Sistemas</li>
              <li>Inteligência Artificial</li>
              <li>Computação em Nuvem</li>
              <li>Desenvolvimento de Software Empresarial</li>
              <li>Tecnologias Web Avançadas</li>
              <li>Projeto Integrador</li>
              <li>Estágio Supervisionado</li>
          </ul>
        </div> `
  } else { textGridU.innerHTML = "";}
}

function btnAddHtmlLu() {
  var textLocaU = document.querySelector('#text-loca-ufpr')

  if(textLocaU.innerHTML.trim() === ''){
    textLocaU.innerHTML = `
    <div class="div-add">
      <ul>
        <li class="paragraph">Curitiba - PR </li>
      </ul>
    </div>`
  } else{ textLocaU.innerHTML = '';}
}

function btnAddHtmlSu() {
  var textShiftU = document.querySelector('#text-shift-ufpr')

  if(textShiftU.innerHTML.trim() === ''){
    textShiftU.innerHTML = `
    <div class="div-add">
      <ul>
        <li class="paragraph">Turno Vespertino: As aulas ocorrem de segunda a sábado, das 14:30 às 18:30.</li>
        <li class="paragraph">Turno Noturno: As aulas ocorrem de segunda a sábado, das 19:00 às 23:00.</li>
      </ul>  
    </div>`
  } else{ textShiftU.innerHTML = '';}
}

function btnAddHtmlNu() {
  var textNotationU = document.querySelector('#text-notation-ufpr')

  if(textNotationU.innerHTML.trim() === '') {
    textNotationU.innerHTML = `
    <div class="div-add">
      <li class="paragraph">O curso na UFPR possui uma nota "4" no Conceito de Curso (CC) do Exame Nacional de Desempenho dos Estudantes (Enade), segundo o Ministério da Educação (MEC)</li>
    </div>`
  } else{ textNotationU.innerHTML = '';}
}

function btnAddHtmlTu() {
  var textTimeU = document.querySelector('#text-time-ufpr')

  if(textTimeU.innerHTML.trim() === '') {
    textTimeU.innerHTML = `
    <div class="div-add">
      <ul>
        <li class="paragraph">Carga horária total: 2310 horas.</li>
        <li class="paragraph">Duração miníma de 3 anos.</li>
        <li class="paragraph">Duração máxima de 4,5 anos.</li>
      </ul>  
    </div>`
  } else { textTimeU.innerHTML = '';}
}
