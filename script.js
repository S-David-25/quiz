function previewImage(event, previewId) {
    const file = event.target.files[0];
    const reader = new FileReader();
    const imagePreview = document.getElementById(previewId);

    reader.onload = function() {
        imagePreview.src = reader.result;
        imagePreview.style.display = 'block';
    }

    if (file) {
        reader.readAsDataURL(file);
    }
    else {
        imagePreview.style.display = 'none';
    }
}

function showQnImage(selector) {
    let addImageBtn = document.querySelector(`.add-image-btn`);
    let cancelBtn = document.querySelector(`.cancel-btn`);
    /*
    if (addImageBtn.style.display === "none") {
        addImageBtn.style.display = "block";
        cancelBtn.style.display = "none";
    }
    else {
        addImageBtn.style.display = "none";
        cancelBtn.style.display = "block";
    }
    */
    let imgElement = document.querySelector(selector);
    if (imgElement) {
        imgElement.style.display = imgElement.style.display === "none" || imgElement.style.display === "" ? "block" : "none";
    }
}

function showOptImage(selector) {
    const optElement = document.querySelector(selector);
    if (optElement) {
        optElement.style.display = optElement.style.display === "none" || optElement.style.display === "" ? "block" : "none";
    }
}

function generateQuestions() {
    let wrapper = document.getElementById("questions-wrapper");
    let count = parseInt(document.getElementById("questionCount").value);
    
    // Clear previous question containers
    wrapper.innerHTML = "";
    
    if (count >= 3 && count <= 10) {
        const gen = document.querySelector('.generate-btn');
        gen.style.display='block';
        for (let i = 0; i < count; i++) {
            let newQuestion = document.createElement("div");
            newQuestion.classList.add("question-container");
            newQuestion.innerHTML = `
            <style>
                .question-image-hide-${i + 1} {
                    display: none;
                }
                .option-image-hide-${i + 1}1 {
                    display: none;
                }
                .option-image-hide-${i + 1}2 {
                    display: none;
                }
                .option-image-hide-${i + 1}3 {
                    display: none;
                }
                .option-image-hide-${i + 1}4 {
                    display: none;
                }
            </style>
            <hr class="horizontal-line"/>
            <div class="question-section row">
                <div class="col-12">
                    <h1 class="head-question">Question ${i + 1}:</h1>
                </div>
                <div class="formula-add-image-container col-12 d-flex flex-row justify-content-end">
                    <hr />
                    <div class="icons-container-margin">
                        <img class="formula-btn" src="asserts/formula.png"/>
                        <img id="addImageBtn" class="add-image-btn" onclick="showQnImage('.question-image-hide-${i + 1}')" src="asserts/add-image.png"/>
                    </div>
                </div>
                <div class="question-enter-field col-12">
                    <input class="input-question" type="text" placeholder="Type your Question here." />
                </div>
                <div class="image-enter-field question-image-hide-${i + 1} col-12">
                    <div class="input-question-image">
                        <form class="text-center">
                            <div class="image-container">
                                <label for="imageUpload${i + 1}">Choose Image for question:</label>
                                <input type="file" id="imageUpload${i + 1}" name="imageUpload${i + 1}" accept="image/*" onchange="previewImage(event, 'imagePreview${i + 1}')">
                                <br><br>
                                <img id="imagePreview${i + 1}" src="" alt="Image Preview ${i + 1}" style="display:none; width:60%; height: 35rem; margin-left: 20%;"/> 
                                <input class="upload-image-qn-btn" type="submit" value="Upload Image ${i + 1}">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="row options-container">
                <div class="col-12 col-md-6 col-lg-3 options-field">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="icons-container-margin">
                            <label class="checkbox-container">
                                <input class="checkbox-btn" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="icons-container-margin">
                            <img class="formula-btn" src="asserts/formula.png"/>
                            <img class="add-image-btn" onclick="showOptImage('.option-image-hide-${i + 1}1')" src="asserts/add-image.png"/>
                        </div>
                    </div>
                    <div class="option-enter-field">
                        <input class="input-option-1" type="text" placeholder="Type Option 1 here." />
                    </div>
                    <div class="image-enter-field option-image-hide-${i + 1}1">
                        <div class="input-option-image-1">
                            <form class="text-center"> 
                                <div class="image-container">
                                    <label for="imageUpload${i + 1}2">Choose Option Image 1:</label>
                                    <input type="file" id="imageUpload${i + 1}2" name="imageUpload${i + 1}2" accept="image/*" onchange="previewImage(event, 'imagePreview${i + 1}2')">
                                    <br><br>
                                    <img id="imagePreview${i + 1}2" src="" alt="Image Preview ${i + 1}2" style="display:none; width:90%; margin-left: 5%;"/> 
                                    <input class="upload-image-op-btn" type="submit" value="Upload Image ${i + 1}1">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 options-field">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="icons-container-margin">
                            <label class="checkbox-container">
                                <input class="checkbox-btn" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="icons-container-margin">
                            <img class="formula-btn" src="asserts/formula.png"/>
                            <img class="add-image-btn" onclick="showOptImage('.option-image-hide-${i + 1}2')" src="asserts/add-image.png"/>
                        </div>
                    </div>
                    <div class="option-enter-field">
                        <input class="input-option-2" type="text" placeholder="Type Option 2 here." />
                    </div>
                    <div class="image-enter-field option-image-hide-${i + 1}2">
                        <div class="input-option-image-2">
                            <form class="text-center"> 
                                <div class="image-container">
                                    <label for="imageUpload${i + 1}3">Choose Option Image 2:</label>
                                    <input type="file" id="imageUpload${i + 1}3" name="imageUpload${i + 1}3" accept="image/*" onchange="previewImage(event, 'imagePreview${i + 1}3')">
                                    <br><br>
                                    <img id="imagePreview${i + 1}3" src="" alt="Image Preview ${i + 1}3" style="display:none; width:90%; margin-left: 5%;"/>
                                    <input class="upload-image-op-btn" type="submit" value="Upload Image ${i + 1}2">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 options-field">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="icons-container-margin">
                            <label class="checkbox-container">
                                <input class="checkbox-btn" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="icons-container-margin">
                            <img class="formula-btn" src="asserts/formula.png"/>
                            <img class="add-image-btn" onclick="showOptImage('.option-image-hide-${i + 1}3')" src="asserts/add-image.png"/>
                        </div>
                    </div>
                    <div class="option-enter-field">
                        <input class="input-option-3" type="text" placeholder="Type Option 3 here." />
                    </div>
                    <div class="image-enter-field option-image-hide-${i + 1}3">
                        <div class="input-option-image-3">
                            <form class="text-center"> 
                                <div class="image-container">
                                    <label for="imageUpload${i + 1}3">Choose Option Image 3:</label>
                                    <input type="file" id="imageUpload${i + 1}4" name="imageUpload${i + 1}4" accept="image/*" onchange="previewImage(event, 'imagePreview${i + 1}4')">
                                    <br><br>
                                    <img id="imagePreview${i + 1}4" src="" alt="Image Preview ${i + 1}4" style="display:none; width:90%; margin-left: 5%;"/>
                                    <input class="upload-image-op-btn" type="submit" value="Upload Image ${i + 1}3">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 options-field">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="icons-container-margin">
                            <label class="checkbox-container">
                                <input class="checkbox-btn" type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="icons-container-margin">
                            <img class="formula-btn" src="asserts/formula.png"/>
                            <img class="add-image-btn" onclick="showOptImage('.option-image-hide-${i + 1}4')" src="asserts/add-image.png"/>
                            <img class="reduce-option-btn" src="asserts/reduce.png"/>
                            <img class="add-new-option-btn" src="asserts/add-new.png"/>
                        </div>
                    </div>
                    <div class="option-enter-field">
                        <input class="input-option-4" type="text" placeholder="Type Option 4 here." />
                    </div>
                    <div class="image-enter-field option-image-hide-${i + 1}4">
                        <div class="input-option-image-4">
                            <form class="text-center"> 
                                <div class="image-container">
                                    <label for="imageUpload${i + 1}5">Choose Option Image 4:</label>
                                    <input type="file" id="imageUpload${i + 1}5" name="imageUpload${i + 1}5" accept="image/*" onchange="previewImage(event, 'imagePreview${i + 1}5')">
                                    <br><br>
                                    <img id="imagePreview${i + 1}5" src="" alt="Image Preview ${i + 1}5" style="display:none; width:90%; margin-left: 5%;"/>
                                    <input class="upload-image-op-btn" type="submit" value="Upload Image ${i + 1}4">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
            wrapper.appendChild(newQuestion);
        }
    }
    else {
        Swal.fire({
            title: "Dear Faculty!",
            text: "Please check the number of questions.",
            icon: "warning",
            confirmButtonText: "OK",
            background: "#ffffff",
            color: "#000000",
            confirmButtonColor: "#fcdf00",
            customClass: {
                confirmButton: 'custom-ok-button'
            }
        });
    }
}
