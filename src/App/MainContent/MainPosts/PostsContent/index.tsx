import React from 'react'
import './styles.css'
import {eye} from "../../../../assets/icons/eye";
import {book} from "../../../../assets/icons/book";

interface IProps {
  data: {
    shortcut: string,
    title: string,
    date: string,
    tags: string[],
    bookmarks: string,
    views: string,
  }
}


export const PostsContent: React.SFC<IProps> = ({data}) => (
  <div className="posts-content__row">
    <div className="posts-content__content-info">
      <div className="posts-content__circle">{data.shortcut}</div>
      <div className="posts-content__header">
        <div className="posts-content__header-title">{data.title}</div>
        <div className="posts-content__header-date">{data.date}</div>
      </div>
      {data.tags.map((tag, i) => {
        let style = {color: '', background: ''}
        if (i % 2 === 0) {style.color = '#FC5569'; style.background = '#FEE5DD'}
        else {style.color = '#1473E6'; style.background = '#DAE9FC'}
        return <div className="posts-content__tags" style={style}>{tag}</div>})}
    </div>
    <div className="posts-content__content-numbers">
      <div className="posts-content__content-numbers-wrapper">
        <div className="posts-content__icon">{book}</div>
        <div className="posts-content__bookmarks">{data.bookmarks}</div>
      </div>
      <div className="posts-content__content-numbers-wrapper">
        <div className="posts-content__icon">{eye}</div>
        <div className="posts-content__views">{data.views}</div>
      </div>
    </div>
  </div>
)