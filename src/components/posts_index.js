import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        return(
            <div>Posts Index</div> 
        );
    }
};

function mapStateToProps(state){
    console.log(state);
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
