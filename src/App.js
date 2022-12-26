import React, { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Recipe'

const App = () => {
  const APP_ID = '53c5f8f1'
  const APP_KEY = 'cd9d831067be28b8107807c91c8a4ae2'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query,]

  useEffect(() => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} />
        <button className='search-button' type="submit">
          Search
          </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image} />
      ))}
    </div>
  )
}
export default App