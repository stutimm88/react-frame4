import React from 'react'

function SixGridSec() {
  return (
    <>
      <div className='container text-center p-5'>
        <div className="row justify-content-center p-4">
          <div class="col-5">
            <div className='p-2 justify-content-center d-flex gap-4'>
              <h3 className='p-4'>Abuse and manipulation</h3>
              <div className='p-2 text-end border border-dark rounded-3 bg-white' style={{'width':'65px','height':'65px'}}>
                <img  src='images1/solution 1.png' width={50} height={50}/>
              </div>
            </div>
            <p className='h4 p-3'>Potential for abuse and manipulation in social <br/> mining due to fake accounts,
            bots, and <br/>fraudulent activities, which can undermine<br/> the integrity and fairness of the ecosystem.</p>
          </div>
          
          <div class="col-5">
            <div className='p-2 justify-content-center d-flex gap-4'>
              <div className='p-2 text-start border border-dark rounded-3 bg-white' style={{'width':'65px','height':'65px'}}>
                <img  src='images1/problem-solving 1.png' width={50} height={50}/>
              </div>
              <h3 className='p-4'>Lack of standardization</h3>
            </div>
            <p className='h4 p-3'>Measuring and valuing social contributions in <br/>crypto social mining 
            due to varying criteria and <br/> algorithms used by different platforms, leading to <br/>inconsistencies
            and lack of transparency.</p>
          </div>          
        </div>

        <div class="row">
          <div class="col-5 p-3">
            <div className='p-2 justify-content-center d-flex gap-2'>
              <h3 className='p-4'>Verification of contributions</h3>
              <div className='p-2 text-start border border-dark rounded-3 bg-white' style={{'width':'65px','height':'65px'}}>
                <img  src='images1/checkmark 1.png' width={50} height={50}/>
              </div>
            </div>
            <p className='h4 p-3'>Measuring and valuing social contributions in<br/> crypto social mining due 
            to varying criteria <br/>and algorithms used by different platforms,<br/> leading to inconsistencies 
            and lack of transparency.</p>
          </div>

          <div class="col-2">
            <img src='images1/infographic-elements 1.png'width={240} height={248.85}/>
          </div>

          <div class="col-5 p-3">
            <div className='p-2 justify-content-center d-flex gap-2'>
              <div className='p-2 text-start border border-dark rounded-3 bg-white' style={{'width':'65px','height':'65px'}}>
                <img  src='images1/distribution 1.png' width={50} height={50}/>
              </div>
              <h3 className='p-4'> Unequal reward distribution</h3>
            </div>
            <p className='h4 p-3'>Inequality in rewards distribution in social<br/> mining due to subjective 
            valuation of <br/>contributions, resulting in potential disparities <br/>among users and discouraging 
            participation <br/>from certain groups.</p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-5">
            <div className='p-2 justify-content-center d-flex gap-4'>
              <h3 className='p-4'>Regulatory considerations</h3>
              <div className='p-2 text-end border border-dark rounded-3 bg-white' style={{'width':'65px','height':'65px'}}>
                <img  src='images1/regulation 1.png' width={50} height={50}/>
              </div>
            </div>
            <p className='h4 p-3'>Regulatory and legal considerations in social<br/> mining, as it involves 
            cryptocurrency rewards <br/>and may requiring careful compliance measures<br/> and navigation to 
            ensure legality and compliance.</p>
          </div>
          
          <div class="col-5">
            <div className='p-2 justify-content-center d-flex gap-4'>
              <div className='p-2 text-start border border-dark rounded-3 bg-white' style={{'width':'65px','height':'65px'}}>
                <img  src='images1/advertising 1.png' width={50} height={50}/>
              </div>
              <h3 className='p-4'>Education and awareness</h3>
            </div>
            <p className='h4 p-3'>Education and awareness about social mining,<br/> as many people are unfamiliar
            with the concept,<br/> requiring efforts to educate users about its <br/>potential benefits and challenges 
            for broader adoption.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SixGridSec
