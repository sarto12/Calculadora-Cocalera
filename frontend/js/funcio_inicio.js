document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;
    const intervalTime = 5000; 

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    
    prevButton.addEventListener("click", () => {
        prevItem();
        resetAutoSlide(); 
    });

    
    nextButton.addEventListener("click", () => {
        nextItem();
        resetAutoSlide(); 
    });

    
    let autoSlide = setInterval(nextItem, intervalTime);

    
    function resetAutoSlide() {
        clearInterval(autoSlide); 
        autoSlide = setInterval(nextItem, intervalTime); 
    }

    
    showItem(currentIndex);
});