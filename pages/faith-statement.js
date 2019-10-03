import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const faithStatements = [
  '"We believe the Bible to be the only infallible, authoritative Word of God. It is inspired and relevant to our lives today through the revelations of the Holy Spirit."',
  '"We believe that there is one God, eternally existent in three persons: Father, Son, and the Holy Spirit."',
  '"We believe in the Deity of the Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His atoning death who is forever one Christ with two natures-God and man-in one person."',
  '"We believe that we are all created in the image of God but separated from God by sin. Without Jesus we cannot have a relationship with God."',
  '"We believe that God is Love and He loves all people. It is His desire to reach out to those who are poor, oppressed, widowed or orphaned, and to heal the broken-hearted."',
  '"We believe in a personal relationship with God through salvation, God’s free gift to man. It is not a result of what we do, but it is only available through God’s grace and favour."',
  '"We believe in the present ministry of the Holy Spirit by whose indwelling, every Christian is enabled to live a godly life."',
  '"We believe in the spiritual unity of believers and in the One Church of whom our Lord Jesus Christ is the Head and High Priest."',
  '"We believe that God gives all believers spiritual gifts for the strengthening of God’s people and proof of God’s existence and power to unbelievers. The gifts of the Spirit are active and relevant today."',
  '"We believe that every Christian is called to the Great Commission, to share the Gospel and to love those around us."',
  '"We believe in the reality of Heaven and Hell, as well as the second coming of Jesus Christ as He promised."'
];
const banner = {
  title: "Faith Statement",
  subTitle: "",
  image: "../static/img/header-06-faith-statement.jpg"
};

const FaithStatement = () => {
  const statements = faithStatements.map((statement, index) => {
    return (
      <Animated animationIn="fadeInUp" animationOut="fadeInUp" isVisible={true}>
        <div className="row">
          <div
            className={`statement-box ${
              index % 2 != 1 ? "box-left" : "box-right"
            } `}
            data-animate-effect="fadeInLeft">
            <div
              className={`round-icon ${
                index % 2 != 1 ? "round-icon-left" : "round-icon-right"
              }`}>
              {index % 2 != 1 ? (
                <FontAwesomeIcon icon="comment" size="2x" flip="horizontal" />
              ) : (
                <FontAwesomeIcon icon="comment" size="2x" />
              )}
            </div>
            <div
              className={`popover ${
                index % 2 != 1
                  ? "bs-popover-right bs-popover-right-docs"
                  : "bs-popover-left bs-popover-left-docs"
              }`}>
              <div className="arrow"></div>
              <div className="popover-body">
                <p>{statement}</p>
              </div>
            </div>
          </div>
        </div>
      </Animated>
    );
  });

  return (
    <Layout banner={banner}>
      <div className="section">
        <div className="container">
          <h2>We Believe ...</h2>
          <div className="container">{statements}</div>
        </div>
      </div>
    </Layout>
  );
};

export default FaithStatement;
