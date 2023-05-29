import React, { useState } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
// import { useQuery } from "@apollo/client";
import { useApolloClient } from "@apollo/client";

import authorQueries from "../graphql/example/AuthorQueries";

const renderCodeBlock = (title, description, code) => (
    <Box sx={{ marginTop: 2 }}>
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

const AuthorAPIs = () => {
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState(null);
    const [authorId, setAuthorId] = useState("1"); // Default value is "1"

    // 'useApolloClient' is good for when you want to manually trigger a query, where 'useQuery' is good for
    // when loading data on component mounts or when variables change
    const client = useApolloClient();

    const handleRunExample = async () => {
        setAuthor(null);
        setError(null);

        try {
            const { data } = await client.query({
                query: authorQueries.findAuthorByID,
                variables: { id: authorId },
            });
            setAuthor(data.findAuthorByID);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleReset = () => {
        setAuthor(null);
    };

    const handleAuthorIdChange = (event) => {
        setAuthorId(event.target.value);
    };

    return (
        <>
            <Typography
                variant="h4"
                sx={{ color: "red", textDecoration: "underline" }}
            >
                <code>Query</code>
            </Typography>
            <>
                {renderCodeBlock(
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

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {author ? (
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
                        {author ? (
                            <pre>{JSON.stringify(author, null, 2)}</pre>
                        ) : (
                            <p>{error ? "Request Failed" : ""}</p>
                        )}
                    </Box>
                </Box>
            </>
            {renderCodeBlock(
                `Find All Authors: `,
                `Retrieve all authors.`,
                `findAllAuthors: [Author]`
            )}
            {renderCodeBlock(
                `Count Authors: `,
                `Retrieve a count of total authors.`,
                `countAuthors: Int!`
            )}

            <Typography
                variant="h4"
                sx={{ color: "red", marginTop: 3, textDecoration: "underline" }}
            >
                <code>Mutation</code>
            </Typography>
            {renderCodeBlock(
                `Add Author: `,
                `Create an author with 'Author' object.`,
                `addAuthor(author: AuthorInput!): Author`
            )}
            {renderCodeBlock(
                `Create Author: `,
                `Create an author with 'Author' name and age.`,
                `createAuthor(name: String!, age: Int): Author`
            )}
            {renderCodeBlock(
                `Delete Author: `,
                `Delete an author by ID.`,
                `deleteAuthor(id: ID!): Boolean`
            )}
            {renderCodeBlock(
                `Update Author: `,
                `Update an author by ID.`,
                `updateAuthor(id: ID!, author: AuthorInput!): Author`
            )}
        </>
    );
};

export default AuthorAPIs;
