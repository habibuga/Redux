import React from "react";
import ArticleInput from "./ArticleInput";
import UsersList from "./UsersList";
import ArticlesList from "./ArticlesList";

const Articles = ({onAdd, onRemove, users, articles}) => (
  <div>
    <ArticleInput users={users} onArticleAdd={onAdd}/>
    <UsersList users={users}/>
    <ArticlesList articles={articles} onArticleRemove={onRemove}/>
  </div>
);

export default Articles;
