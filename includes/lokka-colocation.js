const Posts = /* some react component */
Posts.fragments = {
  posts: client.createFragment(`fragment on Post {
    id
    title
    text
  }`)
};

const query = `query getPosts($offset: Int, $limit: Int){
  authors(limit:1){
    posts(offset: $offset, limit: $limit){
      ...${Posts.fragments.post}
    }
  }
}`;
