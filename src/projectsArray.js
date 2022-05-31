import openBlogImg from './img/open-blog.jpg';
import movieTheaterImg from './img/movie-theater.jpg';
import issTrackerImg from './img/iss-tracker.jpg';
import someAppImg from './img/some-app.gif';
import bugTrackerImg from './img/bug-tracker.jpg';
import leaveANoteImg from './img/leave-a-note.jpg';

export const projectsArray = [
    {
        title: 'Social Media App / Website',
        technologies: ['React', 'Firebase'],
        description: 'Instagram inspired social media project.',
        liveLink: 'https://markosilvasvuori.github.io/social-media-app/',
        gitHubLink: 'https://github.com/markosilvasvuori/social-media-app',
        imgSrc: someAppImg
    },
    {
        title: 'Open Blog',
        technologies: ['NextJS'],
        description: 'I built this blog as a NextJS practice project. Open Blog is a blog where anyone can post, edit or delete blog posts.',
        liveLink: 'https://open-blog-seven.vercel.app/',
        gitHubLink: 'https://github.com/markosilvasvuori/open-blog',
        imgSrc: openBlogImg
    },
    {
        title: 'Movie Theater Demo Website',
        technologies: ['React', 'Firebase'],
        description: 'This is a movie theater demo website. It uses TMDB API to get movie info (titles, desciptions, ratings...) and Firebase Auth Rest API for anonymous login.',
        liveLink: 'https://react-movie-theater.web.app/',
        gitHubLink: 'https://github.com/markosilvasvuori/movie-theater',
        imgSrc: movieTheaterImg
    },
    {
        title: 'ISS Tracker',
        technologies: ['React'],
        description: 'Tracks the location of International Space Station.',
        liveLink: 'https://markosilvasvuori.github.io/iss-tracker/',
        gitHubLink: 'https://github.com/markosilvasvuori/iss-tracker/tree/master',
        imgSrc: issTrackerImg
    },
    {
        title: 'Bug Tracker',
        technologies: ['React'],
        description: 'A bug/issue tracker demo I built for my portfolio.',
        liveLink: 'https://markosilvasvuori.github.io/ticket-tracker/',
        gitHubLink: 'https://github.com/markosilvasvuori/ticket-tracker/tree/master',
        imgSrc: bugTrackerImg
    },
    {
        title: 'Leave A Note',
        technologies: ['React', 'Firebase'],
        description: 'A simple website to leave notes for everyone to see. Sends and fetches "post it" style notes from Firebase Realtime Database.',
        liveLink: 'https://markosilvasvuori.github.io/leave-a-note/',
        gitHubLink: 'https://github.com/markosilvasvuori/leave-a-note',
        imgSrc: leaveANoteImg
    },
];