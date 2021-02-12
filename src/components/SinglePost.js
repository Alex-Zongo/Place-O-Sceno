import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import SingleTemplate from "./SingleTemplate.js";

function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current=="${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <SingleTemplate
      singleItem={singlePost}
      headerTitle={singlePost?.title}
      authorImage={singlePost?.authorImage}
      authorName={singlePost?.name}
      coverImage={singlePost?.mainImage.asset.url}
      bodyContent={singlePost?.body}
    />
  );
}

export default SinglePost;
