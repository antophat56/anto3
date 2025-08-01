const preguntas = [
  {
    pregunta: "Cuantos lados tiene un triangulo?",
    opciones: ["2", "3", "4", "5"],
    respuestaCorrecta: "3"
  },
  {
    pregunta: "Que figura tiene cuatro lados iguales y cuatro angulos rectos?",
    opciones: ["Rectangulo", "Cuadrado", "Rombo", "Trapecio"],
    respuestaCorrecta: "Cuadrado"
  },
  {
    pregunta: "Como se llama una figura que tiene tres lados?",
    opciones: ["Cuadrilatero", "Pentagono", "Triangulo", "Hexagono"],
    respuestaCorrecta: "Triangulo"
  },
  {
    pregunta: "Cual es la figura que no tiene lados rectos?",
    opciones: ["Circulo", "Cuadrado", "Triangulo", "Rombo"],
    respuestaCorrecta: "Circulo"
  },
  {
    pregunta: "Que figura geometrica parece una pelota?",
    opciones: ["Cubo", "Esfera", "Prisma", "Piramide"],
    respuestaCorrecta: "Esfera"
  },
  {
    pregunta: "Cuantas caras tiene un cubo?",
    opciones: ["4", "6", "8", "12"],
    respuestaCorrecta: "6"
  },
  {
    pregunta: "Como se llama el cuerpo geometrico que parece una caja?",
    opciones: ["Esfera", "Cilindro", "Cubo", "Cono"],
    respuestaCorrecta: "Cubo"
  },
  {
    pregunta: "Que cuerpo geometrico tiene una base circular y termina en punta?",
    opciones: ["Cubo", "Piramide", "Cilindro", "Cono"],
    respuestaCorrecta: "Cono"
  },
  {
    pregunta: "Que figura tiene forma de rueda?",
    opciones: ["Circulo", "Ovalo", "Cuadrado", "Triangulo"],
    respuestaCorrecta: "Circulo"
  },
  {
    pregunta: "Cuantos vertices tiene un cuadrado?",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: "4"
  },
  {
    pregunta: "Que figura tiene seis caras cuadradas?",
    opciones: ["Piramide", "Prisma rectangular", "Cubo", "Cilindro"],
    respuestaCorrecta: "Cubo"
  },
  {
    pregunta: "Cual es el nombre del cuerpo geometrico que parece una lata?",
    opciones: ["Esfera", "Cilindro", "Cono", "Cubo"],
    respuestaCorrecta: "Cilindro"
  },
  {
    pregunta: "Cuantos lados tiene un pentagono?",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: "5"
  },
  {
    pregunta: "Que figura tiene cinco puntas iguales y lados del mismo tamano?",
    opciones: ["Pentagono", "Estrella", "Hexagono", "Octogono"],
    respuestaCorrecta: "Estrella"
  },
  {
    pregunta: "Que cuerpo geometrico tiene una sola cara curva y dos bases circulares?",
    opciones: ["Esfera", "Piramide", "Cilindro", "Cono"],
    respuestaCorrecta: "Cilindro"
  },
  {
    pregunta: "Que figura tiene cuatro lados, pero no todos son iguales?",
    opciones: ["Cuadrado", "Rectangulo", "Triangulo", "Circulo"],
    respuestaCorrecta: "Rectangulo"
  },
  {
    pregunta: "Cual figura tiene exactamente un par de lados paralelos?",
    opciones: ["Cuadrado", "Rombo", "Trapecio", "Triangulo"],
    respuestaCorrecta: "Trapecio"
  },
  {
    pregunta: "Como se llama una figura que tiene seis lados?",
    opciones: ["Pentagono", "Hexagono", "Heptagono", "Octogono"],
    respuestaCorrecta: "Hexagono"
  },
  {
    pregunta: "Que figura tiene tres vertices y tres lados?",
    opciones: ["Cuadrado", "Rombo", "Rectangulo", "Triangulo"],
    respuestaCorrecta: "Triangulo"
  },
  {
    pregunta: "Que figura tiene mas lados: un cuadrado o un hexagono?",
    opciones: ["Cuadrado", "Hexagono", "Ambos tienen igual", "Ninguno tiene lados"],
    respuestaCorrecta: "Hexagono"
  },
  {
    pregunta: "Que es un plano en geometria?",
    opciones: ["Una linea recta", "Una superficie plana infinita", "Un punto", "Un angulo"],
    respuestaCorrecta: "Una superficie plana infinita"
  },
  {
    pregunta: "Que se puede dibujar sobre un plano?",
    opciones: ["Solo lineas", "Solo puntos", "Figuras geometricas", "Nada"],
    respuestaCorrecta: "Figuras geometricas"
  },
  {
    pregunta: "Como se llama la linea que no es recta?",
    opciones: ["Segmento", "Semirrecta", "Curva", "Recta"],
    respuestaCorrecta: "Curva"
  },
  {
    pregunta: "Que tipo de linea es como un camino torcido?",
    opciones: ["Recta", "Segmento", "Curva", "Semirrecta"],
    respuestaCorrecta: "Curva"
  },
  {
    pregunta: "Que linea va de un punto a otro en forma recta?",
    opciones: ["Curva", "Segmento", "Plano", "Punto"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "Como se llama la parte de una linea que tiene un punto de inicio y se extiende sin fin en una direccion?",
    opciones: ["Recta", "Segmento", "Semirrecta", "Curva"],
    respuestaCorrecta: "Semirrecta"
  },
  {
    pregunta: "Como se llama una linea que tiene dos puntos: uno de inicio y uno final?",
    opciones: ["Semirrecta", "Recta", "Segmento", "Curva"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "Que linea tiene principio, pero no tiene fin?",
    opciones: ["Segmento", "Recta", "Semirrecta", "Curva"],
    respuestaCorrecta: "Semirrecta"
  },
  {
    pregunta: "Que linea tiene principio y fin?",
    opciones: ["Semirrecta", "Recta", "Segmento", "Plano"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "Cual es la diferencia entre una linea recta y una curva?",
    opciones: ["No hay diferencia", "La recta es infinita y la curva no", "La recta no cambia de direccion y la curva si", "La curva es mas larga"],
    respuestaCorrecta: "La recta no cambia de direccion y la curva si"
  },
  {
    pregunta: "Como se llama la parte de una linea recta comprendida entre dos puntos?",
    opciones: ["Recta", "Semirrecta", "Segmento", "Curva"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "Cuantas lineas rectas se pueden trazar entre dos puntos?",
    opciones: ["Infinitas", "Dos", "Una", "Ninguna"],
    respuestaCorrecta: "Una"
  },
  {
    pregunta: "Que es una semirrecta?",
    opciones: ["Una linea con un punto inicial pero sin fin", "Una linea con dos extremos", "Una linea infinita", "Una linea curva"],
    respuestaCorrecta: "Una linea con un punto inicial pero sin fin"
  },
  {
    pregunta: "Que es un segmento?",
    opciones: ["Una linea infinita", "Una linea con un punto inicial pero sin fin", "Una linea con dos extremos", "Una linea curva"],
    respuestaCorrecta: "Una linea con dos extremos"
  },
  {
    pregunta: "Como se representa una linea curva?",
    opciones: ["Con una linea recta", "Con un arco", "Con dos puntos", "Con un angulo"],
    respuestaCorrecta: "Con un arco"
  },
  {
    pregunta: "Que linea se usa para representar un borde recto?",
    opciones: ["Curva", "Segmento", "Semirrecta", "Plano"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "Cual es la diferencia entre una recta y una semirrecta?",
    opciones: ["No hay diferencia", "La recta es infinita en ambas direcciones, la semirrecta tiene un punto inicial", "La semirrecta es curva", "La recta es mas larga"],
    respuestaCorrecta: "La recta es infinita en ambas direcciones, la semirrecta tiene un punto inicial"
  },
  {
    pregunta: "Cual es la diferencia entre una semirrecta y un segmento?",
    opciones: ["No hay diferencia", "La semirrecta tiene un punto inicial pero no final, el segmento tiene dos extremos", "El segmento es curvo", "La semirrecta es mas larga"],
    respuestaCorrecta: "La semirrecta tiene un punto inicial pero no final, el segmento tiene dos extremos"
  },
  {
    pregunta: "Que tipo de linea forma una esquina?",
    opciones: ["Recta", "Curva", "Segmento", "Angulo"],
    respuestaCorrecta: "Angulo"
  },
  {
    pregunta: "Que instrumento se usa para trazar lineas rectas?",
    opciones: ["Compas", "Transportador", "Regla", "Escuadra"],
    respuestaCorrecta: "Regla"
  },
  {
    pregunta: "Que es un angulo?",
    opciones: ["Una linea curva", "Una figura geometrica de tres lados", "La union de dos semirrectas con un origen comun", "Un punto en el espacio"],
    respuestaCorrecta: "La union de dos semirrectas con un origen comun"
  },
  {
    pregunta: "Como se forma un angulo?",
    opciones: ["Con tres puntos", "Con la union de dos rectas paralelas", "Con la union de dos semirrectas que comparten un punto", "Con la union de dos curvas"],
    respuestaCorrecta: "Con la union de dos semirrectas que comparten un punto"
  },
  {
    pregunta: "Cuantos lados tiene un angulo?",
    opciones: ["1", "2", "3", "4"],
    respuestaCorrecta: "2"
  },
  {
    pregunta: "Que nombre recibe el punto donde se unen dos lineas para formar un angulo?",
    opciones: ["Vertice", "Lado", "Extremo", "Radio"],
    respuestaCorrecta: "Vertice"
  },
  {
    pregunta: "Que tipo de angulo tiene 90 grados?",
    opciones: ["Agudo", "Obtuso", "Recto", "Llano"],
    respuestaCorrecta: "Recto"
  },
  {
    pregunta: "Como se llama el angulo que es menor que 90 grados?",
    opciones: ["Recto", "Obtuso", "Agudo", "Llano"],
    respuestaCorrecta: "Agudo"
  },
  {
    pregunta: "Como se llama el angulo que es mayor que 90 grados pero menor que 180 grados?",
    opciones: ["Agudo", "Recto", "Obtuso", "Llano"],
    respuestaCorrecta: "Obtuso"
  },
  {
    pregunta: "Cuales son los elementos de un angulo?",
    opciones: ["Lado y vertice", "Vertice y lados", "Base y altura", "Centro y radio"],
    respuestaCorrecta: "Vertice y lados"
  },
  {
    pregunta: "Que instrumento se usa para medir angulos?",
    opciones: ["Regla", "Transportador", "Compas", "Escuadra"],
    respuestaCorrecta: "Transportador"
  },
  {
    pregunta: "Como se llama un angulo que forma una linea recta?",
    opciones: ["Recto", "Agudo", "Obtuso", "Llano"],
    respuestaCorrecta: "Llano"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById("quizForm");
  const totalPreguntas = preguntas.length;
  const valorPorPregunta = 10 / totalPreguntas;

  // Crear las preguntas en el formulario
  preguntas.forEach((pregunta, index) => {
    const div = document.createElement("div");
    div.className = "question";
    
    const titulo = document.createElement("p");
    titulo.textContent = `${index + 1}. ${pregunta.pregunta}`;
    div.appendChild(titulo);
    
    pregunta.opciones.forEach((opcion, opcionIndex) => {
      const opcionDiv = document.createElement("div");
      opcionDiv.className = "option";
      
      const input = document.createElement("input");
      input.type = "radio";
      input.id = `pregunta${index + 1}_opcion${opcionIndex + 1}`;
      input.name = `pregunta${index + 1}`;
      input.value = opcion;
      
      const label = document.createElement("label");
      label.htmlFor = `pregunta${index + 1}_opcion${opcionIndex + 1}`;
      label.textContent = opcion;
      
      opcionDiv.appendChild(input);
      opcionDiv.appendChild(label);
      div.appendChild(opcionDiv);
    });
    
    formulario.appendChild(div);
  });
});

let tiempoRestante = 30 * 60; // 30 minutos en segundos
let timer;
let valorPorPregunta = 0;
let totalPreguntas = 0;

function iniciarTemporizador() {
  // Asegurarse de que el temporizador no esté ya corriendo
  if (timer) {
    clearInterval(timer);
  }
  
  tiempoRestante = 30 * 60; // Restablecer a 30 minutos
  const temporizadorElemento = document.getElementById("temporizador");
  
  // Mostrar el tiempo inicial
  actualizarTemporizador();
  
  timer = setInterval(() => {
    tiempoRestante--;
    
    actualizarTemporizador();

    if (tiempoRestante <= 0) {
      clearInterval(timer);
      mostrarResultados();
    }
  }, 1000);
}

function actualizarTemporizador() {
  const temporizadorElemento = document.getElementById("temporizador");
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  temporizadorElemento.textContent = `${minutos}:${segundos.toString().padStart(2, "0")}`;
}

function mostrarResultados() {
  clearInterval(timer);

  const respuestas = [];
  let respuestasCorrectas = 0;
  totalPreguntas = preguntas.length;
  valorPorPregunta = 10 / totalPreguntas;

  preguntas.forEach((pregunta, index) => {
    const seleccionadas = document.querySelectorAll(`input[name="pregunta${index + 1}"]:checked`);
    let respuestaSeleccionada = "";
    
    if (seleccionadas.length > 0) {
      respuestaSeleccionada = seleccionadas[0].value;
      if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
        respuestasCorrectas++;
      }
    }
    
    respuestas.push(respuestaSeleccionada);
  });

  const calificacion = (respuestasCorrectas * valorPorPregunta).toFixed(2);
  const resultadosElement = document.getElementById("resultados");
  
  let resultadoHTML = `
    <p>Muy bien! Has completado el cuestionario.</p>
    <p><strong>Tu calificacion es:</strong> ${calificacion} / 10</p>
    <p><strong>Respuestas correctas:</strong> ${respuestasCorrectas} de ${totalPreguntas}</p>`;
  
  resultadosElement.innerHTML = resultadoHTML;
  
  // Mostrar botón de reiniciar y ocultar el de enviar
  document.getElementById("submitButton").style.display = "none";
  document.getElementById("resetButton").style.display = "block";

  // Desplazarse hasta los resultados
  resultadosElement.scrollIntoView({ behavior: 'smooth' });
}

function reiniciarCuestionario() {
  // Detener el temporizador
  if (timer) {
    clearInterval(timer);
  }
  
  // Mostrar el formulario de login
  document.getElementById("cuestionarioContainer").classList.add("oculto");
  document.getElementById("loginContainer").classList.remove("oculto");
  
  // Limpiar todas las selecciones
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false;
  });
  
  // Limpiar resultados
  document.getElementById("resultados").innerHTML = "";
  
  // Mostrar botón de enviar y ocultar botón de reiniciar
  document.getElementById("submitButton").style.display = "block";
  document.getElementById("resetButton").style.display = "none";
  
  // Limpiar campos de login
  document.getElementById("usuario").value = "";
  document.getElementById("contrasena").value = "";
  
  // Reiniciar el temporizador a su valor inicial
  tiempoRestante = 30 * 60;
  actualizarTemporizador();
}

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value.trim().toLowerCase();
  const contrasena = document.getElementById("contrasena").value;

  if (usuario === "admin" && contrasena === "1234") {
    document.getElementById("loginContainer").classList.add("oculto");
    document.getElementById("cuestionarioContainer").classList.remove("oculto");
    document.getElementById("loginError").textContent = "";
    iniciarTemporizador();
  } else {
    document.getElementById("loginError").textContent = "Usuario o contrasena incorrectos.";
  }
}

// Permitir enviar el formulario de login con Enter
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        iniciarSesion();
      }
    });
  }
});