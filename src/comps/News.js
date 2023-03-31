import React, { Component } from 'react'
import Newsitem from '../Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    fetchmore = async() =>{
        this.setState({page : this.state.page + 1})
        let api = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=16e06aad6a0b45a895c2cb6987ab2c4f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(api)
        let parsedData=await data.json()
        this.setState({articles:this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults,
            loading : false
        })
        
        
    }
    
    
    captalize=(string)=>{
return string.charAt(0).toUpperCase()+string.slice(1)
    }
    static defaultProps={
        
    }
    
    static propTypes ={
        name : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }
    articles = []
    constructor(props){
        super(props)
        this.state={
            articles :this.articles,
            page:1,
            loading:false, 
            totalResults:0
        }
        document.title=`${this.captalize(this.props.category)} - The LIT Press`
    }
    async componentDidMount(){
        let api = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=16e06aad6a0b45a895c2cb6987ab2c4f&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(api)
        let parsedData=await data.json()
        this.setState({articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading : false
        })
    }

    prev = async() => { 
        let api = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=16e06aad6a0b45a895c2cb6987ab2c4f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(api)
        let parsedData=await data.json()
        this.setState({
            page:this.state.page -1,
            articles:parsedData.articles,
            loading : false})
     }

    next = async() => { 
        if(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        }else{
        let api = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=16e06aad6a0b45a895c2cb6987ab2c4f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true}) 
        let data = await fetch(api)
        let parsedData=await data.json()
        this.setState({
            page:this.state.page +1,
            articles:parsedData.articles,
        loading : false
        })}
     }
  render() {
    return (
   <>
        <h2 style={{color:'rgb(0, 119, 255)',fontSize : '40px',fontWeight:'bold',fontFamily:'TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif',textDecoration :'underline',marginTop :'100px'}}>
        The LIT Press: Where the tea is always hot!
            </h2>
            {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
  dataLength={this.state.articles.length}
  next={this.fetchmore}
  hasMore={this.state.articles.length !== this.state.totalResults}
  loader={<h4></h4>}
  initialScrollY={false}
  >
   <div className='container'>
    <div className="row">
      {this.state.articles.map((element) => {
        return (
          <div className="col-md-4">
            <Newsitem 
              title={element.title ? element.title.slice(0,80) : ""} 
              description={element.description ? element.description.slice(0,50) : ""} 
              imageUrl={element.urlToImage} 
              newsUrl={element.url} 
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
        );
      })}
    </div>
    </div>
  
</InfiniteScroll>

        </>

    ) 
  }
}
