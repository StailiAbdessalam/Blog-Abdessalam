import { Fragment } from "react";
import Head from "next/head";
import Hero from "../Components/Home/Hero";
const index = () => {
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
    </Fragment>
  );
};

export default index;
