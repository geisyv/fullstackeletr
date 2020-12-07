<?php 
require "Conexao.php";

class Produto
{
    public static function getAll()
    {
        $conection = Connection::getdb(); 

        $stmt = $conection->query('SELECT * FROM  produto');
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);

    }  
} 