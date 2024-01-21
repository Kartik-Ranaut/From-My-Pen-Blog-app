import React from 'react'

export default function Contact() {
  function submitfunction(){
    alert("dear kartik your message is submitted to us.")
  }
  return (
    <div>
      <div className='contactmainform flex'>
        <div className='contactinfo'>
          <div className='headingcontact'>
            <h2 className='font-bold text-xl'>Contact Information</h2>
            <h4>Kindly contact to give feedback</h4>
          </div>
          <div className='phone flex flex-col gap-1.5 bg-inherit'>
            <a><i class="fa-solid fa-phone"></i>  +91 9667853290</a>
            <a><i class="fa-solid fa-envelope"></i> ranautk6@gmail.com</a>
            <a> <i class="fa-solid fa-location-dot"></i>  H.no. 5 suryalok 2nd, Ghaziabad, Uttar Pradesh, India, 201009 </a>
          </div>
          <div className='links flex gap-4 bg-inherit'>
            <a><i class="fa-brands fa-linkedin"></i></a>
            <a><i class="fa-brands fa-twitter"></i></a>
            <a><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div className='feedbacksection'>
        <form onSubmit={submitfunction}>
            <table>
              <tr>
                <td>
                  <h3>First Name</h3>
                  <input type='text' required></input>
                </td>
                <td>
                  <h3>Last Name</h3>
                  <input type='text' required></input>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Email</h3>
                  <input type='text' required></input>
                </td>
                <td>
                  <h3>Phone no.</h3>
                  <input type='text' required></input>
                </td>

              </tr>
              <tr>
                  <td colSpan={2}>
                    <h3>Message</h3>
                    <input type='text' required></input>
                  </td>
              </tr>
              <tr>
                <td colSpan={2} > <input type='submit' className='submitbtn'></input></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  )
}
