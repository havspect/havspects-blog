import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={"Blog"}>
        {
            data.allMdx.nodes.map((node) => (
                <div>
                    <h2>{node.frontmatter.title}</h2>
                    <p>{node.frontmatter.date}</p>
                </div>
            ))
        }
    </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                fields {
                    slug
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => "Blogs"

export default BlogPage