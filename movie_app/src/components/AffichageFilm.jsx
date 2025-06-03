import React from 'react'

export default function AffichageFilm({ results }) {
  return (
    <div>
        {
            results.map((film) => (
            <div key={film.id}>
                <h2>{film.title || film.name}</h2>
            </div>
        ))
        }
        
    </div>
  )
}
