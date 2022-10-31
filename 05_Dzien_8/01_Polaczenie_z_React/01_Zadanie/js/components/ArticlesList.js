import React from "react";

const ArticlesList = ({articles = [], onArticleRemove}) => (
  <ol>
    {articles.map((title, index) => <li key={index}>{title}<button onClick={()=> {onArticleRemove(index)}}>Usuń</button></li>)}
  </ol>
);

export default ArticlesList;
