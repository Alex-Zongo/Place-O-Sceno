import React, { useEffect, useState } from "react";
import "./Members.css";
import GalleryItem from "./GalleryItem";

import sanityClient from "../client";
import { Link } from "react-router-dom";

function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="team"]{
        name,
        role,
        slug,
        bio,
        image{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setMembers(data));
  }, []);
  console.log(members);
  return (
    <div className="team">
      <h1>TEAM Place O sceno</h1>

      <div className="team__container">
        <div className="team__wrapper">
          {members ? (
            members.map((member) => (
              <Link to={"/team/" + member.slug.current} key={member.slug}>
                <GalleryItem
                  src={member.image.asset.url}
                  name={member.name}
                  description={member.role}
                />
              </Link>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Members;
