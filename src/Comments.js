import React, { useState, useEffect } from 'react';


const commentStyle = {
    fontSize: "12px",
    textAlign: "justify",
    padding: "3px",
    margin: "5px"
}

const iconPosition = {
    marginLeft: "90%",
    fontSize: "24px",
    marginTop: "3%"
}

export default class Comments extends React.Component{
    state = {
        loading: true,
        results: [],
        postId : 0
    }

    constructor(props){
        super(props);
        this.state = {loading: true, results: [], postId: props.postId}
    }


    async componentDidMount(){
      const url = "https://jsonplaceholder.typicode.com/comments?postId="+this.state.postId;
      const res = await fetch(url);
      await res.json().then((jsonList) =>{
        this.setState({loading: false, results: jsonList})
      });
    }

    render(){
        return <div>
            {
                <div>
                    {
                        this.state.loading ? 
                        <div></div> : 
                        this.state.results.map(function(d, idx){
                            return (
                                <div key={idx} style={commentStyle}>
                                    <label><strong>Name:</strong></label>
                                    <span>{d.name}</span>
                                    <label><strong>      Email:</strong></label>
                                    <span>{d.email}</span>
                                    <div>
                                    <label><strong>Comment:  </strong></label>
                                        {d.body}
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