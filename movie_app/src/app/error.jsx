"use client"
import React from 'react'
import { useEffect } from 'react'

export default function error(error, reset) {
    useEffect(() => {
        console.error("An error occurred:", error);
        // Vous pouvez également envoyer l'erreur à un service de suivi des erreurs ici
    }, [error]);
  return (
    <div className="error-page">
        <h1>Une erreur est survenue</h1>
        <p>Veuillez réessayer plus tard.</p>
        <button onClick={() => reset()}>Réessayer</button>
        <p>Si le problème persiste, veuillez contacter le support.</p>
        <p>Erreur: {error.message}</p>
    </div>
  )
}
