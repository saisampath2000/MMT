import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

export default function BasicDateRangePicker(props) {
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                startText="DEPARTURE"
                endText="RETURN"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    {
                        props.sendDate(newValue);
                    }
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        {props.selectedValue === "round-trip" ? (
                            <TextField {...startProps} required />
                        ) : (
                            <TextField {...startProps} style={{position: "relative", bottom: "0.6em"}} required />
                        )}
                        <Box sx={{ mx: 2 }}> </Box>
                        {props.selectedValue === "round-trip" ? (
                            <TextField {...endProps} required />
                        ) : (
                            <TextField
                                disabled
                                id="filled-disabled"
                                label="Disabled"
                                defaultValue="RETURN"
                                variant="filled"
                            />
                        )}
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}
