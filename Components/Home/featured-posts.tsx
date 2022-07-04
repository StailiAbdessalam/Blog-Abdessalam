import PostsGrid from '../Post/Post-Grid';
import classes from '../../styles/post/featured-posts.module.css';

function FeaturedPosts(props:any) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
