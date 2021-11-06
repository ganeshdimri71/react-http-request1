import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            errMsg:''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/postsd').then(response => {
            console.log(response.data)
            this.setState({posts:response.data})
        }).catch(error => {
            console.log(error)
            this.setState({errMsg:'There is a error in the retrieving of the data...!'})
        })
    }
    
    render() {
        const {posts, errMsg} = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length ?
                        posts.map(post => <h1>{post.title}</h1>)
                        : null
                }
                {
                    errMsg ? <h1>{errMsg }</h1>
                    : null
                }
            </div>
        )
    }
}

export default PostList
