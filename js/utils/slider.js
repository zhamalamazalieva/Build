export function slider(){
    
$(document).ready(function () {
    let position = 0;
    const slidesToShow = 2;
    const slidesToScroll = 1;
  
    const wrapper = $(".projects__wrapper");
    const track = $(".projects__track");
    const item = $(".projects__item");
    const btnPrev = $(".projects__button--prev");
    const btnNext = $(".projects__button--next");
  
    const itemWidth = wrapper.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
    const itemsCount = item.length;
  
    item.each(function (index, item) {
      $(item).css({
        minWidth: itemWidth,
      });
    });
  
    btnNext.click(function () {
      const itemsLeft =
        itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
      position -= movePosition;
      SetPosition();
      checkBtns();
    });
    btnPrev.click(function () {
      const itemsLeft = Math.abs(position) / itemWidth;
      position += movePosition;
      SetPosition();
      checkBtns();
    });
  
    const SetPosition = () => {
      track.css({
        transform: `translateX(${position}px)`,
      });
    };
    const checkBtns = () => {
      btnPrev.prop("disabled", position === 0);
      btnNext.prop(
        "disabled",
        position <= -(itemsCount + slidesToShow) * itemWidth
      );
    };
    // checkBtns();
  });
}