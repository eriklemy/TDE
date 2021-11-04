<?php
	$nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $email = $_POST["email"];
    $username = $_POST["username"];
    $senha = $_POST["senha"];

    $con = mysqli_connect("localhost:3306", "root", "", "bancotdepw");
    mysqli_query($con, 
                 "INSERT INTO cadastro (id, nome, sobrenome, email, username, senha)  
                 VALUES (NULL, '$nome', '$sobrenome', '$email', '$username', '$senha') 
                ");
?>				