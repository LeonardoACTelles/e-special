const form = document.getElementById("form")
const username = document.getElementById("username")
const dataNascimentoInput = document.getElementById('dataNasc');
const estadoConfirmation = document.getElementById("estado")
/* const dateNasc = document.getElementById("dataNasc") */
const email = document.getElementById("email")
const emailConfirmation = document.getElementById("emailConfirm")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

/* fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome')
.then(response => response.json())

.then(data => console.log(data)) */

form.addEventListener("submit", (e) => {
  e.preventDefault()
  validacaoNascimento()
  checkInputs()
})

function validacaoNascimento() {
  const dataNascimento = new Date(dataNascimentoInput.value);
  const hoje = new Date();
  const idade = hoje.getFullYear() - dataNascimento.getFullYear();
  /* let formIsValid = true */

  if (idade < 18) {
    /* formIsValid = false */
    setErrorFor(dataNasc, "Você deve ter pelo menos 18 anos para se cadastrar")
    /* dataNascimentoInput.setCustomValidity('Você deve ter pelo menos 18 anos para se cadastrar');  */
  } else if (idade != "") {
    /* formIsValid = false */
    setErrorFor(dataNasc, "Por favor, insira uma data válido.")
  }  else {
    setSuccessFor(dataNasc)
    /* dataNascimentoInput.setCustomValidity(''); */
  }

}  

function checkInputs() {
  const usernameValue = username.value
 /*  const dateNascValue = dateNasc.value */
  const stageValue = estadoConfirmation.value
  const emailValue = email.value
  const passwordValue = password.value
  const passwordConfirmationValue = passwordConfirmation.value
  const emailConfirmationValue = emailConfirmation.value

  let formIsValid = true

  if (usernameValue === "") {
    formIsValid = false
    setErrorFor(username, "O nome completo é obrigatório.")
  } else {
    setSuccessFor(username)
  } 

  if (stageValue != "São Paulo") {
    formIsValid = false
    setErrorFor(estadoConfirmation, "Ei! Não entregamos para este estado")
  } else {
    setSuccessFor(estadoConfirmation)
  } 

/*   if (dateNascValue < "18") {
    formIsValid = false
    setErrorFor(dateNasc, "Você deve ser maior de 18 anos")
  } else {
    setSuccessFor(dateNasc)
  }  */

  if (emailValue === "") {
    formIsValid = false
    setErrorFor(email, "O email é obrigatório.")
  } else if (!checkEmail(emailValue)) {
    formIsValid = false
    setErrorFor(email, "Por favor, insira um email válido.")
  } else {
    setSuccessFor(email)
  }

  if (emailConfirmationValue === "") {
    formIsValid = false
    setErrorFor(emailConfirmation, "A confirmação de e-mail é obrigatória.")
  } else if (emailConfirmationValue !== emailConfirmation) {
    formIsValid = false
    setErrorFor(emailConfirmation, "Os e-mails não conferem.")
  } else {
    setSuccessFor(emailConfirmation)
  }


  if (passwordValue === "") {
    formIsValid = false
    setErrorFor(password, "A senha é obrigatória.")
  } else if (passwordValue.length < 7) {
    formIsValid = false
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.")
  } else {
    setSuccessFor(password)
  }

  if (passwordConfirmationValue === "") {
    formIsValid = false
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.")
  } else if (passwordConfirmationValue !== passwordValue) {
    formIsValid = false
    setErrorFor(passwordConfirmation, "As senhas não conferem.")
  } else {
    setSuccessFor(passwordConfirmation)
  }

  if (formIsValid) {
    console.log("O formulário está 100% válido!")
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector("small")

  // Adiciona a mensagem de erro
  small.innerText = message

  // Adiciona a classe de erro
  formControl.className = "form-control error"
}

function setSuccessFor(input) {
  const formControl = input.parentElement

  // Adicionar a classe de sucesso
  formControl.className = "form-control success"
}

function checkEmail(email = '') {
  return email.includes('@')
}