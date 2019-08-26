import Layout from "../components/Layout";

const About = () => {
  const banner = {
    title: "CONFERENCE",
    subTitle: "Spark God-Given Dreams & Collabration",
    image: "../static/img/header-03-dark.jpg"
  };

  return (
    <Layout banner={banner}>
      <div className="container">
        <h2>READY FOR EMBOLDENED 2020</h2>
        <h5>What to Expect</h5>
        <p>
          At conference, we'll provide help to delegates starting their personal
          calling through coaching, providing resources and networking.
        </p>
      </div>
    </Layout>
  );
};

export default About;
