import { IRepo } from "../models/models"
import { useActions } from './../hooks/actions'
import { useAppSelector } from './../hooks/redux'
import { useState } from 'react'

const RepoCart = ({ repo }: { repo: IRepo }) => {

  const { addFavorite, removeFavorite } = useActions()
  const { favorite } = useAppSelector(state => state.github)

  const [isFav, setIsFav] = useState(favorite.includes(repo.html_url))

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavorite(repo.html_url)
    setIsFav(true)
  }
  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavorite(repo.html_url)
    setIsFav(false)
  }
  return (
    <div className="border py-2 px-5 rounded-md mb-2 hover:shadow-md hover:bg-gray-300 transition-all">
      <a href={repo.html_url} target='_blank' rel='noreferrer'>
        <h2 className="text-lg font-bold"> {repo.full_name}</h2>
        <p className="text-sm">id: {repo.id}</p>
        <p className="text-sm">date: {new Date(repo.created_at).toLocaleDateString()}</p>
        <p className="text-sm font-thin"> {repo?.description}</p>
        <p className="text-sm">
          <span className="mr-5 font-thin">Language: {repo.language}</span>
          <span className="font-thin">Size: {repo.size}</span>
        </p>
        {!isFav && <button onClick={addToFavorite} className="py-2 px-4 bg-yellow-400 rounded hover:shadow-sm hover:bg-gray-50 transition-all mr-3"> Add</button>}
        {isFav && <button onClick={removeFromFavorite} className="py-2 px-4 bg-red-300 rounded hover:shadow-sm hover:bg-gray-50 transition-all"> Remove</button>}
      </a>
    </div>
  )
}

export default RepoCart