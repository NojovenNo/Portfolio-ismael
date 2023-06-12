import React from 'react'
import Navbar from '../Componentes/Navbar/index'
import Project  from '../Componentes/Canvas/index'

function index() {
  return (
    <>
      <Navbar />
      <Project
        foto="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80"
        date="2018"
        tittle="A fish in your ear"
        work="Google Translate"
      />
      <Project
        foto="https://11pluslondon.co.uk/app/uploads/2020/06/AdobeStock_303789965-online-2-min-1372x600.jpeg"
        date="2018"
        tittle="A fish in your ear"
        work="Google Translate"
      />
    </>
  );
}

export default index