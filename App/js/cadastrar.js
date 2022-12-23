
function fazPost(body) {
    //console.log("Body=", body)
    const json = JSON.stringify(body)
    let request = new XMLHttpRequest()
    request.open("GET", "http://localhost/api-veiculos/index.php?q=cadastrar&v=" + json, true)
    request.send(json)
    console.log("Json: ", json)

    request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
				alert("Cadastro feito com sucesso");
			}
			if(this.status != 200) {
				alert("Erro ao efetuar o cadastro. Tente novamente mais tarde")
			}
	}
}

function cadastrar()
{
    event.preventDefault();
    let modelo = document.getElementById("modelo").value;
    let cor    = document.getElementById("cor").value;
    let ano    = document.getElementById("ano").value;
    let placa  = document.getElementById("placa").value;

    body = {
        "modelo":modelo,
        "cor":cor,
        "ano":ano,
        "placa":placa
    }

    //console.log(nome);

    fazPost(body);
}