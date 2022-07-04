import classes from '../../styles/post/Allpost.module.css';
import PostsGrid from './Post-Grid';

function AllPosts(props:any) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
