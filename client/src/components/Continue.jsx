import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { travellerData } from "../Data/TravellerDetails";
import ReviewDetails from "./ReviewDetails";
import RazorPay from "./RazorPay";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
        const finalPrice=Math.floor(props.params.price);
        console.log('Price to Pay: ',finalPrice);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                style={{
                    marginLeft: "4.5em",
                    marginTop: "2em",
                    fontSize: "1em",
                }}
            >
                CONTINUE
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                        >
                            Review Details
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={() => payment()}>
                            CONFIRM
                        </Button> */}
                        {<RazorPay priceToPay={Math.floor(props.params.price)}/>}
                    </Toolbar>
                </AppBar>
                
                <List>
                    {/* <ListItem button>
                        <ListItemText
                            primary="Phone ringtone"
                            secondary="Titania"
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText
                            primary="Default notification ringtone"
                            secondary="Tethys"
                        />
                    </ListItem> */}
					{console.log(travellerData)}
					{travellerData.map((passenger, index) => {
						// console.log(passenger);
						if (index !== travellerData.length - 1) {
							if (
								passenger["FirstName"] !== undefined &&
								passenger["LastName"] !== undefined &&
								passenger["Gender"] !== undefined
							) {
                                console.log('passenger details : ',passenger["FirstName"])
								return (
									<ReviewDetails
										firstName={passenger["FirstName"]}
										lastName={passenger["LastName"]}
										gender={passenger["Gender"]}
									/>
								);
							}
						}
					})}
					{/* {<ReviewDetails />} */}
				</List>
			</Dialog>
		</div>
	);
}
