// eslint-disable-next-line no-unused-vars
import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import Conversation from '../Conversation/Conversation'
import LogoutButton from '../Logout/Logout'
const Sidebar = () => {
  return (
    <div className='border-r p-5 flex flex-col'>
      <SearchInput />
        <div className="divider divider-warning px-4 "></div>
        <Conversation/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar
