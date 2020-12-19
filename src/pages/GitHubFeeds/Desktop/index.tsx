import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

import api from '../../../services/api';

import {
  Container,
  CardDescription,
  Header,
  BoxProject,
  ProjectContainer,
  Project,
  Description,
} from './styles';

import { ReactComponent as FolderImg } from '../../../assets/folder.svg';
import { ReactComponent as ArrowLink } from '../../../assets/arrowLink.svg';
import NavBar from '../../../components/NavBar/Desktop/index';
import InforCard from '../../../components/InfoCard/Desktop/index';
import Footer from '../../../components/Footer/index';

interface Repository {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  stack: string[];
}

const GitHubFeedsDesktop: React.FC = (): any => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setLoading] = useState(true);

  const loadData = async () => {
    const { data } = await api.get<Repository[]>(
      '/users/Fernandosilvasc/repos?per_page=4',
    );

    const repos = await Promise.all(
      data.map(async repo => {
        const {
          id,
          name,
          description,
          created_at,
          updated_at,
          html_url,
        } = repo;

        const { data: languages } = await api.get(
          `/repos/Fernandosilvasc/${name}/languages`,
        );

        const stack = Object.keys(languages);

        return {
          id,
          name,
          description,
          created_at,
          updated_at,
          html_url,
          stack,
        };
      }),
    );

    setRepositories(repos);

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  return (
    <>
      <Container>
        <NavBar />
        <InforCard title="githubFeeds" />
        <CardDescription>
          <Header>
            <div>
              <div />
              <h2>
                <span>GitHub </span>
                Feeds
              </h2>
            </div>
            <p>latest repos</p>
          </Header>
          <BoxProject>
            <h2>Other projects I have worked on.</h2>
            {!isLoading ? (
              <ProjectContainer>
                {repositories.map(repository => (
                  <Project key={repository.id}>
                    <div>
                      <FolderImg />
                      <a href={repository.html_url} target="blank">
                        <ArrowLink />
                      </a>
                    </div>
                    <Description>
                      <h3>{repository.name}</h3>
                      {repository.description === null ? (
                        <p>
                          I am working on it, the description will be provided
                          soon.
                        </p>
                      ) : (
                        <p>{repository.description}</p>
                      )}
                      <div>
                        {repository &&
                          repository.stack.map(language => (
                            <p key={language}>{language}</p>
                          ))}
                      </div>
                    </Description>
                  </Project>
                ))}
              </ProjectContainer>
            ) : (
              <Loader
                type="Oval"
                color="#efefd0"
                height={100}
                width={100}
                className="loader"
              />
            )}
          </BoxProject>
        </CardDescription>
      </Container>
      <Footer />
    </>
  );
};
export default GitHubFeedsDesktop;
