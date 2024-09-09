const pdf = require("html-pdf");

const nomeAluno = "Zaira Salomão da Silveira";
const curso = "Técnico em Desenvolvimento de Sistemas";
const materias = [
    { nome: "Programação Web", nota: 9.0 },
    { nome: "Banco de Dados", nota: 8.5 },
    { nome: "Redes de Computadores", nota: 8.0 },
    { nome: "Segurança da Informação", nota: 9.2 }
];
const logoSenai = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4TYKka5QS8bMtzBEp7Mxn_RwuOryFea-ag&s";

const conteudo = `
<h1 style='text-align: center; color: blue'>Boletim Escolar</h1>
<hr>
<img src='${logoSenai}' style='width: 150px; display: block; margin: 0 auto;'/>
<h2>Nome: ${nomeAluno}</h2>
<h3>Curso: ${curso}</h3>
<table border='1' style='width: 100%; text-align: left; border-collapse: collapse;'>
  <tr>
    <th>Matéria</th>
    <th>Nota</th>
  </tr>
  ${materias.map(materia => `
    <tr>
      <td>${materia.nome}</td>
      <td>${materia.nota}</td>
    </tr>`).join('')}
</table>
<p style='text-align: center;'>Este boletim foi gerado automaticamente pelo sistema.</p>
`;

pdf.create(conteudo, {}).toFile("./booletim-escolar.pdf", (err, res) => {
    if (err) {
        console.log("UM ERRO ACONTECEU: (", err);
    } else {
        console.log("PDF gerado com sucesso:", res);
    }
});
