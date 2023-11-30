function loco(){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

loco()

gsap.to("#page>video",{
  scrollTrigger:{
      trigger: `#page>video`,
      start: `3% top`,
      end: `bottom top`,
      scroller:`#main`
  },
  onStart:()=>{
      document.querySelector("#page>video").play()
  }
})

gsap.to("#Page",{
  scrollTrigger:{
    trigger: `#page`,
    start: `top top`,
    end: `bottom top`,
    scroller:`#main`,
    pin:true
  }
})

gsap.to("#Page-bottom",{
  scrollTrigger:{
    trigger: `#page-bottom`,
    start: `5% top`,
    end: `bottom top`,
    scroller:`#main`,
    pin:true
  },
  opacity:0
})


var t1 = gsap.timeline({
  scrollTrigger:{
    trigger: `#page1`,
    start:`top top`,
    scrub:1,
    scroller: `#main`,
    pin:true
  }
})

t1.to("#page1>h1",{
  top:`-50%`
})


var t2 = gsap.timeline({
  scrollTrigger:{
    trigger: `#page2`,
    start:`top top`,
    scrub:1,
    scroller: `#main`,
    pin:true
  }
})

t2.to("#page2>h1",{
  top:`-50%`
})


var t3 = gsap.timeline({
  scrollTrigger:{
    trigger: `#page4`,
    start:`top top`,
    scrub:1,
    scroller: `#main`,
    pin:true,
  }
})

t3.to("#page4>#page4-center",{
  top:`-50%`
})