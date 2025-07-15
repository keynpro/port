import React, { useState } from 'react';
import './Footer.css';




const getStyles = (darkMode) => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '30px',
    backgroundColor: darkMode ? '#1a1a1a' : 'transparent',
  },
  li: {
    color: darkMode ? '#e0e0e0' : 'gray',
    fontSize: '20px',
    fontFamily: 'sans-serif',
  },
  ul: {
    listStyleType: 'none',
    display: 'flex',
    gap: '30px',
    marginRight: '50px',
  },
  h3: {
    marginLeft: '50px',
    color: darkMode ? '#ffffff' : 'black',
    fontWeight: 'bold',
    fontSize: '40px',
  },
  h1: {
    alignItems: 'left',
    justifyContent: 'left',
    marginLeft: '50px',
    display: 'flex',
    marginTop: '90px',
    fontSize: '40px',
    color: darkMode ? '#ffffff' : '#2d1552',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    textAlign: 'left',
  },
  p: {
    marginLeft: '-220px',
    marginRight: '50px',
    background: 'linear-gradient(to right, #f0f, #0ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    marginTop: '120px',
  },
  pp: {
    marginLeft: '-400px',
    marginRight: '50px',
    color: darkMode ? '#ffffff' : '#2d1552',
    marginTop: '180px',
  },
  deta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'Left',
    marginTop: '50px',
  },
  profileImageContainer: {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #f0f, #0ff)',
    border: 'none',
    marginRight: '200px',
    marginTop: '100px',
  },
  profileImage: {
    width: '230px',
    height: '230px',
    objectFit: 'cover',
    borderRadius: '100%',
    backgroundColor: darkMode ? '#333' : 'black',
    border: 'none',
    marginTop: '10px',
    marginLeft: '10px',
  },
  th2: {
    marginLeft: '50px',
    color: darkMode ? '#ffffff' : '#2d1552',
    fontWeight: 'bold',
    fontSize: '40px',
  },
  techs: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '50px',
    marginTop: '20px',
    padding: '20px 20px',
    marginLeft: '50px',
  },
  project: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    marginLeft: '50px',
    gap: '50px',
    padding: '20px',
    backgroundColor: darkMode ? '#121212' : 'transparent',
  },
  projectCard: {
    backgroundColor: darkMode ? '#2d2d2d' : '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    }
  },
  projectTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: darkMode ? '#ffffff' : '#2d1552',
    marginBottom: '15px',
    fontFamily: 'sans-serif',
  },
  projectDescription: {
    color: darkMode ? '#e0e0e0' : '#555',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontFamily: 'sans-serif',
  },
  techStack: {
    color: darkMode ? '#b0b0b0' : '#777',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontFamily: 'sans-serif',
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
  },
  liveButton: {
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    backgroundColor: darkMode ? '#4d4dff' : '#2d1552',
    color: '#ffffff',
    border: 'none',
    fontFamily: 'sans-serif',
    '&:hover': {
      backgroundColor: darkMode ? '#3a3aff' : '#1a0d3a',
    }
  },
  codeButton: {
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    backgroundColor: 'transparent',
    color: darkMode ? '#ffffff' : '#2d1552',
    border: `2px solid ${darkMode ? '#ffffff' : '#2d1552'}`,
    '&:hover': {
      backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(45,21,82,0.1)',
    }
  },
  projectcont: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '0',
    backgroundColor: darkMode ? '#2d2d2d' : '#ffffff',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px rgba(1, 0, 0, 0.1)',
    height: '550px',
    width: '350px',
  },
  title: {
    color: darkMode ? '#ffffff' : '#000',
    fontSize: '25px',
    fontFamily: 'sans-serif',
    marginRight: '90px',
    marginTop: '-50px',
    marginLeft: '-2px',
    paddingTop: '10px'
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
    padding: '0',
  },
  description: {
    color: darkMode ? '#e0e0e0' : '#25567',
    fontSize: '16px',
    fontFamily: 'sans-serif',
    marginTop: '-90px',
    marginLeft: '-16px',
    flexWrap: 'wrap',
    
  },
  span: {
    padding: '0',
    marginLeft: '100px',
    marginTop: '-60px',
  },
  description1: {
    color: darkMode ? '#b0b0b0' : '#555',
    fontSize: '16px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginTop: '-80px',
    marginRight: '185px',
    marginLeft: '10px',
  },
  lable: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: '20px'
  },
  check: {
    display: 'none'
  },
  lis: {
    width: '40px',
    height: '20px',
    background: darkMode ? '#4d4d4d' : '#ccc',
    borderRadius: '20px',
    position: 'relative',
    display: 'inline-block',
    transition: 'background 0.3s',
  },
  liv: {
    position: 'absolute',
    left: darkMode ? '22px' : '2px',
    top: '2px',
    width: '16px',
    height: '16px',
    background: '#fff',
    borderRadius: '50%',
    transition: 'left 0.3s',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
  },
  body: {
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    color: darkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
  },

  footer: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '3rem 0 0',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  
  footerSectionH3: {
    color: '#fff',
    marginBottom: '1.5rem',
    fontSize: '2rem',
  },
  footerSectionP: {
    marginBottom: '0.8rem',
    color: '#bdc3c7',
  },
  footerSectionLi: {
    marginBottom: '0.8rem',
    color: '#bdc3c7',
  },
  footerSectionA: {
    color: '#bdc3c7',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  footerSectionAHover: {
    color: '#fff',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  socialIconsA: {
    color: '#fff',
    fontSize: '1.5rem',
  },
  footerBottom: {
    textAlign: 'center',
    padding: '1.5rem 0',
    marginTop: '2rem',
    borderTop: '1px solid #34495e',
  },
  footerBottomP: {
    margin: 0,
    color: '#bdc3c7',
    fontSize: '0.9rem',
  },
  p23:{
    background: 'linear-gradient(to right, #f0f, #0ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',

  }
});

function Poti() {
  const [darkMode, setDarkMode] = useState(false);
  const styles = getStyles(darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={styles.body}>
      <nav style={styles.nav}>
        <h3 style={styles.h3}>JM</h3>
        <ul style={styles.ul}>
          <a href="#home"><li style={styles.li}>Home</li></a>
          <a href="#about"><li style={styles.li}>About</li></a>
          <a href="#tech-stack"><li style={styles.li}>Tech Stack</li></a>
          <a href="#project"><li style={styles.li}>Project</li></a>
          <a href="#contact"><li style={styles.li}>Contact</li></a>
        </ul>
        <label style={styles.lable}>
          <input
            type="checkbox"
            style={styles.check}
            onChange={toggleDarkMode}
            checked={darkMode}
          />
          <span style={styles.lis}>
            <span style={styles.liv} />
          </span>
          <span style={{ 
            marginLeft: '10px', 
            color: darkMode ? '#e0e0e0' : '#555', 
            fontSize: '16px', 
            fontFamily: 'sans-serif' 
          }}>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
        </label>
      </nav>
      
      <div id='home' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={styles.deta}>
          <h1 style={styles.h1}>
            Hi 👋,<br/> My name is<br/>
            <br/>
            <span style={styles.p}>
              Jacques MBABAZI
            </span><br/>
            <br/>
            <br/>
            <span style={styles.pp}>I build things for web</span>
          </h1>
        </div>
        <div style={styles.profileImageContainer}>
          <img
            src="Jack.png"
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
      </div>

      <div id='tech-stack' style={{ marginTop: '100px', marginLeft: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex', fontFamily: 'sans-serif' }}>
        <h2 style={styles.th2}>My Tech Stack</h2>
      </div>
      <div style={styles.techs}>
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

      <h2 style={{ 
        color: darkMode ? '#ffffff' : '#2d1552', 
        fontWeight: 'bold', 
        fontSize: '40px', 
        textAlign: 'center', 
        fontFamily: 'sans-serif', 
        marginLeft: '80px'
      }}>
        My Projects
      </h2>

      <div id='project' style={styles.project}>
        
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} style={styles.projectCard}>
            <img 
              src="backiee-277480-landscape.jpg" 
              alt="Project Thumbnail" 
              style={styles.img}
            />
            <h3 style={styles.projectTitle}>Project Title Goes Here</h3>
            <p style={styles.projectDescription}>
              This is sample project description random things are here in description. 
              This is sample project lorem ipsum generator for dummy content.
            </p>
            <p style={styles.techStack}>
              <strong>Tech stack:</strong> HTML, JavaScript, SASS, React
            </p>
            <div style={styles.buttonContainer}>
              <a href="#" style={styles.liveButton}>Live Preview</a>
              <a href="#" style={styles.codeButton}>View Code</a>
            </div>
            
          </div>
        ))}


        
      </div>

<div style={styles.body}>
      
      <footer style={{
        backgroundColor: darkMode ? '#1a1a1a' : '#f5f5f5',
        color: darkMode ? '#e0e0e0' : '#333',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
          marginBottom: '10px'
        }}>
          <p style={{ marginLeft:'-1100px', fontSize: '58px', fontWeight: 'bold' , color:'black', fontFamily:'sans-serif'}}>JM</p>
          <p style={{ marginTop: '-60px' , fontSize: '18px', fontFamily:'sans-serif'}}>+911234509876</p>
          <p style={{ marginTop:'-30px',paddingBottom:'40px', marginLeft:'920px', fontSize: '18px', fontFamily:'sans-serif' }}>info@example.com</p>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '15px',
          marginBottom: '15px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="#home" style={{ 
            color: darkMode ? '#e0e0e0' : '#333', 
            textDecoration: 'none',
            fontSize: '16px'
          }}>Home</a>
          <a href="#about" style={{ 
            color: darkMode ? '#e0e0e0' : '#333', 
            textDecoration: 'none',
            fontSize: '16px'
          }}>About</a>
          <a href="#tech-stack" style={{ 
            color: darkMode ? '#e0e0e0' : '#333', 
            textDecoration: 'none',
            fontSize: '16px'
          }}>Tech Stack</a>
          <a href="#project" style={{ 
            color: darkMode ? '#e0e0e0' : '#333', 
            textDecoration: 'none',
            fontSize: '16px'
          }}>Project</a>
          <a href="#contact" style={{ 
            color: darkMode ? '#e0e0e0' : '#333', 
            textDecoration: 'none',
            fontSize: '16px'
          }}>Contact</a>
        </div>
        
        <p style={{ 
          margin: 0,
          color: darkMode ? '#b0b0b0' : '#777',
          fontSize: '14px',
          marginTop: '10px'
        }}>
          Designed and built by <span style={styles.p23}>Pavan MG</span>  with <span style={styles.p23}>Love</span> & <span style={styles.p23}>Coffee</span>
        </p>
      </footer>
    </div>

    </div>
    
  );

}




export default Poti;



