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
    } else {
        imagePreview.style.display = 'none'; 
    }
} 
function showQnImg1() {
    const imgh1 = document.querySelector('.question-image-hide-1')
    imgh1.style.display='block';
}  
function showQnImg2() {
    const imgh2 = document.querySelector('.question-image-hide-2')
    imgh2.style.display='block';
}  
function showQnImg3() {
    const imgh3 = document.querySelector('.question-image-hide-3')
    imgh3.style.display='block';
}  
function showQnImg4() {
    const imgh4 = document.querySelector('.question-image-hide-4')
    imgh4.style.display='block';
}  
function showQnImg5() {
    const imgh5 = document.querySelector('.question-image-hide-5')
    imgh5.style.display='block';
}  
function showQnImg6() {
    const imgh6 = document.querySelector('.question-image-hide-6')
    imgh6.style.display='block';
}  
function showQnImg7() {
    const imgh7 = document.querySelector('.question-image-hide-7')
    imgh7.style.display='block';
}  
function showQnImg8() {
    const imgh8 = document.querySelector('.question-image-hide-8')
    imgh8.style.display='block';
}   
function showQnImg9() {
    const imgh9 = document.querySelector('.question-image-hide-9')
    imgh9.style.display='block';
}  
function showQnImg10() {
    const imgh10 = document.querySelector('.question-image-hide-10')
    imgh10.style.display='block';
} 
function showOpt11() {
    const op11 = document.querySelector('.option-image-hide-11')
    op11.style.display='block';
} 
function showOpt12() {
    const op12 = document.querySelector('.option-image-hide-12')
    op12.style.display='block';
} 
function showOpt13() {
    const op13 = document.querySelector('.option-image-hide-13')
    op13.style.display='block';
} 
function showOpt14() {
    const op14 = document.querySelector('.option-image-hide-14')
    op14.style.display='block';
} 
function showOpt21() {
    const op21 = document.querySelector('.option-image-hide-21')
    op21.style.display='block';
} 
function showOpt22() {
    const op22 = document.querySelector('.option-image-hide-22')
    op22.style.display='block';
} 
function showOpt23() {
    const op23 = document.querySelector('.option-image-hide-23')
    op23.style.display='block';
} 
function showOpt24() {
    const op24 = document.querySelector('.option-image-hide-24')
    op24.style.display='block';
} 
function showOpt31() {
    const op31 = document.querySelector('.option-image-hide-31')
    op31.style.display='block';
} 
function showOpt32() {
    const op32 = document.querySelector('.option-image-hide-32')
    op32.style.display='block';
} 
function showOpt33() {
    const op33 = document.querySelector('.option-image-hide-33')
    op33.style.display='block';
} 
function showOpt34() {
    const op34 = document.querySelector('.option-image-hide-34')
    op34.style.display='block';
} 
function showOpt41() {
    const op41 = document.querySelector('.option-image-hide-41')
    op41.style.display='block';
} 
function showOpt42() {
    const op42 = document.querySelector('.option-image-hide-42')
    op42.style.display='block';
} 
function showOpt43() {
    const op43 = document.querySelector('.option-image-hide-43')
    op43.style.display='block';
} 
function showOpt44() {
    const op44 = document.querySelector('.option-image-hide-44')
    op44.style.display='block';
} 
function showOpt51() {
    const op51 = document.querySelector('.option-image-hide-51')
    op51.style.display='block';
} 
function showOpt52() {
    const op52 = document.querySelector('.option-image-hide-52')
    op52.style.display='block';
} 
function showOpt53() {
    const op53 = document.querySelector('.option-image-hide-53')
    op53.style.display='block';
} 
function showOpt54() {
    const op54 = document.querySelector('.option-image-hide-54')
    op54.style.display='block';
} 
function showOpt61() {
    const op61 = document.querySelector('.option-image-hide-61')
    op61.style.display='block';
} 
function showOpt62() {
    const op62 = document.querySelector('.option-image-hide-62')
    op62.style.display='block';
} 
function showOpt63() {
    const op63 = document.querySelector('.option-image-hide-63')
    op63.style.display='block';
} 
function showOpt64() {
    const op64 = document.querySelector('.option-image-hide-64')
    op64.style.display='block';
} 
function showOpt71() {
    const op71 = document.querySelector('.option-image-hide-71')
    op71.style.display='block';
} 
function showOpt72() {
    const op72 = document.querySelector('.option-image-hide-72')
    op72.style.display='block';
} 
function showOpt73() {
    const op73 = document.querySelector('.option-image-hide-73')
    op73.style.display='block';
} 
function showOpt74() {
    const op74 = document.querySelector('.option-image-hide-74')
    op74.style.display='block';
} 
function showOpt81() {
    const op81 = document.querySelector('.option-image-hide-81')
    op81.style.display='block';
} 
function showOpt82() {
    const op82 = document.querySelector('.option-image-hide-82')
    op82.style.display='block';
} 
function showOpt83() {
    const op83 = document.querySelector('.option-image-hide-83')
    op83.style.display='block';
} 
function showOpt84() {
    const op84 = document.querySelector('.option-image-hide-84')
    op84.style.display='block';
}
function showOpt91() {
    const op91 = document.querySelector('.option-image-hide-91')
    op91.style.display='block';
} 
function showOpt92() {
    const op92 = document.querySelector('.option-image-hide-92')
    op92.style.display='block';
} 
function showOpt93() {
    const op93 = document.querySelector('.option-image-hide-93')
    op93.style.display='block';
} 
function showOpt94() {
    const op94 = document.querySelector('.option-image-hide-94')
    op94.style.display='block';
} 
function showOpt101() {
    const op101 = document.querySelector('.option-image-hide-101')
    op101.style.display='block';
} 
function showOpt102() {
    const op102 = document.querySelector('.option-image-hide-102')
    op102.style.display='block';
} 
function showOpt103() {
    const op103 = document.querySelector('.option-image-hide-103')
    op103.style.display='block';
} 
function showOpt104() {
    const op104 = document.querySelector('.option-image-hide-104')
    op104.style.display='block';
}

function generateQuestions() {
    const gen = document.querySelector('.generate-btn')
    gen.style.display='block';
    let wrapper = document.getElementById("questions-wrapper");
    let count = parseInt(document.getElementById("questionCount").value);

    // Clear previous question containers
    wrapper.innerHTML = "";

    if (count >= 3 && count <= 10) {
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
                        <img class="add-image-btn" onclick=showQnImg${i + 1}() src="asserts/add-image.png"/>
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
                            <img class="add-image-btn" onclick=showOpt${i + 1}1() src="asserts/add-image.png"/>
                        </div>
                    </div>
                    <div class="option-enter-field">
                        <input class="input-option" type="text" placeholder="Type Option 1 here." />
                    </div>
                    <div class="image-enter-field option-image-hide-${i + 1}1">
                        <div class="input-option-image">
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
                            <img class="add-image-btn" onclick=showOpt${i + 1}2() src="asserts/add-image.png"/>
                        </div>
                    </div>
                    <div class="option-enter-field">
                        <input class="input-option" type="text" placeholder="Type Option 2 here." />
                    </div>
                    <div class="image-enter-field option-image-hide-${i + 1}2">
                        <div class="input-option-image">
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
                            <img class="add-image-btn" onclick=showOpt${i + 1}3() src="asserts/add-image.png"/>
                        </div>
                    </div>
                    <div class="option-enter-field">
                        <input class="input-option" type="text" placeholder="Type Option 3 here." />
                    </div>
                    <div class="image-enter-field option-image-hide-${i + 1}3">
                        <div class="input-option-image">
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
                            <img class="add-image-btn" onclick=showOpt${i + 1}4() src="asserts/add-image.png"/>
                            <img class="reduce-option-btn" src="asserts/reduce.png"/>
                            <img class="add-new-option-btn" src="asserts/add-new.png"/>
                        </div>
                    </div>
                    <div class="option-enter-field">
                        <input class="input-option" type="text" placeholder="Type Option 4 here." />
                    </div>
                    <div class="image-enter-field option-image-hide-${i + 1}4">
                        <div class="input-option-image">
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
            background: "#052E36",
            color: "#F8BB86",
            confirmButtonColor: "#0A5F6D"
        });
    }
}
