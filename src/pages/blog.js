import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={"Blog"}>
        <div className='mb-4'>
            <h1 className='text-2xl font-bold'>Blogs</h1>
            <p className='max-w-prose'>Below is a list of my most recent blog articles. Please leave a like if you find some of them interesting</p>
        </div>
        {
            data.allMdx.nodes.map((node) => (
                <Link to={`/blog${node.fields.slug}`}>
                    <div className='containerS my-2 p-4 rounded hover:bg-gray-400 bg-gray-200'>
                        <h2 className='text-xl font-bold'>{node.frontmatter.title}</h2>
                        <p>{node.frontmatter.date}</p>
                    </div>
                </Link>
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