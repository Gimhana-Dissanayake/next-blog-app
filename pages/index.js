import Head from 'next/head'
import Link from 'next/link'
import {getPosts} from '../lib/posts'

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: {posts},
  }
}

function HomePage({posts}) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1 className="welcome-title">Welcome to My Tech Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <style jsx>
        {`
          .welcome-title {
            background-color: green;
            color: white;
            padding: 5px;
          }
        `}
      </style>
    </>
  )
}

export default HomePage
