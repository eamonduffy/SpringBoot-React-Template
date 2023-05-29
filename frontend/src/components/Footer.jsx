import React from "react";
import { Typography, Link, Box } from "@mui/material";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.common.white,
                padding: (theme) => theme.spacing(2),
                textAlign: "center",
                position: "fixed",
                bottom: 0,
                width: "100%",
            }}
        >
            <div
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="body1">
                    Made by Eamon Duffy
                    <Link
                        href="https://github.com/eamonduffy"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        underline="none"
                        sx={{
                            marginLeft: (theme) => theme.spacing(1),
                            verticalAlign: "middle",
                        }}
                    >
                        <AiFillGithub />
                    </Link>
                </Typography>
            </div>
        </Box>
    );
};

export default Footer;
