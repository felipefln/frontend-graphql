import gql from 'graphql-tag'

const queryUser = gql`
    query users {
        users {
            id
            name
            email
        }
    }
`

export { queryUser }
