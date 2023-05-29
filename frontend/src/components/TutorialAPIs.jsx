import React from "react";
import { Typography, Box } from "@mui/material";

const TutorialAPIs = () => {
    return (
        <>
            <Typography>Query</Typography>
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h5">Get Tutorials</Typography>
                <Typography variant="body1">
                    Use this API to retrieve a list of tutorials.
                </Typography>
            </Box>
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h5">Create Tutorial</Typography>
                <Typography variant="body1">
                    Use this API to create a new tutorial.
                </Typography>
            </Box>
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h5">Update Tutorial</Typography>
                <Typography variant="body1">
                    Use this API to update an existing tutorial.
                </Typography>
            </Box>
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h5">Delete Tutorial</Typography>
                <Typography variant="body1">
                    Use this API to delete an tutorial.
                </Typography>
            </Box>
        </>
    );
};

export default TutorialAPIs;
