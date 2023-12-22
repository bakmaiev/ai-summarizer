import { copy, tick } from "../assets";
import PropTypes from "prop-types";

const ArticleList = ({ articles, copied, onClick, onCopy }) => {
  return (
    <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
      {articles.reverse().map((item, index) => (
        <div
          key={`link-${index}`}
          onClick={() => onClick(item)}
          className="link_card"
        >
          <div className="copy_btn" onClick={() => onCopy(item.url)}>
            <img
              src={copied === item.url ? tick : copy}
              alt="copy_icon"
              className="w-[40%] h-[40%] object-contain"
            />
          </div>
          <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
            {item.url}
          </p>
        </div>
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  copied: PropTypes.string.isRequired,
};

export default ArticleList;
