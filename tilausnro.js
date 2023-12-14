const generateRandomId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const idLength = 5;
  let randomId = '';

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};

const tilausnroElement = document.querySelector('.tilausnro');

const randomId = generateRandomId();
tilausnroElement.innerHTML = `Tilausnumero: ${randomId}`;
