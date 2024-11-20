import { Facebook, Linkedin, Twitter } from "react-feather";
import Link from "next/link";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "@/Constant";

const SocialLinks = () => {
  return (
    <div className="social mt-4">
      <div className="btn-showcase">
        <Link href="https://www.linkedin.com/login" className="btn btn-light" target="_blank">
          <Linkedin className="txt-linkedin" /> {LinkedInIcon}
        </Link>
        <Link href="https://twitter.com/login?lang=en" className="btn btn-light" target="_blank">
          <Twitter className="txt-twitter" /> {TwitterIcon}
        </Link>
        <Link href="https://www.facebook.com/" className="btn btn-light" target="_blank">
          <Facebook className="txt-fb" /> {FacebookIcon}
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;

