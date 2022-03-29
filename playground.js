let palavras = ["carro", "mesa", "garfo", "porta", "mouse", "teclado", "pia", "quadro", "ventilador", "skate", "narigudo", "Tempo", "vento", "brilho", "ricota", "universo", "escola", "tesoura", "igreja", "forca", "leitura", "martelo", ""];

let words = palavras[Math.floor(Math.random() * 24)];
let silabas = words.split("", words.length);
// console.log(silabas)
// console.log(`${words} ${words.length}`);

function resposta(numLength) {
    let div;
    for(let i = 0; i < numLength; i++) {
        div = document.createElement("div");
        div.setAttribute("class", "resposta"+i)
        if(i == 0) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "15px"
            div.style.marginRight = "15px"
        } else if(i == 1) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "75px"
            div.style.marginRight = "15px"
        } else if (i == 2) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "135px"
            div.style.marginRight = "15px"
        } else if (i == 3) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "195px"
            div.style.marginRight = "15px"
        } else if (i == 4) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "255px"
            div.style.marginRight = "15px"
        } else if (i == 5) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "315px"
            div.style.marginRight = "15px"
        } else if (i == 6) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "375px"
            div.style.marginRight = "15px"
        } else if (i == 7) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "435px"
            div.style.marginRight = "15px"
        } else if (i == 8) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "495px"
            div.style.marginRight = "15px"
        } else if (i == 9) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "555px"
            div.style.marginRight = "15px"
        } else if (i == 10) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "615px"
            div.style.marginRight = "15px"
        } else if (i == 11) {
            document.body.appendChild(div)
            div.style.width = "50px"
            div.style.borderBottom = "1px solid white"
            div.style.position = "absolute"
            div.style.top = "300px"
            div.style.left = "675px"
            div.style.marginRight = "15px"
        }
    }

    var erro = 0

    function errado() {
        return erro += 1
    }


    let add = document.querySelector("#add").addEventListener("click", function() {
        var letra = prompt("digite uma letra")
        if(letra == silabas[0] || letra == silabas[1] || letra == silabas[2] || letra == silabas[3] || letra == silabas[4] || letra == silabas[5] || letra == silabas[6] || letra == silabas[7] || letra == silabas[8] || letra == silabas[9] || letra == silabas[10]) {
            // console.log(silabas)
            // console.log(letra)
            if(letra == silabas[0]) {
                    result = document.querySelector(".resposta0")
                    result.textContent = letra.toUpperCase()
                    result.style.top = "281px"
                    result.style.textAlign = "center"
                    result.style.color = "white"
            } else if(letra == silabas[1]) {
                result = document.querySelector(".resposta1")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            } else if(letra == silabas[2]) {
                result = document.querySelector(".resposta2")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            } else if(letra == silabas[3]) {
                result = document.querySelector(".resposta3")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            } else if(letra == silabas[4]) {
                result = document.querySelector(".resposta4")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            } else if(letra == silabas[5]) {
                result = document.querySelector(".resposta5")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            } else if(letra == silabas[6]) {
                result = document.querySelector(".resposta6")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            } else if(letra == silabas[7]) {
                result = document.querySelector(".resposta7")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            } else if(letra == silabas[8]) {
                result = document.querySelector(".resposta8")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            } else if(letra == silabas[9]) {
                result = document.querySelector(".resposta9")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            } else if(letra == silabas[10]) {
                result = document.querySelector(".resposta10")
                result.textContent = letra.toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
                result.style.color = "white"
            }
        } else {
            if(letra != silabas[0] || letra != silabas[1] || letra != silabas[2] || letra != silabas[3] || letra != silabas[4] || letra != silabas[5] || letra != silabas[6] || letra != silabas[7] || letra != silabas[8] || letra != silabas[9] || letra != silabas[10]) {
                i = errado()
                console.log(i)
                if(i == 1) {
                    let div = document.createElement("div")
                    div.setAttribute("id", "cabeca")
                    document.body.appendChild(div)
                } 
                if(i == 2) {
                    let div1 = document.createElement("div")
                    div1.setAttribute("id", "corpo")
                    document.body.appendChild(div1)
                } 
                if(i == 3) {
                    let div2 = document.createElement("div")
                    div2.setAttribute("id", "braco1")
                    document.body.appendChild(div2)
                } 
                if(i == 4) {
                    let div3 = document.createElement("div")
                    div3.setAttribute("id", "braco2")
                    document.body.appendChild(div3)
                } 
                if(i == 5) {
                    let div4 = document.createElement("div")
                    div4.setAttribute("id", "perna1")
                    document.body.appendChild(div4)
                } 
                if(i == 6) {
                    var newBtn = document.createElement("button")
                    newBtn.textContent = "Jogar novamente"
                    document.body.appendChild(newBtn)
                    newBtn.addEventListener("click", function() {
                        location.reload("index.html")
                    })
                    let div5 = document.createElement("div")
                    div5.setAttribute("id", "perna2")
                    document.body.appendChild(div5)
                    alert(`Você perdeu!!`)
                    for(let i = 0; i < words.length; i++) {
                        let result = document.querySelector(".resposta"+i)
                        result.textContent = silabas[i].toUpperCase()
                        result.style.top = "281px"
                        result.style.textAlign = "center"
                        // location.reload("index.html")
                    }
                }    
            }
        }
    })

    let sort = document.querySelector("#sort").addEventListener("click", function() {
        let lastC = prompt("Digite a palavra:")
        if(lastC == words) {
            for(let i = 0; i < words.length; i++) {
                let result = document.querySelector(".resposta"+i)
                result.textContent = silabas[i].toUpperCase()
                result.style.top = "281px"
                result.style.textAlign = "center"
            }
            alert("Você Ganhou")
            var newBtn = document.createElement("button")
            newBtn.textContent = "Jogar novamente"
            document.body.appendChild(newBtn)
            newBtn.addEventListener("click", function() {
                location.reload("index.html")
            })
        } else {
            alert("Errado")
        }
    })
}

resposta(words.length)