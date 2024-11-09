const radioElements = document.querySelectorAll(`input[type="radio"]`);
const CardContentElements = document.querySelectorAll(`.card_buttom_inputs`);
const CardElements = document.querySelectorAll(`.card`);
const StrikeTextEle = document.querySelectorAll(".strike_text");
const TagEle = document.querySelectorAll(".tag");

for (var i = 0; i < radioElements.length; i++)
  radioElements[i].onchange = changeHandler;

function changeHandler() {
  for (var i = 0; i < radioElements.length; i++) {
    if (radioElements[i].checked) {
      CardElements[i].classList.add("border_active");
      CardContentElements[i].style.display = "block";
      StrikeTextEle[i].style.display = "block";
      TagEle[i].style.display = "block";
    } else {
      CardElements[i].classList.remove("border_active");
      CardContentElements[i].style.display = "none";
      StrikeTextEle[i].style.display = "none";
      TagEle[i].style.display = "none";
    }
  }
}
