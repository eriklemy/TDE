// jQuery comunicação com php 
$(document).ready(function() {
    confirmaCadastro();
});

function confirmaCadastro() {
    $("#cadastrar").click(function() {
        fLocalComunicaServidor("inserir");
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
            $("table-lista").html(conteudo);
        } 
    });
    window.location.href = "pages/game.html";
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
        console.log("ok");
    } else {
        console.log("ko");
        disableDarkMode();
    }
});
