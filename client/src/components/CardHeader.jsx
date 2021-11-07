import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HomeIcon from '@mui/icons-material/Home';
import CloudIcon from '@mui/icons-material/Cloud';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';

export default function IconLabelTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper sx={{ p: 2, margin: "auto", maxWidth: 1000, flexGrow: 1 }} elevation={4} style={{marginLeft: "10rem"}}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
            >
                <Tab icon={<FlightTakeoffIcon />} label="Flights" />
                <Tab icon={<HomeWorkIcon />} label="Hotels" />
                <Tab icon={<HomeIcon />} label="Homestays" />
                <Tab icon={<CloudIcon />} label="Holiday Packages" />
                <Tab icon={<DirectionsTransitIcon />} label="Trains" />
                <Tab icon={<DirectionsBusFilledIcon />} label="Buses" />
                <Tab icon={<LocalTaxiIcon />} label="Cabs" />
                <Tab icon={<NoteAddIcon />} label="Visa" />
                <Tab icon={<TransferWithinAStationIcon />} label="Activites" />
            </Tabs>
        </Paper>
    );
}
