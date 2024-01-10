import React from 'react'

function IconSec() {
  return (
    <>
      <div className='container text-center p-5 '>
        <div class="row">
          <div class="col text-center">
            <div className='card-border border-light'>
            <div className='border border-dark rounded-3 p-2 ' style={{'background':'#ffffff','width':'65px', 'height':'65px'}}>
                <img className='text-center' src='images1/bulb (1) 1.png' style={{display: 'block', margin: '0 auto', width:'50px', height:'50px'}} />
            </div>
            <h2>Challenges and Solutions</h2>
            </div>
          </div>
          <div class="col">
            <div className='border border-dark rounded-3 p-2' style={{'background':'#ffffff','width':'65px','height':'65px'}}>
                <img src='images1/checked 1.png' width='50px' height='50px'/>
            </div>
            <h2>Success Factors</h2>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <hr className=' drodown-divider p-3'/> 
      </div>

      <div className='container text-center p-3 '>
        <div class="row">
          <div class="col">
            <p className='h4 text-center'>We ensure that engagement rewarded through <br/>
            social mining is genuine and meaningful, preventing<br/>
            low-quality interactions and fake engagement.</p>
            <div className='p-4'>
            <h5> <img src='images1/check (1) 6.png'width='30px'/> <span/> Prevent from low quality</h5>
            <h5> <img src='images1/check (1) 6.png'width='30px'/> <span/> Fair Reward Distribution</h5>
            <h5> <img src='images1/check (1) 6.png'width='30px'/> <span/> Regulatory Compliance</h5>
            </div>
          </div>
          <div class="col">
          <p className='h4 text-center'>We make sure effective execution and scalability in<br/>
          our projects, and strive to maintain a strong team <br/>
          and scalable infrastructure to deliver objectives.</p>
          <div className='p-4'>
            <h5> <img src='images1/check (1) 6.png'width='30px'/> <span/> Prevent from low quality</h5>
            <h5> <img src='images1/check (1) 6.png'width='30px'/> <span/> Fair Reward Distribution</h5>
            <h5> <img src='images1/check (1) 6.png'width='30px'/> <span/> Regulatory Compliance</h5>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default IconSec
