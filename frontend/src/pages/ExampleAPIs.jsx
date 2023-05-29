import React, { useState } from "react";
import {
    Container,
    Typography,
    Box,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";
import AuthorAPIs from "../components/AuthorAPIs";
import TutorialAPIs from "../components/TutorialAPIs";

const ExampleAPIs = () => {
    const [selectedOption, setSelectedOption] = useState("author");

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

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
            <FormControl sx={{ minWidth: 120, marginBottom: 4 }}>
                <Select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    fullWidth
                >
                    <MenuItem value="author">Author</MenuItem>
                    <MenuItem value="tutorial">Tutorial</MenuItem>
                </Select>
            </FormControl>
            {selectedOption === "author" && <AuthorAPIs />}
            {selectedOption === "tutorial" && <TutorialAPIs />}
        </Container>
    );
};

export default ExampleAPIs;
