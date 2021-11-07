import React, { Component } from "react";
import { ListItem } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default class ListItemClass extends Component {
    render() {
        return (
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <AddCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={this.props.charges} />
                    <span> {this.props.fee} </span>
                </ListItemButton>
            </ListItem>
        );
    }
}
