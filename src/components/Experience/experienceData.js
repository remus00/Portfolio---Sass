// import { BsPatchCheckFill } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoJava } from 'react-icons/bi';
import { SiTailwindcss } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiCoursera, SiSass, SiNextdotjs } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const frontEndData = [
    {
        id: 1,
        title: 'HTML',
        experience: 'Experienced',
        icon: <AiFillHtml5 className="experience__details-icon" />,
    },
    {
        id: 2,
        title: 'CSS',
        experience: 'Intermediate',
        icon: <BiLogoCss3 className="experience__details-icon" />,
    },
    {
        id: 3,
        title: 'Tailwind CSS',
        experience: 'Intermediate',
        icon: <SiTailwindcss className="experience__details-icon" />,
    },
    {
        id: 4,
        title: 'Sass',
        experience: 'Intermediate',
        icon: <SiSass className="experience__details-icon" />,
    },
    {
        id: 5,
        title: 'Javascript',
        experience: 'Intermediate',
        icon: <BiLogoJavascript className="experience__details-icon" />,
    },
    {
        id: 6,
        title: 'React.js',
        experience: 'Intermediate',
        icon: <BiLogoReact className="experience__details-icon" />,
    },
    {
        id: 7,
        title: 'Next.js',
        experience: 'Intermediate',
        icon: <SiNextdotjs className="experience__details-icon" />,
    },
];

const backEndData = [
    {
        id: 1,
        title: 'Java',
        experience: 'Intermediate',
        icon: <BiLogoJava className="experience__details-icon" />,
    },
    {
        id: 2,
        title: 'C',
        experience: 'Intermediate',
        icon: <SiCoursera className="experience__details-icon" />,
    },
    {
        id: 3,
        title: 'MySql',
        experience: 'Intermediate',
        icon: <GrMysql className="experience__details-icon" />,
    },
    {
        id: 4,
        title: 'Python',
        experience: 'Intermediate',
        icon: <FaPython className="experience__details-icon" />,
    },
];

const data = {
    frontEndData,
    backEndData,
};

export default data;
