const sceneRow = `<input class="content" type="text" placeholder="abc" />`;
const subjectRow = `<input class="content" type="text" placeholder="Subject" />`;

const lensRow = `<input class="content" type="text" placeholder="lens" />`;
const desRow = `<input class="content" type="text" placeholder="Description" />`;
const noteRow = `  <input class="content" type="text" placeholder="note" />`;
const estRow = ` <input class="content" type="text" placeholder="EST of takes" />`;
const shootTimeRow = `<input class="content" type="text" placeholder="Shoot time" />`;
const statusRow = `<input class="content" type="checkbox" placeholder />`;
const cameraRow = `<input class="content" type="text" placeholder="camera" />`;
const shotSizeRow = `
<div class="content">
<div class="popup-btn">Shot size</div>
<div class="modal-al">
  <div class="row">
    <div class="col-6">
      <div class="list">
        <h3>Close ups</h3>
        <ul>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size"
              
            />
            <label for="Close-up">Close-up</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              
              name="shot-size"
            />
            <label for="Medium close-up">Medium close-up</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              
              name="shot-size"
            />
            <label for="Extreme close-up"
              >Extreme close-up</label
            >
          </li>
          <li class="shot-size-input">
            <input
              
              type="radio"
              name="shot-size"
            />
            <label for="Wide close-up">Wide close-up</label>
          </li>
        </ul>
      </div>
      <div class="list">
        <h3>Medium Shots</h3>
        <ul>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size"
              
            />
            <label for="Medium Shot">Medium Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              
              name="shot-size"
            />
            <label for="Close Shot">Close Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              
              name="shot-size"
            />
            <label for="Medium Close Shot"
              >Medium Close Shot</label
            >
          </li>
          <li class="shot-size-input">
            <input
              
              type="radio"
              name="shot-size"
            />
            <label for="Wide close-up">Wide close-up</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-6">
      <div class="list">
        <h3>Long Shots</h3>
        <ul>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size"
              
            />
            <label for="Wide Shot">Wide Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              
              name="shot-size"
            />
            <label for="Extreme Wide Shot"
              >Extreme Wide Shot</label
            >
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
             
              name="shot-size"
            />
            <label for="Full Shot">Full Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              
              type="radio"
              name="shot-size"
            />
            <label for="Medium Full Shot"
              >Medium Full Shot</label
            >
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              
              name="shot-size"
            />
            <label for="Long Shot">Long Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              
              type="radio"
              name="shot-size"
            />
            <label 
              >Extreme Long Shot</label
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>`;
const shotTypeRow = `
<div class="content">
                <div class="popup-btn">Shot type</div>
                <div class="modal-al">
                  <div class="row">
                    <div class="col-6">
                      <div class="list">
                        <h3>Camera Height</h3>
                        <ul>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              name="shot-size"
                              id="Close-up"
                            />
                            <label> Eye Level </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              id="Medium close-up"
                              name="shot-size"
                            />
                            <label>Low Angle </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              id="Extreme close-up"
                              name="shot-size"
                            />
                            <label>High Angle </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              id="Wide close-up"
                              type="checkbox"
                              name="shot-size"
                            />
                            <label>Overhead </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              id="Wide close-up"
                              type="checkbox"
                              name="shot-size"
                            />
                            <label> Shoulder Level </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              id="Wide close-up"
                              type="checkbox"
                              name="shot-size"
                            />
                            <label> Hip Level </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              id="Wide close-up"
                              type="checkbox"
                              name="shot-size"
                            />
                            <label> Knee Level </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              id="Wide close-up"
                              type="checkbox"
                              name="shot-size"
                            />
                            <label>Ground Level </label>
                          </li>
                        </ul>
                      </div>
                      <div class="list">
                        <h3>Dutch Angle</h3>
                        <ul>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              name="shot-size"
                              id="Medium Shot"
                            />
                            <label>Dutch (left)</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              id="Close Shot"
                              name="shot-size"
                            />
                            <label>Dutch (right)</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="list">
                        <h3>Framing</h3>
                        <ul>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              name="shot-size"
                              id="Medium Shot"
                            />
                            <label>Single Shot</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              id="Close Shot"
                              name="shot-size"
                            />
                            <label>Two Shot</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              id="Medium Close Shot"
                              name="shot-size"
                            />
                            <label>Three Shot</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              id="Wide close-up"
                              type="checkbox"
                              name="shot-size"
                            />
                            <label>Over-the-Shoulder</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              id="Wide close-up"
                              type="checkbox"
                              name="shot-size"
                            />
                            <label>Over-the-Hip</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              id="Wide close-up"
                              type="checkbox"
                              name="shot-size"
                            />
                            <label>Point of View</label>
                          </li>
                        </ul>
                      </div>
                      <div class="list">
                        <h3>Focus/dof</h3>
                        <ul>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              name="shot-size"
                              id="Wide Shot"
                            />
                            <label>Rack/Focus </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              id="Extreme Wide Shot"
                              name="shot-size"
                            />
                            <label>Shallow Focus </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              id="Full Shot"
                              name="shot-size"
                            />
                            <label>Deep Focus </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              id="Medium Full Shot"
                              type="checkbox"
                              name="shot-size"
                            />
                            <label>Tilt-Shift </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              id="Long Shot"
                              name="shot-size"
                            />
                            <label>Zoom</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;

const imageRow = ` <div class="content">
<form>
  <input type="file" id="file-input" accept="image/*" />
</form>
<label for="file-input" id="image-container"></label>
</div>  `;
const intRow = ` <div class="content">
<div class="popup-btn">Int/Ext – Day/Night </div>
<div class="modal-al">
  <div class="row">
    <div class="col-12">
      
      <div class="list">
        <h3>
          Int/Ext – Day/Night 
        </h3>
        <ul>
          <li class="int-input">
            <input
              type="radio"
              name="int"
              id="Int-Day"
            />
            <label for="Int-Day">Int-Day</label>
          </li>
          <li class="int-input">
            <input
              type="radio"
              id="Int-Night"
              name="int"
            />
            <label for="Int-Night">Int-Night</label>
          </li>
          <li class="int-input">
            <input
              type="radio"
              id="Ext-Day"
              name="int"
            />
            <label for="Ext-Day"
              >Ext-Day</label
            >
          </li>
          <li class="int-input">
            <input
              id="Ext-Night"
              type="radio"
              name="int"
            />
            <label for="Ext-Night">Ext-Night</label>
          </li>
        </ul>
      </div>
    </div>
   
  </div>
</div>
</div>`;
const cameraMovementRow = ` <div class="content">
<div class="popup-btn">Camera Movement</div>
<div class="modal-al">
  <div class="row">
    <div class="col-12">
      <div class="list">
        <h3>Camera Movement</h3>
        <div class="row">
          <div class="col-6">
            <ul>
              <li class="camera-movement-input">
                <input
                  id="Dolly Zoom"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Dolly Zoom">Dolly Zoom</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Push In"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Push In">Push In</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Pull Out"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Pull Out">Pull Out</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Roll"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Roll">Roll</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Arc"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Arc">Arc</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Boom"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Boom">Boom</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Random"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Random">Random</label>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <ul>
              <li class="camera-movement-input">
                <input
                  type="checkbox"
                  name="camera-movement"
                  id="Static"
                />
                <label for="Static">Static</label>
              </li>
              <li class="camera-movement-input">
                <input
                  type="checkbox"
                  id="Pan"
                  name="camera-movement"
                />
                <label for="Pan">Pan</label>
              </li>
              <li class="camera-movement-input">
                <input
                  type="checkbox"
                  id="Tilt"
                  name="camera-movement"
                />
                <label for="Tilt">Tilt</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Swish Pan"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Swish Pan">Swish Pan</label>
              </li>
              <li class="camera-movement-input">
                <input
                  type="checkbox"
                  id="Swish Tilt"
                  name="camera-movement"
                />
                <label for="Swish Tilt">Swish Tilt</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Tracking"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Tracking">Tracking</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Zoom"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Zoom">Zoom</label>
              </li>
              <li class="camera-movement-input">
                <input
                  id="Crash Zoom"
                  type="checkbox"
                  name="camera-movement"
                />
                <label for="Crash Zoom">Crash Zoom</label>
              </li>
              
            </ul>
           </div>
        </div>
      
      </div>
    </div>
  </div>
</div>
</div>`;
const equipmentRow = ` <div class="content">
<div class="popup-btn">Equipment</div>
<div class="modal-al">
  <div class="row">
    <div class="col-6">
      <div class="list">
        <h3>Mechanism</h3>
        <ul>
          <li class="equipment-input">
            <input
              type="checkbox"
             
              id="Close-up"
            />
            <label> Stick </label>
          </li>
          <li class="equipment-input">
            <input
              type="checkbox"
              id="Medium close-up"
             
            />
            <label>Hand Held </label>
          </li>
          <li class="equipment-input">
            <input
              type="checkbox"
              id="Extreme close-up"
             
            />
            <label>Gimbal</label>
          </li>
          <li class="equipment-input">
            <input
              id="Wide close-up"
              type="checkbox"
             
            />
            <label>Slider </label>
          </li>
          <li class="equipment-input">
            <input
              id="Wide close-up"
              type="checkbox"
             
            />
            <label> Jib </label>
          </li>
          <li class="equipment-input">
            <input
              id="Wide close-up"
              type="checkbox"
             
            />
            <label> Drone </label>
          </li>
          <li class="equipment-input">
            <input
              id="Wide close-up"
              type="checkbox"
             
            />
            <label> Dolly </label>
          </li>
          <li class="equipment-input">
            <input
              id="Wide close-up"
              type="checkbox"
             
            />
            <label>Steadicam </label>
          </li>
          <li class="equipment-input">
            <input
              id="Wide close-up"
              type="checkbox"
             
            />
            <label>Crane</label>
          </li>
        </ul>
      </div>
      <div class="list">
        <h3>Direction</h3>
        <ul>
          <li class="equipment-input">
            <input
              type="checkbox"
             
              id="Medium Shot"
            />
            <label>Forward</label>
          </li>
          <li class="equipment-input">
            <input
              type="checkbox"
              id="Close Shot"
             
            />
            <label>Backward</label>
          </li>
          <li class="equipment-input">
            <input
              type="checkbox"
             
              id="Medium Shot"
            />
            <label>Left</label>
          </li>
          <li class="equipment-input">
            <input
              type="checkbox"
              id="Close Shot"
             
            />
            <label>Right</label>
          </li>
          <li class="equipment-input">
            <input
              type="checkbox"
             
              id="Medium Shot"
            />
            <label>Up</label>
          </li>
          <li class="equipment-input">
            <input
              type="checkbox"
              id="Close Shot"
             
            />
            <label>Down</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-6">
      <div class="list">
        <h3>Tracks</h3>
        <ul>
          <li class="equipment-input">
            <input
              type="checkbox"
             
              id="Medium Shot"
            />
            <label>Straights</label>
          </li>
          <li class="equipment-input">
            <input
              type="checkbox"
              id="Close Shot"
             
            />
            <label>Circular</label>
          </li>
          
           
        </ul>
      </div>
      
    </div>
  </div>
</div>
</div>`;
/* add row */

const newBtn = document.querySelector(".new-btn");
newBtn.onclick = () => {
  const rows = document.querySelectorAll(".col.true");

  Array.from(rows).map((item) => {
    if (item.classList.contains("scene")) {
      document.querySelector(".scene").innerHTML += sceneRow;
    }
    if (item.classList.contains("subject")) {
      document.querySelector(".subject").innerHTML += subjectRow;
    }
    if (item.classList.contains("camera")) {
      document.querySelector(".camera").innerHTML += cameraRow;
    }
    if (item.classList.contains("shot-size")) {
      document.querySelector(".shot-size").innerHTML += shotSizeRow;
    }
    if (item.classList.contains("shot-type")) {
      document.querySelector(".shot-type").innerHTML += shotTypeRow;
    }
    if (item.classList.contains("image")) {
      document.querySelector(".image").innerHTML += imageRow;
    }
    if (item.classList.contains("int")) {
      document.querySelector(".int").innerHTML += intRow;
    }
    if (item.classList.contains("camera-movement")) {
      document.querySelector(".camera-movement").innerHTML += cameraMovementRow;
    }
    if (item.classList.contains("equipment")) {
      document.querySelector(".equipment").innerHTML += equipmentRow;
    }
    if (item.classList.contains("lens")) {
      document.querySelector(".lens").innerHTML += lensRow;
    }
    if (item.classList.contains("description")) {
      document.querySelector(".description").innerHTML += desRow;
    }
    if (item.classList.contains("note")) {
      document.querySelector(".note").innerHTML += noteRow;
    }
    if (item.classList.contains("est")) {
      document.querySelector(".est").innerHTML += estRow;
    }
    if (item.classList.contains("shoot-time")) {
      document.querySelector(".shoot-time").innerHTML += shootTimeRow;
    }
    if (item.classList.contains("status")) {
      document.querySelector(".status").innerHTML += statusRow;
    }
  });

  findPopups();
  inputRow();
};

const findPopups = () => {
  const popupBtns = document.querySelectorAll(".popup-btn");
  const modals = document.querySelectorAll(".modal-al");
  popupBtns.forEach((item, i) => {
    item.onclick = () => {
      modals[i].classList.toggle("active");
    };
  });
};
function getParent(element, selector) {
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    } else {
      element = element.parentElement;
    }
  }
}

findPopups();
const inputRow = () => {
  /* upload image */
  const fileInputs = document.querySelectorAll("#file-input");
  console.log(fileInputs);
  const imageContainer = document.querySelectorAll("#image-container");
  const imageLabel = document.querySelectorAll(".image form label");
  fileInputs.forEach((fileInput, i) => {
    console.log(fileInput);
    fileInput.addEventListener("change", function (e) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", function () {
        const image = new Image();
        image.src = reader.result;
        imageContainer[i].innerHTML = "";

        imageContainer[i].appendChild(image);
      });

      if (file) {
        reader.readAsDataURL(file);
      }
    });
  });

  /* Shot size input */
  const shotSizeInp = document.querySelectorAll(".shot-size-input");
  Array.from(shotSizeInp).map((item) => {
    item.onclick = (e) => {
      if (item.querySelector("input").checked) {
        let str = item.querySelector("label").innerHTML;
        const row = getParent(e.target, ".content");
        row.querySelector(".shot-size .popup-btn").innerHTML = str;
      }
    };
  });

  /* int input */

  const intInp = document.querySelectorAll(".int-input");
  Array.from(intInp).map((item) => {
    item.onclick = (e) => {
      if (item.querySelector("input").checked) {
        let str = item.querySelector("label").innerHTML;
        const row = getParent(e.target, ".content");
        row.querySelector(".int .popup-btn").innerHTML = str;
      }
    };
  });

  /* shot type input */
  let shotTypeInpList = [];

  const shotTypeInp = document.querySelectorAll(".shot-type-input");
  Array.from(shotTypeInp).map((item) => {
    item.onclick = (e) => {
      item.classList.toggle("true");
      if (item.classList.contains("true")) {
        item.querySelector("input").checked = true;
        if (shotTypeInpList.includes(item.querySelector("label").innerHTML)) {
        } else {
          shotTypeInpList.push(item.querySelector("label").innerHTML);
        }
        console.log("Shot type input list: " + shotTypeInpList);
        let str = "";
        for (i = 0; i < shotTypeInpList.length; i++) {
          str += ` ${shotTypeInpList[i]} | `;
        }
        const row = getParent(e.target, ".content");
        row.querySelector(".shot-type .popup-btn").innerHTML = str;
      } else {
        item.querySelector("input").checked = false;

        findShotTypeInp(e);
      }
    };
  });

  const findShotTypeInp = (e) => {
    shotTypeInpList = [];
    const row = getParent(e.target, ".content");
    Array.from(shotTypeInp).map((item) => {
      if (item.classList.contains("true")) {
        shotTypeInpList.push(item.querySelector("label").innerHTML);

        let str = "";
        for (i = 0; i < shotTypeInpList.length; i++) {
          str += ` ${shotTypeInpList[i]} | `;
        }

        row.querySelector(".shot-type .popup-btn").innerHTML = str;
      }
      if (shotTypeInpList.length == 0) {
        row.querySelector(".shot-type .popup-btn").innerHTML = "Shot type";
      }
    });
  };

  /* equipment input */
  let equipmentInpList = [];

  const equipmentInp = document.querySelectorAll(".equipment-input");
  Array.from(equipmentInp).map((item) => {
    item.onclick = (e) => {
      item.classList.toggle("true");
      if (item.classList.contains("true")) {
        item.querySelector("input").checked = true;
        if (equipmentInpList.includes(item.querySelector("label").innerHTML)) {
        } else {
          equipmentInpList.push(item.querySelector("label").innerHTML);
        }
        let str = "";
        for (i = 0; i < equipmentInpList.length; i++) {
          str += ` ${equipmentInpList[i]} | `;
        }
        const row = getParent(e.target, ".content");
        row.querySelector(".equipment .popup-btn").innerHTML = str;
      } else {
        item.querySelector("input").checked = false;

        findEquipmentInp(e);
      }
    };
  });

  const findEquipmentInp = (e) => {
    equipmentInpList = [];
    const row = getParent(e.target, ".content");
    Array.from(equipmentInp).map((item) => {
      if (item.classList.contains("true")) {
        equipmentInpList.push(item.querySelector("label").innerHTML);

        let str = "";
        for (i = 0; i < equipmentInpList.length; i++) {
          str += ` ${equipmentInpList[i]} | `;
        }
        row.querySelector(".equipment .popup-btn").innerHTML = str;
      }
      if (equipmentInpList.length == 0) {
        row.querySelector(".equipment .popup-btn").innerHTML = "Equipment";
      }
    });
  };

  /* camera movement input */

  let cameraMovementList = [];

  const cameraMovementInp = document.querySelectorAll(".camera-movement-input");
  Array.from(cameraMovementInp).map((item) => {
    item.onclick = (e) => {
      item.classList.toggle("true");
      if (item.classList.contains("true")) {
        item.querySelector("input").checked = true;
        if (cameraMovementList.includes(item.querySelector("label").innerHTML)) {
        } else {
          cameraMovementList.push(item.querySelector("label").innerHTML);
        }
        let str = "";
        for (i = 0; i < cameraMovementList.length; i++) {
          str += ` ${cameraMovementList[i]} | `;
        }
        const row = getParent(e.target, ".content");
        row.querySelector(".camera-movement .popup-btn").innerHTML = str;
      } else {
        item.querySelector("input").checked = false;

        findCameraMovementInp(e);
      }
    };
  });

  const findCameraMovementInp = (e) => {
    cameraMovementList = [];
    const row = getParent(e.target, ".content");
    Array.from(cameraMovementInp).map((item) => {
      if (item.classList.contains("true")) {
        cameraMovementList.push(item.querySelector("label").innerHTML);

        let str = "";
        for (i = 0; i < cameraMovementList.length; i++) {
          str += ` ${cameraMovementList[i]} | `;
        }
        row.querySelector(".camera-movement .popup-btn").innerHTML = str;
      }
      if (cameraMovementList.length == 0) {
        row.querySelector(".camera-movement .popup-btn").innerHTML = "Camera movement";
      }
    });
  };

};
inputRow();

/* delete column */

const delBtns = document.querySelectorAll(".del-col-btn");

Array.from(delBtns).map((item, i) => {
  item.onclick = (e) => {
    delCol(e);
  };
});
const delCol = (e) => {
  const row = getParent(e.target, ".col");
  row.remove();
};

/* can bang dong */
const contents = document.querySelectorAll(".content");
Array.from(contents).map((item) => {
  item.onclick = () => {
    console.log(1);
  };
});
