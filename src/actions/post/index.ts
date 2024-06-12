"use server";

import paths from "@/app/paths";
import { auth } from "@/auth";
import { db } from "@/db";
import type { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createPostSchema = z.object({
  title: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes",
    }),
  content: z.string().min(10),
  slug: z.string().min(3),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function createPost(
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    slug: formData.get("slug"),
  });
  console.log(formData.get('slug'));
  

  const session = await auth();
  if (!session || !session?.user || !session.user.id) {
    return { errors: { _form: ["You must be signed in to do this"] } };
  }

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const topic = await db.topic.findFirst({
    where: { slug: result.data.slug },
  });

  if (!topic) {
    return { errors: { _form: ["There is no such topic"] } };
  }

  let post: Post
  try {
    post = await db.post.create({
      data: {
        userId: session?.user.id,
        title: result.data.title,
        content: result.data.content,
        topicId: topic.id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    }
    return {errors: {_form: ['Something went wrong']}}
  }

  revalidatePath(paths.topicShow(result.data.slug))
  redirect(paths.postShow(result.data.slug, post.id))
}
