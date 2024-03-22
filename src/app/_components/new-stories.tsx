import Link from "next/link";

type Props = {
  posts: any | null | string;
};

export function NewStories({ posts }: Props) {

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        New Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts?.map((post: any) => (
          <div>
            <h3 className="text-3xl mb-3 leading-snug">
              {/* <Link as={`/anotherPosts/${post.title.split(' ').join('-')}`} href="/anotherPosts/[title]" className="hover:underline"> */}
              {post.title}
              {/* </Link> */}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
