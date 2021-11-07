import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

class RazorPay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.openPayModal = this.openPayModal.bind(this);
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }
    handleChange(evt) {
        console.log(evt.target.value);
        this.setState({
            amount: evt.target.value,
        });
    }
    openPayModal(amt) {
        console.log('ammount -> ',amt);
        var amount = amt * 100; //Razorpay consider the amount in paise
        var options = {
            key: "rzp_test_1n9sAmRJ95bZgW",
            amount: 0, // 2000 paise = INR 20, amount in paisa
            name: "",
            description: "",
            order_id: "",
            handler: function (response) {
                console.log(response);
                var values = {
                    razorpay_signature: response.razorpay_signature,
                    razorpay_order_id: response.razorpay_order_id,
                    transactionid: response.razorpay_payment_id,
                    transactionamount: amount,
                };
                axios
                    .post("http://localhost:5000/upgrade/payment", values)
                    .then((res) => {
                        alert("Success");
                    })
                    .catch((e) => console.log(e));
            },
            prefill: {
                name: "Sanjana Kumari",
                email: "sanjana@gmail.com",
                contact: "1234567890",
            },
            notes: {
                address: "Hello World",
            },
            theme: {
                color: "#528ff0",
            },
        };
        axios
            .post("http://localhost:5000/upgrade/order", { amount: amount })
            .then((res) => {
                options.order_id = res.data.id;
                options.amount = res.data.amount;
                console.log(options);
                var rzp1 = new window.Razorpay(options);
                rzp1.open();
            })
            .catch((e) => console.log(e));
    }
    render() {
        return (
            <div>
                <Button
                    autoFocus
                    color="inherit"
                    onClick={() => this.openPayModal(this.props.priceToPay)}
                >
                    CONFIRM
                </Button>
                {/* <button
                    onClick={(e) => {
                        this.openPayModal(this.state.amount);
                    }}
                >
                    Upgrade
                </button> */}
            </div>
        );
    }
}
export default RazorPay;
