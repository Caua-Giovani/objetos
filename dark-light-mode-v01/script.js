
// Evento que é disparado quando o conteúdo do DOM (estrutura HTML) é totalmente carregado
  const loadTheme = () =>{
    // Verifica no localStorage se existe um tema salvo. Se não houver, define o tema padrão como 'light'
    const theme = localStorage.getItem('theme');
    if(theme === 'dark'){
      // Adiciona a classe correspondente ao tema (light ou dark) no corpo da página (body)
      container.classList.toggle('dark')
    }
  }

  (window.onload = loadTheme)

  
// Seleciona o botão de alternar tema usando o ID 'toggle-theme' e adiciona um evento de clique
  const button = document.querySelector('.themeToggle')
  const container = document.querySelector('body')

  button.addEventListener('click',()=>{
    // Verifica qual tema está atualmente aplicado no body (light ou dark)
    // Se o tema for 'light', muda para 'dark', caso contrário, muda para 'light'

    // Adiciona a nova classe de tema ao body
    container.classList.toggle('dark');

    if (localStorage.getItem('theme')){
      // Remove as classes de tema antigas ('light' e 'dark') para evitar conflito
      localStorage.removeItem('theme')
    } 
    else{
      // Armazena o novo tema no localStorage para que a preferência do usuário seja mantida
      localStorage.setItem('theme','dark')
    };
  });
