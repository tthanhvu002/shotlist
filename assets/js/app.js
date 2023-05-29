import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

import { runTransaction } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyB7XyOLNmKHz7i5OCp76JBHYEFMjNDByVg",
  authDomain: "shotlist-10855.firebaseapp.com",
  projectId: "shotlist-10855",
  storageBucket: "shotlist-10855.appspot.com",
  messagingSenderId: "961267694086",
  appId: "1:961267694086:web:b8731035eb353b696ba187",
  measurementId: "G-KQD7E23TT5",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const sceneRow = `<div class="content">
<input  type="text" placeholder="Scene" />
</div>`;
const subjectRow = `<div class="content">
<input type="text" placeholder="Subject" />
</div>`;

const lensRow = `<div class="content">
<input type="text" placeholder="lens" />
</div>`;
const desRow = `<div class="content">
<textarea name="" placeholder="Description" id="" ></textarea>
</div>`;
const noteRow = ` <div class="content">
<textarea name="" placeholder="Note" id="" ></textarea>
</div>`;
const estRow = `  <div class="content">
<input type="text" placeholder="EST of takes" />
</div>`;
const shootTimeRow = `<div class="content">
<input type="text" placeholder="Shoot time" />
</div>`;
const statusRow = `<div class="content">
<input type="checkbox" placeholder />
</div>`;
const cameraRow = ` <div class="content">
<input type="text" placeholder="Camera" />
</div>`;
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
<label  id="image-container">
  <img src="" alt="">
</label>
</div>`;
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
const scriptTimeRow = ` <div class="content">
<input  type="text" placeholder="Script time" />
</div>`;
const setupRow = `<div class="content">
<input  type="text" placeholder="Setup" />

</div>
`;
const shotRow = `<div class="content">
<input  type="text" placeholder="Shot" />

</div>`;
const lyricsRow = `<div class="content">
<input type="text" placeholder="Lyrics"  />
</div>`;
const soundRow = `<div class="content">
<input type="text" placeholder="Sound"  />
</div>`;
/* add row */
const newBtn = document.querySelector(".new-btn");
newBtn.onclick = () => {
  addRow();

  findPopups();
  inputRow();
  readDbWhenAddRow();
};

const addRow = () => {
  const rows = document.querySelectorAll(".col");

  Array.from(rows).map((item) => {
    if (item.classList.contains("setup")) {
      document.querySelector(".setup.col").innerHTML += setupRow;
    }
    if (item.classList.contains("shot")) {
      document.querySelector(".shot.col").innerHTML += shotRow;
    }
    if (item.classList.contains("script-time")) {
      document.querySelector(".script-time.col").innerHTML += scriptTimeRow;
    }
    if (item.classList.contains("lyrics")) {
      document.querySelector(".lyrics.col").innerHTML += lyricsRow;
    }
    if (item.classList.contains("sound")) {
      document.querySelector(".sound.col").innerHTML += soundRow;
    }
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

findPopups();
const inputRow = () => {
  /* upload image */
  const fileInputs = document.querySelectorAll("#file-input");
  const imageContainer = document.querySelectorAll("#image-container");
  const imageLabel = document.querySelectorAll(".image label");
  imageLabel.forEach((item, index) => {
    item.onclick = () => {
      fileInputs[index].click();
      const reader = new FileReader();
      const file = fileInputs[index].files[0];
      const image = document.querySelectorAll(".image img")[index];
      reader.addEventListener("load", function () {
        image.src = reader.result;
        imageContainer[i].appendChild(image);

        if (file) {
          reader.readAsDataURL(file);
        }
      });
    };
  });
  fileInputs.forEach((fileInput, i) => {
    fileInput.addEventListener("change", function (e) {});
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

        let str = "";
        for (let i = 0; i < shotTypeInpList.length; i++) {
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
        for (let i = 0; i < equipmentInpList.length; i++) {
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
        for (let i = 0; i < equipmentInpList.length; i++) {
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
        if (
          cameraMovementList.includes(item.querySelector("label").innerHTML)
        ) {
        } else {
          cameraMovementList.push(item.querySelector("label").innerHTML);
        }
        let str = "";
        for (let i = 0; i < cameraMovementList.length; i++) {
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
        for (let i = 0; i < cameraMovementList.length; i++) {
          str += ` ${cameraMovementList[i]} | `;
        }
        row.querySelector(".camera-movement .popup-btn").innerHTML = str;
      }
      if (cameraMovementList.length == 0) {
        row.querySelector(".camera-movement .popup-btn").innerHTML =
          "Camera movement";
      }
    });
  };
  /* scene */

  const sceneInp = document.querySelectorAll(".scene input");
  const sceneInpList = [];
  sceneInp.forEach((item, i) => {
    item.oninput = (e) => {};
  });
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

/* add col */

const boardBtn = document.querySelector(".board-btn");
const board = document.querySelector(".board");
boardBtn.onclick = () => {
  board.classList.toggle("active");
};

const items = document.querySelectorAll(".board .item input");
Array.from(items).map((item) => {
  item.onclick = () => {
    if (item.classList.contains("lyrics")) {
      document.querySelector(".lyrics.col").classList.toggle("true");
    }
    if (item.classList.contains("setup")) {
      document.querySelector(".setup.col").classList.toggle("true");
    }
    if (item.classList.contains("sound")) {
      document.querySelector(".sound.col").classList.toggle("true");
    }
    if (item.classList.contains("shot")) {
      document.querySelector(".shot.col").classList.toggle("true");
    }
  };
});

// Initialize Firebase
function getParent(element, selector) {
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    } else {
      element = element.parentElement;
    }
  }
}

/* doc db */
let datas = [];

const readDbWhenAddRow = () => {
  const starCountRef = ref(db, "shotlist/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    let row = [];
    if (data) {
      row = Object.keys(data).map(function (key) {
        return snapshot.val()[key];
      });
      row.map((item) => {
        datas.push(item);
      });
      renderWhenAddRow(datas);
    }
  });
};
const renderWhenAddRow = (datas) => {
  console.log("renderwhenaddrow run...");
  const images = Array.from(document.querySelectorAll(".image .content img"));
  const scenes = Array.from(document.querySelectorAll(".scene .content input"));
  const setups = Array.from(document.querySelectorAll(".setup .content input"));
  const shots = Array.from(document.querySelectorAll(".shot .content input"));
  const subjects = Array.from(
    document.querySelectorAll(".subject .content input")
  );
  const cameras = Array.from(
    document.querySelectorAll(".camera .content input")
  );
  const ints = Array.from(document.querySelectorAll(".int .content "));
  const shotSizes = Array.from(
    document.querySelectorAll(".shot-size .content")
  );
  const shotTypes = Array.from(
    document.querySelectorAll(".shot-type .content")
  );

  const cameraMovements = Array.from(
    document.querySelectorAll(".camera-movement .content")
  );
  const equipments = Array.from(
    document.querySelectorAll(".equipment .content")
  );
  const lens = Array.from(document.querySelectorAll(".lens .content input"));
  const descriptions = Array.from(
    document.querySelectorAll(".description .content textarea")
  );
  const lyrics = Array.from(
    document.querySelectorAll(".lyrics .content input")
  );
  const sounds = Array.from(document.querySelectorAll(".sound .content input"));
  const note = Array.from(document.querySelectorAll(".note .content textarea"));
  const scriptTimes = Array.from(
    document.querySelectorAll(".script-time .content input")
  );
  const ests = Array.from(document.querySelectorAll(".est .content input"));
  const shootTime = Array.from(
    document.querySelectorAll(".shoot-time .content input")
  );
  const status = Array.from(
    document.querySelectorAll(".status .content input")
  );
  console.log(datas, datas.length);
  try {
    for (let i = 0; i < datas.length; i++) {
      console.log(i);
      images[i] = datas[i].image;
      scenes[i].value = datas[i].scene;
      setups[i].value = datas[i].setup;
      shots[i].value = datas[i].shot;
      subjects[i].value = datas[i].subject;
      cameras[i].value = datas[i].camera;
      lens[i].value = datas[i].lens;
      descriptions[i].value = datas[i].description;
      note[i].value = datas[i].note;
      scriptTimes[i].value = datas[i].scriptTime;
      ests[i].value = datas[i].est;
      shootTime[i].value = datas[i].shootTime;
      status[i].checked = datas[i].status;
      lyrics[i].checked = datas[i].lyric;
      sounds[i].checked = datas[i].sound;
    }
    datas.length = 0;
  } catch (error) {
    console.log(error);
  }
};
const readDb = () => {
  const starCountRef = ref(db, "shotlist/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    let row = [];
    if (data) {
      row = Object.keys(data).map(function (key) {
        return snapshot.val()[key];
      });
      row.map((item, index) => {
        datas.push(item);
      });
      render(datas);
    }
  });
};
readDb();
const render = (datas) => {
  console.log(datas);
  const rows = document.querySelectorAll(".col");
  for (let i = 0; i < datas.length; i++) {
    Array.from(rows).map((item, i) => {
      if (item.classList.contains("setup")) {
        document.querySelector(".setup.col").innerHTML += setupRow;
      }
      if (item.classList.contains("shot")) {
        document.querySelector(".shot.col").innerHTML += shotRow;
      }
      if (item.classList.contains("script-time")) {
        document.querySelector(".script-time.col").innerHTML += scriptTimeRow;
      }
      if (item.classList.contains("lyrics")) {
        document.querySelector(".lyrics.col").innerHTML += lyricsRow;
      }
      if (item.classList.contains("sound")) {
        document.querySelector(".sound.col").innerHTML += soundRow;
      }
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
        document.querySelector(".camera-movement").innerHTML +=
          cameraMovementRow;
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
  }
  const images = Array.from(document.querySelectorAll(".image .content img"));
  const scenes = Array.from(document.querySelectorAll(".scene .content input"));
  const setups = Array.from(document.querySelectorAll(".setup .content input"));
  const shots = Array.from(document.querySelectorAll(".shot .content input"));
  const subjects = Array.from(
    document.querySelectorAll(".subject .content input")
  );
  const cameras = Array.from(
    document.querySelectorAll(".camera .content input")
  );
  const ints = Array.from(document.querySelectorAll(".int .content "));
  const shotSizes = Array.from(
    document.querySelectorAll(".shot-size .content")
  );
  const shotTypes = Array.from(
    document.querySelectorAll(".shot-type .content")
  );

  const cameraMovements = Array.from(
    document.querySelectorAll(".camera-movement .content")
  );
  const equipments = Array.from(
    document.querySelectorAll(".equipment .content")
  );
  const lens = Array.from(document.querySelectorAll(".lens .content input"));
  const descriptions = Array.from(
    document.querySelectorAll(".description .content textarea")
  );
  const lyrics = Array.from(
    document.querySelectorAll(".lyrics .content input")
  );
  const sounds = Array.from(document.querySelectorAll(".sound .content input"));
  const note = Array.from(document.querySelectorAll(".note .content textarea"));
  const scriptTimes = Array.from(
    document.querySelectorAll(".script-time .content input")
  );
  const ests = Array.from(document.querySelectorAll(".est .content input"));
  const shootTime = Array.from(
    document.querySelectorAll(".shoot-time .content input")
  );
  const status = Array.from(
    document.querySelectorAll(".status .content input")
  );
  try {
    for (let i = 0; i < datas.length; i++) {
      console.log(images[i], scenes[i]);
      images[i] = datas[i].image;
      scenes[i].value = datas[i].scene;
      setups[i].value = datas[i].setup;
      shots[i].value = datas[i].shot;
      subjects[i].value = datas[i].subject;
      cameras[i].value = datas[i].camera;
      lens[i].value = datas[i].lens;
      descriptions[i].value = datas[i].description;
      note[i].value = datas[i].note;
      scriptTimes[i].value = datas[i].scriptTime;
      ests[i].value = datas[i].est;
      shootTime[i].value = datas[i].shootTime;
      status[i].checked = datas[i].status;
      lyrics[i].checked = datas[i].lyric;
      sounds[i].checked = datas[i].sound;
    }
  } catch (error) {
    console.log(error);
  }
  datas.length = 0;
  console.log(`datas da duoc lam rong: ${datas}`);
};

const setValue = (item, index) => {};
/* them vao db */

const save = () => {
  try {
    const images = document.querySelectorAll(".image .content img");
    const scenes = document.querySelectorAll(".scene .content input");
    const setups = document.querySelectorAll(".setup .content input");
    const shots = document.querySelectorAll(".shot .content input");
    const subjects = document.querySelectorAll(".subject .content input");
    const cameras = document.querySelectorAll(".camera .content input");
    const ints = document.querySelectorAll(".int .content ");
    const shotSizes = document.querySelectorAll(".shot-size .content");
    const shotTypes = document.querySelectorAll(".shot-type .content");

    const cameraMovements = document.querySelectorAll(
      ".camera-movement .content"
    );
    const equipments = document.querySelectorAll(".equipment .content");
    const lens = document.querySelectorAll(".lens .content input");
    const descriptions = document.querySelectorAll(
      ".description .content textarea"
    );
    const lyrics = document.querySelectorAll(".lyrics .content input");
    const sounds = document.querySelectorAll(".sound .content input");
    const note = document.querySelectorAll(".note .content textarea");
    const scriptTimes = document.querySelectorAll(
      ".script-time .content input"
    );
    const ests = document.querySelectorAll(".est .content input");
    const shootTime = document.querySelectorAll(".shoot-time .content input");
    const status = document.querySelectorAll(".status .content input");
    for (let i = 0; i < scenes.length; i++) {
      //lap qua so dong
      //moi dong lap qua moi cot
      const shotTypeInp = [];
      const cameraMovementInp = [];
      const equipmentMovementInp = [];
      shotTypes[i].querySelectorAll("input").forEach((item, index) => {
        if (item.checked) {
          shotTypeInp.push(index);
        }
      });
      cameraMovements[i].querySelectorAll("input").forEach((item, index) => {
        if (item.checked) {
          cameraMovementInp.push(index);
        }
      });
      equipments[i].querySelectorAll("input").forEach((item, index) => {
        if (item.checked) {
          equipmentMovementInp.push(index);
        }
      });
      let intInp = null;
      ints[i].querySelectorAll("input").forEach((item, index) => {
        if (item.checked) {
          intInp = index;
        }
      });
      let shotSizeInp = null;
      shotSizes[i].querySelectorAll("input").forEach((item, index) => {
        if (item.checked) {
          shotSizeInp = index;
        }
      });
      console.log(i);
      console.log(setups[i].value);
      let obj = {
        image: `${images[i].src ? images[i].src : ""}`,
        scene: `${scenes[i].value != undefined ? scenes[i].value : ""}`,
        setup: `${setups[i].value != undefined ? setups[i].value : ""}`,
        shot: `${shots[i].value != undefined ? shots[i].value : ""}`,
        subject: `${subjects[i].value != undefined ? subjects[i].value : ""}`,
        camera: `${cameras[i].value != undefined ? cameras[i].value : ""}`,
        int: `${intInp ? intInp : ""}`,
        shotSize: `${shotSizeInp ? shotSizeInp : ""}`,
        shotType: `${shotTypeInp}`,
        cameraMovement: `${cameraMovementInp}`,
        equipment: `${equipmentMovementInp}`,
        lens: `${lens[i].value ? lens[i].value : ""}`,
        description: `${descriptions[i].value ? descriptions[i].value : ""}`,
        lyrics: `${lyrics[i].value ? lyrics[i].value : ""}`,
        sound: `${sounds[i].value ? sounds[i].value : ""}`,
        note: `${note[i].value ? note[i].value : ""}`,
        scriptTime: `${scriptTimes[i].value ? scriptTimes[i].value : ""}`,
        est: `${ests[i].value ? ests[i].value : ""}`,
        shootTime: `${shootTime[i].value ? shootTime[i].value : ""}`,
        status: `${status[i].checked ? status[i].checked : ""}`,
      };
      set(ref(db, "shotlist/" + obj.scene), obj);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const saveBtn = document.querySelector(".save-btn");
saveBtn.onclick = () => {
  save();
};
