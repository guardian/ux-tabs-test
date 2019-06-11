import React, { useState, useEffect } from "react";
import { all, sport, travel } from "./services/CAPI";

const App = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [sportArticles, setSportArticles] = useState([]);
  const [travelArticles, setTravelArticles] = useState([]);

  useEffect(() => {
    all().then(res => {
      setAllArticles(res.response.results);
    });
    sport().then(res => {
      setSportArticles(res.response.results);
    });
    travel().then(res => {
      setTravelArticles(res.response.results);
    });
  }, []);

  return (
    <>
      <h1>The Guardian</h1>
      <ul>
        <h2>All</h2>
        {allArticles.map(article => (
          <li key={article.id}>
            <a href={article.webUrl}>{article.webTitle}</a>
          </li>
        ))}
      </ul>
      <ul>
        <h2>Sport</h2>
        {sportArticles.map(article => (
          <li key={article.id}>
            <a href={article.webUrl}>{article.webTitle}</a>
          </li>
        ))}
        <h2>Travel</h2>
        {travelArticles.map(article => (
          <li key={article.id}>
            <a href={article.webUrl}>{article.webTitle}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export { App };
