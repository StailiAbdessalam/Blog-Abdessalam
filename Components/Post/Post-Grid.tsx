import PostItem from './post-iteams';
import classes from '../../styles/post/post-grid.module.css';

function PostsGrid(props:any) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post:any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
