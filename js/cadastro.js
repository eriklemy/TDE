// jQuery comunicação com php 
var cadastro = [];
$(document).ready(function() {
    confirmaCadastro();   
});

function confirmaCadastro() {
    $("#cadastrar").click(function() {
        var nome = document.getElementById("nome").value;
        var sobrenome = document.getElementById("sobrenome").value;
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var senha = document.getElementById("senha").value;
        var senhaVerf = document.getElementById("senhaVerf").value;

        cadastro.push(nome);
        cadastro.push(sobrenome);
        cadastro.push(email);
        cadastro.push(username);
        
        if (verificaSenha(senha, senhaVerf) && !verificaEntrada(cadastro)) {
            cadastro.push(senha);
            alert("cadastro realizado com sucesso!!");
            fLocalComunicaServidor("inserir");
        } else alert("cadastro não efetuado!!, Necessaio preencher todos os campos e/ou SENHAS não CONFEREM!!");
        return false;
    })
}

function fLocalComunicaServidor(arquivo) {
    var my_data = $("form").serialize();
    $.ajax({
        type: "POST",
        dataType: "json",
        data: my_data,
        url: "php/" + arquivo + ".php",
        success: function(retorno) {
            var conteudo = "";
            for(var i = 0; i < retorno.length; i++){
                conteudo += "<tr>";
                conteudo += "<td>" + retorno[i]["nome"] + "</td>";
                conteudo += "<td>" + retorno[i]["sobrenome"] + "</td>";
                conteudo += "<td>" + retorno[i]["email"] + "</td>";
                conteudo += "<td>" + retorno[i]["username"] + "</td>";
                conteudo += "<td>" + retorno[i]["senha"] + "</td>";
                conteudo += "</tr>";
            }
            // $("table-lista").html(conteudo);
        } 
    });
    window.location.href = "pages/game.html";
}

function verificaSenha(senha, senhaVerf) {
    if(senha === senhaVerf && senha != "")
        return true;
    else return false;
}

function verificaEntrada(cadastro) {
    var cont = 0;
    for(var i = 0; i < cadastro.length; i++){
        if(cadastro[i] == "")
            cont += 1;
    }
    return (cont == cadastro.length); 
}

// darkmode configuration
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
};

if(darkMode === 'enabled') {
    enableDarkMode();
};

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
