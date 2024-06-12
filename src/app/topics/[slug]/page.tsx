import React from "react";
import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostByTopicSlug } from "@/db/queries/posts";

interface Props {
  params: {
    slug: string
  }
}

function TopicsShowPage({params: {slug}}: Props) {
  
  return <div className="grid grid-cols-4 gap-4 p-4">
    <div className="col-span-3">
      <h1 className="text-2xl font-bold mb-2">{slug}</h1>
      <PostList fetchData={()=> fetchPostByTopicSlug(slug)}/>
    </div>
    <div className="">
      <PostCreateForm slug={slug}/>
    </div>
   
  </div>;
}

export default TopicsShowPage;
