import uroImage from './assets/images/imageUro.png';
import tribuImage from './assets/images/tribu.png';
import cs109File from './assets/static/CS109x.pdf';
import cs50File from './assets/static/CS50.pdf';


const logotext = "J|S";
const meta = {
    title: "Jota Software",
    description: "I’m Jose Gil _ Full stack devloper.",
};

const introdata = {
    title: "I am Jose Gil",
    animated: {
        first: "Branding",
        second: "Software solutions",
        third: "Mobile apps development",
        fourth: "Web apps development",
    },
    description: "Digital Artists. Brand Recognition. Identity. Software. Cloud. Mobile. Design. Dream.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about me",
    aboutme: "I am passionate software developmer I posess a strong eagerness to learn emerging technologies. I have a more affinity for back-end development though I always value a satisfactory user experience.",
};
const worktimeline = [
    {
        jobtitle: "Python programming",
        where: "HarvardX",
        date: "2022",
        file: cs50File,
    },
    {
        jobtitle: "Python for data science",
        where: "HarvardX",
        date: "2023",
        file: cs109File,
    },
    {
        jobtitle: "Full-stack web development",
        where: "Holberton School",
        date: "2024",
        file: null,
    },
];

const skills = [{
        name: "Python",
        value: 5,
    },
    {
        name: "Django",
        value: 4.5,
    },
    {
        name: "Javascript",
        value: 4,
    },
    {
        name: "React",
        value: 3.8,
    },
    {
        name: "Three JS",
        value: 3,
    },
    {
        name: "Flutter",
        value: 2,
    },
];

const services = [
    {
        title: "Branding & Identity",
        description: "With our team of designers we can foucs on distinguishing your brand and give it a true identity.",
    },
    {
        title: "Web Development",
        description: "We develop websites and web applications for all kinds of needs. Or mantain your running website.",
    },
    {
        title: "Mobile Apps",
        description: "We develop multi-platform applications for mobile devices.",
    },
    {
        title: "UI & UX Design",
        description: "Our team of designers create personalized atracctive and intuitive user interfaces. For ensuring easy walkthrough and user experience.",
    },
];

const dataportfolio = [
    {
        img: uroImage,
        description: "Uro-BioM is a multiplataform app that display the biomolecular markers information for Urologists.",
        link: "https://play.google.com/store/apps/details?id=com.jotalgs.urobiom&pcampaignid=web_share",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The future is growing. Contact me!",
        link: "/contact",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The future is growing. Contact me!",
        link: "/contact",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The future of your brand is the same as ours. Contact us!",
        link: "/contact",
    },
    {
        img: tribuImage,
        description: "Tribu is a proyect focalized on foster growing musicians colaborations.",
        link: "https://",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The future is growing. Contact me!",
        link: "/contact",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The future is growing. Contact me!",
        link: "/contact",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The future is growing. Contact me!",
        link: "/contact",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The future is growing. Contact me!",
        link: "/contact",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The future is growing. Contact me!",
        link: "/contact",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The future is growing. Contact me!",
        link: "/contact",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The future is growing. Contact me!",
        link: "/contact",
    },
];

const contactConfig = {
    YOUR_EMAIL: "jotalsoftdevs@gmail.com.com",
    YOUR_FONE: "(+598) 99-291-159",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/JOTALGS",
    //github2: "https://github.com/JOTALG",
    linkedin: "https://www.linkedin.com/in/jose-pedro-gil-suarez-29b6b021a",
    //linkedin2: "https://linkedin.com",
    //linkedin3: "https://linkedin.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};