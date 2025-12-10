import React, { useState } from "react";
import { Card } from "./Card";


export const Cards =(props)=>{
    let courses = props.courses;


    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);
    
    function getCourses(){
        let allcourses = [];
        Object.values(courses).forEach(array =>{
            array.forEach(coursesdata =>{
                allcourses.push(coursesdata); 
            })
        })
        return allcourses;
    }
    return (
        <div>
          {
           getCourses().map((course)=>(
             <Card key={course.id} course={course} setLikedCourses={setLikedCourses} likedCourses={likedCourses}/>
           ))
          }
        </div>
    )
}