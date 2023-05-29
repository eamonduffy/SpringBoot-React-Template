import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton component={Link} to="/" color="inherit">
                    <AiOutlineHome />
                </IconButton>
                <Button component={Link} to="/home" color="inherit">
                    Home
                </Button>
                <Button component={Link} to="/example-apis" color="inherit">
                    Example APIs
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
