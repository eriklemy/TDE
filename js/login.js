// jQuery comunicação com php 
$(document).ready(function() {
    fLocalEventosClick();
});

function fLocalEventosClick() {
    $("#confirmar").click(function() {
        fLocalComunicaServidor("inserir");
        return false;
    });

    $("#mostrar").click(function() {
        fLocalComunicaServidor("listar");
        return false;
    });
}

function fLocalComunicaServidor(arquivo) {
    $.ajax({
        type: "POST",
        dataType: "json",
        data: {
            nome: document.getElementById("nome").value,
            sobrenome: document.getElementById("sobrenome").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
            senha: document.getElementById("senha").value
        },
        url: "php/" + arquivo + ".php",
        success: function(data) {
            var conteudo = "";
            for(var i = 0; i < data.length; i++){
                conteudo += "<tr>";
                conteudo += "<td>" + data[i]["nome"] + "</td>";
                conteudo += "<td>" + data[i]["sobrenome"] + "</td>";
                conteudo += "<td>" + data[i]["email"] + "</td>";
                conteudo += "<td>" + data[i]["username"] + "</td>";
                conteudo += "<td>" + data[i]["senha"] + "</td>";
                conteudo += "</tr>";
            }
            $("table-lista").html(conteudo);
        } 
    });
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
