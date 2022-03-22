import troll from '../Images/troll-face.png'

function Navbar(){
  return(
    <div className="navbar">
      <div className="navbar-logo">
        <img src={troll}></img>
        <span>Meme Generator</span>
      </div>
      <p className="navbar-title">React Course - Project 3</p>
    </div>
  );
}
export default Navbar;