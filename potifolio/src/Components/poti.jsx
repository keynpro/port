import React from 'react'; // Make sure to import React if you're using it as a functional component

const nav= {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginTop:'30px',
    
};

const li={
color:'gray',
fontSize:'20px',
fontFamily:'sans-serif',
};

const ul={
listStyleType:'none',
display:'flex',
gap:'30px',
marginRight:'50px',
};

const h3={
marginLeft:'50px',
color:'black',
fontWeight:'bold',
fontSize:'40px',
};

const h1={
  alignItems:'left',
justifyContent:'left',
marginLeft:'50px',
display:'flex',
marginTop:'90px',
fontSize:'40px',
color:'#2d1552',
fontWeight:'bold',
fontFamily:'sans-serif',
textAlign:'left',
};

const p = {
  marginLeft: '-220px',
  marginRight: '50px',
  background: 'linear-gradient(to right, #f0f, #0ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  marginTop:'120px',
};

const pp = {
marginLeft: '-400px',
  marginRight: '50px',
  color:'#2d1552',
  marginTop:'180px',
}
const deta = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign:'Left',
  marginTop:'50px',
}


const profileImageContainer = {
  width: '250px',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '50%',
  background: 'linear-gradient(to right, #f0f, #0ff)', 
  border:'none',
  marginRight: '200px', 
  marginTop:'100px',
};

const profileImage = {
  width: '230px',
  height: '230px',
  objectFit: 'cover', 
  borderRadius: '100%',
  backgroundColor:'black', 
  border:'none',
  marginTop:'10px',
  marginLeft:'10px',
};



const th2 = {
  marginLeft: '50px',
  color: '#2d1552',
  fontWeight: 'bold',
  fontSize: '40px',
};

const techs={ 
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
    justifyContent: 'center',
    alignItems: 'center',
   flexWrap: 'wrap',
    gap: '50px',
     marginTop: '20px',
     padding: '20px 20px',
     marginLeft: '50px',
     
   }

const project = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',
  marginLeft: '50px',
  gap: '50px',
  padding: '20px',
  
};

const projectcont = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  padding: '0',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow: '  5px 5px 10px rgba(1, 0, 0, 0.1)',
  height: '550px',
  width:'350px',
};

const title= { 
  color: '#000',
    fontSize: '25px',
      fontFamily: 'sans-serif',
      marginRight: '90px',
      marginTop: '-50px',
      marginLeft: '-2px',
      paddingTop: '10px'
     }

const img={
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  borderRadius: '10px',  
  boxShadow: '0 3px 10px  rgba(0, 0, 0, 0.1)',
  padding:'0',
};

const description = {
  color: '#555',
  fontSize: '16px',
  fontFamily: 'sans-serif',
  marginTop: '-90px',
  marginLeft: '-16px',
  flexWrap: 'wrap',
};

const description1 = {
  color: '#2d1552',
  fontSize: '16px',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  marginTop: '-80px',
  marginRight: '185px',
  marginLeft: '-37px',
};



function Poti() {
  return (
    <div>
      <nav style={nav}>
        <h3 style={h3}>JM</h3>
        <ul style={ul}>
          <a href="#home"><li style={li}>Home</li></a>
          <a href="#about"><li style={li}>About</li></a>
          <a href="#tech-stack"><li style={li}>Tech Stack</li></a>
          <a href="#project"><li style={li}>Project</li></a>
          <a href="#contact"><li style={li}>Contact</li></a>
        </ul>
      </nav>
      <div id='home' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}> {/* Flex container for details and image */}
        <div style={deta}>
          <h1 style={h1}>
            Hi 👋,<br/> My name is<br/>
            <br/>
            
            <span style={p}>
              Jacques MBABAZI
            </span><br/>
            <br/>
            <br/>
           <span style={pp}>I build things for web</span>
          </h1>
        </div>
        <div style={profileImageContainer}>
          <img
            src="Jack.png"
            alt="Profile"
            style={profileImage}
          />
        </div>
      </div>

      <div id='tech-stack' style={{ marginTop: '100px', marginLeft: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex', fontFamily: 'sans-serif', 

       }}>
        <h2 style={th2}>My Tech Stack</h2> <br/>
        </div>
        <div style={techs}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Vscode" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="nextjs" width="80" height="80" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="php" width="80" height="80" />
          </div>
<br/><br/>

        <h2 style={{ color: '#2d1552', fontWeight: 'bold', fontSize: '40px', textAlign: 'center', fontFamily:'sans-serif' }}>My Projects</h2>


        <div id='project' style={project}>

       

        <div style={projectcont}>
          
          <img style={img} src="backiee-277480-landscape.jpg" alt="not found" />
          <br/>
          <h2 style={title}>Project Tile goes here</h2>

          <p style={description}>Project description goes here this is my <br/> projects  div where you can put all of your <br/>project description</p>

          <p style={description1}>Tech stack</p>

        </div>

        


      </div>
      </div>
  );
}

export default Poti;