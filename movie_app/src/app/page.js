import AffichageFilm from "@/components/AffichageFilm";
import React from 'react';
export default async function Home({ searchParams }) {
    const API_KEY = process.env.TMDB_API_KEY; // Récupérez la clé API

    // Vérifiez si la clé API est bien chargée
    if (!API_KEY) {
        console.error("TMDB_API_KEY is not defined in .env.local");
        // Vous pourriez lancer une erreur ici ou retourner un message d'erreur approprié
        return <div>Erreur de configuration : Clé API manquante.</div>;
    }

    const genre = searchParams.genre || "fetchTendances";

    const url = genre === "fetchTendances"
        ? `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=fr-FR`
        : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR`;
        // Note: Si 'genre' est autre chose que "fetchTendances", vous allez chercher "top_rated".
        // Si vous vouliez utiliser 'genre' pour filtrer par un genre spécifique,
        // l'URL devrait être différente, par exemple :
        // `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=${genre}`
        // Mais pour l'instant, concentrons-nous sur le fait que la requête fonctionne.

    console.log("Fetching URL:", url); // Pour déboguer l'URL construite

    let data;
    try {
        const res = await fetch(url);

        if (!res.ok) {
            // Pour un meilleur débogage, affichez le statut et le message de l'erreur
            const errorBody = await res.text(); // Essayez de lire le corps de l'erreur
            console.error(`API Error: ${res.status} ${res.statusText}`, errorBody);
            throw new Error(`Failed to fetch data from TMDB (status: ${res.status}) - ${errorBody.substring(0, 100)}`);
        }

        data = await res.json();
    } catch (error) {
        console.error("Fetch error:", error);
        // Afficher un message d'erreur à l'utilisateur
        return <div>Erreur lors de la récupération des données : {error.message}</div>;
    }

    const results = data.results;
    console.log(results);

    return (
        <div> 
            <AffichageFilm results={results} genre={genre} />
        </div>
    );
}