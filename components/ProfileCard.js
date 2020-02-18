import React from "react";

const assetPrefix = process.env.ASSET_PREFIX;
const ProfileCard = props => {
  return (
    <div className="col-md-4">
      <div className="card card-plain ml-auto mr-auto">
        <div className="card-header card-header-image">
          <img
            className="rounded-circle img-raised"
            src={`${assetPrefix}/static/img/profiles/${props.image}`}
          />
        </div>

        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <h6 className="card-category text-gray">{props.title}</h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
