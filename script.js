// Typing Animation

let typed = new Typed(".move",{
    strings : ["Frontend Developer","Quick Learner"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
})

// Gsap Animation
  gsap.from('.hero #main-img',{
    y:-20,
    repeat:-1,
    duration:3.3,
    yoyo:true,
  })
  gsap.from('header .navbar-brand',{
    x:-40,
    duration:0.6
  })
  gsap.from('#navbarSupportedContent a',{
    y:40,
    duration:0.4,
    stagger:0.2,
    opacity:0,
  })
  gsap.from('.hero .hTop',{
    y:-60,
    duration:0.7,
    stagger:0.2,
    opacity:0,
  })
  gsap.from('.hero .hBot',{
    y:60,
    duration:0.7,
    stagger:0.2,
    opacity:0,
  })
  gsap.from('.hero h1',{
    x:-60,
    duration:0.5,
    stagger:0.2,
    opacity:0,
    delay:0.3
  })
  gsap.from('.hero .icons',{
    x:60,
    duration:0.5,
    opacity:0,
    delay:0.3,
    stagger:0.5
  })
//   gsap.from('#btnContainer .btn',{
//     y:-60,
//     duration:0.5,
//     opacity:1,
//     delay:0.3,
//   })

//   About Section

gsap.from('#about #aboutImg',{
    x:-60,
    duration:0.7,
    opacity:0,
    // delay:0.3,
    scrollTrigger:{
        scroller:'body',
        trigger:'#about #aboutImg',
        // markers:true,
        start:'top 25%'
    }
})
gsap.from('.hero .btn',{
    y:60,
    opacity:0,
    duration:0.5,
})
gsap.from('#about #aboutContent',{
    x:60,
    duration:0.7,
    opacity:0,
    // delay:0.3,
    scrollTrigger:{
        scroller:'body',
        trigger:'#about #aboutImg',
        start:'top 25%'
    }
})
gsap.from('#aboutContent h2',{
    y:-30,
    duration:0.7,
    opacity:0,
    // delay:0.3,
    scrollTrigger:{
        scroller:'body',
        trigger:'#about #aboutImg',
        start:'top 25%'
    }
})

gsap.from('#services h2',{
    y:-80,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        scroller:'body',
        trigger:'#services #cards',
        start:'top 60%',
    }

})
gsap.from('#services #cards',{
    y:50,
    opacity:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        scroller:'body',
        trigger:'#services #cards',
        start:'top 60%'
    }

})

// Project Section

gsap.from('#projects h2',{
  y:-80,
  opacity:0,
  duration:1,
  delay:0.2,
  scrollTrigger:{
      scroller:'body',
      trigger:'#projects #cards',
      start:'top 60%',
  }

})
gsap.from('#projects #cards',{
  y:50,
  opacity:0,
  duration:1,
  delay:0.2,
  scrollTrigger:{
      scroller:'body',
      trigger:'#projects #cards',
      start:'top 60%'
  }

})

// Contact Section

gsap.from('#contact h2',{
  y:-80,
  opacity:0,
  duration:1,
  delay:0.2,
  scrollTrigger:{
      scroller:'body',
      trigger:'#contact #cards',
      start:'top 60%',
  }

})
gsap.from('#contact #cards',{
  y:50,
  opacity:0,
  duration:1,
  delay:0.2,
  scrollTrigger:{
      scroller:'body',
      trigger:'#contact #cards',
      start:'top 60%'
  }

})


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('#nav1 a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let Height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + Height)
    {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector(' header #nav1 a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}