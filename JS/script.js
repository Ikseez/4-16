var bDayStr= `
${myBday.toLocaleString('en-us', {month: '2-digit'})}/
${myBday.toLocaleString('en-us',{day: '2-digit'})}/
${myBday.toLocaleString('en-us', {year: '2-digit'})}`
;

var theTime = new Date();

var timeStr=`
${theTime.toLocaleString('en-us', {month: '2-digit'})}/
${theTime.toLocaleString('en-us',{day: '2-digit'})}/
${theTime.toLocaleString('en-us', {year: '2-digit'})}`
;

document.body.textContent = timrStr;
var stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', function(){
    clearInterval{myTimer};
})
var myTimer = setInterval();

function updateTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute:
    '2-digit', second: '2-digit'})}`
}
   
// }
// var items= document.querySelector('#items');
// var photos = document.querySelectorAll('li');

// var selectedArray =[];

// var itemArray = [
//     {
//         img: "http://unsplash.it/150/150",
//         alt: "Beautiful Print",
//         title: "Your Photo",
//         cost: "$100",
//         desc: "lorem ipsum",
//     },
//     {
//         img: "http://unsplash.it/250/250",
//         alt: "Beautiful Print",
//         title: "Your Photo",
//         cost: "$100",
//         desc: "lorem ipsum",
//     },
//     {
//         img: "http://unsplash.it/300/300",
//         alt: "Beautiful Print",
//         title: "Your Photo",
//         cost: "$100",
//         desc: "lorem ipsum",
//     },
//     {
//         img: "http://unsplash.it/75/75",
//         alt: "Beautiful Print",
//         title: "Your Photo",
//         cost: "$100",
//         desc: "lorem ipsum",
//     }
// ];

// function displayItems (arr){
//     for(var i =0; i < arr.length; i++){
//        var item = `
//         <li data-sku="001">
//             <input type="checkbox">
//             <img src="${arr[i].img}" alt="${arr[i].alt}">
//             <h3>${arr[i].title}</h3>
//             <p>${arr[i].cost}</p>
//             <p>${arr[i].desc}</p>
//             </li>`;
//             items.innerHTML += item;
//     }console.log(items);
// };

// displayItems(itemArray);

// function addListener(arr, objecyArr){
//    for(var i = 0; i < arr.length; i++){
//        arr[i].addEventListener('click', function(evt){
//            console.log(this.firstElementChild);
//            this.classList.toggle('selected');
//            // Ternary Operator // aka super awesome if statement
//            (this.firstElementChild.checked == true) ?
//            this.firstElementChild.checked = false :
//            this.firstElementChild.checked = true;

//            selectedArray.push(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku)+1)[0]);
           
//            console.log(this.dataset.sku);
//        });
//    }
//    console.log(this.dataset.sku);
//    selectedArray.push(arr[this.dataset.sku]);

//    console.log(arr.slice(this.dataset.sku));

//    console.log(selectedArray);
// }

// addListener(items.children, itemArray);