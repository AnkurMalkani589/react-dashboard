import React, { useState } from 'react';
import { Tabs, Tab, Box, styled, Typography as MuiTypography } from '@mui/material'; // Use MuiTypography to avoid conflict

const CustomBox = styled('div')({
  border: '1px solid #000',
  borderRadius: '15px',
  backgroundColor: '#363c43',
  flexDirection: 'row',
  height: '40vh',
  marginBottom: '10px',
  marginLeft:'10px',
  marginRight:'10px',
  marginTop:'10px'
});

const CustomTabs = styled('Tabs')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#000',
  borderRadius: '20px',
});

const CustomTab = styled('Tab')({
  border: '1px solid #fff',
  margin: '10px',
  color: '#fff',
  cursor: 'pointer',
});

const NavBar = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px',
  color: '#fff',
  marginTop: '20px',
  backgroundColor: '#000',
  
  color: '#ffffff',
  borderRadius: '20px',
  padding: '10px 20px',
  fontWeight: 'bold',
  fontSize: '16px',
  marginLeft:'60px',
  marginRight:'60px'
});

const NavItem = styled('div')({
  cursor: 'pointer',
  padding: '10px 20px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#151515',
  },
});

const CustomText = styled('p')({
  fontSize: '16px',
  color: '#DCDCDC',
  textAlign: 'justify',
  margin: '55px',
  marginTop: '20px'
});
const NavbarMain = styled('NavBar')({

});

export default function InfoSection() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomBox className="info-section bg-gray-800 p-4 rounded-lg shadow-lg">

      <NavBar>
        <NavItem onClick={() => setValue(0)} className={value === 0 ? 'active' : ''}>About Me</NavItem>
        <NavItem onClick={() => setValue(1)} className={value === 1 ? 'active' : ''}>Experiences</NavItem>
        <NavItem onClick={() => setValue(2)} className={value === 2 ? 'active' : ''}>Recommended</NavItem>
      </NavBar>


      <Box className="tab-content mt-4 p-4 bg-gray-700 rounded-lg text-white text-base leading-relaxed">
        {value === 0 && (
          <div>
            <CustomText>
              Hello! I'm a front-end developer with expertise in HTML, CSS, and
              JavaScript, passionate about creating seamless and interactive
              web designs. My experience includes a full-stack web development
              internship where I developed and deployed websites, refining
              both my front-end and back-end skills. I thrive in
              high-pressure environments, staying calm and composed to make
              thoughtful decisions and deliver results effectively. This
              adaptability has helped me succeed in various projects, and I am
              eager to bring this mindset and my technical expertise to
              Creatiwise to contribute to innovative design solutions.
            </CustomText>
          </div>
        )}
        {value === 1 && (
          <div>
            <CustomText>
              As a Full Stack Web Development Intern at Bharat Intern from
              February to March 2024, I successfully completed a virtual
              internship focused on designing, developing, and deploying web
              applications. During this time, I gained practical experience
              working with both front-end technologies, including HTML, CSS,
              and JavaScript, and back-end development processes. I actively
              contributed to creating responsive and functional web
              applications, honing my problem-solving skills and optimizing
              user experience. This role allowed me to strengthen my technical
              knowledge while delivering real-world web solutions.
            </CustomText>
          </div>
        )}
        {value === 2 && (
          <div>
            <CustomText>
              For deepening full-stack skills, the Full Stack Open course from
              Bharat Intern is highly recommended, covering JavaScript, React,
              Node.js, and MongoDB. The Python for Data Science certification
              from Infosys Springboard is essential for practical
              applications. MDN Web Docs by Mozilla is an invaluable resource
              for web standards. "Clean Code" by Rahul Sharma has
              significantly improved my coding practices, emphasizing clean
              and maintainable code. Visual Studio Code remains my top editor
              for its extensive extensions. Additionally, my experience with
              Bharat Intern and collaboration with Rahul Sharma has greatly
              enhanced my development skills and professional growth.
            </CustomText>
          </div>
        )}
      </Box>
    </CustomBox>
  );
}
