import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send(`Server is running...`);
})


app.listen(port, ()=> {
    console.log(`Server running on the port http://localhost:${port}`)
});