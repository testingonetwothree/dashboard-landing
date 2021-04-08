import React from "react";
import './styles.css'

import {filter} from "../../../../assets/icons/filter";

export const PostsHeader = () => (
  <div className="main-posts__posts-header_wrapper">
    <div className="main-posts__posts-header_content">
      <div className="main-posts__posts-header_text">Popular Posts</div>
      <button className="main-posts__posts-header_filter-button">
        <div className="main-posts__posts-header_filter-icon">{filter}</div>
        <div className="main-posts__posts-header_filter-text">View</div>
      </button>
    </div>
  </div>
)