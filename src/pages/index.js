import * as React from "react"
import Layout from '../components/layout/Layout';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <>
        <h1>Hello I'm David - Here is my personal portfolio</h1>
        
        <section>
          <h3>About</h3>
          <p>About me...</p>
        </section>

        <section>
          <h3>Projects</h3>
          <p>My projects...</p>
        </section>

        <section>
          <h3>Technologies</h3>
          <p>My technologies...</p>
        </section>

        <section>
          <h3>Contact</h3>
          <p>My contact info...</p>
        </section>

      </>
    </Layout>
  )
}

export default IndexPage
