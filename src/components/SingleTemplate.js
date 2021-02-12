import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function SingleTemplate({
  singleItem,
  headerTitle,
  authorImage,
  authorName,
  coverImage,
  bodyContent,
}) {
  if (!singleItem) {
    return <div>Loading...</div>;
  }
  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {headerTitle}
              </h1>
              <div className="flex justify-center text-gray-800">
                {authorImage && (
                  <img
                    src={urlFor(authorImage).url()}
                    alt={authorName}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <p className="cursive flex items-center pl-12 text-2xl">
                  {authorName}
                </p>
              </div>
            </div>
          </div>
          <img
            src={coverImage}
            alt={headerTitle}
            className="w-full h-full object-cover rounded-t"
          />
        </header>
        <div className="justify-center px-8 lg:px-48 py-12 lg:py-20 prose lg:prose-xl ">
          <BlockContent
            blocks={bodyContent}
            projectId="u8h1sjl4"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}

export default SingleTemplate;
