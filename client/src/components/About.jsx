import "../App.css";
import myPic from '../imgs/Kyla_pic.png';


const Menu = () => {
  return (
    <div className="container">
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <h1 className="appname">talkME</h1>
        <p className="aboutText">
        TalkMe is a web application that transforms your voice into written text, 
        making note-taking effortless and efficient. Built with React for a dynamic front-end 
        and Node.js for a robust back-end, TalkMe ensures a seamless user experience. Simply 
        speak to convert your thoughts into text, store your notes securely, and download them 
        as PDF files for easy sharing and printing. Perfect for on-the-go productivity and hands-free 
        convenience, TalkMe is your ultimate voice-activated note-taking companion.
        </p>
        <img className="myPic" src={myPic} alt="Creator's Image"/>
      </div>
    </div>
  );
};

export default Menu;
