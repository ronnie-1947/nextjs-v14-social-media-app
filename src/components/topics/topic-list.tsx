import paths from "@/app/paths";
import { db } from "@/db";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics?.map((topic) => (
    <div key={topic.id}>
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color="warning" variant="shadow">
          {topic.slug}
        </Chip>
      </Link>
    </div>
  ));

  return <div className="flex flex-wrap flex-row gap-2 my-2">
    {renderedTopics}
  </div>;
}

export default TopicList;
