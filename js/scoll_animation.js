var animatedOnce = false;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            animatedOnce = true;
        } else {
            entry.target.classList.remove('show');
        }
        
    });
});


const hiddenElementsIntro = document.querySelectorAll('.hidden__intro');
const hiddenElementsAbout = document.querySelectorAll('.hidden__about');


hiddenElementsIntro.forEach((e1) => {
    observer.observe(e1);
});

hiddenElementsAbout.forEach((e2) => {
    observer.observe(e2);
});