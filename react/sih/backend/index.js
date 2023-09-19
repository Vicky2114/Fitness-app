const express =require('express');
const app = express();
const cors =require('cors');


const port = 8000;



app.use(cors());
app.use(express.urlencoded());
app.use(express.json())



app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});