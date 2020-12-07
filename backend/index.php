<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

require "./models/Produto.php";

$produto = Produto::getAll();

print_r(json_encode($produto));

