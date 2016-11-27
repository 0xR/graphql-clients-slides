const PostsContainer = Relay.createContainer(Posts, {
  initialVariables: {
    offset: 0,
    limit: pageSize,
  },
  fragments: {
    postsOnAuthor: () => Relay.QL`
    fragment Posts on Author {
      posts(offset: $offset, limit: $limit){
        title
        text
      }
    }
    `
  }
});
