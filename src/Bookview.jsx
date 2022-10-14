import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Userview() {
    const params = useParams()
      console.log(params)

      const [searchParams,setSearchParams] = useSearchParams()
      console.log(searchParams)
  
      const [userData,setUseData] = useState({})


      useEffect(()=>{
        loadUser()
      },[])

      let loadUser = async ()=>{
          try {
          let user = await axios.get(`https://school-01.herokuapp.com/book/${params.id}`)
          setUseData(user.data)
          } catch (error) {
            
          }
      }


  return (
    <>
    <div>
    <h1 style={{color:'black'}}>{userData.name}</h1>
    <h1 style={{color:'black'}}>{userData.position}</h1>
    <h1 style={{color:'black'}}>{userData.office}</h1>
    <h1 style={{color:'black'}}>{userData.age}</h1>
    <h1 style={{color:'black'}}>{userData.startDate}</h1>
    <h1 style={{color:'black'}}>{userData.salary}</h1>
    </div>
    </>
  )
}

export default Userview
