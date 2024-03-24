fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb9d4f8e73msh717a619fd9ffff8p1f43cfjsn01260a668eae',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})
.then(res => res.json())
.then(data=>{
    let list=data.d;
    list.map((item) => {
let name=item.l; 
let poster=item.i.imageUrl;

let tit1=item.qid;
let tit2=item.q
let tit3=item.rank;
let tit4=item.s;
let tit5=item.y;

let movie=`<li><img src="${poster}"><h2>${name}</h2>
<div class="details">${name},${tit1},${tit2},${tit3},${tit4},${tit5}</div></li>`
document.querySelector('.movies').innerHTML+=movie;
})
})
.catch(err =>{
    console.log(err);
    if(tit1,tit2,tit3,tit4,tit5=0){""}
});