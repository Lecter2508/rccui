import PropTypes from "prop-types";

/**
 * 
 * @param {String} title - Button title
 * @param {Function} onClickCallback - Parent onclick event callback 
 * @returns {React.Element} - returns a button
 */
export const CustomButton = ({ title, onClickCallback }) => {
  return <div className="bg-blue-600 rounded-lg text-white p-2 hover:bg-blue-500 w-full text-center" onClick={onClickCallback}>{title}</div>;
};

CustomButton.propTypes = {
  title: PropTypes.string,
  onClickCallback: PropTypes.func,
};
