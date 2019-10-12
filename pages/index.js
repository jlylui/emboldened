import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";

const banner = {
  title: "Emboldened by\nHis Spirit",
  subTitle:
    "Our conference launches in year 2021 in three cities –\nSydney & Perth, Australia & Kuala Lumpur, Malaysia.\nRegister your interest below.",
  image: "../static/img/header-01.jpg",
  className: "home-page"
};

const Index = () => {
  return (
    <Layout banner={banner}>
      <div className="section section-1">
        <div className="container">
          <h2 id="register">Register Your Interest</h2>
          <RegisterForm />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
