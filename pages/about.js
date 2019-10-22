import Layout from "../components/Layout";

const banner = {
  title: "About us",
  subTitle: "",
  image: "/static/img/header-02-about-us.jpg"
};

const About = () => {
  return (
    <Layout banner={banner}>
      <div className="section section-1">
        <div className="container">
          <h2>About Emboldened</h2>
          <p>
            Emboldened was born over countless coffee chats, thousands of
            messages asking difficult questions about work life and the struggle
            to balance the calling of God in the modern world.
          </p>
          <p>
            We learned that God made us, women, more than what the world boxes
            us in to be. Out of our search, a desire to share this with our
            Christian sisters brought forth this project.
          </p>
          <p>
            Emboldened gathers women passionate about bringing God into their
            daily lives &amp; work places. We want every woman to leave
            spiritually strengthened in their identity in God, equipped with
            skills to further their careers and with renewed hearts to reach the
            lost.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2>Our vision &amp; mission</h2>
          <ul>
            <li>
              We believe that the office cubicle &amp; work kitchen chats are
              perfect mission fields to share God’s love.
            </li>
            <li>
              That your presence as God’s daughter changes the atmosphere of
              your work space; the direction of your company and by extension
              the vision of your industry.
            </li>
            <li>
              To boost your courage &amp; confidence as a woman of God, to be an
              answer to the prayers of those who are struggling and hurting
              around you.
            </li>
            <li>
              Provide tools and training, enabling you to possess the skills and
              qualifications required to succeed in your work role.
            </li>
            <li>
              To provide a space for honest discussion, regardless of calling
              and struggles, faced by women every single day.
            </li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2>The Team</h2>
          <div className="card mb-3">
            <img
              className="card-img-top"
              src={`../static/img/header-06-faith-statement.jpg`}
              width="80%"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                <small className="text-muted">Photo caption</small>
              </p>
              <p className="card-text">
                We are a bunch of women working in various industries with a
                passion for women related ministries. Our friendship and open
                honesty regarding the struggles we face as Christians, in
                ministry, at work and as women forges our desire to acknowledge
                and support others like us out there.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
