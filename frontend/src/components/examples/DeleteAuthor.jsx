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

const DeleteAuthor = () => {
    const [id, setId] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [deleteAuthorMutation] = useMutation(authorQueries.deleteAuthor);

    const handleDeleteAuthor = async () => {
        try {
            const { data } = await deleteAuthorMutation({ variables: { id } });
            const deleteSuccess = data?.deleteAuthor;

            if (deleteSuccess) {
                setSuccessMessage("Author deleted successfully!");
                setErrorMessage("");
            } else {
                setSuccessMessage("");
                setErrorMessage("Failed to delete author.");
            }
        } catch (error) {
            setSuccessMessage("");
            setErrorMessage("Failed to delete author: " + error.message);
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
                    "delete-author",
                    `Delete Author: `,
                    `Delete an author by ID.`,
                    `deleteAuthor(id: ID!): Boolean`
                )}

                <TextField
                    label="ID"
                    placeholder="Author ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    sx={{ marginTop: 2, marginRight: 1 }}
                />

                <Button
                    variant="contained"
                    onClick={handleDeleteAuthor}
                    sx={{ marginTop: 3 }}
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

export default DeleteAuthor;

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
