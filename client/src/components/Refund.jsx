import React, { Component } from 'react'
import { Paper } from '@mui/material'

export default class Refund extends Component {
    render() {
        return (
            <Paper elevation={3} style={{padding: "1em", width: "62.5em"}} >
                <h3 style={{fontWeight: "bold"}}>100% refund on flight cancellations guaranteed.</h3>
                <p>On Covid + cases. No questions asked . #MMTPromise</p>
            </Paper>
        )
    }
}
