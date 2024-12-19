{
    "rowsperpage" : 10,
    "database" : {
        "connection" : "mydatabase",
        "sql" : "SELECT * FROM Customers",
        "orderby" : "CustomerName"
    }
    }

    function myController($appml) {
        if ($appml.message == "display") {
            if ($appml.display.name == "CustomerName") {
                $appml.display.value = $appml.display.value.toUpperCase();
            }
        }
    }

    
   