var foto = document.querySelector(".fotoperfil");
foto.addEventListener("click", inicio);

function inicio() {
  let inicio = document.querySelector("section#caixainfo");
  inicio.innerHTML = `
  <div id="slot">
  <h2 id="iep">IDADE</h2>
  <h2 id="idade">20</h2>
</div>
<div class="idadebarra"></div>

<div id="slot">
  <h2 id="iep">PAÍS</h2>
  <h2 id="pais">BRASIL</h2>
</div>
<div id="barrapaisestado"></div>

<div id="slot">
  <h2 id="iep">ESTADO</h2>
  <h2 id="estado">PARAÍBA</h2>
</div>
<div id="barrapaisestado"></div>

<div id="habilidades">
  <h2 id="habilidades">HABILIDADES</h2>
</div>

<div id="slot">
  <h2 id="iep">FRONT-END</h2>
  <h2 id="fb">50</h2>
</div>
<div id="fbbarra"></div>

<div id="slot">
  <h2 id="iep">BACK-END</h2>
  <h2 id="fb">50</h2>
</div>
<div id="fbbarra"></div>

<div class="icons">
  <img id="icons" src="./imagens/HTML5.png" />
  <img id="icons" src="./imagens/CSS3.png" />
  <img id="icons" src="./imagens/JavaScript.png" />
  <img id="icons" src="./imagens/React.png" />
</div>`;
}

function projetos() {
  let projetos = document.querySelector("section#caixainfo");
  let p = document.createElement("h1");
  let c = document.createElement("div");

  projetos.innerHTML = "";
  p.innerHTML = "PROJETOS";
  p.style.fontSize = "calc(9px + 0.9vw)";
  p.style.fontWeight = "normal";
  p.style.margin = "1vw 0vw 0vw 0.8vw";
  p.style.color = "white";
  p.style.textShadow = "-1px 1px 0px rgb(29, 82, 246)";

  c.style.width = "calc(100% - 1vw)";
  c.style.height = "calc(100px + 10vw)";
  c.style.margin = "1vw 0vw 0vw 0.8vw";
  c.style.border = "solid 1px #1354f9";

  projetos.appendChild(p);
  projetos.appendChild(c);
  projetos.innerHTML += `
   <h2 class="redes">REDES</h2>
   <div class="social">
      <a href="https://www.instagram.com/gabrielsaintz/">
         <img id="icon" src="./imagens/Instagram.png" />
      </a>
      <a href="https://www.linkedin.com/in/gabriel-cezario-dos-santos-023452236/">
         <img id="icon" src="./imagens/Linkedin.png"
      /></a>
   </div>
   `;
}

function sobre() {
  let sobre = document.querySelector("section#caixainfo");
  sobre.innerHTML = `
   <h2>UM POUCO SOBRE MIM</h2>
   <p>
      &nbsp;Natural da Paraíba, iniciei minha jornada no mundo da programação dia 21 de março
      de 2022 e minha linguagem de entrada foi o JavaScript.
   </p>
   <h2>PORQUE PROGRAMAÇÃO?</h2>
   <p>
      &nbsp;Sempre gostei de tecnologia, isso fez com que eu me interessasse pela área, quando
      terminei o ensino médio tinha como objetivo trabalhar com programação.
   </p>
   <p>
      &nbsp;Porém, nem sempre as coisas acontecem como planejado, por alguns motivos, acabei
      desviando meu trajeto, recebi uma proposta para trabalhar na área de produção
      audiovisual. com isso passei quase 2 anos trabalhando com edição de vídeos, após isso,
      voltei meu foco para a programação e estou na área até então.
   </p>
   <h2 class="redes">REDES</h2>
   <div class="social">
      <a href="https://www.instagram.com/gabrielsaintz/">
         <img id="icon" src="./imagens/Instagram.png" />
      </a>
      <a href="https://www.linkedin.com/in/gabriel-cezario-dos-santos-023452236/">
         <img id="icon" src="./imagens/Linkedin.png"
      /></a>
   </div>
   `;
}
