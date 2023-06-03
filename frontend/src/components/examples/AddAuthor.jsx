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

const AddAuthor = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [addAuthorMutation] = useMutation(authorQueries.addAuthor);

    const handleAddAuthor = async () => {
        try {
            await addAuthorMutation({ variables: { name, age } });
            setSuccessMessage("Author added successfully!");
            setErrorMessage("");
        } catch (error) {
            setSuccessMessage("");
            setErrorMessage("Failed to add author: " + error.message);
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
                    "add-author",
                    `Add Author: `,
                    `Create an author with 'Author' object.`,
                    `addAuthor(author: AuthorInput!): Author`
                )}

                <TextField
                    label="Name"
                    placeholder="Author Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginTop: 2, marginRight: 1 }}
                />

                <TextField
                    label="Age"
                    type="number"
                    placeholder="Author Age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    sx={{ marginTop: 2, marginRight: 1 }}
                />

                <Button
                    variant="contained"
                    onClick={handleAddAuthor}
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

export default AddAuthor;

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
