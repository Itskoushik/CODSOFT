 Shery.imageEffect("#back", {style: 5,config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1170568502135594},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.44,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.45,"range":[0,2]},"noise_scale":{"value":12.4,"range":[0,100]}},gooey: true})

 const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
 
    searchButton.addEventListener('click', () =>{
        // We add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })
 }
 toggleSearch('search-bar', 'search-button')
 const images = [
    'ronaldo.png',
    'messi1.png',
    'neymar1.png',
    'mbappe1.png',
    'sunil1.png',
 
];


 const elems = document.querySelectorAll(".elem");
 elems.forEach(function(elem) {
   const h1s = elem.querySelectorAll("h1");
   let index = 0;
   let animating = false;
   let currentImageIndex = 0;
 
   document.querySelector("#main").addEventListener("click", function () {
     if (!animating) {
       animating = true;
       currentImageIndex = (currentImageIndex + 1) % images.length;
       const imageUrl = images[currentImageIndex];
       document.getElementById('imagediv').style.backgroundImage = `url(${imageUrl})`;
       gsap.to(h1s[index], {
         top: "-=100%", // Updated this line
         ease: "expo.inOut",
         duration: 1,
         onComplete: function () {
           gsap.set(this.target, { top: "100%" }); // Updated this line
           animating = false;
         },
       });
       index === h1s.length - 1 ? (index = 0) : index++;
       gsap.to(h1s[index], {
         top: "-=100%", // Updated this line
         ease: "expo.inOut",
         duration: 1,
       });
       
     }
   });
 });




