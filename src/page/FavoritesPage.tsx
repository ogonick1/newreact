
import { useAppSelector } from './../hooks/redux';

const Favorites = () => {
  const {favorite} = useAppSelector(state => state.github)

  if (favorite.length === 0) {
    return <div className='text-center'>no items...</div>
  }
  return (
    <div className=" flex justify-center pt-10 mx-auto h-screen w-screen">
          <ul className="list-none">
      {favorite.map(i => (
        <li key={i}>
          <a href={i} target='_blank' rel='noreferrer' >{i}</a>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Favorites