import { Link } from 'react-router-dom'

const Navigation = () => {
  return(
    <nav className="flex justify-between items-center h-12 px-5 shadow-md bg-gray-500 text-white">
      <h3 className='font-bold'>Github Seach</h3>
      <span>
        <Link to='/' className='mr-2'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </span>
    </nav>
  )
}

export default Navigation