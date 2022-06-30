module.exports = {
  siteMetadata: {
    title: 'MakeUC 2022',
    siteUrl: 'https://makeuc.io',
    description: 'MakeUC 2022 is a 24-hour hackathon hosted by IEEE at University of Cincinnati!',
    tracks: [
      {
        title: 'EDUCATION',
        content: `Education technology aims to improve the accessibility of information to students at any level. 
        These projects include any sort of technology that enhances the learning experiences of students.`,
      },
      {
        title: 'GREEN TECHNOLOGY',
        content: `While we embark on global adventures, we must consider possible impacts on the environment. Green technology 
        projects can be eco-friendly or implement an idea to help reduce damage to the environment.`,
      },
      {
        title: 'SOCIAL ISSUES',
        content: `Improve social responsibility by using technology to promote racial justice, recognize famines, promote 
        healthcare availability, and more. Projects should increase awareness and find solutions.`,
      },
      {
        title: 'GLOBAL CONNECTIVITY',
        content: `Branch out and explore new ways to build connections between people from all over the world. Whether it's 
        between cities, countries, or continents, we all need ways to connect with one another.`,
      },
    ],
    faq: [
      {
        question: 'WHAT IS A HACKATHON?',
        answer: `A hackathon is an event where student developers use their passion for technology to 
        create a project in 24 hours. It is a chance to collaborate and create something unique such as an app, robot, 
        or website! Hackers will think outside of the box and hopefully learn something new along the way in our 
        engaging environment!`,
      },
      {
        question: 'WHEN IS MAKEUC?',
        answer: 'MakeUC 2022 will start on October 22nd and last 24 hours, ending on October 23rd.',
      },
      {
        question: 'WILL MAKEUC BE IN PERSON?',
        answer: `MakeUC 2022 will be held in person and online. In-person spots will be limited, virtual spots will
          be unlimited!`,
      },
      {
        question: 'WHO CAN ATTEND IN PERSON?',
        answer: 'We will release more information soon about who is eligible to attend in person.',
      },
      {
        question: 'HOW MUCH DOES IT COST?',
        answer: `Nothing! The entire event is free for any student, with development tools and prizes all included. 
        We will be sharing free resources from our sponsors (i.e. APIs) post-registration!`,
      },
      {
        question: "WHAT IF I'M NEW TO HACKATHONS?",
        answer: `Wonderful! MakeUC is open to all skill levels, beginners to veterans. There is nothing we love more 
        than helping our hackers learn something new while they build something cool! We will have mentors available 
        during the hackathon to answer any questions that you may have!`,
      },
      {
        question: 'HOW DO I FORM TEAMS?',
        answer: `Teams are formed at the event (we will be having a team formation segment), but you're free to organize 
        before the event if all participants are registered. Team size must be between 1 and 4 people.`,
      },
      {
        question: 'WHAT IF I HAVE A SLOW INTERNET CONNECTION?',
        answer: `Plan ahead! Inform your team members about the situation and try to collaborate as much as possible. 
        Just make sure to download all developer tools in advance!`,
      },
      {
        question: 'WILL I BE ABLE TO MEET SPONSORS?',
        answer: `Yes! Many sponsors will be giving workshops throughout the event that all hackers can attend. We will also 
        have an in-person and virtual sponsor expo where you can interact directly with sponsor representatives.`,
      },
      {
        question: 'WHAT ARE HACKATHON TRACKS?',
        answer: `Tracks are themes or impact areas for projects meant to assist you with building your idea. You are not 
        required to submit your hack to a track to win a prize!`,
      },
    ],
    sponsors: [
      [],

      // L
      [],
      [],

      // M
      [
        {
          link: 'https://www.siemens.com/global/en.html',
          src: 'siemens.svg',
          imageHeight: '52px',
          className: 'partner',
          alt: 'Siemens',
        },
        {
          link: 'https://cloud.google.com/',
          src: 'google-cloud.svg',
          imageHeight: '53px',
          className: 'mt-8 partner',
          alt: 'Google Cloud',
        },
        {
          link: 'https://www.gather.town/',
          src: 'gather70.png',
          imageHeight: '70px',
          className: 'px-4 partner',
          alt: 'Gather Town',
        },
      ],

      // S
      [],

      // XS
      [],
      [],
    ],
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`,
      },
    },
    'gatsby-plugin-provide-react',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-theme-codebushi',
      options: {
        tailwindConfig: 'tailwind.config.js',
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
