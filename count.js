let count = 0;
const countText = document.getElementById("count-text");
const saveText = document.getElementById("save-text");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");

incrementBtn.addEventListener("click", function(){
    count++;
    countText.textContent = count;
});

saveBtn.addEventListener("click", function(){
    saveText.textContent += count + " " + "-" + " ";
    count = 0;
    countText.textContent = count;
});