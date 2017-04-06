import React from 'react';
import ThumbnailUpper from './ThumbnailUpper'
import ThumbnailLower from './ThumbnailLower'

const posts = [
  {id:'post0', title:'board1', content:'good night'},
  {id:'post1', title:'board2', content:'sleepyhead'},
  {id:'post2', title:'board3', content:'hello'}
];

class Thumbnail extends React.Component {
    render(){
      const renderPosts = posts.map((post) => {

        return (
          <ThumbnailUpper key={post.id} title={post.title} content2={post.content}/> /* 정보를 받아올때 변수는 {}로 wrapping해준다 */
        )
      });

        return (
          <div className="container">
            <div className="row">
              {renderPosts}
            </div>
            <div className="row">
              <ThumbnailLower/>
              <ThumbnailLower/>
              <ThumbnailLower/>
              <ThumbnailLower/>
            </div>
          </div>
            );
      }
}

export default Thumbnail;
