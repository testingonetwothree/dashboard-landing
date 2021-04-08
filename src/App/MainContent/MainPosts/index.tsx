import React from 'react'
import './styles.css'
import {PostsHeader} from "./PostsHeader";
import {PostsContent} from "./PostsContent";
import {postsData} from "../../../assets/mock/postsData";


export const MainPosts = () => (
  <div className="main-content__posts">
    <PostsHeader />
    {postsData.map(data => <PostsContent data={data} />)}
  </div>
)
