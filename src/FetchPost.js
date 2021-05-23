import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Comments from "./Comments";
import Slider from './Slider';

const postTile = {
    textAlign: "center",
    padding: "1%",
    backgroundColor: "white",
    boxShadow: "0 0 10px 0 rgba(0, 0.2, 0, 0.2)",
    borderRadius: "10px",
    fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
    margin: "1% 25% 1% 25%"
}

const iconPosition = {
    marginLeft: "90%",
    fontSize: "24px",
    marginTop: "3%"
}

const commentDiv = {
    display: "none"
}

export default class FetchPost extends Component{

    state = {
      loading: true,
      results: [],
      commentId: 0
    }
  
    async componentDidMount(){
      const url = "https://jsonplaceholder.typicode.com/posts"
      const res = await fetch(url);
      await res.json().then((jsonList) =>{
        this.setState({loading: false, results: jsonList})
        console.log(this.state.results);
      });
    }

    render(){
        return <div>
            {
                this.state.loading ? 
                <div>loading...</div> : 
                <div>
                    {
                        this.state.results.map(function(d, idx){
                            return (
                                <div key={idx} style={postTile} class="postCard">
                                    {d.title}
                                    <br/>
                                    <div style={iconPosition}><button onClick={() => {
                                            var index = idx;
                                            if(document.getElementById(index.toString()).style.display !== 'none'){
                                                document.getElementById(index.toString()).style.display = "none";
                                            }
                                            else{
                                                document.getElementById(index.toString()).style.removeProperty("display");
                                            }
                                        }}><i className='far fa-comment'></i></button></div>
                                    <div id={idx} style={commentDiv}>
                                        <Comments postId={d.id}/>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    }
}


/*function FetchPost(){
    const [posts, setData] = useState([]);
 
    useEffect(async () => {
        const result = await axios(
            'https://jsonplaceholder.typicode.com/posts',
        );
        setData(result.data);
        console.log(result.data);
    }, []);
    
    return (
        <div>
            {
                console.log("Here "+posts)
            }
        </div>
    )
}

export default FetchPost;*/