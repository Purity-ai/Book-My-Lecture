import React from 'react'
import ExploreLectures from "../Components/ExploreLectures.jsx";
import { useParams } from 'react-router-dom';


const {speciality} = useParams
console.log(speciality);
const venues = () => {
  return (
    <div>
      <ExploreLectures />
    </div>
  )
}

export default venues
