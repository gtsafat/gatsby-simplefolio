import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Abdullah Al Numan',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/13keilt7x_jow1bVazh2vwHwZjTDy6HGr/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.PNG',
    title: 'Simple E-commerce website',
    info: 'Its a project done by using HTML, CSS & JAVASCRIPT',
    info2: '',
    url: 'https://gtsafat.github.io/e-commerce',
    repo: 'https://github.com/gtsafat/e-commerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'project description',
    info2: 'paragraph',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'project description',
    info2: 'paragraph',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'onlycjnuman@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/gt.safat',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/gtsafat',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/abdullah-al-numan-ab4916187',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gtsafat',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
