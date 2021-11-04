import * as React from "react"
import Layout_Eng from '../components/layout/Layout_Eng';
import Header from '../components/sections/Header';
import About_Eng from '../components/sections/About_Eng';
import Technologies_Eng from '../components/sections/Technologies_Eng';
import Projects_Eng from '../components/sections/Projects_Eng';
import "../css/style.css";


const IndexPage = () => {
  return (
    <Layout_Eng>
      <>
        <Header />
        <About_Eng />
        <Technologies_Eng/>
        <Projects_Eng/>
      </>
    </Layout_Eng>
  )
}

export default IndexPage
