const menuBtn=document.getElementById('menuBtn');
const menu=document.getElementById('menu');

const setMenuOpen=open=>{
  menu.classList.toggle('open',open);
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
