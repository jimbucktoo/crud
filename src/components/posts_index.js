import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import {Link} from 'react-router-dom'
import _ from 'lodash'

class PostsIndex extends Component {
	componentDidMount(){
		this.props.fetchPosts()
	}

	renderPosts(){
		return _.map(this.props.posts, post => {
			return (<li className='list-group-item post' key='{post.id}'>
				{post.title}
			</li>) 
		})
	}

	render(){
		console.log(this.props.posts)
		return(
			<div className='topMargin'>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">Add Post</Link>
				</div>
				<h2 className='post'>Posts: </h2>
				<h3>
					<ul className='list-group post'>
						{this.renderPosts()}
					</ul>
				</h3> 
			</div> 
		)
	}
}

function mapStateToProps(state){
	//console.log(state)
	return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
