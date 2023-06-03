import { gql } from "@apollo/client";

const authorQueries = {
    findAuthorByID: gql`
        query findAuthorByID($id: ID!) {
            findAuthorByID(id: $id) {
                id
                name
                age
            }
        }
    `,
    findAllAuthors: gql`
        query {
            findAllAuthors {
                id
                name
                age
                age
            }
        }
    `,
    addAuthor: gql`
        mutation addAuthor($name: String!, $age: Int!) {
            addAuthor(author: { name: $name, age: $age }) {
                id
                name
                age
            }
        }
    `,
    deleteAuthor: gql`
        mutation deleteAuthor($id: ID!) {
            deleteAuthor(id: $id)
        }
    `,
    updateAuthor: gql`
        mutation updateAuthor($id: ID!, $name: String!, $age: Int!) {
            updateAuthor(id: $id, author: { name: $name, age: $age }) {
                id
                name
                age
            }
        }
    `,
};

export default authorQueries;
