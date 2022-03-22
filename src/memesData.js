
async function getMemes(){
  const rawData = await fetch('https://api.imgflip.com/get_memes', {
    method: 'GET',
  });
  const data = await rawData.json();
  return data;
}
let memes = {};
getMemes().then(data =>{memes.data=data})
export default memes;