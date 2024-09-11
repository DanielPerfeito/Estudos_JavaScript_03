import dayjs from "dayjs";
import ' ./styles/index.css';

const h1 = document.querySelector('h1'); // Seleciona o primeiro elemento <h1>

h1.innerText = `
Hoje é
${dayjs().format('DD/MM/YYYY')}
`;