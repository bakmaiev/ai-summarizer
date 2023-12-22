import { linkIcon, search } from "../assets";
import PropTypes from "prop-types";

const UrlForm = ({ onSubmit, onChange, value }) => {
  return (
    <form
      className="relative flex justify-center items-center"
      onSubmit={onSubmit}
    >
      <img
        src={linkIcon}
        alt="link_icon"
        className="absolute left-0 my-2 ml-3 w-5"
      />
      <input
        type="url"
        placeholder="Enter a URL"
        value={value}
        onChange={onChange}
        required
        className="url_input peer"
      />
      <button
        type="submit"
        className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
      >
        <img
          src={search}
          alt="search_icon"
          className="w-[40%] object-contain"
        />
      </button>
    </form>
  );
};

UrlForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UrlForm;
