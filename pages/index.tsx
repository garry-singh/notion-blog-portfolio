import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Client } from "@notionhq/client";

const Home = ({ posts }: any) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {posts.map((post: any) => (
            <a key={post.id}>
              <h2>{post.properties.Name.title[0].plain_text}</h2>
              <p>{post.properties.Author.rich_text[0].plain_text}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "",
  });

  return {
    props: {
      posts: response.results,
    },
  };
}

export default Home;