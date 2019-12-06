import React from 'react'

class Profile extends React.Component{

    render(){

        

        return(
            <>
            
            <img src="/Will.jpg" className="rounded-circle mt-4" alt="Cinque Terre" width="304" height="236" /> 
        
            <div class="card mt-3">
  <div class="card-body">
    Hello all!<p/>

    Let me introduce myself, my name is Will McGill and I am a Web Developer and a Digital Marketer. <p/>

    Depending on when you read this, I will graduate a Web Development Bootcamp at Awesome Inc. or did graduate on Dec 6th. <p/>

    The Web Developer Bootcamp is a 3-month, full-time training program for aspiring web developers. The curriculum was designed in collaboration with local technology employers to prepare individuals to dive into a career in web development. The intense training program is designed to take students from the basics of programming to competency in building modern web applications. It includes over 500 hours of hands-on training, gaining experience while building 10+ software projects in an Agile environment, using HTML, CSS, JavaScript, PHP, Laravel, React, Google Cloud, GitHub, and more. <p/>

    Expounding on my experience from the Bootcamp.  I also have close to 5 years in Digital Marketing.  I have knowledge of SEO, SEM, and many other types of Digital Marketing tactics. <p/>

    Oh yes, I also love my siberian husky Mishka and enjoy any outdoor activity.  Hiking and rock climbing are passions of mine. <p/>

    <a href="/WillMcGillResume.pdf" download><button type="button" class="btn btn-primary" >Download My Resume</button></a>

  </div>
</div>
            </>
        )
    }
}

export default Profile