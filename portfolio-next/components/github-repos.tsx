import { Star, GitFork, ExternalLink } from "lucide-react";

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  description: string | null;
  language: string | null;
};

async function getRepos(): Promise<GithubRepo[]> {
  const response = await fetch("https://api.github.com/users/Mohammad77Radwan/repos?sort=updated&per_page=6", {
    next: { revalidate: 3600 },
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    return [];
  }

  const repos = (await response.json()) as GithubRepo[];
  return repos.filter((repo) => !repo.name.includes("Portfolio")).slice(0, 6);
}

export async function GithubRepos() {
  const repos = await getRepos();

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">GitHub Live - Activité Réelle</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
          Données récupérées en direct via Server Components + Suspense pour prouver l&apos;activité continue et la maîtrise de l&apos;écosystème GitHub.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length === 0 ? (
            <p className="text-slate-600 dark:text-slate-300">Impossible de charger les dépôts pour le moment.</p>
          ) : (
            repos.map((repo) => (
              <article key={repo.id} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="font-bold text-lg mb-2">{repo.name}</h3>
                <p className="line-clamp-3 min-h-[3.75rem] text-sm text-slate-600 dark:text-slate-300">
                  {repo.description ?? "Pas de description."}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-700">{repo.language ?? "N/A"}</span>
                  <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {repo.stargazers_count}</span>
                  <span className="inline-flex items-center gap-1"><GitFork className="h-3.5 w-3.5" /> {repo.forks_count}</span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  Ouvrir le repo
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
