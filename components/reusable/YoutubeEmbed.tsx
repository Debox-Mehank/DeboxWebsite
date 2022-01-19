import React from "react";

const YoutubeEmbed = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="w-full max-w-3xl pb-6">
      <div
        style={{
          width: "100%",
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
        }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          width="800"
          height="450"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default YoutubeEmbed;
