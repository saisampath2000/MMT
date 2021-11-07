import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Fab from "@mui/material/Fab";
import BasicDateRangePicker from "./DatePicker";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

export default class ComplexGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            from: "",
            to: "",
            departure: "",
            return: "",
            travellers: "",
        };
    }

    dateConvertor = (value) => {
        let date = new Date(value);

        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();

        return `${yyyy}-${mm}-${dd}`;
    };

    swap = () => {
        this.handleChangeFrom(this.state.to);
        this.handleChangeTo(this.state.from);
    };

    handleChangeFrom = (value) => {
        this.setState({
            from: value,
        });
    };

    handleChangeTo = (value) => {
        this.setState({
            to: value,
        });
    };

    getDate = (value) => {
        let updatedDeparture = this.dateConvertor(value[0]);
        let updatedReturn = this.dateConvertor(value[1]);
        this.setState({
            departure: updatedDeparture,
            return: updatedReturn,
        })
    };

    handleChangeTravellers = (value) => {
        this.setState({
            travellers: value,
        });
    };

    render() {
        return (
            <Paper
                sx={{ p: 2, margin: "auto", maxWidth: 1300 ,flexGrow: 1 }}
                elevation={4}
            >
                {this.props.sendData(this.state.from, this.state.to, this.state.departure, this.state.return, this.state.travellers)}
                <Grid container direction="row" spacing={2}>
                    <Grid item>
                        <TextField
                            id="standard-basic"
                            label="FROM"
                            variant="standard"
                            value={this.state.from}
                            onChange={(event) =>
                                this.handleChangeFrom(event.target.value)
                            }
                            required
                        />
                    </Grid>
                    <Grid item>
                        <Fab
                            color="primary"
                            aria-label="add"
                            onClick={() => this.swap()}
                        >
                            <AutorenewIcon />
                        </Fab>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-basic"
                            label="TO"
                            variant="standard"
                            value={this.state.to}
                            onChange={(event) =>
                                this.handleChangeTo(event.target.value)
                            }
                            required
                        />
                    </Grid>
                    <Grid item>
                        <BasicDateRangePicker sendDate={this.getDate} selectedValue={this.props.selectedValue} />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="filled-basic"
                            label="TRAVELLERS"
                            variant="filled"
                            onChange={(event) =>
                                this.handleChangeTravellers(event.target.value)
                            }
                            required
                        />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}
