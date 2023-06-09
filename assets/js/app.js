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
  child,
  onValue,
  get,
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
                              
                            />
                            <label> Eye Level </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>Low Angle </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>High Angle </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>Overhead </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label> Shoulder Level </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label> Hip Level </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label> Knee Level </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
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
                              
                            />
                            <label>Dutch (left)</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
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
                              
                            />
                            <label>Single Shot</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>Two Shot</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>Three Shot</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>Over-the-Shoulder</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>Over-the-Hip</label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
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
                              
                            />
                            <label>Rack/Focus </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>Shallow Focus </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>Deep Focus </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
                            />
                            <label>Tilt-Shift </label>
                          </li>
                          <li class="shot-type-input">
                            <input
                              type="checkbox"
                              
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
<img src="" alt="" class="image">

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
  save();
  addRow();

  findPopups();
  inputRow();
  readDbWhenAddRow();
};
const dbRef = ref(getDatabase());

const addRow = () => {
  const rows = document.querySelectorAll(".col");

  Array.from(rows).map((item, index) => {
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
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
            />
            <label >Close-up</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
            />
            <label >Medium close-up</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
            />
            <label 
              >Extreme close-up</label
            >
          </li>
          <li class="shot-size-input">
            <input
              
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
            />
            <label >Wide close-up</label>
          </li>
        </ul>
      </div>
      <div class="list">
        <h3>Medium Shots</h3>
        <ul>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
              
            />
            <label >Medium Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
              
            />
            <label >Close Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
              
            />
            <label 
              >Medium Close Shot</label
            >
          </li>
          <li class="shot-size-input">
            <input
              
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
            />
            <label>Wide close-up</label>
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
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
              
            />
            <label>Wide Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
              
            />
            <label 
              >Extreme Wide Shot</label
            >
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
             name="shot-size-${
               document.querySelectorAll(".shot-size .content").length + 1
             }"
              
            />
            <label >Full Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
            />
            <label 
              >Medium Full Shot</label
            >
          </li>
          <li class="shot-size-input">
            <input
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
              
            />
            <label >Long Shot</label>
          </li>
          <li class="shot-size-input">
            <input
              
              type="radio"
              name="shot-size-${
                document.querySelectorAll(".shot-size .content").length + 1
              }"
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
      document.querySelector(".shot-size").innerHTML += shotSizeRow;
    }
    if (item.classList.contains("shot-type")) {
      document.querySelector(".shot-type").innerHTML += shotTypeRow;
    }
    if (item.classList.contains("image")) {
      document.querySelector(".image").innerHTML += imageRow;
    }
    if (item.classList.contains("int")) {
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
            name="int-${document.querySelectorAll(".int .content").length}"
              type="radio"
            />
            <label for="Int-Day">Int-Day</label>
          </li>
          <li class="int-input">
            <input
            name="int-${document.querySelectorAll(".int .content").length}"
              type="radio"
            />
            <label for="Int-Night">Int-Night</label>
          </li>
          <li class="int-input">
            <input
            name="int-${document.querySelectorAll(".int .content").length}"
              type="radio"
            />
            <label for="Ext-Day"
              >Ext-Day</label
            >
          </li>
          <li class="int-input">
            <input
            name="int-${document.querySelectorAll(".int .content").length}"
              type="radio"
            />
            <label for="Ext-Night">Ext-Night</label>
          </li>
        </ul>
      </div>
    </div>
   
  </div>
</div>
</div>`;
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

const inputRow = () => {
  /* upload image */
  const fileInputs = document.querySelectorAll("#file-input");

  fileInputs.forEach((item, index) => {
    item.onchange = () => {
      const file = fileInputs[index].files[0];
      console.log(file);
      const image = document.querySelectorAll(".image img")[index];

      var reader = new FileReader();
      reader.onload = function (e) {
        image.src = e.target.result;
        image.classList.add("active");
      };
      reader.readAsDataURL(file);
    };
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
  Array.from(document.querySelectorAll(".shot-type .content")).map(
    (item, index) => {
      let shotTypeInpList = [];
      const shotTypeInp = item.querySelectorAll(".shot-type-input");
      Array.from(shotTypeInp).map((itemInp) => {
        itemInp.onclick = (e) => {
          itemInp.classList.toggle("true");
          if (itemInp.classList.contains("true")) {
            itemInp.querySelector("input").checked = true;
            if (
              shotTypeInpList.includes(itemInp.querySelector("label").innerHTML)
            ) {
              shotTypeInpList = []
            } else {
              shotTypeInpList.push(itemInp.querySelector("label").innerHTML);
            }

            let str = item.querySelector('label').innerHTML
            for (let i = 0; i < shotTypeInpList.length; i++) {
              if(str.includes(shotTypeInpList[i])){

              } else{

                str += ` ${shotTypeInpList[i]} | `;
              }
            }
            const row = getParent(e.target, ".content");
            if (
              row.querySelector(".shot-type .popup-btn").innerHTML != "" &&
              row.querySelector(".shot-type .popup-btn").innerHTML !=
                "Shot type"
            ) {
              row.querySelector(".shot-type .popup-btn").innerHTML = str;
            } else {
              row.querySelector(".shot-type .popup-btn").innerHTML = str;
            }
          } else {
            itemInp.querySelector("input").checked = false;

            findShotTypeInp(e);
          }
        };
        const findShotTypeInp = (e) => {
          shotTypeInpList = [];
          const row = getParent(e.target, ".content");
          Array.from(shotTypeInp).map((item) => {
            if (item.classList.contains("true")) {
              if (!shotTypeInpList.includes(item.querySelector("label").innerHTML)) {
                shotTypeInpList.push(item.querySelector("label").innerHTML);
                let str = "";
                for (let i = 0; i < shotTypeInpList.length; i++) {
                  str += ` ${shotTypeInpList[i]} | `;
                }
                row.querySelector(".shot-type .popup-btn").innerHTML = str;
              }
            }
            if (shotTypeInpList.length == 0) {
              row.querySelector(".shot-type .popup-btn").innerHTML = "Shot type";
            }
          });
        };
      });
    }
  );

 

  /* equipment input */
  Array.from(document.querySelectorAll(".equipment .content")).map(
    (item, index) => {
      let equipmentInpList = [];
      const equipment = item.querySelectorAll(".equipment-input");
      Array.from(equipment).map((itemInp) => {
        itemInp.onclick = (e) => {
          itemInp.classList.toggle("true");
          if (itemInp.classList.contains("true")) {
            itemInp.querySelector("input").checked = true;
            if (
              equipmentInpList.includes(itemInp.querySelector("label").innerHTML)
            ) {
              equipmentList = []
            } else {
              equipmentInpList.push(itemInp.querySelector("label").innerHTML);
            }

            let str = "";
            for (let i = 0; i < equipmentInpList.length; i++) {
              if(str.includes(equipmentInpList[i])){

              } else{

                str += ` ${equipmentInpList[i]} | `;
              }
              
            }
            const row = getParent(e.target, ".content");
            if (
              row.querySelector(".equipment .popup-btn").innerHTML != "" &&
              row.querySelector(".equipment .popup-btn").innerHTML !=
                "Equipment"
            ) {
              row.querySelector(".equipment .popup-btn").innerHTML = str;
            } else {
              row.querySelector(".equipment .popup-btn").innerHTML = str;
            }
          } else {
            itemInp.querySelector("input").checked = false;

            findEquipment(e);
          }
        };
        const findEquipment = (e) => {
          equipmentInpList = [];
          const row = getParent(e.target, ".content");
          Array.from(equipment).map((item) => {
            if (item.classList.contains("true")) {
              if (!equipmentInpList.includes(item.querySelector("label").innerHTML)) {
                equipmentInpList.push(item.querySelector("label").innerHTML);
                let str = "";
                for (let i = 0; i < equipmentInpList.length; i++) {
                  str += ` ${equipmentInpList[i]} | `;
                }
                row.querySelector(".equipment .popup-btn").innerHTML = str;
              }
            }
            if (equipmentInpList.length == 0) {
              row.querySelector(".equipment .popup-btn").innerHTML = "Equipment";
            }
          });
        };
      });
    }
  );
  /* camera movement input */

  Array.from(document.querySelectorAll(".camera-movement .content")).map(
    (item, index) => {
      let cameraMovementInpList = [];
      const cameraMovement = item.querySelectorAll(".camera-movement-input");
      Array.from(cameraMovement).map((itemInp) => {
        itemInp.onclick = (e) => {
          itemInp.classList.toggle("true");
          if (itemInp.classList.contains("true")) {
            itemInp.querySelector("input").checked = true;
            if (
              cameraMovementInpList.includes(itemInp.querySelector("label").innerHTML)
            ) {
              cameraMovementInpList = []
            } else {
              cameraMovementInpList.push(itemInp.querySelector("label").innerHTML);
            }

            let str = "";
            for (let i = 0; i < cameraMovementInpList.length; i++) {
              if(str.includes(cameraMovementInpList[i])){

              } else{

                str += ` ${cameraMovementInpList[i]} | `;
              }
              
            }
            const row = getParent(e.target, ".content");
            if (
              row.querySelector(".camera-movement .popup-btn").innerHTML != "" &&
              row.querySelector(".camera-movement .popup-btn").innerHTML !=
                "camera-movement"
            ) {
              row.querySelector(".camera-movement .popup-btn").innerHTML = str;
            } else {
              row.querySelector(".camera-movement .popup-btn").innerHTML = str;
            }
          } else {
            itemInp.querySelector("input").checked = false;

            findCameraMovement(e);
          }
        };
        const findCameraMovement = (e) => {
          cameraMovementInpList = [];
          const row = getParent(e.target, ".content");
          Array.from(cameraMovement).map((item) => {
            if (item.classList.contains("true")) {
              if (!cameraMovementInpList.includes(item.querySelector("label").innerHTML)) {
                cameraMovementInpList.push(item.querySelector("label").innerHTML);
                let str = "";
                for (let i = 0; i < cameraMovementInpList.length; i++) {
                  str += ` ${cameraMovementInpList[i]} | `;
                }
                row.querySelector(".camera-movement .popup-btn").innerHTML = str;
              }
            }
            if (cameraMovementInpList.length == 0) {
              row.querySelector(".camera-movement .popup-btn").innerHTML = "Camera Movement";
            }
          });
        };
      });
    }
  );
  /* scene */

  const sceneInp = document.querySelectorAll(".scene input");
  const sceneInpList = [];
  sceneInp.forEach((item, i) => {
    item.oninput = (e) => {};
  });
};

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
  console.log("Readdb when add row run");
};
const renderWhenAddRow = (datas) => {
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
      if (datas[i].int != "") {
        ints[i].querySelectorAll("input")[Number(datas[i].int)].click();
        ints[i].querySelector(".popup-btn").innerHTML =
          ints[i].querySelectorAll("label")[Number(datas[i].int)].innerHTML;
      }
      if (datas[i].shotSize != "") {
        shotSizes[i]
          .querySelectorAll("input")
          [Number(datas[i].shotSize)].click();
        shotSizes[i].querySelector(".popup-btn").innerHTML =
          shotSizes[i].querySelectorAll("label")[
            Number(datas[i].shotSize)
          ].innerHTML;
      }
      if (datas[i].shotType != "") {
        datas[i].shotType = datas[i].shotType.split(",");
        datas[i].shotType = datas[i].shotType.map((item) => Number(item));
        let str = "";
        Array.from(shotTypes[i].querySelectorAll(".shot-type-input")).map(
          (item, j) => {
            if (datas[i].shotType.includes(j)) {
              item.classList.toggle("true");
              item.querySelector("input").click();
              str += ` ${
                shotTypes[i].querySelectorAll("label")[j].innerHTML
              } | `;
            }
            shotTypes[i].querySelector(".popup-btn").innerHTML = str;
          }
        );
      }
      if (datas[i].equipment != "") {
        datas[i].equipment = datas[i].equipment.split(",");
        datas[i].equipment = datas[i].equipment.map((item) => Number(item));
        let str = "";
        Array.from(equipments[i].querySelectorAll(".equipment-input")).map(
          (item, j) => {
            if (datas[i].equipment.includes(j)) {
              item.classList.toggle("true");
              item.querySelector("input").click();
              str += ` ${
                equipments[i].querySelectorAll("label")[j].innerHTML
              } | `;
            }
            equipments[i].querySelector(".popup-btn").innerHTML = str;
          }
        );
      }
      if (datas[i].cameraMovement != "") {
        datas[i].cameraMovement = datas[i].cameraMovement.split(",");
        datas[i].cameraMovement = datas[i].cameraMovement.map((item) =>
          Number(item)
        );
        let str = "";
        Array.from(
          cameraMovements[i].querySelectorAll(".camera-movement-input")
        ).map((item, j) => {
          if (datas[i].cameraMovement.includes(j)) {
            item.classList.toggle("true");
            item.querySelector("input").click();
            str += ` ${
              cameraMovements[i].querySelectorAll("label")[j].innerHTML
            } | `;
          }
          cameraMovements[i].querySelector(".popup-btn").innerHTML = str;
        });
      }
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
    console.log("render when add row run");
  } catch (error) {
    console.log(error);
  }
};

const readDb = () => {
  get(child(dbRef, `shotlist/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
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
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

window.onload = () => {
  readDb();
};
const render = (datas) => {
  const rows = document.querySelectorAll(".col");
  for (let i = 0; i < datas.length; i++) {
    Array.from(rows).map((item, index) => {
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
                      type="radio"name="shot-size-${i}"
                      
                    />
                    <label >Close-up</label>
                  </li>
                  <li class="shot-size-input">
                    <input
                      type="radio"name="shot-size-${i}"
                      
                    />
                    <label >Medium close-up</label>
                  </li>
                  <li class="shot-size-input">
                    <input
                      type="radio"name="shot-size-${i}"
                      
                    />
                    <label 
                      >Extreme close-up</label
                    >
                  </li>
                  <li class="shot-size-input">
                    <input
                      name="shot-size-${i}"
                      type="radio"
                      
                    />
                    <label >Wide close-up</label>
                  </li>
                </ul>
              </div>
              <div class="list">
                <h3>Medium Shots</h3>
                <ul>
                  <li class="shot-size-input">
                    <input
                      type="radio"name="shot-size-${i}"
                      
                      
                    />
                    <label >Medium Shot</label>
                  </li>
                  <li class="shot-size-input">
                    <input
                      type="radio"name="shot-size-${i}"
                      
                      
                    />
                    <label >Close Shot</label>
                  </li>
                  <li class="shot-size-input">
                    <input
                      type="radio"name="shot-size-${i}"
                      
                      
                    />
                    <label 
                      >Medium Close Shot</label
                    >
                  </li>
                  <li class="shot-size-input">
                    <input
                      name="shot-size-${i}"
                      type="radio"
                      
                    />
                    <label>Wide close-up</label>
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
                      type="radio"name="shot-size-${i}"
                      
                      
                    />
                    <label>Wide Shot</label>
                  </li>
                  <li class="shot-size-input">
                    <input
                      type="radio"name="shot-size-${i}"
                      
                      
                    />
                    <label 
                      >Extreme Wide Shot</label
                    >
                  </li>
                  <li class="shot-size-input">
                    <input
                      type="radio"name="shot-size-${i}"
                     
                      
                    />
                    <label >Full Shot</label>
                  </li>
                  <li class="shot-size-input">
                    <input
                      name="shot-size-${i}"
                      type="radio"
                      
                    />
                    <label 
                      >Medium Full Shot</label
                    >
                  </li>
                  <li class="shot-size-input">
                    <input
                      type="radio"name="shot-size-${i}"
                      
                      
                    />
                    <label >Long Shot</label>
                  </li>
                  <li class="shot-size-input">
                    <input
                      name="shot-size-${i}"
                      type="radio"
                      
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
        document.querySelector(".shot-size").innerHTML += shotSizeRow;
      }
      if (item.classList.contains("shot-type")) {
        document.querySelector(".shot-type").innerHTML += shotTypeRow;
      }
      if (item.classList.contains("image")) {
        document.querySelector(".image").innerHTML += imageRow;
      }
      if (item.classList.contains("int")) {
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
              name="int-${i}"
            />
            <label for="Int-Day">Int-Day</label>
          </li>
          <li class="int-input">
            <input
              type="radio"
              name="int-${i}"
            />
            <label for="Int-Night">Int-Night</label>
          </li>
          <li class="int-input">
            <input
              type="radio"
              name="int-${i}"
            />
            <label for="Ext-Day"
              >Ext-Day</label
            >
          </li>
          <li class="int-input">
            <input
              type="radio"
              name="int-${i}"
            />
            <label for="Ext-Night">Ext-Night</label>
          </li>
        </ul>
      </div>
    </div>
   
  </div>
</div>
</div>`;
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
      if (datas[i].int != "") {
        datas[i].int = datas[i].int.split(",");
        datas[i].int = datas[i].int.map((item) => Number(item));
        ints[i].querySelectorAll("input")[Number(datas[i].int)].click();
        ints[i].querySelector(".popup-btn").innerHTML =
          ints[i].querySelectorAll("label")[Number(datas[i].int)].innerHTML;
      }
      if (datas[i].shotSize != "") {
        datas[i].shotSize = datas[i].shotSize.split(",");
        datas[i].shotSize = datas[i].shotSize.map((item) => Number(item));
        shotSizes[i]
          .querySelectorAll("input")
          [Number(datas[i].shotSize)].click();
        shotSizes[i].querySelector(".popup-btn").innerHTML =
          shotSizes[i].querySelectorAll("label")[
            Number(datas[i].shotSize)
          ].innerHTML;
      }
      if (datas[i].shotType != "") {
        datas[i].shotType = datas[i].shotType.split(",");
        datas[i].shotType = datas[i].shotType.map((item) => Number(item));
        let str = "";
        Array.from(shotTypes[i].querySelectorAll(".shot-type-input")).map(
          (item, j) => {
            if (datas[i].shotType.includes(j)) {
              item.classList.toggle("true");
              item.querySelector("input").click();
              str += ` ${
                shotTypes[i].querySelectorAll("label")[j].innerHTML
              } | `;
            }
            shotTypes[i].querySelector(".popup-btn").innerHTML = str;
          }
        );
      }
      if (datas[i].equipment != "") {
        datas[i].equipment = datas[i].equipment.split(",");
        datas[i].equipment = datas[i].equipment.map((item) => Number(item));
        let str = "";
        Array.from(equipments[i].querySelectorAll(".equipment-input")).map(
          (item, j) => {
            if (datas[i].equipment.includes(j)) {
              item.classList.toggle("true");
              item.querySelector("input").click();
              str += ` ${
                equipments[i].querySelectorAll("label")[j].innerHTML
              } | `;
            }
            equipments[i].querySelector(".popup-btn").innerHTML = str;
          }
        );
      }
      if (datas[i].cameraMovement != "") {
        datas[i].cameraMovement = datas[i].cameraMovement.split(",");
        datas[i].cameraMovement = datas[i].cameraMovement.map((item) =>
          Number(item)
        );
        let str = "";
        Array.from(
          cameraMovements[i].querySelectorAll(".camera-movement-input")
        ).map((item, j) => {
          if (datas[i].cameraMovement.includes(j)) {
            item.classList.toggle("true");
            item.querySelector("input").click();
            str += ` ${
              cameraMovements[i].querySelectorAll("label")[j].innerHTML
            } | `;
          }
          cameraMovements[i].querySelector(".popup-btn").innerHTML = str;
        });
      }
      images[i].classList.add("active");
      images[i].src = datas[i].image;
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
  console.log("render run");
  inputRow();
  findPopups();
};

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
      if (scenes[i].value == "") {
      } else {
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
        let intInp = [];
        ints[i].querySelectorAll("input").forEach((item, index) => {
          if (item.checked) {
            intInp.push(index);
          }
        });
        let shotSizeInp = [];
        shotSizes[i].querySelectorAll("input").forEach((item, index) => {
          if (item.checked) {
            shotSizeInp.push(index);
          }
        });
        let obj = {
          image: `${images[i].src ? images[i].src : ""}`,
          scene: `${scenes[i].value != undefined ? scenes[i].value : ""}`,
          setup: `${setups[i].value != undefined ? setups[i].value : ""}`,
          shot: `${shots[i].value != undefined ? shots[i].value : ""}`,
          subject: `${subjects[i].value != undefined ? subjects[i].value : ""}`,
          camera: `${cameras[i].value != undefined ? cameras[i].value : ""}`,
          int: `${intInp}`,
          shotSize: `${shotSizeInp}`,
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
      console.log("Save func run");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

window.onclick = () => {
  save();
};
