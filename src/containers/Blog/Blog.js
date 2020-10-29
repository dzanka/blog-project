import React, { Component } from 'react';
//import axios from '../../axios'; //our own instance, ine nastavenia ako axios nastaveny v index

//import Post from '../../components/Post/Post';
//import FullPost from './FullPost/FullPost';
//import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import './Blog.css';
//import { waitForDomChange } from '@testing-library/react';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>/
                            <li><a href="/new-post">New Post</a></li>/
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;