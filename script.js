const fileInput = document.querySelector("#file_input");
const fileBtn = document.querySelector("#file_btn");
const droppableArea = document.querySelector(".droppable-area");
const fileName = document.querySelector("#file_name");
const previewArea = document.querySelector(".preview-area");

fileInput.addEventListener("change", (e) => {
  const [file] = fileInput.files;

  if (file) {
    console.log(file.name);
    fileName.innerText = file.name;
    previewArea.innerHTML = `<img height="280px"  src="${URL.createObjectURL(
      file,
    )}" alt="img" />`;
  }
});

fileBtn.onclick = function () {
  fileInput.click();
};
