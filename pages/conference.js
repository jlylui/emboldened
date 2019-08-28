import Layout from "../components/Layout";

const About = () => {
  const banner = {
    title: "CONFERENCE",
    subTitle: "Spark God-Given Dreams & Collabration",
    image: "../static/img/header-03-dark.jpg"
  };

  return (
    <Layout banner={banner}>
      <div className="section">
        <div className="container">
          <h2 className="content-title">Ready For Emboldened 2020</h2>
          <h5>What to Expect</h5>
          <p>
            At conference, we'll provide help to delegates starting their personal
            calling through coaching, providing resources and networking.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
