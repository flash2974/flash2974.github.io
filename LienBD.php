<?php

class LienBD extends mysqli { 
    private $servername;
    private $username;
    private $password;
    private $database;
    public function __construct () {
        $this->servername = "sql207.infinityfree.com";
        $this->username = "if0_36711205";
        $this->password = "Nathan2974";
        $this->database = "if0_36711205_nathan_domenichini";
        
        // $conn = mysqli_connect($this->servername, $this->username, $this->password, $this->database);

        parent::__construct($this->servername, $this->username, $this->password, $this->database);
		$this->set_charset('utf8mb4');
    }
}
?>