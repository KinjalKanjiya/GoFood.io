const express = require ('express')
const router = express.Router()

const client = require('../db')


//=======================endpoint=================


router.post('/foodData', async (req, res) => {
    try {
        console.log("entered!!!!!!!!!!");
        async function run() {
                // Connect the client to the server	(optional starting in v4.7)
                await client.connect();
                // Send a ping to confirm a successful connection
                const myDB = client.db("GoFood");
                const myColl = myDB.collection("Food");
                const myColl2 = myDB.collection("FoodCategory");
                const findResult = await myColl.find().toArray();
                const findCat = await myColl2.find().toArray();
                //console.log(findResult);
                console.log("Pinged your deployment. You successfully connected to MongoDB!");
                // const responseData = {
                //     findResult:findResult,
                //     findCat:findCat
                // };
                // res.json(responseData);
                const responseData = ([findResult,findCat]);
                res.json(responseData);
        };
        run();
    } catch (error) {
        console.error(error.message)
        res.send("Server Error");
    }
});
  
module.exports = router;