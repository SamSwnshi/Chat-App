// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import MessageContainer from '../MessageContainer/MessageContainer';

const Home = () => {
  return (
    <div className='flex sm:h[450px] md:h[550px]  bg-indigo-900 rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
