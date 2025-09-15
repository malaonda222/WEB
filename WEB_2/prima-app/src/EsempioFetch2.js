useEffect(() => {
  fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Qui hai i dati recuperati
    })
    .catch(error => {
      console.error('Errore durante il fetch:', error);
    });
}, []);