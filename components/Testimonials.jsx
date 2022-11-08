import React from 'react'
import img1 from '../public/img-1.jpg'
import img2 from '../public/img-2.jpg'
import img3 from '../public/img-3.jpg'
import Image from 'next/image'


function Testimonials() {


 const testimonials = [
    {
        cardTitle:"Title 1",
        cardDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        cardImg: img1
    },
    {
        cardTitle:"Title 2",
        cardDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        cardImg: img2
    },
    {
        cardTitle:"Title 3",
        cardDesc:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        cardImg: img3
    },
   
 ]
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 p-5 ">
        {testimonials.map((testimonial, idx)=>{
            return (
                <>
                <div className="col" >
                <div className="card">
                  <Image src={testimonial.cardImg.src} className="card-img-top"  width={500}
      height={500}alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{testimonial.cardTitle}</h5>
                    <p className="card-text">{testimonial.cardDesc}</p>
                  </div>
                </div>
              </div>
              </>
            )
    
        })}
    
    {/* <div className="col">
      <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div> */}
  </div>
  )
}

export default Testimonials