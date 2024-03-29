"use client";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
}

// This is a Alert component. The props is the alert object that has following properties:
// severity -> info, success, warning, error.
// message -> Alert Message.

export default function AlertComponent({ alert }) {
    const open = Boolean(alert);

    return (
        open && (
            <Snackbar
                open={open}
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                TransitionComponent={SlideTransition}>
                <Alert elevation={6} variant="filled" severity={alert.severity}>
                    <strong className="text-sm md:text-lg font-poppins">
                        {alert.message}
                    </strong>
                </Alert>
            </Snackbar>
        )
    );
}
