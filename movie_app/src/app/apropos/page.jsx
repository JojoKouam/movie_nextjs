import React from 'react'

export default function page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">À propos de l'application</h1>
      <p className="text-lg">
        Cette application est un projet de démonstration utilisant Next.js et Tailwind CSS. 
        Elle permet de rechercher des films et d'afficher leurs détails.
      </p>
      <p className="text-lg">
        L'application utilise l'API de The Movie Database (TMDB) pour récupérer les données des films.
        Vous pouvez explorer les films populaires, les détails des films et plus encore.
      </p>
      <p className="text-lg">
        Pour plus d'informations, consultez la documentation de l'API TMDB.
      </p>
      <p className="text-lg">
        Merci d'avoir visité notre application !
      </p>
      <p className="text-lg">
        Développé par Josée Kouamé 
      </p>
      </div>
  )
}
