import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const banner = {
  title: "Emboldened by His Spirit",
  subTitle: `Our conference launches in year 2021 in three cities – Sydney & Perth, Australia + Kuala Lumpur, Malaysia. 
    Leave your details with us! We’ll send a reminder when registration opens near you.`,
  image: "../static/img/header-01.jpg",
  className: "home-page"
};

const Index = () => {
  return (
    <Layout banner={banner}>
      <div className="section">
        <div className="container">
          <h2 id="contact">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
