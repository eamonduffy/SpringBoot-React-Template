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
};

export default authorQueries;
