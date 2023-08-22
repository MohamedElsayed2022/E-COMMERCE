import React from 'react'
import { useSearchParams } from 'react-router-dom'

function User() {
    const [searchParams , setSearchParams] = useSearchParams()
    const [iparams , setParams] = useSearchParams()
    const showActiveUsers = searchParams.get("filter") === "active"
    const shoe = iparams.get("filter") === "active"
    const s0 = iparams.get("kreep") === "kreep"
  return (
    <div> 
      <h1>user 1 </h1>
      <h1>user 1 </h1>
      <h1>user 1 </h1>
      <h1>user 1 </h1>
      {/* <button onClick={()=>setSearchParams({filter : "active"})}>Active User</button>
      <button onClick={()=>setSearchParams({})}>Active User</button>
       {showActiveUsers ?( <h2>Shoeing Active Users</h2>):(<h2>Showing All Users</h2>) } */}
       <button onClick={()=>setParams({filter : "active"})}>Active User</button>
       <button onClick={()=>setParams({kreep :"kreep"})}>UnActive Users</button>
       {shoe ?(<h1>Users Active</h1>):(<h2>Hello World</h2>) }
       {s0 ? (<h1>Kreeeeeeeeep</h1>) : (<h2>Not Kreeeeeeeeep</h2>)}
    </div>
  )
}

export default User
