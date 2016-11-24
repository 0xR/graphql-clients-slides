const postQuery = gql`query getPosts($offset: Int, $limit: Int){
  authors(limit:1){
    firstName
    lastName,
    posts(offset: $offset, limit: $limit){
      ...PostList
    }
  }
}
${Posts.fragments.posts}`;
