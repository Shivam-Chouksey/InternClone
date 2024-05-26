import classes from './company.module.css';
import topcomp from '/courses/top_companies.png'

export default function Company() {
    return (
        <div className={classes.companies}>
            <h3>Top companies trust us</h3>
            <div className={classes.comp_crsl}>

                <img src={topcomp} alt="" />


                <img src={topcomp} alt="" />


            </div>



        </div>
    )
}