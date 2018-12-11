import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost, deletePost} from '../actions'
import {Link} from 'react-router-dom'
import '../style/App.css'

class PostsShow extends Component {

    componentDidMount(){
        const {id} = this.props.match.params
        this.props.fetchPost(id)
    }

    onDeleteClick() {
        const { id } = this.props.match.params

        this.props.deletePost(id, () => {
            this.props.history.push('/')
        })
    }

    render(){
        const {post} = this.props

        if (!post){
            return <div>Loading...</div>
        }

        return(
            <div className='custom-container text-center-align'>
                <button className='float-left btn btn-primary'><Link className='color-white' to='/'>Back To Home</Link></button>
                <button
                    className='float-right btn btn-danger pull-xs-right'
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <br />
                <br />
                <br />

                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({posts}, ownProps){
    return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow)
