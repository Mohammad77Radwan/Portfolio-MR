import { Suspense } from "react";
import {
  HeroAdvanced,
  ProjectsBento,
  Skills,
  Experience,
  Testimonials,
  Contact,
  Stats,
  Newsletter,
  E5Documents,
} from "@/components";
import { GithubRepos } from "@/components/github-repos";
import { GithubReposSkeleton } from "@/components/github-repos-skeleton";

export default function Home() {
  return (
    <div className="w-full">
      <HeroAdvanced />
      <Stats />
      <ProjectsBento />
      <Skills />
      <Experience />
      <Testimonials />
        {/* Blog section removed for Netlify build stability */}
      <Suspense fallback={<GithubReposSkeleton />}>
        <GithubRepos />
      </Suspense>
      <E5Documents />
      <Newsletter />
      <Contact />
    </div>
  );
}
