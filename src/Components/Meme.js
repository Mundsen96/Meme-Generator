import React from 'react';

function Meme(){
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1o00in.jpg'
  })

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemeImages(data))
  }, [])

  function getMemeImage(){
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => {
      return{
        ...prevMeme,
        randomImage: url
      }
    });
  }

  const [customTexts, setCustomTexts] = React.useState({topText: '', bottomText: ''});

  function handleChange(event){
    const {name, value} = event.target;
    setCustomTexts(prevCustomTexts => {
      return {
        ...prevCustomTexts,
        [name]: value
      }
    });
  }
  
  return(
    <main>
      <div className="form"> 
        <input type="text" placeholder="Top text" onChange={handleChange} name="topText" value={customTexts.topText}></input>
        <input type="text" placeholder="Bottom text" onChange={handleChange} name="bottomText" value={customTexts.bottomText}></input>
        <button onClick={getMemeImage} className="get-meme-button">Get a new meme image  🖼</button>
      </div>
      <div className='meme'>
        <img className='meme-image' src={meme.randomImage}></img>
        <h2 value={customTexts.topText} className='meme--text top'>{customTexts.topText}</h2>
        <h2 value={customTexts.bottomText} className='meme--text bottom'>{customTexts.bottomText}</h2>
      </div>
    </main>
  );
}
export default Meme;