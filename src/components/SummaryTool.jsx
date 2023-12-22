import { useEffect, useState } from "react";
import { useLazyGetSummaryQuery } from "../services/article";
import UrlForm from "./UrlForm";
import ArticleList from "./ArticleList";
import SummaryInfo from "./SummaryInfo";

const SummaryTool = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updateAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updateAllArticles);
      localStorage.setItem("articles", JSON.stringify(updateAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };

  const handleDelete = (deleteUrl) => {
    const updatedArticles = allArticles.filter(
      (article) => article.url !== deleteUrl
    );
    setAllArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
  };

  useEffect(() => {
    const articlesFromStorage = JSON.parse(localStorage.getItem("articles"));
    if (articlesFromStorage) {
      const initialArticle = articlesFromStorage[0];
      setAllArticles(articlesFromStorage);
      setArticle(initialArticle);
    }
  }, []);

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <UrlForm
          onSubmit={handleSubmit}
          value={article.url}
          onChange={(e) => setArticle({ ...article, url: e.target.value })}
        />
        <ArticleList
          articles={allArticles}
          onClick={setArticle}
          onCopy={handleCopy}
          copied={copied}
          onDelete={handleDelete}
        />
      </div>
      <SummaryInfo isFetching={isFetching} error={error} article={article} />
    </section>
  );
};

export default SummaryTool;
