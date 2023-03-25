import { useState } from "react";
import { getIpfsGatewayUri } from "../utils";
import LogoSrc from "../img/logo.png";

const DESC_LEN_CUTOFF = 100;

function Card({ data, children }) {
  const { name, description, image, animation_url } = data.tokenUriRes || {};
  const [descCollapsed, setDescCollapsed] = useState(true);

  const toggleDescCollapsed = () => setDescCollapsed(!descCollapsed);

  return (
    <div className="card">
      <div className="media-container">
        {animation_url ?
          <video autoPlay muted src={getIpfsGatewayUri(animation_url)} />
          : image ?
          <img src={getIpfsGatewayUri(image)} alt={name} />
            : <div>
               <img className="logo" src={LogoSrc} alt="logo" />
              </div>
        }
      </div>
      <div className="name-desc-container">
        <h2>{name}</h2>
        {!description ?
          <></>
          : description.length < DESC_LEN_CUTOFF ?
            <p>{description}</p>
            :
            <p>
              {descCollapsed ?
                <>
                  <span>{description.slice(0, DESC_LEN_CUTOFF)}...</span>
                  <span onClick={toggleDescCollapsed} className="toggle">Read more</span>
                </>
                :
                <>
                  <span>{description}</span>
                  <br />
                  <span onClick={toggleDescCollapsed} className="toggle">Read less</span>
                </>}
            </p>}
      </div>
      {children}
    </div>
  );
}

export { Card };
