import { About, Hero, Projects } from "../src/containers";
import { Layout } from "../src/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Projects />
      </Layout>
    </>
  );
}
