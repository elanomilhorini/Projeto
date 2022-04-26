const express = require("express")
const app = express()

const productRoute = require("./productRoute")
const clientRoute = require("./clientRoute")
const deliveryManRoute = require("./deliveryManRoute.js")
const regionRoute = require("./regionRoute")
const requesteRoute = require("./requesteRoute")
const itemRequestRoute = require("./itemRequestRoute")

app.use("/products", productRoute)
app.use("/clients", clientRoute)
app.use("/deliverymans", deliveryManRoute)
app.use("/regions", regionRoute)
app.use("/requests", requesteRoute)
app.use("/itemrequests", itemRequestRoute)

app.use((req, res, next) => {
    const erro = new Error("Rota não encontrada")
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
})

module.exports = app;









































































