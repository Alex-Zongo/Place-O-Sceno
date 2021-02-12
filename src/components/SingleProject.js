import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import SingleTemplate from "./SingleTemplate";

function SingleProject() {
  const [singleProject, setSingleProject] = useState(null);
  const { projectSlug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current=="${projectSlug}"]{
            title,
            _id,
            slug,
            description,
            image{
                asset->{
                    _id,
                    url,
                }
            },
            "name": author->name,
            "authorImage": author->image
            
        }`
      )
      .then((data) => setSingleProject(data[0]))
      .catch(console.error);
  }, [projectSlug]);
  console.log(singleProject);

  return (
    <SingleTemplate
      singleItem={singleProject}
      headerTitle={singleProject?.title}
      authorImage={singleProject?.authorImage}
      authorName={singleProject?.name}
      coverImage={singleProject?.image.asset.url}
      bodyContent={singleProject?.description}
    />
  );
}

export default SingleProject;
