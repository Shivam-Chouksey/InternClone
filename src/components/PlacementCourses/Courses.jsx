import Header from "../navbar/header"
import classes from './PlaceCourses.module.css'
import classes1 from './Gaurantee.module.css'
import Company from "../main/hiredCompany/company"
import Card from "./card/card"
import Data from './card/data'
import Footer from "../footer/footer"
import banner from '/PlaceCourse/banner-1920.png.webp'
import background from '/PlaceCourse/images1.jpeg'
export default function PlacementCourses() {
  const { courseData } = Data;
  return (<>
    <Header />
    <div className={classes.adv}>
      <h1>Give the Best Start to Your Career</h1>
      <h2>Learn,practice and Get hired</h2>
      <div className={classes.adv_crsl}>
        <Company />
      </div>
      <div className={classes.namaste}>
        <div className={classes.content}>
          <div className={classes.div1}><span>CERTIFICATION COURSES</span><span>4-8 weeks</span></div>
          <div className={classes.div2}><h2>Fastest way to build your CV</h2></div>
          <div className={classes.div3}>
            <span>Learn at your own schedule</span>
            <span>Practical learning</span>
            <span>Government certified online training</span>
          </div>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
    <div className={classes1.GauranteeDiv} style={{backgroundImage:`url(${background})`}}>
      <div className={classes1.content}>
        <div className={classes1.Div1}>
          <span>PLACEMENT GAURANTEE COURSES</span>
          <span>4-12 months</span>
        </div>
        <div className={classes1.Div2}>
          <h2>Guaranteed way to start your career</h2>
        </div>
        <div className={classes1.Div3}>
          <span>Guaranteed placement</span>
          <span>Get 100% refund if not hired</span>
          <span>Become job ready</span>
        </div>
        <div className={classes1.Div4}>
          {courseData.map((i) => <Card key={i.id} data={i} />)}
        </div>
      </div>
    </div>
    <Footer />

  </>)
}