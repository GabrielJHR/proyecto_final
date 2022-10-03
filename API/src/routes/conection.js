
var Conection = ( () =>
{
    var ConectionInstance;
    const createConection = () =>
    {
        const { Pool } = require('pg');

        const conection = new Pool(
        {
            host: "localhost",
            user: "postgres",
            password: "1234",
            database: "test"
        });

        return conection;
    }

    return {
        getInstance: () =>
        {
            if(ConectionInstance == null)
            {

                ConectionInstance = createConection()
            }

            return ConectionInstance
        }
    }

    
})();

