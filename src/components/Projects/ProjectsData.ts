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
    repo: 'string;',
    liveDemo: 'string;',
    description:
      'A large mall was looking for a redesign to improve the online browsing experience for local and international visitors.',
    usedStack:
      'User Experience Documentation, Design, HTML/CSS, WordPress Integration',
  },
  {
    id: 2,
    name: '2048',
    src: t2048Src,
    repo: 'string;',
    liveDemo: 'string;',
    description:
      'lorem ipsum dolor sit amet, I memorized this lorem because I use it pretty much anywhere.',
    usedStack:
      'User Experience Documentation, Design, HTML/CSS, WordPress Integration',
  },
  {
    id: 3,
    name: 'Battleship',
    src: battleshipSrc,
    repo: 'string;',
    liveDemo: 'string;',
    description:
      'lorem ipsum dolor sit amet, I memorized this lorem because I use it pretty much anywhere.',
    usedStack:
      'User Experience Documentation, Design, HTML/CSS, WordPress Integration',
  },
];

export default projectsData;
