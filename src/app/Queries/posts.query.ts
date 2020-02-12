import gql from "graphql-tag";

export const PostsQuery = gql`
    query Posts {
        posts {
            title
            claps
        }
    }
`