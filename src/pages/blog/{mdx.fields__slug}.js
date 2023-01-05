import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/breadcrumb'
import { MDXProvider } from "@mdx-js/react"

const H1 = props => <h1 className='text-xl font-bold' {...props} />
const H2 = props => <h1 className='text-lg font-bold' {...props} />
const Paragraph = props => (
  <p className='max-w-prose text-base' {...props} />
)

const components = {
  h1: H1,
  h2: H2,
  p: Paragraph,
}

const BlogPost = ({ data, children }) => {
  return (
    <Layout>
      <Breadcrumb></Breadcrumb>
      <div className='mt-4 mb-2'>
        <h1 className='text-4xl font-bold'>
          {data.mdx.frontmatter.title}
        </h1>
        <p className='text-small'> <i>{data.mdx.frontmatter.date}</i></p>
      </div>
      <article class="prose prose-sm prose-stone prose-table:table-auto" >
        {children}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = () => "Super cool Blog Post"

export default BlogPost