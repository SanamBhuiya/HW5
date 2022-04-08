function random_shuffle(arr){
    let curr = 0;
    let cardreveal;
    while(curr < arr.length){
        randomIndex =Math.floor(Math.random()*curr);
        [arr[cardreveal], arr[curr]] = [arr[curr], arr[cardreveal]];
        curr +=1
    }
    return arr;
}
function fill_grid_bgrd(arr){
    for (let x = 1; x<=arr.length; x++){
        document.getElementById(`${x}`).style.background = `url(${arr[x-1]})`;
    }
}
window.onload = ()=>{
fill_grid_bgrd(numbers);
}
let pics = [];
function play(){
    pics=[];
    for(let x = 0; x<2; x++){
        pictures = random_shuffle(pictures);
        for (let item of pictures){
            pics.push(item);
        }
    }
    fill_grid_bgrd(pics);
    setTimeout(function(){fill_grid_bgrd(numbers)}, 5000);
}
function reveal(arg){
    const index = Number(arg)
    console.log(index)
    document.getElementById(arg).style.background = `url(${pics[index-1]})`;
}
function show(arg, ind){
    arg.style.background =`url${pics[ind]}`
}
function test(){
    console.log("it worked!")
}