import * as React from "react"
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import About from '../components/sections/About';
import Technologies from '../components/sections/Technologies';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';


const IndexPage = () => {
  return (
    <Layout>
      <>
        <Header />
        <About />
        <Technologies/>
        <Projects/>
        <Contact />
      </>
    </Layout>
  )
}

export default IndexPage
