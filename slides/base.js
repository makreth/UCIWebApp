const testing = [
    {key: 0, content: getPage1()},
    {key: 1, content: getPage2()},
    {key: 2, content: getPage3()}
]

function applyBase(slides){
    const base = `
<div id="mainSlides" class="carousel slide" data-ride="carousel" data-interval="false">
    <div class="carousel-inner">
    ${slides.map(slide=>`
        <div class="carousel-item">
            <div class="container slide">
                ${slide.content}
            </div>
        </div>
    `
    ).join('')}
    </div>
    <a class="carousel-control-prev" href="#mainSlides" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#mainSlides" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
</div>
    `
    return base;
}
console.log(applyBase(testing));
document.getElementById("navbarJS").innerHTML = getNavBar({carousel:true});
document.getElementById("content").innerHTML = applyBase(testing);
document.getElementsByClassName("carousel-item")[0].classList.add("active");

$('#mainSlides').on('slide.bs.carousel', function (e) {
    const items = document.getElementsByClassName("dropdown-item");
    items[e.from].classList.remove("active");
    items[e.to].classList.add("active");
});

(function(){
    const items = document.getElementsByClassName("dropdown-item");
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener("click", function(e){
            document.getElementsByClassName("dropdown-item")[0].classList.remove('active');
            $('.carousel').carousel(i);
        });
    }
})();

this.carouselNormalization();

