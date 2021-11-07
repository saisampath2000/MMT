import express from "express";
import router from './razorpayRoutes.js'
import bodyParser from "body-parser";
import cors from 'cors'

const keyid = "rzp_test_1n9sAmRJ95bZgW";
const keysecret = "gPuPygLTkYdiC8WH7vvrLvO5";


const app = express()
app.use(bodyParser.json())
app.use(cors())


app.use('/upgrade', router)

app.listen(5000)























// router.route("/order").post(function(req, res) {
//     var instance = new Razorpay({
//         key_id: keyid,
//         key_secret: keysecret,
//     });
//     var options = {
//         amount: req.body.amount, // amount in the smallest currency unit
//         currency: "INR",
//         receipt: "order_rcptid_11",
//         payment_capture: 1,
//     };
//     instance.orders.create(options, function(err, order) {
//         if (err) {
//             return res.send(err);
//         } else {
//             return res.json(order);
//         }
//     });
// });

// router.route("/payment").post(function(req, res) {
//     const generated_signature = crypto.createHmac("sha256", keysecret);
//     generated_signature.update(
//         req.body.razorpay_order_id + "|" + req.body.transactionid
//     );
//     if (generated_signature.digest("hex") === req.body.razorpay_signature) {
//         const transaction = new Transaction({
//             transactionid: req.body.transactionid,
//             transactionamount: req.body.transactionamount,
//         });
//         transaction.save(function(err, savedtransac) {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send("Some Problem Occured");
//             }
//             res.send({ transaction: savedtransac });
//         });
//     } else {
//         return res.send("failed");
//     }
// });