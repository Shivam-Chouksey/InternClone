import classes from './card.module.css'
import { useSelector } from 'react-redux'
export default function Card({ data }) {

    const loginPageState = useSelector(state => state.loginPageState.loginPage)

    return (
        <div className={classes.Card}>
            <a href="">
                <div className={classes.mainDiv}>
                    <img src={data.img} alt="" />
                    <div className={classes.LowerDiv}>
                        <div className={classes.Div1}>
                            <h5>{data.title}</h5>
                            <span>course with Gauranteed interships </span>
                        </div>
                        <div className={classes.Div2}>
                            <ul>
                                <li>{data.duration}</li>
                                <li>{data.pay}</li>
                                <li>{data.posting}</li>
                            </ul>
                        </div>
                        <div className={classes.Div3}>
                            {/* <button>Know More</button> */}
                            <span>{loginPageState ? 'Add to Cart' : 'Know More >>'}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}