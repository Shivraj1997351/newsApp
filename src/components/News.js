import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews=async()=>{
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
    setLoading({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
  
  useEffect(() => {
    updateNews();
    document.title = props.category.charAt(0).toUpperCase()+props.category.slice(1);
  }, []);
  
  
  const fetchMoreData = async () => {
      const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}&category=${props.category}`;
      setPage(page+1);
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
  };

  
    return (
        <>
          <h1 className='text-center' style={{marginTop:"100px"}}>NewsMonkey - Top Headlines from {props.category.charAt(0).toUpperCase()+props.category.slice(1)}</h1>
          {loading && <Spinner/>}
          <InfiniteScroll 
          dataLength={articles.length} 
          next={fetchMoreData} 
          hasMore={articles.length !== totalResults} 
          loader={<Spinner/>}
          >
            <div className="container my-5">
              <div className="row">
                {articles.map((element)=>{
                    return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem source={element.source.name?element.source.name:"Unknown"} title={element.title?element.title.slice(0,45):"Unknown title"} description={element.description?element.description.slice(0,88):"No description"} Url={element.url?element.url:"https://google.com"} imageUrl={element.urlToImage?element.urlToImage:require('./news.jpeg')} author={element.author?element.author:"Unknown"} date={element.publishedAt?element.publishedAt:"Unknown"}/>
                          </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
  country : "in",
  pageSize: 8,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News