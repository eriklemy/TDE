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
        console.log("ok");
    } else {
        console.log("ko");
        disableDarkMode();
    }
});


$(document).ready(function() {
    fLocalEventosClick();

});

function fLocalEventosClick() {
    $("#confirmado").click(function(){
        fLocalComunicaServidor("inserir");
        return false;
    });

    $("#listar").click(function() {
        fLocalComunicaServidor("listar");
        return false;
    });
}

function fLocalComunicaServidor(arquivo) {
    var valores = $("form").serialize();
    $.ajax({
        type: "POST",
        dataType: "json",
        data: valores,
        url: "../php/" + arquivo + ".php",
        success: function(retorno) {
            var conteudo = "";
            for(var i = 0; i < retorno.length; i++){
                conteudo += "<td>";
                conteudo += "<td>" + retorno[i]["nome"] + "</td>";
                conteudo += "<td>" + retorno[i]["sobrenome"] + "</td>";
                conteudo += "<td>" + retorno[i]["email"] + "</td>";
                conteudo += "<td>" + retorno[i]["username"] + "</td>";
                conteudo += "</tr>";
            }
            $("table-lista").html(conteudo);
        } 
    });
}



const entrar = document.querySelector('#entrar');

entrar.addEventListener('click', () => {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;
    var senhaVerf = document.getElementById("senhaVerf").value;

    if (verificaSenha(senha, senhaVerf) == true){
        cadastro.push(nome);
        cadastro.push(sobrenome);
        cadastro.push(email);
        cadastro.push(username);
        cadastro.push(senha);

        alert("cadastro realizado com sucesso!!");
    } else alert("cadastro não efetuado!!");
});

function verificaSenha(senha, senhaVerf){
    if(senha == senhaVerf)
        return true;
    else return false;
}
