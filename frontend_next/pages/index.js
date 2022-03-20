import { About, Footer, Hero, Projects, Skills } from "../src/containers";
import { Layout } from "../src/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </Layout>
    </>
  );
}
