import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container maxWidth="sm">
            <Typography
                variant="h4"
                align="center"
                sx={{ marginTop: 8, marginBottom: 6 }}
            >
                Welcome to My Spring Boot + React Template!
            </Typography>
            <Typography variant="body1" align="center" sx={{ marginBottom: 4 }}>
                This template combines the power of Spring Boot on the backend
                with React on the frontend. It provides a solid foundation for
                building full-stack web applications with ease.
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    "& > *": {
                        marginX: 2,
                    },
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/example-apis"
                    sx={{ marginRight: 2 }}
                >
                    View Example APIs
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    component="a"
                    href="https://github.com/eamonduffy/SpringBoot-React-Template"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View GitHub
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
