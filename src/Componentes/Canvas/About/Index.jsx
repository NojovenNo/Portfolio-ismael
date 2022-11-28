import React from 'react'
import './index.css'
function Index() {
  return (
    <div className="container-about">
      <div className="hi-container">
        <h1>hola</h1>
      </div>
      <div className="presetation">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit
          dolorum ipsa? Placeat iusto, tempora illum quisquam aut rerum
          perspiciatis consectetur consequuntur dicta nobis quaerat ratione
          recusandae eveniet odio necessitatibus! Placeat iusto, tempora illum
          quisquam aut rerum perspiciatis consectetur consequuntur dicta nobis
          quaerat ratione recusandae eveniet odio necessitatibus!
        </p>
      </div>
      <div className="social-links">
        <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
          Dribbble
        </a>
        •
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <div className="personal-image">
        <img
          src="https://evetuftphotography.com/wp-content/uploads/2018/11/14-519-post/IMG_20241(pp_w768_h511).jpg"
          alt="personal"
        />
      </div>
    </div>
  );
}

export default Index