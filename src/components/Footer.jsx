import facebookWhite from "../assets/social/facebook-white.svg";
import twitterWhite from "../assets/social/twitter-white.svg";
import instagramWhite from "../assets/social/instagram-white.svg";
import appStore from "../assets/store/app-store.svg"
import playStore from "../assets/store/play-store.svg"
import microsoftStore from "../assets/store/windows-store.svg"

export const Footer = () => {
  return (
    <footer className="text-lg bg-[#1E1E1E] h-1/4 px-40 py-10 m-0">
      <div className="flex gap-10 text-slate-200 justify-start">
        <p>Home</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Collecion Statement</p>
        <p>Help</p>
        <p>Manage Account</p>
      </div>
      <div className="text-gray-500 mt-4">
        <p>Copyright @ 2024 DEMO Streaming All Rights Reserved</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-10 h-20 mt-3">
          <img src={facebookWhite} alt="facebook" height={22} width={22} />
          <img src={twitterWhite} alt="twitter" height={44} width={44} />
          <img src={instagramWhite} alt="instagram" height={44} width={44} />
        </div>
        <div className="stores flex gap-10 items-center">
          <img src={appStore} alt="appStore" height={128} width={128} />
          <img src={playStore} alt="playStore" height={128} width={128} />
          <img src={microsoftStore} alt="microsoftStore" height={128} width={128} />
        </div>
      </div>
    </footer>
  );
};
