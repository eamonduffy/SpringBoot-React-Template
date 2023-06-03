import React from "react";

import { Typography, Box, Card, CardContent } from "@mui/material";

import { useQuery } from "@apollo/client";

import authorQueries from "../../graphql/example/AuthorQueries";

const FindAllAuthors = () => {
    const { data, loading, error } = useQuery(authorQueries.findAllAuthors);

    // Check if the query is still loading
    if (loading) {
        return <p>Loading authors...</p>;
    }

    // Check if there is an error in the query
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    // Check if the data is empty
    if (!data.findAllAuthors.length) {
        return <p>No authors</p>;
    }

    return (
        <Card sx={{ marginTop: 2 }} variant="outlined">
            <CardContent>
                {renderCodeBlock(
                    "find-all-authors",
                    `Find All Authors: `,
                    `Retrieve all authors.`,
                    `findAllAuthors: [Author]`
                )}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6">Result:</Typography>
                    {data ? (
                        <pre>
                            {JSON.stringify(data.findAllAuthors, null, 2)}
                        </pre>
                    ) : (
                        <p>{error ? "Request Failed" : ""}</p>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default FindAllAuthors;

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
