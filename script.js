const menuBtn=document.getElementById('menuBtn');
const menu=document.getElementById('menu');

const setMenuOpen=open=>{
  menu.classList.toggle('open',open);
  menu.parentElement.classList.toggle('menu-open',open);
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  menuBtn.textContent=open?'×':'☰';
};

menuBtn.setAttribute('aria-label','Open navigation');
menuBtn.addEventListener('click',()=>setMenuOpen(!menu.classList.contains('open')));

menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  setMenuOpen(false);
}));

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&menu.classList.contains('open')){
    setMenuOpen(false);
    menuBtn.focus();
  }
});

document.getElementById('year').textContent=new Date().getFullYear();

const contactForm=document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit',event=>{
    event.preventDefault();
    const form=event.currentTarget;
    const name=form.elements.name.value.trim();
    const email=form.elements.email.value.trim();
    const phone=form.elements.phone.value.trim();
    const message=form.elements.message.value.trim();
    const subject=encodeURIComponent('Portfolio inquiry from '+name);
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone||'Not provided'}\n\n${message}`);
    window.location.href=`mailto:saikondepati0@gmail.com?subject=${subject}&body=${body}`;
  });
}

const backToTop=document.createElement('button');
backToTop.type='button';
backToTop.className='back-to-top';
backToTop.setAttribute('aria-label','Back to top');
backToTop.textContent='↑';
backToTop.hidden=true;
document.body.append(backToTop);

const updateBackToTop=()=>{backToTop.hidden=window.scrollY<400};
window.addEventListener('scroll',updateBackToTop,{passive:true});
updateBackToTop();

backToTop.addEventListener('click',()=>{
  const behavior=window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
  window.scrollTo({top:0,behavior});
});

const revealTargets=document.querySelectorAll('.hero-copy,.hero-art,.section-head,.about-main,.info-tile,.skill-card,.project,.timeline-item,.education-card,.contact');
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){
  revealTargets.forEach(target=>target.classList.add('is-visible'));
}else{
  revealTargets.forEach(target=>target.classList.add('js-reveal'));
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -20px 0px'});
  revealTargets.forEach(target=>revealObserver.observe(target));
}
