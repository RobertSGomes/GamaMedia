document.getElementById("qtde").addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        criarInputs(e.target.value)
    }
})

function criarInputs(qtdes) {
    document.getElementById("valores").innerHTML = ""

    for (let i = 0; i < qtdes; i++) {
        document.getElementById("valores").innerHTML += `
            <input type="number" id="inp_${i}">
        `
    }

    document.getElementById("valores").innerHTML += `
        <button type="button" id="calcular">CALCULAR MÉDIA</button>
    `

    document.getElementById("calcular").addEventListener("click", function () {
        calcularMedia()
    })
}

function calcularMedia() {
    const qtdes = document.getElementById("qtde").value
    var total = 0

    for (let i = 0; i < qtdes; i++) {
        total += parseInt(document.getElementById(`inp_${i}`).value)
    }

    alert("média: " + total / qtdes)
}