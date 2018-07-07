module.exports = {
    read:  (req, res, next ) => {
        const database = req.app.get('db');

        database.get_inventory()
        .then(inventory => res.status(200)
        .send(inventory))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong with the read request!"})
            console.log('--------------READ ERROR', err)
        })
    },
    create: (req, res, next) => {
        const database = req.app.get('db');
        const { name, price, image_url } = req.body;
        database.create_product([name, price, image_url]).then(() => res.status(200)
        .send("Create product success!"))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong with the read request!"})
            console.log('--------------CREATE ERROR', err)
        })
    },
    delete: (req, res, next) => {
        const database = req.app.get('db');
        const { id } = req.params
        database.delete_product(id).then(() => res.status(200)
        .send("Delete product success!"))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong with the read request!"})
            console.log('--------------DELETE ERROR', err)
        })
    },
    update: (req, res, next) => {
        const database = req.app.get('db');
        const {id, name, price, image_url} = req.body
        database.update_product([id, name, price, image_url]).then(() => res.status(200)
    .send("Update product success!"))
    .catch(err => {
        res.status(500).send({errorMessage: "Something went wrong with the read request!"})
        console.log('--------------UPDATE ERROR', err)
    })
    }
}