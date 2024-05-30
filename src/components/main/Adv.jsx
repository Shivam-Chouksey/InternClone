import { useRef } from 'react';
import classes from './Adv.module.css';
import Card from './card.jsx'
import data from './data.jsx';
import fst from '/adv photos/1st.png'
import scd from '/adv photos/2nd.png.png'
import trd from '/adv photos/3rd.png'
import frt from '/adv photos/4th.png'
import fft from '/adv photos/5th.png'
import sxt from '/adv photos/6th.png'


export default function Adv() {
    const { internships, jobs } = data;
    const advCrsl = useRef()
    const rightScroll = () => {
        advCrsl.current.scrollLeft += advCrsl.current.clientWidth

    }
    const LeftScroll = () => {
        advCrsl.current.scrollLeft = advCrsl.current.scrollLeft - advCrsl.current.clientWidth
    }
    const internRef = useRef()
    const internRight = () => {
        internRef.current.scrollLeft = internRef.current.scrollLeft + internRef.current.clientWidth
    }
    const internLeft = () => {
        internRef.current.scrollLeft = internRef.current.scrollLeft - internRef.current.clientWidth
    }
    const jobRef = useRef()
    const jobright = () => {
        jobRef.current.scrollLeft = jobRef.current.scrollLeft + jobRef.current.clientWidth
    }
    const jobLeft = () => {
        jobRef.current.scrollLeft = jobRef.current.scrollLeft - jobRef.current.clientWidth
    }




    return (<>
        <div className={classes.adv}>
            <h1>Make your dream career a reality</h1>
            <div className={classes.underline}></div>
            <h2>Trending on Internshala</h2>
            <div className={classes.adv_crslParent}>
                    <div className={classes.advBtn1}><button onClick={LeftScroll} >&#60;</button></div>
                <div className={classes.adv_crsl} ref={advCrsl}>
                    <div ><a href=""><img src={fst} alt="" /></a></div>
                    <div ><a href=""><img src={scd} alt="" /></a></div>
                    <div ><a href=""><img src={trd} alt="" /></a></div>
                    <div ><a href=""><img src={frt} alt="" /></a></div>
                    <div ><a href=""><img src={fft} alt="" /></a></div>
                    <div><a href=""><img src={sxt} alt="" /></a></div>
                </div>
                    <div className={classes.advBtn2}><button onClick={rightScroll} >&#62;</button></div>
            </div>
            <div className={classes.advCrsl_btn} >
                <button onClick={LeftScroll}>&#60;</button>
                <button onClick={rightScroll}>&#62;</button>
            </div>
        </div>
        <div className={classes.internships}>
            <h1>Latest internships on Internshala</h1>
            <div className={classes.intern_cat} >
                POPULAR CATAGORIES:
                <div className={classes.btndiv}>
                    <button>Big Brands</button>
                    <button>Work from home</button>
                    <button>Part-time</button>
                    <button>MBA</button>
                    <button>Engineering</button>
                    <button>Media</button>
                    <button>Design</button>
                    <button>Data Science</button>
                </div>
            </div>
            <div className={classes.intern_details} ref={internRef} >
                {internships.map((i) => <Card key={i.id} prop={i} />)}
            </div>
            <div className={classes.advCrsl_btn} >
                <button onClick={internLeft}>&#60;</button>
                <button onClick={internRight}>&#62;</button>
            </div>
        </div>
        <div className={classes.internships}>
            <h1>Latest jobs on Internshala</h1>
            <div className={classes.intern_cat} >
                POPULAR CATAGORIES:
                <div className={classes.btndiv}>
                    <button>Big Brands</button>
                    <button>Work from home</button>
                    <button>Part-time</button>
                    <button>MBA</button>
                    <button>Engineering</button>
                    <button>Media</button>
                    <button>Design</button>
                    <button>Data Science</button>
                </div>
            </div>
            <div className={classes.intern_details} ref={jobRef}>
                {jobs.map((i) => <Card key={i.id} prop={i} />)}
            </div>
            <div className={classes.advCrsl_btn} >
                <button onClick={jobLeft}>&#60;</button>
                <button onClick={jobright}>&#62;</button>
            </div>
        </div>
    </>
    );
}
