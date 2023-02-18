import React, { Component } from "react";
import Newsitem from "../components/Newsitem";
import Spinner from "../components/Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect, useState} from 'react'


const News = (props)=> {

  const  [articles, setarticles] = useState([])
  const  [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  

   const capitalizeFirstLetter = (words)=> {
    const finalwords = words.charAt(0).toUpperCase() + words.slice(1)
    return finalwords
  }




  

  const updateNews = async()=> {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${props.apiKey}&page=${
      setpage + 1
    }&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100)
  }
   useEffect(()=> {
    updateNews();
   },[])
    
  


  const fetchMoreData = async() => {
    setloading(true)
   setpage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country{props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)
    };
  


  
    return (
      <div className="container my-3">
        <h1
          className="text-center"
          style={{
            margin: "35px",
          }}
        >
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {!loading &&
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              )
            })}
            </div>
        </div>
        </InfiniteScroll>

      </div>
    );
  }

News.deafultProps = {
  country: "us",
  pageSize: 8,
  category: "General",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
