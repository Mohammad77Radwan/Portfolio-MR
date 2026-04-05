import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="text-center max-w-md">
        {/* 404 Display */}
        <div className="mb-8">
          <span className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          {"Désolé, la page que vous recherchez n'existe pas ou a été déplacée."}
        </p>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              {"Retour à l'accueil"}
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/#contact">
              Me contacter
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500 mb-4">
            Liens utiles
          </p>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#projects"
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              Projets
            </Link>
            <Link
              href="/#skills"
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              Compétences
            </Link>
            <Link
              href="/#experience"
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              Expériences
            </Link>
            <Link
              href="/#about"
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              À propos
            </Link>
          </nav>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>
    </div>
  );
}
