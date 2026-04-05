
import { NextResponse } from "next/server";
import matter from "gray-matter";

const GITHUB_API = "https://api.github.com/repos/Mohammad77Radwan/Blog-Veille-Tech/contents/content/articles";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET() {
  try {
    const headers: Record<string, string> = {};
    if (GITHUB_TOKEN) headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
    const res = await fetch(GITHUB_API, { headers });
    if (!res.ok) {
      const text = await res.text();
      console.error("GitHub API error:", res.status, text);
      throw new Error(`Failed to fetch articles list: ${res.status} ${text}`);
    }
    const files = await res.json();

    const articles = await Promise.all(
      files.filter((file: any) => file.name.endsWith('.mdx')).map(async (file: any) => {
        try {
          const rawRes = await fetch(file.download_url);
          if (!rawRes.ok) throw new Error("Failed to fetch article content");
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
        } catch (err) {
          console.error("Article parse error:", err);
          return null;
        }
      })
    );
    return NextResponse.json(
      articles.filter(Boolean).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );
  } catch (err: any) {
    console.error("API route error:", err);
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}
// Blog articles API removed for Netlify build stability
