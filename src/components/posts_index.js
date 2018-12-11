import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import '../style/App.css'

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts()
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (<li className='list-group-item' key={post.id}>
                <Link className='color-black' to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </li>) 
        })
    }

    render(){
        console.log(this.props.posts)
        return(
            <div className='custom-container'>
                <Link className='float-right btn btn-primary' to='/posts/new'>Add Post</Link>
                <h2>Posts: </h2>
                <h3>
                    <ul className='list-group'>
                        {this.renderPosts()}
                    </ul>
                </h3> 
            </div> 
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
