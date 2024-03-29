import './App.css'
import { puppyList } from './data'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList) //this is a useState hook
  const [featPupId, setFeatPupId] = useState(null)

  console.log(puppyList)


  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)

  return (
    <>
      <h1>Meet Our Awesomely Named Puppies</h1>
        <p className = "subheading">Click on any puppy below to learn more about them!</p>
      <div className = "card">
        {puppies.map((puppy) => {
            return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
     
    </>
  );
}

export default App
