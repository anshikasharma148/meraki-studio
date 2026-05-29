import PlaceholderPage from "./placeholders/PlaceholderPage";
import { blogPosts } from "../data/blog";

export default function BlogPage() {
  return (
    <PlaceholderPage
      title="Ideas, Insights & Inspiration"
      paragraphs={[
        "Stay updated with design trends, behind-the-scenes project stories, tips on sustainable living, and expert insights from our studio.",
      ]}
    >
      <ul className="mt-10 space-y-8">
        {blogPosts.map((post) => (
          <li key={post.id} className="border-b border-gray-100 pb-8">
            <h3 className="font-serif text-xl font-bold text-brand-dark">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="mt-2 text-sm text-gray-500">{post.excerpt}</p>
            )}
          </li>
        ))}
      </ul>
    </PlaceholderPage>
  );
}
