import Backendless from "backendless";
import React, { useEffect, useState } from "react";

function Articles1() {
  // state created for articles
  const [articles, setarticles] = useState([]);

  // use useEffect for avoiding infinite loop
  useEffect(() => {
    Backendless.Data.of("article")
      .find()
      .then((res) => {
        console.log(res);
        setarticles((i) => res);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  // this [] is a must to avoid infinite loop

  return <div>Articles1
    {articles && articles.map(
        (i)=>{
            return (
                <h1>{i.title}</h1>
            )
        }
    )}
  </div>;
}

export default Articles1;
