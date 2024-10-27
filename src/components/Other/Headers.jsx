import React from 'react'

const Header = ({data,changeUser}) => {
  
  const logOut= ()=>{
    localStorage.removeItem('loggedInUser');
    changeUser(null);
    // window.location.reload(); // Refresh the page to remove the loggedInUser data.
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className='text-3xl font-semibold'>{data.name}👋</span>
      </h1>
      <button onClick={logOut} className='bg-red-600 text-md font-medium text-white px-3 py-2 rounded-sm'>Log Out</button>
    </div>
  );
}

export default Header