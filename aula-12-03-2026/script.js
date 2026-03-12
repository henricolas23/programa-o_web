//buscar o elementp via javascript
let menuElemento = document.getElementById("paragrafo"); //id
console.log(menuElemento)
console.log(menuElemento.textContent); //pegar o conteudo da tag


//buscar 
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
for(let i=0; i<paragrafo1.length;i++){
    console.log(paragrafo1[i]. textContent);
}

//buscar o elemento pela tag
let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//criar o elemento HTML
let destino = document.getElementById("elemento");
let p = document.createElement("p")
p.textContent = "paragrafo criado via javaScript";
destino.append(p); // adicionar ao DOM