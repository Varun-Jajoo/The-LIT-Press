import React, { Component } from 'react'

export default class Newsitem extends Component {
    
  render() {
    let{title,description,imageUrl,newsUrl,author,date,source}=this.props
    return (
        <div className="card" style={{ width: "18rem"}}>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor :"#e71e0f",zIndex : 1,left : '50%' ,fontSize: '15px'}}>{source}

  </span>
        <img src={(!imageUrl)?"https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg":imageUrl}className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title"> {title}....</h5>
          <p className="card-text">{description}......
          </p>
          <p class="card-text"><small className="text-body-secondary">By {!(author)?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
 
          <a rel="noreferrer"href={newsUrl} target="_blank" className="btn" style={{fontWeight : 'bold',color :'black?'}}>
            Read More
          </a>
        </div>
      </div>
      
    )
  }
}
