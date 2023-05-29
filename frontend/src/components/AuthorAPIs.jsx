import React from "react";
import { Typography, Box } from "@mui/material";

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
    return (
        <>
            <Typography
                variant="h4"
                sx={{ color: "red", textDecoration: "underline" }}
            >
                <code>Query</code>
            </Typography>
            {renderCodeBlock(
                `Find Author By ID: `,
                `Retrieve an author by ID.`,
                `findAuthorByID(id: ID!): Author`
            )}
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
