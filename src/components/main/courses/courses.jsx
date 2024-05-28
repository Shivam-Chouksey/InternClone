import classes from './courses.module.css'
import CardCourse from './cardCourse'
import data from '../data'
import { useRef } from 'react';
export default function Courses() {
  const {course}=data;
  const crsRef=useRef()
     const crsRight=()=>{
        crsRef.current.scrollLeft=crsRef.current.scrollLeft+crsRef.current.clientWidth/4
     }
     const crsLeft=()=>{
        crsRef.current.scrollLeft=crsRef.current.scrollLeft-crsRef.current.clientWidth/4
     }



  return (<>
    <div className={classes.courses}>
      <h2>Certification courses </h2>
      <h3>Fastest way to build your CV</h3>
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