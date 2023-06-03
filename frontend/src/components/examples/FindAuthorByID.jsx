import React, { useState } from "react";

import {
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardContent,
} from "@mui/material";

import { useApolloClient } from "@apollo/client";

import authorQueries from "../../graphql/example/AuthorQueries";

const FindAuthorByID = () => {
    const [findAuthorByID, setFindAuthorByID] = useState(null);
    const [error, setError] = useState(null);
    const [authorId, setAuthorId] = useState("1"); // Default value is "1"

    const client = useApolloClient();

    const handleRunExample = async () => {
        setFindAuthorByID(null);
        setError(null);

        try {
            const { data } = await client.query({
                query: authorQueries.findAuthorByID,
                variables: { id: authorId },
            });
            setFindAuthorByID(data.findAuthorByID);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleReset = () => {
        setFindAuthorByID(null);
    };

    const handleAuthorIdChange = (event) => {
        setAuthorId(event.target.value);
    };

    return (
        <Card sx={{ marginTop: 2 }} variant="outlined">
            <CardContent>
                {renderCodeBlock(
                    "find-author-by-id",
                    `Find Author By ID: `,
                    `Retrieve an author by ID.`,
                    `findAuthorByID(id: ID!): Author`
                )}
                <TextField
                    label="Author ID"
                    placeholder="Author ID"
                    value={authorId}
                    onChange={handleAuthorIdChange}
                    sx={{ marginTop: 2, marginBottom: 2 }}
                />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {findAuthorByID ? (
                        <Button
                            variant="contained"
                            onClick={handleReset}
                            sx={{ width: "25%" }}
                        >
                            Reset
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={handleRunExample}
                            sx={{ width: "25%" }}
                        >
                            Run Example
                        </Button>
                    )}
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6">Result:</Typography>
                        {findAuthorByID ? (
                            <pre>{JSON.stringify(findAuthorByID, null, 2)}</pre>
                        ) : (
                            <p>{error ? "Request Failed" : ""}</p>
                        )}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default FindAuthorByID;

const renderCodeBlock = (id, title, description, code) => (
    <Box id={id} sx={{ marginTop: 2 }}>
        <Typography
            variant="h5"
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
        >
            {title}
            <code
                style={{
                    color: "#ff4aa2",
                    padding: "2px 4px",
                    borderRadius: "4px",
                }}
            >
                {code}
            </code>
        </Typography>
        <Typography variant="body1">{description}</Typography>
    </Box>
);
