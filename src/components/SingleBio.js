import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import SingleTemplate from "./SingleTemplate";

function SingleBio() {
  const [bio, setBio] = useState(null);
  const { bioSlug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current=="${bioSlug}"]{
                name,
                _id,
                role,
                image{
                    asset->{
                        _id,
                        url,
                    },
                    alt
                },
                bio,
            }`
      )
      .then((data) => setBio(data[0]))
      .catch(console.error);
  }, [bioSlug]);
  console.log(bio);

  return (
    <SingleTemplate
      singleItem={bio}
      headerTitle={bio?.role}
      authorName={bio?.name}
      coverImage={bio?.image.asset.url}
      bodyContent={bio?.bio}
    />
  );
}

export default SingleBio;
