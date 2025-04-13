import PropTypes from "prop-types";
import { FaInstagram } from 'react-icons/fa6';

const InstagramButton = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <FaInstagram style={{ fontSize: '2.5rem', color: '#E1306C' }} />
    </a>
  );
};

InstagramButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default InstagramButton;