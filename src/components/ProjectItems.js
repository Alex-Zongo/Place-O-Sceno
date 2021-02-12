import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Pagination from "./Pagination";
import PublishItemTemplate from "./PublishItemTemplate";

function sortFunction(a, b) {
  let dateA = new Date(a.publishedAt).getTime();
  let dateB = new Date(b.publishedAt).getTime();
  return dateA < dateB ? 1 : -1;
}

function ProjectItems() {
  const [projects, setProjects] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
                title,
                slug,
                image{
                    asset->{
                        _id,
                        url,
                    }
                },
                
                publishedAt,
            }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProjects = projects?.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <main className="bg-white-100 min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">
            Créations, Réalisations & Projets
          </h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to Pace O Sceno's projects
          </h2>
          <div className="grid gap-5 ">
            <article className="flex flex-wrap justify-center relative rounded-lg p-5 ">
              {currentProjects &&
                currentProjects
                  .sort(sortFunction)
                  .map((project, index) => (
                    <PublishItemTemplate
                      path={"/creations/" + project?.slug.current}
                      index={index}
                      key={project?.slug.current}
                      coverImage={project?.image.asset.url}
                      alt={project?.image.alt}
                      title={project?.title}
                      date={project?.publishedAt}
                    />
                  ))}
            </article>
          </div>
        </section>
      </main>
      <Pagination
        postsPerpage={postsPerPage}
        totalPosts={projects?.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ProjectItems;
