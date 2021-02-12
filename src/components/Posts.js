import React, { useEffect, useState } from "react";
import "./Posts.css";
import sanityClient from "../client";
import PublishItemTemplate from "./PublishItemTemplate";
import Pagination from "./Pagination";

function sortFunction(a, b) {
  let dateA = new Date(a.publishedAt).getTime();
  let dateB = new Date(b.publishedAt).getTime();
  return dateA < dateB ? 1 : -1;
}

function Posts() {
  const [allPosts, setAllPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        publishedAt,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts?.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <main className="bg-white-100 min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">Blog & News</h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to Pace O Sceno's Blog and News
          </h2>
          <div className="grid gap-5 ">
            <article className="flex flex-wrap justify-center relative rounded-lg p-5 ">
              {currentPosts &&
                currentPosts
                  .sort(sortFunction)
                  .map((post, index) => (
                    <PublishItemTemplate
                      path={"/blog/" + post?.slug.current}
                      index={index}
                      key={post?.slug.current}
                      coverImage={post?.mainImage.asset.url}
                      alt={post?.mainImage.alt}
                      title={post?.title}
                      date={post?.publishedAt}
                    />
                  ))}
            </article>
          </div>
        </section>
      </main>
      <Pagination
        postsPerpage={postsPerPage}
        totalPosts={allPosts?.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Posts;
