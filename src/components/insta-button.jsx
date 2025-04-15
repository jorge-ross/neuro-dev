import PropTypes from "prop-types";
import { FaInstagram } from 'react-icons/fa6';
// import { Link } from "react-router-dom";

const InstagramButton = ({ url, style }) => {
  const isInstagram = url.includes('instagram.com');
  const username = url.split('instagram.com/')[1]?.replace('/', '');

  const handleClick = (e) => {
    if (isInstagram && username) {
      e.preventDefault();
      window.location.href = `instagram://user?username=${username}`;
      setTimeout(() => {
        window.open(url, '_blank');
      }, 300);
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={isInstagram ? handleClick : undefined}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
    >
      <FaInstagram />
    </a>
  );
};

InstagramButton.propTypes = {
  url: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default InstagramButton;