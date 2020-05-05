import gql from 'graphql-tag'

const createUserMutation = gql`
    mutation createUser($name: String!, $email: String!) {
        createUser(name: $name, email: $email) {
            id
        }
    }
`

export { createUserMutation }