const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "define",
        "var",
        "let"
      ],
      correta: 1 // Resposta B: "var"
    },
    {
      pergunta: "Como você faz um comentário de uma única linha em JavaScript?",
      respostas: [
        "/* comentário */",
        "// comentário",
        "<!-- comentário -->"
      ],
      correta: 1 // Resposta B: "// comentário"
    },
    {
      pergunta: "Qual é a função da instrução 'if' em JavaScript?",
      respostas: [
        "Definir uma função",
        "Iterar sobre um array",
        "Tomar decisões condicionais"
      ],
      correta: 2 // Resposta C: "Tomar decisões condicionais"
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Um bloco de código reutilizável",
        "Uma string especial"
      ],
      correta: 1 // Resposta B: "Um bloco de código reutilizável"
    },
    {
      pergunta: "Como você acessa o primeiro elemento de um array em JavaScript?",
      respostas: [
        "array[1]",
        "array.first()",
        "array[0]"
      ],
      correta: 2 // Resposta C: "array[0]"
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "addElement()",
        "push()",
        "append()"
      ],
      correta: 1 // Resposta B: "push()"
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Converte uma string para um número inteiro",
        "Arredonda um número para o inteiro mais próximo",
        "Converte um número para uma string"
      ],
      correta: 0 // Resposta A: "Converte uma string para um número inteiro"
    },
    {
      pergunta: "Como você declara uma função anônima em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "const func = function() {}",
        "anonymousFunction() {}"
      ],
      correta: 1 // Resposta B: "const func = function() {}"
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de iteração de arrays",
        "Um modelo de objeto para interagir com elementos HTML",
        "Um tipo de variável global"
      ],
      correta: 1 // Resposta B: "Um modelo de objeto para interagir com elementos HTML"
    },
    {
      pergunta: "Como você realiza uma iteração por todos os elementos de um array em JavaScript?",
      respostas: [
        "for (let i = 0; i < array.length; i++)",
        "foreach (let item in array)",
        "iterateArray(array)"
      ],
      correta: 0 // Resposta A: "for (let i = 0; i < array.length; i++)"
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
  
    for(let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }