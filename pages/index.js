import Layout from "../components/Layout";

const Index = () => {
  const banner = {
    title: "emboldened",
    subTitle: "Equipping & Raising Christian Women in the Marketplace",
    image: "../static/img/header-01-dark.jpg"
  };

  return (
    <Layout banner={banner}>
      <div className="section">
        <div className="container">
          <h2 className="content-title">First &amp; Foremost</h2>
          <h5>We are a Conference</h5>
          <p>
            Over a weekend, we provide spiritual and more importantly, practical
            sessions, workshop and tools to support women in their daily roles
            at work and life.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
