import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const client = new Lokka({
  transport: new Transport('/graphql'),
});

const postsPromise = client.query(`query getPosts($offset: Int, $limit: Int){
  authors(limit:1){
    firstName
    lastName,
    posts(offset: $offset, limit: $limit){
      ...${Posts.fragments.posts}
    }
  }
}`, { offset, limit: pageSize });
