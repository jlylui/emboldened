import Layout from "../components/Layout";

const BehindTheScenes = () => {
  const banner = {
    title: "Behind the Scenes",
    subTitle: "",
    image: "../static/img/header-03-behind-the-scenes.jpg"
  };

  return (
    <Layout banner={banner}>
      <div className="section">
        <div className="container">
          <h2>What to Expect</h2>
          <p>
            Trade secrets are not usually shared but at Emboldened, we don’t
            believe in hogging. We enjoy hearing what women have to say about
            almost everything so we thought you may be curious too.
            <br />
            Updates are loaded once a month so take a break from Instagram or
            those random feed articles…pop in here for a different kind of
            inspiration.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BehindTheScenes;
