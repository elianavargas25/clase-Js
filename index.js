const express= requiere('express');
const app= express();

const  {config } = requiere('./config/index');
app.get('/', (req, res)=>{
    res.send("Hello word !");
});

app.listend(config.port, ()=> {
    console.log(`Escuchando por el puerto http://localhost:${config.port}`);
})