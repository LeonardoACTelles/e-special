window.addEventListener('load', function() { 
    {
    const dataNascimentoInput = document.getElementById('dataNascimento');
    dataNascimentoInput.addEventListener('input', () => {
    const dataNascimento = new Date(dataNascimentoInput.value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();

  if (idade < 18) {
    dataNascimentoInput.setCustomValidity
    this.alert('Você deve ter pelo menos 18 anos para se cadastrar');
  } else {
    dataNascimentoInput.setCustomValidity
    /* this.alert('Parabéns, você é maior de 18 anos e pode se cadastrar'); */
  }
});
    }
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    emailInput.addEventListener('input', () => {
      if (emailInput.value !== confirmEmailInput.value) {
        confirmEmailInput.setCustomValidity
        this.alert('Os endereços de e-mail não correspondem');
      } else {
        confirmEmailInput.setCustomValidity('');
      }
    });
{
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    emailInput.addEventListener('input', () => {
      if (passwordInput.value !== confirmPasswordInput.value) {
        confirmEmailInput.setCustomValidity
        this.alert('As senhas não correspondem');
      } else {
        confirmEmailInput.setCustomValidity('');
      }
    });
}
{
    const campoInput = document.getElementsByClassName('column');
    campoInput.addEventListener('input', () => {
      if (campoInput.value === '') {
        campoInput.setCustomValidity
        this.alert('Este campo é obrigatório');
      } else {
        campoInput.setCustomValidity('');
      }
    });
     
}
{
    const senhaInput = document.getElementById('password');
    senhaInput.addEventListener('input', () => {
    const senha = senhaInput.value;

  if (senha.length < 8) {
    senhaInput.setCustomValidity('A senha deve ter pelo menos 8 caracteres');
  } else if (!/[A-Z]/.test(senha)) {
    senhaInput.setCustomValidity('A senha deve conter pelo menos uma letra maiúscula');
  } else if (!/[a-z]/.test(senha)) {
    senhaInput.setCustomValidity('A senha deve conter pelo menos uma letra minúscula');
  } else if (!/\d/.test(senha)) {
    senhaInput.setCustomValidity('A senha deve conter pelo menos um número');
  } else {
    senhaInput.setCustomValidity('');
  }
});
}
})




