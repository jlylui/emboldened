import React, { useState } from "react";
import Layout from "../components/Layout";
import VolunteerForm from "../components/VolunteerForm";
import PartnerForm from "../components/PartnerForm";

const banner = {
  title: "Get Involved",
  subTitle: "",
  image: "../static/img/header-05-get-involved.jpg"
};

const volunteer = {
  id: "volunteer",
  title: "Volunteering",
  info:
    "Conferences are hard work. We can’t do without helping hands so if you are keen to volunteer, we salute you! Oh, and please fill in the form, we promise to be in contact soon!",
  link: "/get-involved#volunteer",
  linkLabel: "Register",
  form: <VolunteerForm />,
  formTitle: "Emboldened Volunteer Registration",
  ref: "volunteerForm"
};

const partner = {
  id: "partner",
  title: "Partnership",
  info:
    "Our heart is to reach as many women as we can so if you are keen to explore possibilities with Emboldened, whether you are a church, business or an individual, we would love to hear from you.",
  link: "/get-involved#partner",
  linkLabel: "Partner with Us",
  form: <PartnerForm />,
  formTitle: "Partner with Us!",
  ref: "partnerForm"
};

const donate = {
  id: "donation",
  title: "Donation",
  info: "Support us finacially",
  link: "/get-involved#donation",
  linkLabel: "Details",
  form: ""
};

const GetInvolved = () => {
  const [formShow, setFormShow] = useState("");
  const [partnerFormShow, setPartnerFormShow] = useState("");

  const handleVolunteerFormClick = () => {
    if (formShow === "show") {
      setFormShow(" ");
    } else {
      setFormShow("show");
    }
  };

  const handlePartnerFormClick = () => {
    if (partnerFormShow === "show") {
      setPartnerFormShow(" ");
    } else {
      setPartnerFormShow("show");
    }
  };

  return (
    <Layout banner={banner}>
      <div className="section section-1">
        <div className="container">
          <div className="card" id={volunteer.id}>
            <div className="card-body">
              <h4 className="card-title ">{volunteer.title}</h4>
              <p className="card-text">{volunteer.info}</p>
              <div className="text-right">
                <a
                  href={volunteer.link}
                  data-toggle="collapse"
                  onClick={handleVolunteerFormClick}
                >
                  {volunteer.linkLabel}{" "}
                  <i className="now-ui-icons arrows-1_minimal-down"></i>
                </a>
              </div>
              <div
                className={`collapse ${formShow}`}
                style={{ paddingTop: "20px" }}
              >
                <div className="card-header">
                  <h6>{volunteer.formTitle}</h6>
                </div>
                <div className="card-body">{volunteer.form}</div>
              </div>
            </div>
          </div>
          <div className="card" id={partner.id}>
            <div className="card-body">
              <h4 className="card-title ">{partner.title}</h4>
              <p className="card-text">{partner.info}</p>
              <div className="text-right">
                <a
                  href={partner.link}
                  data-toggle="collapse"
                  onClick={handlePartnerFormClick}
                >
                  {partner.linkLabel}{" "}
                  <i className="now-ui-icons arrows-1_minimal-down"></i>
                </a>
              </div>
              <div
                className={`collapse ${partnerFormShow}`}
                style={{ paddingTop: "20px" }}
              >
                <div className="card-header">
                  <h6>{partner.formTitle}</h6>
                </div>
                <div className="card-body">{partner.form}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetInvolved;
