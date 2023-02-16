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
		<main className="bg-gray-200 flex min-h-screen p-6 lg:p-10">
			<article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
				<header className="relative">
					<div className="relative h-full w-full flex items-center justify-center p-3 lg:p-6">
						<div className="bg-white shadow-lg bg-opacity-75 w-full rounded p-5 lg:p-8 md:p-6">
							<h1 className="uppercase hover:monospace text-center text-lg lg:text-6xl md:text-3xl font-bold mt-4 mb-8 lg:mb-12">
								{headerTitle}
							</h1>
							<div className="flex justify-center text-sm lg:text-xl text-gray-800">
								{authorImage && (
									<img
										src={urlFor(authorImage).url()}
										alt={authorName}
										className="w-10 h-10 rounded-full"
									/>
								)}
								<p className="italic flex items-center ml-auto text-sm md:text-lg lg:text-xl">
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
				<div className="flex justify-center px-6 ml-auto mr-auto md:px-10 lg:px-15 py-8 lg:py-15 prose md:prose-lg lg:prose-xl ">
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
