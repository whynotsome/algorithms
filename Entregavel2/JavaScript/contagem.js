     function gerarCamposNotas() {
      var quantidadeNotas = document.getElementById("quantidadeNotas").value;
      var notasContainer = document.getElementById("notasContainer");

      notasContainer.innerHTML = '';

      for (var i = 0; i < quantidadeNotas; i++) {
          notasContainer.innerHTML += 
              '<label for="nota' + i + '">Nota ' + (i + 1) + ':</label>' +
              '<input type="number" id="nota' + i + '" min="0" max="100"><br>';
      }
  }

  function calcularAprovados() {
      var quantidadeNotas = document.getElementById("quantidadeNotas").value;
      var contador = 0;

      for (var i = 0; i < quantidadeNotas; i++) {
          var nota = document.getElementById("nota" + i).value;

          if (nota >= 50) {
              contador++;
          }
      }

      document.getElementById("resultado").innerHTML = 
          "Número de alunos que passaram no exame: " + contador;
  }