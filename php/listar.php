<?php 
    $con = mysqli_connect("localhost:3306", "root", "", "bancotdepw");
    $resultado = mysqli_query($con, "SELECT * FROM cadastro");

    $i = 0;
    while($linha = mysqli_fetch_assoc($resultado)){
        $retorno[$i]["nome"] = $linha["nome"];
        $retorno[$i]["sobrenome"] = $linha["sobrenome"];
        $retorno[$i]["email"] = $linha["email"];
        $retorno[$i]["username"] = $linha["username"];
        
        $i++;
    }
    echo json_encode($retorno);
?>