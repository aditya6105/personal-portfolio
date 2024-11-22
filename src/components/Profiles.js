import leetcodelogo from "../assets/img/Profiles logo/LeetCode_Logo_1.png";
import github from "../assets/img/Profiles logo/github-logo (1).png";
import gfglogo from "../assets/img/Profiles logo/GeeksforGeeks.svg";
import codeninja from "../assets/img/Profiles logo/codingninjas-svgrepo-com.svg";
import linkedinLogo from "../assets/img/Profiles logo/linkedin-icon.svg";
import colorSharp from "../assets/img/color-sharp2.png";

export const Profiles = () => {
  return (
    <section className="skill" id="profiles">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Profiles</h2>
              <p>
                Check out my profiles on various platforms.<br></br> Click the
                links below to explore more.
              </p>
              <div className="profiles-container">
                <div className="item">
                  <a
                    href="https://leetcode.com/u/aditya77x"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={leetcodelogo} alt="Leetcode" />
                    <h5>Leetcode</h5>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://github.com/aditya6105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="GitHub" />
                    <h5>GitHub</h5>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.geeksforgeeks.org/user/aditya55x/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={gfglogo} alt="Geeksforgeeks" />
                    <h5>GeeksforGeeks</h5>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.naukri.com/code360/profile/adityax55x"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={codeninja} alt="Coding Ninja" />
                    <h5>Coding Ninjas</h5>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.linkedin.com/in/aditya-raj-37189824a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinLogo} alt="LinkedIn" />
                    <h5>LinkedIn</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-right" src={colorSharp} alt="Image" />
    </section>
  );
};
