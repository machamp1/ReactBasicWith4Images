import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Changing photos </h1>
    <div>
      <img alt="random" src={img + "?grayscale"} />
      <img
        className="img"
        src="https://cdn.pixabay.com/photo/2017/04/03/13/38/fruit-free-2198378_1280.png"
        alt=""
      />
      <img
        className="img"
        src="https://www.maxpixel.net/static/photo/1x/Tomato-Food-Tomatoes-Healthy-Harvest-Vegetable-929234.jpg"
        alt=""
      />
      <img
        className="img"
        src="https://watermark.lovepik.com/photo/20211208/large/lovepik-fruits-and-vegetables-poster-picture_501615020.jpg"
        alt=""
      />
    </div>
  </div>,
  document.getElementById("root")
);
