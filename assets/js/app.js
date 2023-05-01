const sceneRow = `<input class="content" type="text" placeholder="1" />`;
const setupRow = `<input class="content" type="text" placeholder="1" />`;
const shotRow = `<input class="content" type="text" placeholder="1" />`;
const subjectRow = `<input class="content" type="text" placeholder="1" />`;
const cameraRow = `<input class="content" type="text" placeholder="1" />`;

const popupBtns = document.querySelectorAll(".popup-btn");
const modals = document.querySelectorAll(".modal-al");
popupBtns.forEach((item, i) => {
  item.onclick = () => {
    modals[i].classList.toggle("active");
  };
});

/* upload image */

const fileInput = document.getElementById("file-input");
const imageContainer = document.getElementById("image-container");
const imageLabel = document.querySelector('.image form label')
fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    const image = new Image();
    image.src = reader.result;
    imageContainer.innerHTML = "";

    imageContainer.appendChild(image);
  });

  if (file) {
    imageLabel.classList.toggle('active')
    reader.readAsDataURL(file);
  }
});

/* Shot size input */
const shotSizeInpList = [];

const shotSizeInp = document.querySelectorAll(".shot-size-input");
Array.from(shotSizeInp).map((item) => {
  item.onclick = () => {
    if (item.querySelector("input").checked) {
      shotTypeInpList.push(item.querySelector("label").innerHTML);
      console.log("Shot size input list: " + shotTypeInpList);
      let str = "";
      for (i = 0; i < shotTypeInpList.length; i++) {
        str = ` ${shotTypeInpList[i]} `;
      }
      document.querySelector(".shot-size .popup-btn").innerHTML = str;
    }
  };
});

/* shot type input */
let shotTypeInpList = [];

const shotTypeInp = document.querySelectorAll(".shot-type-input");
Array.from(shotTypeInp).map((item) => {
  item.onclick = () => {
    item.classList.toggle("true");
    if (item.classList.contains("true")) {
        item.querySelector('input').checked = true
      if (shotTypeInpList.includes(item.querySelector("label").innerHTML)) {
      } else {
        shotTypeInpList.push(item.querySelector("label").innerHTML);
      }
      console.log("Shot type input list: " + shotTypeInpList);
      let str = "";
      for (i = 0; i < shotTypeInpList.length; i++) {
        str += ` ${shotTypeInpList[i]} | `;
      }

      document.querySelector(".shot-type .popup-btn").innerHTML = str;
    } else {
        item.querySelector('input').checked = false
        
      findShotTypeInp();
    }
  };
});

const findShotTypeInp = () => {
  shotTypeInpList = [];
  Array.from(shotTypeInp).map((item) => {
    if (item.classList.contains("true")) {
      shotTypeInpList.push(item.querySelector("label").innerHTML);

      console.log("Shot type input list: " + shotTypeInpList);
      let str = "";
      for (i = 0; i < shotTypeInpList.length; i++) {
        str += ` ${shotTypeInpList[i]} | `;
      }
      document.querySelector(".shot-type .popup-btn").innerHTML = str;
    }
  });
};
