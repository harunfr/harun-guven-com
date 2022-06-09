import riddleeeySrc from './images/riddleeey.webp';
import t2048Src from './images/2048.webp';
import battleshipSrc from './images/battleship.webp';

export interface IProjectData {
  id: number;
  name: string;
  src: string;
  repo: string;
  liveDemo: string;
  description: string;
  usedStack: string;
}

const projectsData: IProjectData[] = [
  {
    id: 1,
    name: 'Riddleey',
    src: riddleeeySrc,
    repo: 'riddleeey',
    liveDemo: 'riddleeey',
    description:
      'Riddle game using wordle’s interface. Uses rest api to fetch riddles.',
    usedStack: 'MERN Stack, Typescript, Figma',
  },
  {
    id: 2,
    name: '2048',
    src: t2048Src,
    repo: '2048',
    liveDemo: '2048',
    description:
      'Was popular game at year 2014. Revamped with minimal animation.',
    usedStack: 'React, Typescript, Styled-Components',
  },
  {
    id: 3,
    name: 'Battleship',
    src: battleshipSrc,
    repo: 'battleship',
    liveDemo: 'battleship',
    description: 'Classical board game, playable against bot.',
    usedStack: 'React, Jest, Typescript, Styled-Components',
  },
];

export default projectsData;
