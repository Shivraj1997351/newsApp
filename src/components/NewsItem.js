import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, Url, date, author, source} = props;
    let newDate = new Date(date);
    return (
        <div className="card">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%",zIndex:"1"}}>{source}</span>
            <img src={imageUrl} className="card-img-top" style={{height:"300px"}} alt="News item"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By <b>{author}</b> on <b style={{color:"red"}}>{/*{newDate.getDay()+'-'+newDate.getMonth()+'-'+newDate.getFullYear() + ' ' + newDate.getHours()+':'+newDate.getMinutes()}*/}{newDate.toGMTString()}</b></small></p>
                <a href={Url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem
