import React from "react"
import { FcLike , FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";


export const Card =(props)=>{
     let course = props.course;
     let likedCourses = props.likedCourses;
     let setLikedCourses = props.setLikedCourses;
     

    function clickhandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
            toast.warning("Like Removed");
        }
        else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev) => [...prev,course.id])
            }
            toast.success("Liked Successfully");
        }
    }
    
    return (
        <div>
           <div>
            <img src={course.image.url}/>
           </div>
           <div>
            <button onClick={clickhandler}>
              {
                !likedCourses.includes(course.id) ? (<FcLikePlaceholder/>) : (<FcLike/>)
              }
            </button>
           </div>
           <div>
            <p>{course.title}</p>
            <p>
                {
                    course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
                }
            </p> 
           </div>
        </div>
    )
}