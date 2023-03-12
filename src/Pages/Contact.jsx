import React from 'react'

export default function Contact() {
  return (
    <div id='contact'>
      <h1 className='name1'  style={{color:"black"}}>Contact</h1>
    <div>

    <div id='contactDetails'>

      <div style={{width:'200px'}}>
        <img  width='45px' height='45px' color="black" src="https://cdn-icons-png.flaticon.com/128/1034/1034182.png" />
        <h2 >+918397003836</h2>

    </div>
    <div>
        <img width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/128/831/831357.png" alt="email logo" />
        <h2><a style={{ paddingLeft:'10px' ,
         textDecoration: 'none', 
         color: 'black' }}
         target='_blank' >
         tarunas033@gmail.com</a></h2>
    </div>

    <div>
        <img width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="github logo" />
        <h2> <a style={{ paddingLeft:'10px' ,
         textDecoration: 'none',  color: 'black'}} 
         target='_blank' href="https://github.com/tarunas033">
         tarunas033</a> </h2>

    </div>
          <div>
            <img width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png" alt="linkedin logo" />
            <h2> <a style={{paddingLeft:'10px' , textDecoration: 'none',  color: 'black'}} 
             target='_blank' href="https://www.linkedin.com/in/taruna-sharma-50a7b3221/">taruna-sharma-50a7b3221</a></h2>
          </div>
        </div>

        <div id='gif'>
          <img src="https://miro.medium.com/max/1400/1*qdAW1TjCN57h1lbuuzvchg.gif" alt="" />
        </div>

      </div>

    </div>
  )
}