import React from "react"
import Index from "./Index"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Eric Basile - Software Engineer"
      description="Eric Basile - E-commerce * Cloud Platform * Game Programming"
    />
    <Index />
  </Layout>
)

export default IndexPage
