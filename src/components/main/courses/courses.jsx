import classes from './courses.module.css'
import CardCourse from './cardCourse'
import data from '../data'
import { useRef } from 'react';
export default function Courses() {
  const {course}=data;
  const crsRef=useRef()
     const crsRight=()=>{
        crsRef.current.scrollLeft=crsRef.current.scrollLeft+crsRef.current.clientWidth
     }
     const crsLeft=()=>{
        crsRef.current.scrollLeft=crsRef.current.scrollLeft-crsRef.current.clientWidth
     }



  return (<>
    <div className={classes.courses}>
      <h1>Certification courses </h1>
      <h2>Fastest way to build your CV</h2>
      <div className={classes.courseCarasoul} ref={crsRef}>
      {course.map((i)=><CardCourse key={i.id} prop={i}/>)}
      </div>
      <div className={classes.advCrsl_btn} >
            <button onClick={crsLeft}>&#60;</button>
            <button onClick={crsRight}>&#62;</button>
            </div>
    </div>
  </>)
}