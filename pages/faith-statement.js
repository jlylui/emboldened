import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const faithStatements = [
  '"We believe the Bible to be the only infallible, authoritative Word of God. It is inspired and relevant to our lives today through the revelations of the Holy Spirit."',
  '"We believe that there is one God, eternally existent in three persons: Father, Son, and the Holy Spirit."',
  '"We believe in the Deity of the Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His atoning death who is forever one Christ with two natures: God and man, in one person."',
  '"We believe that we are all created in the image of God but separated from God by sin.\nWithout Jesus we cannot have a relationship with God."',
  '"We believe that God is Love and He loves all people. It is His desire to reach out to those who are poor, oppressed, widowed or orphaned, and to heal the broken-hearted."',
  '"We believe in a personal relationship with God through salvation, God’s free gift to man.\nIt is not a result of what we do, but it is only available through God’s grace and favour."',
  '"We believe in the present ministry of the Holy Spirit by whose indwelling, every Christian is enabled to live a godly life."',
  '"We believe in the spiritual unity of believers and in the One Church of whom\nour Lord Jesus Christ is the Head and High Priest."',
  '"We believe that God gives all believers spiritual gifts for the strengthening of God’s people and proof of God’s existence and power to unbelievers. The gifts of the Spirit are active and relevant today."',
  '"We believe that every Christian is called to the Great Commission,\nto share the Gospel and to love those around us."',
  '"We believe in the reality of Heaven and Hell, as well as the second coming of Jesus Christ as He promised."'
];
const banner = {
  title: "Faith Statement",
  subTitle: "",
  image: "/static/img/header-06-faith-statement.jpg"
};

const FaithStatement = () => {
  const statements = faithStatements.map((statement, index) => {
    let align = "left";
    let popoverAlign = "right";
    if (index % 2 === 1) {
      align = "right";
      popoverAlign = "left";
    }
    return (
      <div key={index} className="animated fadeInUp">
        <div className="row">
          <div className={`statement-box box-${align}`}>
            <div
              className={`popover bs-popover-${popoverAlign} bs-popover-${popoverAlign}-docs`}>
              <div className="arrow"></div>
              <div className="popover-body">
                <p>{statement}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Layout banner={banner}>
      <div className="section section-1">
        <div className="container">{statements}</div>
      </div>
    </Layout>
  );
};

export default FaithStatement;
