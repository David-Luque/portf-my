import * as React from "react"
import Layout from '../components/layout/Layout';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Technologies from '../components/sections/Technologies';
import Projects from '../components/sections/Projects';
import ImageViewer from '../components/UI/ImageViewer';
import "../css/style.css";


const IndexPage = () => {
  return (
    <>
      <Layout>
        <>
          <Header />
          <About />
          <Technologies/>
          <Projects/>
        </>
      </Layout>
      <ImageViewer/>
    </>
  )
}

export default IndexPage
