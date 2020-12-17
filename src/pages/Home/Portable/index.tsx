import React from 'react';

import { Container, BoxIntroduction, BoxSkills } from './styles';

import NavBar from '../../../components/NavBar/Portable/index';
import InfoCard from '../../../components/InfoCard/Portable/index';
import TitleBar from '../../../components/TitleBar/index';
import Footer from '../../../components/Footer/index';
import { ReactComponent as ComputerIcon } from '../../../assets/computer.svg';
import { ReactComponent as MapIcon } from '../../../assets/map.svg';
import { ReactComponent as GitHubIcon } from '../../../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/linkedIn.svg';

import IconsSkill from '../IconsSkill/index';

const HomePortable: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <InfoCard title="home" />
        <TitleBar boldTitle="Hello" title="Everyone!" />

        <BoxIntroduction>
          <h2>Introduction</h2>
          <ul>
            <li>
              <ComputerIcon />
              <p>&#8212; FullStack Developer</p>
            </li>
            <li>
              <MapIcon />
              <p>&#8212; Lives in Surrey, CA</p>
            </li>
            <li>
              <GitHubIcon />
              <a
                href="https://github.com/Fernandosilvasc"
                target="_blank"
                rel="noreferrer"
              >
                &#8212; GitHub link
              </a>
            </li>
            <li>
              <LinkedInIcon />
              <a
                href="https://www.linkedin.com/in/fernando-correa-da-silva/"
                target="_blank"
                rel="noreferrer"
              >
                &#8212; LinkedIn link
              </a>
            </li>
          </ul>
        </BoxIntroduction>

        <BoxSkills>
          <h2>Skills</h2>
          <IconsSkill />
        </BoxSkills>
      </Container>
      <Footer />
    </>
  );
};

export default HomePortable;
