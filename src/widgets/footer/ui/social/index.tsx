import TwitterLogo from '/public/images/social/twitter.svg';
import FacebookLogo from '/public/images/social/facebook.svg';
import InstagramLogo from '/public/images/social/instagram.svg';
import TikTokLogo from '/public/images/social/tik-tok.svg';
import SpotifyLogo from '/public/images/social/spotify.svg';



export const Social = () => {
  return (
    <div>
      <a href="">@tarlabakes</a>
      <a href="">
        <img src={TwitterLogo} alt="Twitter" />
      </a>
      <a href="">
        <img src={FacebookLogo} alt="Facebook" />
      </a>
      <a href="">
        <img src={InstagramLogo} alt="Instagram" />
      </a>
      <a href="">
        <img src={TikTokLogo} alt="Tik-tok" />
      </a>
      <a href="">
        <img src={SpotifyLogo} alt="Spotify" />
      </a>
    </div>
  );
};
