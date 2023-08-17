import { useEffect, useState } from 'react';
import Article from "../elements/Article";

export default function Articles()  {
 
  const [articles, setArticles] = useState([]);

  useEffect(() =>
  {
    const devTo = "https://dev.to/api/articles?username=rubendmn";

    fetch(devTo)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let articlesTemp = [];
        data = data.slice(0, 4);
        data.forEach((element, index) => {
          articlesTemp.push(
            <div className="column" key={index}>
              <Article
                key={index}
                title={element.title}
                url={element.url}
                image={element.cover_image}
                extract={element.description}
              />
            </div>
          );
        });
        var offset = 4 - data.length;
        for (var i = 0; i < offset; i++) {
          articlesTemp.push(<div className="column"></div>);
        }
        setArticles(articlesTemp);
      });

  },[]);
     

    return (
      <section className="section" id="articles">
        <div className="container">
          <h1 className="title">Articles</h1>
          <h2 className="subtitle is-4">My Recent articles:</h2>
          <div className="columns">{articles}</div>
        </div>
      </section>
    );

}

