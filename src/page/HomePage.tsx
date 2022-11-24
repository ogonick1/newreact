import { useEffect, useState } from "react";
import { useSearchUsersQuery, useLazyGetUserReposQuery } from "../store/github/github.api"
import { useDebounce } from './../hooks/debounce';
import RepoCart from './../components/RepoCart';


const HomePage = () => {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounce = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounce, {
    skip: debounce.length < 3,
    refetchOnFocus: true
  })

  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown(debounce.length > 3 && data?.length! > 0)
  }, [debounce, data])

  const clickHandler = (username: string) => {
    fetchRepos(username)
    setDropdown(false)
  }
  return (
    <div className=" flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-500">Somthing error...</p>}
      <div className="reletive w-[560px]">
        <input
          onChange={e => setSearch(e.target.value)}
          value={search}
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search user for github..."
          type="text" />
        {dropdown && <ul className="list-none top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
          {isLoading && <p className="text-center">Loading...</p>}
          {data?.map(user => (
            <li onClick={() => clickHandler(user.login)} key={user.id}
              className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'>
              {user.login}
            </li>))}
        </ul>}
        <div className="container">
          {areReposLoading && <p className="text-center"> Repos are loading</p>}
          {repos?.map(repo => <RepoCart repo={repo} key={repo.id}/>)}
        </div>
      </div>
    </div>
  )
}

export default HomePage