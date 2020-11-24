import React from 'react';

import { Container, CardDescription, Header, Content } from './styles';

import Sidebar from '../../components/Sidebar/index';
import InfoCard from '../../components/InfoCard/index';
import { ReactComponent as Illustration } from '../../assets/illustration.svg';

const About: React.FC = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <InfoCard />
        <CardDescription>
          <Header>
            <div />
            <h2>
              <span>About </span>
              Me
            </h2>
          </Header>
          <Content>
            <div>
              <p>
                Over 15 years I built a career focused on productivity, quality,
                and intercommunication, which provided me great experiences and
                immense learning.
              </p>
              <p>
                Today I am redirecting my focus to Web development, where I am
                currently dealing with #NodeJS, #React, #ReactNative and other
                tools that help in the development of this environment.
              </p>
            </div>
            <Illustration />
          </Content>
        </CardDescription>
      </Container>
    </>
  );
};

export default About;