function generateEmails() { 
  const emailList = document.getElementById('email-list'); 
  for (let i = 0; i < 10; i++) { 
    fetch('https://flynn.boolean.careers/exercises/api/random/mail') 
      .then(response => response.json()) 
      .then(data => { 
        // Crea un nuovo elemento <li> con l'indirizzo email 
        const listItem = document.createElement('li'); 
        listItem.textContent = data.response; 
        emailList.appendChild(listItem); 
      }) 
      .catch(error => console.error('Error fetching email:', error)); 
    } 
  } 
  // Genera gli indirizzi email quando la pagina è caricata 
  window.onload = generateEmails;