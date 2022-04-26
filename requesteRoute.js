const express = require("express")
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        message:"GET rota requestRoute"  
    })
})
router.post("/", (req, res, next) => {
    res.status(201).send({
        message:"POST rota requestRoute"
    })
})

router.get("/:requestRouteId", (req, res, next) => {
    const id = req.params.requestRouteId

    if (id === "especifico"){
        res.status(200).send({
            message: "id especifico",
            id: id
        })
    }else{
        res.status(200).send({
            message: "requestRoute especifico"
        })   
    }
})

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