const express = require("express")
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        message:"GET rota deliveryManRoute"  
    })
})
router.post("/", (req, res, next) => {
    res.status(201).send({
        message:"POST rota deliveryManRoute"
    })
})

router.get("/:deliveryManRouteId", (req, res, next) => {
    const id = req.params.deliveryManRouteId

    if (id === "especifico"){
        res.status(200).send({
            message: "id especifico",
            id: id
        })
    }else{
        res.status(200).send({
            message: "deliveryManRoute especifico"
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