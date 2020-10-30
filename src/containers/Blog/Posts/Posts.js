import React, {Component} from 'react';

import axios from '../../../axios'; //our own instance, ine nastavenia ako axios nastaveny v index
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
//import {Link} from 'react-router-dom';
import styles from './Posts.module.css';
import {Route} from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Jan'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                //this.setState({error:true});
            });
    }

    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/posts/'+id});
    }

    render(){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong...</p>;
        if (!this.state.error){
            posts = this.state.posts.map(post => {
            return (
                //<Link key={post.id} to={'/posts/'+post.id}>
                    <Post 
                    key={post.id}
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                //</Link>);
            );});
        }

        //console.log(this.props.match.url);
        return (
            <div>
                <section className={styles.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;