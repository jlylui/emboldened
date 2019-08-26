import Layout from "../components/Layout";

const Index = () => {
  const banner = {
    title: "EMBOLDENED",
    subTitle: "Equipping & Raising Christian Women in the Marketplace",
    image: "../static/img/header-01.jpg"
  };

  return (
    <Layout banner={banner}>
      <div className="container">
        <h2>FIRST & FOREMOST</h2>
        <h5>We are a Conference</h5>
        <p>
          Over a weekend, we provide spiritual and more importantly, practical
          sessions, workshop and tools to support women in their daily roles at
          work and life.
        </p>
        <div style={{paddingBottom: 1000}} />
      </div>
    </Layout>
  );
};

export default Index;
