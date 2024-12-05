import {FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.youtube.com/@scalpingminds111">
          <FaYoutube size={20} />
        </a>
        <a href="https://www.instagram.com/scalpingminds111#">
          <FaInstagram size={20} />
        </a>
        <a href="https://x.com/saurabh__sushir">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
