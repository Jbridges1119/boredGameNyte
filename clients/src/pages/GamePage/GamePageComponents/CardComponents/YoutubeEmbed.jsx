import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = (props) => (
  // ${embedId}
  <div className="video-responsive">
    <iframe
      width="400"
      height="225"
      src={`https://www.youtube.com/embed/${props.id}`}
      frameBorder="0"
      allow=""
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
