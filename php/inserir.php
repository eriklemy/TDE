<?php

    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $email = $_POST["email"];
    $username = $_POST["username"];
    $senha = $_POST["senha"];

    $con = mysqli_connect("localhost:8889", "root", "root", "banco_pw");

    mysqli_query($con, 
                 "INSERT INTO cadastro (nome, sobrenome, email, username, senha) 
                  VALUES ('$nome', '$sobrenome', '$email', '$username', $senha)
                ");
?>