import { Fragment } from "react";
import Head from "next/head";
import Hero from "../Components/Home/Hero";
// import FeaturedPosts from "../Components/Home/featured-posts";
// import { getFeaturedPosts } from '../lib/posts-util';

const index = (props : any) => {
  return (
    <Fragment>
      <Head>
        <title>ABdessalam staili and next js</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero></Hero>
      
      {/* <FeaturedPosts posts={props.posts}/> */}
    </Fragment>
  );
};

// export function getStaticProps() {
//   const featuredPosts:any = getFeaturedPosts();

//   return {
//     props:{
//       posts: featuredPosts,
//     },
//   };
// }

export default index;
