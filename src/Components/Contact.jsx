import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='map-container'>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=17AFQqrTk6l_xQ6u9F1HCWN8mwjf0nms&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
        </div>
        <div className='message-container'>
            <p>Get In Touch With Us</p>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit"><span classname="text">Submit</span><span>Click to Submit</span></button>
            </form>
        </div>
    </div>
  )
}

export default Contact