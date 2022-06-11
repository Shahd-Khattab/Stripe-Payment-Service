const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors())
///:order_id
app.post('/payment', async (req,res)=>{
    try{
        let {amount, O_id}= req.body;
        //console.log({ amount, id });
        
        // const payement= await stripe.create({
        //     amount: amount,
        //     currency: "USD",
        //     description: "Rabbit Mart",
        //     payment_method: id,
        //     confirm: true
        // })
        //console.log("test");
        const payment = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: 'tok_amex',
            description: 'Rabbit Mart',
          });
        console.log("The Payment", payment)
        return res.json({
            id: payment.id,
            //order_id : order_id
        })

    }catch(error){
        console.log("Error ", error)
        return res.json({
            message: "Payment failed",
            success: false
        })
    }


});



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    });
 