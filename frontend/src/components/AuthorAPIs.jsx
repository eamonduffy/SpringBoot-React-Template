import React, { useState } from "react";
import {
    Typography,
    Box,
    Button,
    TextField,
    Card,
    CardContent,
    List,
    ListItemText,
    ListItemButton,
    useMediaQuery,
} from "@mui/material";
import { useApolloClient } from "@apollo/client";

import authorQueries from "../graphql/example/AuthorQueries";

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

const AuthorAPIs = () => {
    const [findAuthorByID, setFindAuthorByID] = useState(null);
    const [error, setError] = useState(null);
    const [authorId, setAuthorId] = useState("1"); // Default value is "1"

    const client = useApolloClient();

    const isMobileView = useMediaQuery("(max-width: 600px)");

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

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1 }}>
                <Typography
                    variant="h4"
                    sx={{ color: "red", textDecoration: "underline" }}
                >
                    <code>Query</code>
                </Typography>

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
                                    <pre>
                                        {JSON.stringify(
                                            findAuthorByID,
                                            null,
                                            2
                                        )}
                                    </pre>
                                ) : (
                                    <p>{error ? "Request Failed" : ""}</p>
                                )}
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{ marginTop: 2 }} variant="outlined">
                    <CardContent>
                        {renderCodeBlock(
                            "find-all-authors",
                            `Find All Authors: `,
                            `Retrieve all authors.`,
                            `findAllAuthors: [Author]`
                        )}
                    </CardContent>
                </Card>

                <Card sx={{ marginTop: 2 }} variant="outlined">
                    <CardContent>
                        {renderCodeBlock(
                            "count-authors",
                            `Count Authors: `,
                            `Retrieve a count of total authors.`,
                            `countAuthors: Int!`
                        )}
                    </CardContent>
                </Card>

                <Typography
                    variant="h4"
                    sx={{
                        color: "red",
                        marginTop: 3,
                        textDecoration: "underline",
                    }}
                >
                    <code>Mutation</code>
                </Typography>

                <Card sx={{ marginTop: 2 }} variant="outlined">
                    <CardContent>
                        {renderCodeBlock(
                            "add-author",
                            `Add Author: `,
                            `Create an author with 'Author' object.`,
                            `addAuthor(author: AuthorInput!): Author`
                        )}
                    </CardContent>
                </Card>

                <Card sx={{ marginTop: 2, marginBottom: 3 }}>
                    <CardContent>
                        {renderCodeBlock(
                            "create-author",
                            `Create Author: `,
                            `Create an author with 'Author' name and age.`,
                            `createAuthor(name: String!, age: Int): Author`
                        )}
                    </CardContent>
                </Card>

                <Card sx={{ marginTop: 2 }} variant="outlined">
                    <CardContent>
                        {renderCodeBlock(
                            "delete-author",
                            `Delete Author: `,
                            `Delete an author by ID.`,
                            `deleteAuthor(id: ID!): Boolean`
                        )}
                    </CardContent>
                </Card>

                <Card sx={{ marginTop: 2 }} variant="outlined">
                    <CardContent>
                        {renderCodeBlock(
                            "update-author",
                            `Update Author: `,
                            `Update an author by ID.`,
                            `updateAuthor(id: ID!, author: AuthorInput!): Author`
                        )}
                    </CardContent>
                </Card>
            </Box>

            {!isMobileView && (
                <Box sx={{ width: 300, position: "fixed", top: 80, right: 0 }}>
                    <List component="nav" aria-label="code blocks navigation">
                        <Typography
                            variant="h5"
                            sx={{ textDecoration: "underline" }}
                        >
                            <code>APIs</code>
                        </Typography>
                        <ListItemButton
                            onClick={() => handleNavClick("find-author-by-id")}
                        >
                            <ListItemText primary="Find Author By ID" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleNavClick("find-all-authors")}
                        >
                            <ListItemText primary="Find All Authors" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleNavClick("count-authors")}
                        >
                            <ListItemText primary="Count Authors" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleNavClick("add-author")}
                        >
                            <ListItemText primary="Add Author" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleNavClick("create-author")}
                        >
                            <ListItemText primary="Create Author" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleNavClick("delete-author")}
                        >
                            <ListItemText primary="Delete Author" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleNavClick("update-author")}
                        >
                            <ListItemText primary="Update Author" />
                        </ListItemButton>
                    </List>
                </Box>
            )}
        </Box>
    );
};

export default AuthorAPIs;
