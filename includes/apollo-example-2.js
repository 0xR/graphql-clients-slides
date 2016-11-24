const Posts = /* some react component */
const PostsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps), // Redux connect
  graphql( // Apollo connect
    postQuery, {
      // Map props from Redux to GraphQL variables
      options: ({ pageNumber }) => ({
        variables: {
          offset: (pageNumber - 1) * pageSize,
          limit: pageSize,
        },
      }),
    }),
)(Posts);
