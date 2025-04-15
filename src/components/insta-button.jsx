import PropTypes from "prop-types";
import { FaInstagram } from 'react-icons/fa6';
import { Link } from "react-router-dom";

const InstagramButton = ({ url, style }) => {
  const isExternal = url.startsWith('https');

  return isExternal ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
    >
      <FaInstagram />
    </a>
  ) : (
    <Link
      to={url}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
    >
      <FaInstagram />
    </Link>
  );
};

InstagramButton.propTypes = {
  url: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default InstagramButton;