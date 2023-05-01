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

/* Shot size input */
const shotSizeInpList = [];

const shotSizeInp = document.querySelectorAll(".shot-size-input");
Array.from(shotSizeInp).map((item) => {
  item.onclick = () => {
    if(item.querySelector('input').checked){
        shotTypeInpList.push(item.querySelector('label').innerHTML)
        console.log('Shot size input list: '+ shotTypeInpList);
        let str = ''
        for(i = 0; i<shotTypeInpList.length;i++){
            str =` ${shotTypeInpList[i]} `
        }
        document.querySelector('.shot-size .popup-btn').innerHTML = str;
    }
  };
});

/* shot type input */
const shotTypeInpList = [];

const shotTypeInp = document.querySelectorAll(".shot-type-input");
Array.from(shotTypeInp).map((item) => {
  item.onclick = () => {
    if(item.querySelector('input').checked){
        shotTypeInpList.push(item.querySelector('label').innerHTML)
        console.log('Shot type input list: '+ shotTypeInpList);
        let str = ''
        for(i = 0; i<shotTypeInpList.length;i++){
            str +=` ${shotTypeInpList[i]} | `
        }
        document.querySelector('.shot-type .popup-btn').innerHTML = str;
    }
  };
});
