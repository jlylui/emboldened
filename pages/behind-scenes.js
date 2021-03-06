import React from "react";
import Layout from "../components/Layout";
import Video from "../components/Video";

const banner = {
  title: "Behind the Scenes",
  subTitle: "",
  image: "/static/img/header-03-behind-the-scenes.jpg"
};

const BehindTheScenes = () => {
  return (
    <Layout banner={banner}>
      <div className="section section-1">
        <div className="container">
          <p>
            Trade secrets are not usually shared but at Emboldened, we don’t
            believe in hogging.
          </p>{" "}
          <p>
            We enjoy hearing what women have to say about almost everything so
            we thought you may be curious too.
          </p>
          <p>
            Updates are uploaded once a month so take a break from Instagram or
            those random feed articles…pop in here for a different kind of
            inspiration.
          </p>
        </div>
      </div>
      <div className="section">
        <Video
          //TESTED WITH url="https://www.youtube.com/embed/8QSbdqBqKTY?vq=hd1080"
          url="https://www.youtube.com/embed/xxxxxxxxxx?vq=hd1080"
          title="Video Title"
        />
      </div>
    </Layout>
  );
};

export default BehindTheScenes;
