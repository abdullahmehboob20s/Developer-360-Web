let smileyboxes = Array.from(document.querySelectorAll(".smileybox"));

function ratingStar(event) {
  smileyboxes.forEach((smileybox) => {
    let checkValue = smileybox.querySelectorAll("input");
    let checkStar = smileybox.querySelectorAll("label");

    let checkCount = 0;
    for (let i = 0; i < checkValue.length; i++) {
      if (checkValue[i] == event.target) {
        checkCount = i + 1;
      }
    }
    for (let j = 0; j < checkCount; j++) {
      checkValue[j].checked = true;
      checkStar[j].className = "rated";
    }

    for (let k = checkCount; k < checkValue.length; k++) {
      checkValue[k].checked = false;
      checkStar[k].className = "check";
    }
    if (checkCount == 1) {
      smileybox.querySelectorAll("i")[0].style.display = "block";
    }
    if (checkCount == 2) {
      smileybox.querySelectorAll("i")[1].style.display = "block";
    }
    if (checkCount == 3) {
      smileybox.querySelectorAll("i")[2].style.display = "block";
    }
    if (checkCount == 4) {
      smileybox.querySelectorAll("i")[3].style.display = "block";
    }
    if (checkCount == 5) {
      smileybox.querySelectorAll("i")[4].style.display = "block";
    }
  });
}
