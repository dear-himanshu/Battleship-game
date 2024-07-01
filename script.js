let grid_box = document.querySelector(".grid_box");

let water_link = "https://ucarecdn.com/88b392a4-eb2d-4b7c-aa8e-ae4a4ece891b/";
let ship_link = "https://ucarecdn.com/ec668e99-6be4-42f9-aa7c-6a92c049353c/";

for(let i=0 ; i<16 ;i++){
    let box = document.createElement("div");
    box.classList.add("sub_box");
    box.classList.add(`sub_box${i}`);
    box.value = i ; // Set custom data attribute
    grid_box.appendChild(box);

}


let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let selectedElements = [];

for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    selectedElements.push(arr.splice(randomIndex, 1)[0]);
}

// console.log(selectedElements);

let all_small_box = Array.from(document.querySelectorAll(".sub_box"));

all_small_box.forEach(box =>{
    if(selectedElements.includes(box.value)){
        let img_ele = document.createElement("img");
        img_ele.classList.add("img_cls");
        img_ele.src = ship_link;
        // img_ele.style.height = "50px";
        box.appendChild(img_ele);
    }
    else{
        let img_ele = document.createElement("img");
        img_ele.classList.add("img_cls");
        img_ele.src = water_link;
        // img_ele.style.height = "50px";
        box.appendChild(img_ele);
    }
});


// let click_map = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// let ship_find_count = 0 ; 
// let no_of_click = 0 ; 


// const checkwin = (click,ship,box) => {
//     if(ship===5){
//         console.log("win");
//         click_map = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
//         all_small_box.forEach(box => {
//             box.removeEventListener("click", handleClick);
//         });
//     }
//     else if(click>7){
//         console.log("loss");
//         click_map = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
//         all_small_box.forEach(box => {
//             box.removeEventListener("click", handleClick);
//         });
//     }
    
// }

// const checkwin = (click, ship) => {
//     if (ship === 5 || click > 7) {
//         console.log(ship === 5 ? "Win" : "Loss");
//         click_map = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];


//         // Disable further clicks on all boxes
//         all_small_box.forEach(box => {
//             box.removeEventListener("click", handleClick);
//         });
//     }
// };

// const handleClick = (box) => {
//     Array.from(box.children).forEach(child => {
//         child.classList.remove("img_cls")
//         child.classList.add("img_prp");
//     });

//     // rest functionality

//     if(click_map[box.value]!==1){
//         click_map[box.value]=1;
//         ++no_of_click;
//         if(selectedElements.includes(box.value)){
//             ++ship_find_count;
//         }
//     }
    
//     checkwin(no_of_click,ship_find_count);
//     // console.log(no_of_click,ship_find_count);

// }

// all_small_box.forEach(box => {
//     box.addEventListener("click", () => {
//         // here img is now visible
//         handleClick(box);
        
//     }, {once: true});
// }); 

let click_map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ship_find_count = 0;
let no_of_click = 0;

// Function to check win or loss condition and handle click map
let res_box = document.querySelector(".result_box");

const checkwin = (click, ship) => {
    if (ship === 5 || click > 7) {
        let res = ship === 5 ? "Win" : "Loss";
        click_map = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        if(res==="Win"){
            res_box.innerHTML = `<p>Congratulations! You Won</p>`;
        }
        else{
            res_box.innerHTML = `<p>You Loss</p>`;
        }
        // Disable further clicks on all boxes
        all_small_box.forEach(box => {
            box.removeEventListener("click", handleClick);
        });
    }
};

// Function to handle click event
const handleClick = (event) => {
    const box = event.target;

    // Toggle classes for visibility
    Array.from(box.children).forEach(child => {
        child.classList.remove("img_cls");
        child.classList.add("img_prp");
    });

    // Update click map and counters
    if (click_map[box.value] !== 1) {
        click_map[box.value] = 1;
        ++no_of_click;
        if (selectedElements.includes(box.value)) {
            ++ship_find_count;
        }
    }

    // Check win or loss condition
    checkwin(no_of_click, ship_find_count);
};

// Add click event listeners to each box
all_small_box.forEach(box => {
    box.addEventListener("click", handleClick, { once: true });
});


document.querySelector(".btn_r").addEventListener("click", ()=>{
    location.reload();
});