import React from 'react'

function Footer() {
  return (
    <div className='row py-5 bg-dark text-light'>
        <div className='col border py-4'>
            <div className='row'>
                <div className='col-md-4'>
                    <p> Address:Nigeria</p>
                </div>
                
                <div className='col-md-4'>
                    <p>Phone:+2341234567</p>
                </div>
                <div className='col-md-4'>
                    <p>email:test@gmail.com</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <p> All Right Reserved</p>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Footer