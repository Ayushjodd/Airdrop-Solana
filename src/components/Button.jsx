import PropTypes from "prop-types";

export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" focus:ring-4 focus:ring-white transition-all text-black text-md rounded-lg hover:bg-[#d0d0d1] bg-white font-normal px-4 py-2 mt-5"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
