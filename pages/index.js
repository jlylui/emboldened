import Layout from "../components/Layout";

const Index = () => {
  const banner = {
    title: "EMBOLDENED",
    subTitle: "Equipping & Raising Christian Women in the Marketplace"
  };

  return (
    <Layout banner={banner}>
      <div className="container">
        <h2>WE ARE ABOUT</h2>
        <h5>Impact and Influence</h5>
        <p>
          Curated for Christian women who want to tighten their hold on God so
          they are empowered to answer (practically) the needs at their jobs &
          industry
        </p>
      </div>
    </Layout>
  );
};

export default Index;
