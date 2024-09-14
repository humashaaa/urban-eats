// const carousal = document.querySelector('.carousal')
// let isDragStart = false, prevPageX, prevScrollLeft;

// const dragStart = (e)=>{
//     // updating global variable values on mouse down event
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft =  carousal.scrollLeft;
// }

// const dragging = (e)=>{
//     // scrolling image/carousal to left according to mouse pointer
//     if(!isDragStart) return;
//     e.preventDefault()
//     let positionDiff = e.pageX - prevPageX
//    carousal.scrollLeft = prevScrollLeft - positionDiff
  
// }

// const dragStop = ()=>{
//     isDragStart = false
// }
// carousal.addEventListener('mousedown', dragStart)
// carousal.addEventListener('mousemove', dragging)
// carousal.addEventListener('mouseup', dragStop)

const carousal = document.querySelector('.carousal');
let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    // Store the initial pageX position and scroll position
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX; // For mobile, use touches
    prevScrollLeft = carousal.scrollLeft;
}

const dragging = (e) => {
    // Prevent default dragging behavior
    if (!isDragStart) return;
    e.preventDefault();
    
    // Calculate how far the user has dragged
    const currentPageX = e.pageX || e.touches[0].pageX;
    let positionDiff = currentPageX - prevPageX;
    
    // Update the scroll position based on the drag distance
    carousal.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

// Event listeners for mouse events
carousal.addEventListener('mousedown', dragStart);
carousal.addEventListener('mousemove', dragging);
carousal.addEventListener('mouseup', dragStop);
carousal.addEventListener('mouseleave', dragStop);

// Optionally, add touch event listeners for mobile
carousal.addEventListener('touchstart', dragStart);
carousal.addEventListener('touchmove', dragging);
carousal.addEventListener('touchend', dragStop);
