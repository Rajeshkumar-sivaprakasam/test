


import fast from './images/fast.png'
import fair from './images/fair.png'
import choice from './images/choice.png'
import payment from './images/payment.svg'
import seo from './images/seo-03.png'
import './InvestmentTrad.css'
const InvestmentTrad =()=>{
    return(
        <div className="component">
            <div className="lft">
               
                <div className='card'>
                   <div className="imagSide">
                     <img src={fast} alt='fast'  height='65' width='65'/ >                  
                   </div>             
                   <div className="contentSide">
                       <h5>Fast and Quick</h5>
                       <p>Spend a lot of time researching to decide where to invest and when to trade</p>                       
                   </div>
                </div>

                <div className='card'>
                   <div className="imagSide">
                     <img src={fair} alt='fair'  height='65' width='65'/ >                  
                   </div>             
                   <div className="contentSide">
                       <h5>Fair analysis by analysts</h5>
                       <p>Get unbiased recommendations from different individual analysts</p>                       
                   </div>
                </div>

                <div className='card'>
                   <div className="imagSide">
                     <img src={choice} alt='fast'  height='65' width='65'/ >                  
                   </div>             
                   <div className="contentSide">
                       <h5>Make your choice</h5>
                       <p>Choose the type of recommendations you need, just as you choose the analyst to provide them </p>                       
                   </div>
                </div>

                <div className='card'>
                   <div className="imagSide">
                     <img src={payment} alt='fast'  height='65' width='65'/ >                  
                   </div>             
                   <div className="contentSide">
                       <h5>Pay Per Recommendation (PPR)</h5>
                       <p>Pay low and only for what you consume. Avoid paying for what you don't and never consume</p>                       
                   </div>
                </div>


            </div>
            <div className="rgt">
                <img src={seo} alt='seo'  />                
            </div>
        </div>


    )
}

export default InvestmentTrad