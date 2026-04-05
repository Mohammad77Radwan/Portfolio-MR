import matter from "gray-matter";

const GITHUB_API = "https://api.github.com/repos/Mohammad77Radwan/Blog-Veille-Tech/contents/content/articles";

export type BlogArticle = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  readTime: string;
  url: string;
};

export async function fetchBlogArticles(): Promise<BlogArticle[]> {
  // 1. Fetch the list of MDX files in the articles folder
  const res = await fetch(GITHUB_API);
  const files = await res.json();

  // 2. For each file, fetch its raw content and parse frontmatter
  const articles = await Promise.all(
    files.filter((file: any) => file.name.endsWith('.mdx')).map(async (file: any) => {
      const rawRes = await fetch(file.download_url);
      const raw = await rawRes.text();
      const { data } = matter(raw);
      return {
        slug: file.name.replace(/\.mdx$/, ""),
        title: data.title || file.name,
        date: data.date || "",
        description: data.description || "",
        category: data.category || "",
        readTime: data.readTime || "",
        url: `https://blogveilletech.netlify.app/blog/${file.name.replace(/\.mdx$/, "")}`,
      };
    })
  );
  // 3. Sort by date descending
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
