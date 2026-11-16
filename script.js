const menuBtn=document.getElementById('menuBtn');
const menu=document.getElementById('menu');

menuBtn.addEventListener('click',()=>{
  const open=menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
});

menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  menu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}));

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&menu.classList.contains('open')){
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
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
