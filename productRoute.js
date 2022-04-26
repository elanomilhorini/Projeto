const express = require("express")
const router = express.Router();

//mostra todos os produtos
router.get("/", (req, res, next) => {
    res.status(200).send({
        message:"GET rota Products"  
    })
})
//cria os produtos
router.post("/", (req, res, next) => {
    res.status(201).send({
        message:"POST rota Products"
    })
})

//mostra um produto específico
router.get("/:productId", (req, res, next) => {
    const id = req.params.productId

    if (id === "especifico"){
        res.status(200).send({
            message: "id especifico",
            id: id
        })
    }else{
        res.status(200).send({
            message: "Product especifico"
        })   
    }
})

//PUT atualiza toda a estrutura do registro
//PATCH atualizar parte do registro
router.patch("/", (req, res, next) => {
    res.status(201).send({
        message:"Patch executado com sucesso"
    })
})

router.delete("/", (req, res, next) => {
    res.status(201).send({
        message:"Excluído com sucesso"

    }) 
})   
module.exports = router;

































































