import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faBehance,
} from '@fortawesome/fontawesome-free-brands';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5] "
        href="https://www.linkedin.com/in/muhammad-osama-688123162/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className=" w-[25px] h-[25px]  text-white "
        />
      </a>
      <a
        className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5] "
        href="https://www.instagram.com/silverous_spy/ "
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className=" w-[25px] h-[25px]   text-white"
        />
      </a>
      <a
        className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5] "
        href="https://www.facebook.com/mohammad.osama.94009"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className=" w-[25px] h-[25px]   text-white"
        />
      </a>
      <a
        className="hover:opacity-[0.99] transition duration-500 hover:scale-[1.5]"
        href="https://github.com/MuhammadOsama169"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className=" w-[25px] h-[25px]   text-white "
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
