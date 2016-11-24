const Posts = /* some react component */
Posts.fragments = {
  post: `fragment postListItem on Post {
    id
    title
    text
  }`
};

const query = `query getPosts($offset: Int, $limit: Int){
  authors(limit:1){
    posts(offset: $offset, limit: $limit){
      ...postListItem
    }
  }
}
${Posts.fragments.post}
`;
