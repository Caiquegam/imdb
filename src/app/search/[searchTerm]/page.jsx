import Results from '@/components/Results';
import React from 'react'

export default async function SearchPage({params}) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=pt-BR&include_adult=false`);
    if(!res.ok){
        throw new Error ("Erro ao buscar os dados!");
    }
    const data = await res.json();
    const results = data.results;
  return (
    <div>
      {results && results.length === 0 &&(
        <h1 className='text-center pt-6'>Não encontrado resultados para esta busca</h1>
      )}
      {results && <Results results={results}/>}
    </div>
  )
}
