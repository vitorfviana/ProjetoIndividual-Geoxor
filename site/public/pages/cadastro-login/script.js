function cadastrar() {

    var email = document.getElementById("input_email").value;

    var emailVar = email.toLowerCase();
    var senhaVar = document.getElementById("input_senha").value;
    var senha_confirm = document.getElementById("input_conf_senha").value;

    const emailVarRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const senhaVarRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;

    if (emailVar === '' || senhaVar === '' || senha_confirm === '') {
      Swal.fire({
        title: 'Preencha todos os campos',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
  
    if (emailVarRegex.test(emailVar) === false) {
      Swal.fire({
        title: 'Email invalido',
        text: 'Por favor, digite um email valido.',
        icon: 'warning',
        confirmButtonText: 'Ok',
      });
      return;
    }
  
    if (senhaVarRegex.test(senhaVar) === false) {
      Swal.fire({
        title: 'Senha invalida',
        text: 'Sua senha deve ter pelo menos 1 carácter maiúsculo, 1 minusculo, 1 especial e 1 numero.',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
  
    if (senhaVar !== senha_confirm) {
      Swal.fire({
        title: 'Senhas não conferem',
        text: 'Digite a mesma senha nos dois campos.',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          emailServer: emailVar,
          senhaServer: senhaVar
      })
  }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {

          setTimeout(() => {
              window.location = "login.html";
          }, "2000")
          
      } else {
          throw ("Houve um erro ao tentar realizar o cadastro!");
      }
  }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
  });

  return false;
}

function entrar() {

  var emailVar = document.getElementById("input_email").value
  var senhaVar = document.getElementById("input_senha").value;

  if (emailVar == "" || senhaVar == "") {
    Swal.fire({
      title: 'Preencha todos os campos',
      icon: 'warning',
      showConfirmButton: false,
      timer: 2000,
    });
    return;
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          emailServer: emailVar,
          senhaServer: senhaVar
      })
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")

      if (resposta.ok) {
          console.log(resposta);

          resposta.json().then(json => {
              console.log(json);
              console.log(JSON.stringify(json));

              sessionStorage.ID_USUARIO = json.id;

              setTimeout(function () {
                  window.location = "../sobre/sobre.html";
              }, 1000); // apenas para exibir o loading

          });

      } else {

          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then(texto => {
              console.error(texto);
          });
      }

  }).catch(function (erro) {
      console.log(erro);
  })

  return false;
}

