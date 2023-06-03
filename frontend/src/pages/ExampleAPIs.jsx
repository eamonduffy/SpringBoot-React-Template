import React from "react";
import { Container, Typography, Box } from "@mui/material";
import AuthorAPIs from "../components/examples/AuthorAPIs";

const ExampleAPIs = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ textAlign: "left", marginBottom: 4 }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ marginTop: 4, marginBottom: 2 }}
                >
                    Example APIs
                </Typography>
                <Typography variant="body1">
                    All of these APIs are built using `GraphQL`. To make a
                    request, please ensure your body syntax is to GraphQL
                    standard. The below APIs are all examples for you to use and
                    learn from.
                </Typography>
            </Box>
            <AuthorAPIs />
        </Container>
    );
};

export default ExampleAPIs;
