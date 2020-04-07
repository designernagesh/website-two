import React from 'react'
import blog04 from '../images/blog-04.jpg'

const Footer = () => {    
    return(
        <> 
{/*FOOTER */}
<footer>
{/* Main Footer */}
<section className="section background-dark">
  <div className="line">
    <div className="margin">
      {/* Collumn 1 */}
      <div className="s-12 m-12 l-4 margin-m-bottom-2x">        
        <div className="line">
          <h4 className="text-uppercase text-strong margin-top-10">About Our Company</h4>
          <div className="margin">
            <div className="s-12 m-12 l-4 margin-m-bottom">
              <a className="image-hover-zoom" href="/"><img src={ blog04 } alt="blogimage" /></a>
            </div>
            <div className="s-12 m-12 l-8 margin-m-bottom">
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              <a className="text-more-info text-primary-hover" href="/">Read more</a>
            </div>
          </div>
        </div>
      </div>
      {/* Collumn 2 */}
      <div className="s-12 m-12 l-4 margin-m-bottom-2x">
        <h4 className="text-uppercase text-strong">Contact Us</h4>
        <div className="line">
          <div className="s-1 l-1 text-center">
            <i className="fas fa-map-marker-alt text-primary text-size-12" />            
          </div>
          <div className="s-11 m-11 l-11 margin-bottom-10">
            <p><b>Adress:</b> Responsive Street 7, London, UK</p>
          </div>
        </div>
        <div className="line">
          <div className="s-1 l-1 text-center">
            <i className="fas fa-envelope text-primary text-size-12" />            
          </div>
          <div className="s-11 m-11 l-11 margin-bottom-10">
            <p><a href="/" className="text-primary-hover"><b>E-mail:</b> contact@sampledomain.com</a></p>
          </div>
        </div>
        <div className="line">
          <div className="s-1 l-1 text-center">
            <i className="fas fa-mobile-alt text-primary text-size-12" />            
          </div>
          <div className="s-11 m-11 l-11 margin-bottom-10">
            <p><b>Phone:</b> 0700 000 987</p>
          </div>
        </div>               
      </div>
      {/* Collumn 3 */}
      <div className="s-12 m-12 l-4">
        <h4 className="text-uppercase text-strong">Leave a Message</h4>
        <form className="customform text-white">
          <div className="line">
            <div className="margin">
              <div className="s-12 m-12 l-6">
                <input name="email" className="required email border-radius" placeholder="Your e-mail" title="Your e-mail" type="text" />
              </div>
              <div className="s-12 m-12 l-6">
                <input name="name" className="name border-radius" placeholder="Your name" title="Your name" type="text" />
              </div>
            </div>
          </div>
          <div className="s-12">
            <textarea name="message" className="required message border-radius" placeholder="Your message" rows={3} defaultValue={""} />
          </div>
          <div className="s-12"><button className="submit-form button background-primary border-radius text-white" type="submit">Submit Button</button></div> 
        </form>
      </div>
    </div>
  </div>
</section>
<hr className="break margin-top-bottom-0" style={{borderColor: 'rgba(0, 38, 51, 0.80)'}} />
{/* Bottom Footer */}
<section className="padding background-dark">
  <div className="line">
    <div className="s-12 l-6">
      <p className="text-size-12">Copyright 2019, Vision Design - graphic zoo</p>
      <p className="text-size-12">All images have been purchased from Bigstock. Do not use the images in your website.</p>
    </div>
    <div className="s-12 l-6">
      <a className="right text-size-12" href="http://www.myresponsee.com" title="Responsee - lightweight responsive framework">Design and coding<br /> by Responsee Team</a>
    </div>
  </div>
</section>
</footer>

</>
    )
}

export default Footer