import React from "react";
import {
    Typography,
    Box,
    List,
    ListItemText,
    ListItemButton,
    useMediaQuery,
} from "@mui/material";

import FindAuthorByID from "./FindAuthorByID";
import FindAllAuthors from "./FindAllAuthors";
import AddAuthor from "./AddAuthor";
import DeleteAuthor from "./DeleteAuthor";
import UpdateAuthor from "./UpdateAuthor";

const AuthorAPIs = () => {
    const isMobileView = useMediaQuery("(max-width: 600px)");

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, marginBottom: 3 }}>
                <Typography
                    variant="h4"
                    sx={{ color: "red", textDecoration: "underline" }}
                >
                    <code>Query</code>
                </Typography>
                <FindAuthorByID />
                <FindAllAuthors />
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
                <AddAuthor />
                <DeleteAuthor />
                <UpdateAuthor />
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
                            onClick={() => handleNavClick("add-author")}
                        >
                            <ListItemText primary="Add Author" />
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
