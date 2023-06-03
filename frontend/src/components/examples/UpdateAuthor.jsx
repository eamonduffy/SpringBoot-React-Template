import React, { useState } from "react";
import {
    Typography,
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Snackbar,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import authorQueries from "../../graphql/example/AuthorQueries";

const UpdateAuthor = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [updateAuthorMutation] = useMutation(authorQueries.updateAuthor);

    const handleUpdateAuthor = async () => {
        try {
            const { data } = await updateAuthorMutation({
                variables: { id, name, age: parseInt(age) },
            });

            const updatedAuthor = data?.updateAuthor;

            if (updatedAuthor) {
                setSuccessMessage("Author updated successfully!");
                setErrorMessage("");
            } else {
                setSuccessMessage("");
                setErrorMessage("Failed to update author.");
            }
        } catch (error) {
            setSuccessMessage("");
            setErrorMessage("Failed to update author: " + error.message);
        }
        setOpenSnackbar(true);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Card sx={{ marginTop: 2 }} variant="outlined">
            <CardContent>
                {renderCodeBlock(
                    "update-author",
                    `Update Author: `,
                    `Update an author by ID.`,
                    `updateAuthor(id: ID!, author: AuthorInput!): Author`
                )}

                <TextField
                    label="ID"
                    placeholder="Author ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    sx={{ marginTop: 2, marginRight: 1 }}
                />

                <TextField
                    label="Name"
                    placeholder="Author Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginTop: 2, marginRight: 1 }}
                />

                <TextField
                    label="Age"
                    placeholder="Author Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ marginTop: 2, marginRight: 1 }}
                />

                <Button
                    variant="contained"
                    onClick={handleUpdateAuthor}
                    sx={{ marginTop: 3, marginRight: 1 }}
                >
                    Submit
                </Button>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={4000}
                    onClose={handleSnackbarClose}
                    message={successMessage || errorMessage}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    style={{
                        backgroundColor: successMessage ? "green" : "red",
                    }}
                />
            </CardContent>
        </Card>
    );
};

export default UpdateAuthor;

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
