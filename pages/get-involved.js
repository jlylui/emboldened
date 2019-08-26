import Layout from "../components/Layout";

const opportunities = [
  {
    title: "Volunteer",
    info:
      "Be part of this exciting conference, sign up as a day volunteer or be part of the event team to get involved.",
    quote:
      '"You are the light of the world. A city set on a hill cannot be hidden"',
    quoteFrom: "Matthew 5:14"
  },
  {
    title: "Partner With Us",
    info: "Partner with us to advance the Kingdom of God.",
    quote:
      '"I believe one of the next great moves of God is going to be through believers in the workplace."',
    quoteFrom: "Dr. Billy Graham"
  },
  {
    title: "Donate",
    info: "Support us finacially ",
    quote: "",
    quoteFrom: ""
  }
];

const GetInvolved = () => {
  const banner = {
    title: "JOIN US",
    subTitle: "Get Involved, We Need You!",
    image: "../static/img/header-04.jpg"
  };

  const joinUs = opportunities.map((opportunity, index) => (
    <div class="card">
      <div className="card-body text-center">
        <h5 className="card-title ">{opportunity.title}</h5>
        <p className="card-text">{opportunity.info}</p>
        <p class="card-text">
          <small class="text-muted">{opportunity.quote}</small>
          <br />
          <small class="text-muted">{opportunity.quoteFrom}</small>
        </p>
      </div>
    </div>
  ));

  return (
    <Layout banner={banner}>
      <div className="section">
        <div className="container">
          {/* <h2 className="text-center">WAYS TO GET INVOLVED</h2> */}
          <div className="card-deck">{joinUs}</div>
        </div>
      </div>
    </Layout>
  );
};

export default GetInvolved;
