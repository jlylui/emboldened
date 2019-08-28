import Layout from "../components/Layout";

const About = () => {
  const banner = {
    title: "About Us",
    subTitle: "Our Mission & Vision; Our Team",
    image: "../static/img/header-02-dark.jpg"
  };

  return (
    <Layout banner={banner}>
      <div className="section">
        <div className="container">
          <h2 className="content-title">We Are About</h2>
          <h5>Impact and Influence</h5>
          <p>
            Curated for Christian women who want to tighten their hold on God so
            they are empowered to answer (practically) the needs at their jobs
            &amp; industry
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
