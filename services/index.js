import { request, gql } from "graphql-request"

const graphqlAPI = "https://api-ap-south-1.graphcms.com/v2/cl2ojiw6q3jz001xu4vwr6idm/master";

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        categories {
                            name
                            id
                        }
                        author {
                            name
                            id
                        }
                        content {
                            text
                        }
                        image {
                            url
                        }
                        excerpt
                        slug
                        featuredPost
                        title
                        updatedAt
                    }
                }
            }
        }

    `

    const result = await request(graphqlAPI, query)
    console.log(result)

    return result.postsConnection.edges;
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }

    `

    const result = await request(graphqlAPI, query)
    console.log(result)

    return result.categories;
}