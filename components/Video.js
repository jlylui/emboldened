import React from "react";
const Video = props => {
  return (
    <div className="container">
      <div className="media-container">
        <h3>{props.title}</h3>
        <iframe
          className="media-frame"
          src={props.url} //NEDD TO PROVIDE EMBOLDENED VIDEO URL
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="video"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
