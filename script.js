document.getElementById("submitbtn").addEventListener('click',async function(event) {
    const year=document.getElementById("year").value;
    const dept=document.getElementById("dept").value;
    const section=document.getElementById("section").value;
    if(year=="" || dept=="" || section=="") {
        console.log("data not entered");
    }
    else {
        removesub();
        const response= await fetch('/quiz/getsub',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({year,dept,section})
        });
        const result= await response.json();
        console.log(result);
        getsubject(result);
    }
});

function removesub(){
    const  subject=document.getElementById('subject');
    while(subject.hasChildNodes()){
        subject.removeChild(subject.firstChild);
    }
}

function getsubject(result){
    if(result.subject_name!=''){
        result.forEach(sub => {
            let  subject=document.getElementById('subject');
            let option=document.createElement("option");
            option.value=sub.subject_name;
            option.text=sub.subject_name;
            option.disabled=false;
            subject.add(option);
        })
    }
}

document.getElementById("scorebtn").addEventListener('click',async function(event){
    event.preventDefault();
    const response= await fetch('/score.html',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    window.location.href="/score.html";
});

document.getElementById("generatebtn").addEventListener('click',async function(event){
    const year=document.getElementById("year").value;
    const dept=document.getElementById("dept").value;
    const section=document.getElementById("section").value;
    const subject=document.getElementById("subject").value;
    const no_of_qn=document.getElementById("questionCount").value;
    const unit=document.getElementById("unit").value;
    if(year=="" || dept=="" || section=="" || subject=="" || no_of_qn=="" || unit==""){
        console.log("data not entered");
    }
    else{
        const response= await fetch('/quiz/addquiz',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({year,dept,section})
        });
        const result= await response.json();
        console.log(result);
    }
});





























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
    const imgElement = document.querySelector(selector);
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
    
    
    wrapper.innerHTML = "";
    
    if (count >= 3 && count <= 10) {
        const gen = document.querySelector('.generate-btn');
        gen.style.display='block';
        const qnDiv = document.querySelector('.admin-page-2');
        qnDiv.style.display='block';
        for (let i = 1; i <= count; i++) {
            let newQuestion = document.createElement("div");
            newQuestion.classList.add("question-container");
            newQuestion.innerHTML = `
                <style>
                    .question-image-hide-${i} {
                        display: none;
                    }
                    .option-image-hide-${i}1 {
                        display: none;
                    }
                    .option-image-hide-${i}2 {
                        display: none;
                    }
                    .option-image-hide-${i}3 {
                        display: none;
                    }
                    .option-image-hide-${i}4 {
                        display: none;
                    }
                </style>
                
                <div class="question-section row">
                    <div class="col-12">
                        <h1 class="head-question">Question ${i}:</h1>
                    </div>
                    <div class="formula-add-image-container col-12 d-flex flex-row justify-content-end">
                        <hr />
                        <div class="icons-container-margin">
                            <img class="formula-btn" src="asserts/formula.png" data-target="${'qnn'+i}"/>
                            <img id="addImageBtn" class="add-image-btn" onclick="showQnImage('.question-image-hide-${i}')" src="asserts/add-image.png"/>
                        </div>
                    </div>

                    <div class="question-enter-field col-12">
                        <!--
                        <input id="${'qnn'+i} ${'qn'+i}" class="input-question math-enabled" type="text" placeholder="Type Question ${i} here." />
                        -->

                        <math-field id="qnn${i} ${'qn'+i}" class="input-question math-enabled" placeholder="Type\\ Question\\ ${i}\\ here." virtual-keyboard-mode="manual" mode="text-math"></math-field>
                        
                    </div>
                    <div class="image-enter-field question-image-hide-${i} col-12">
                        <div class="input-question-image">
                            <form class="text-center">
                                <div class="image-container">
                                    <label for="imageUpload${i}">Choose Image for question:</label>
                                    <input type="file" id="imageUpload${i}" name="imageUpload${i}" accept="image/*" onchange="previewImage(event, 'imagePreview${i}')">
                                    <br><br>
                                    <img id="imagePreview${i}" src="" alt="Image Preview ${i}" style="display:none; width:60%; height: 35rem; margin-left: 20%;"/> 
                                    <input class="upload-image-qn-btn" type="submit" value="Upload Image ${i}">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="row options-container">
                    <div class="col-12 col-md-6 col-lg-3 options-field">
                        <div class="d-flex flex-row justify-content-between">
                            <div class="icons-container-margin">
                                <label class="options-container-${i}">
                                    <input type="radio" name="option-group-${i}" value="option${i}1">
                                </label>
                            </div>
                            <div class="icons-container-margin">
                                <img class="formula-btn" src="asserts/formula.png"/>
                                <img class="add-image-btn" onclick="showOptImage('.option-image-hide-${i}1')" src="asserts/add-image.png"/>
                            </div>
                        </div>
                        <div class="option-enter-field">
                            <!--
                            <input class="input-option-1" id="op_1_${i}" type="text" placeholder="Type Option 1 here." />
                            -->

                            <math-field class="input-option-1 math-enabled" id="op_1_${i}" placeholder="Type\\ Option\\ 1\\ here." virtual-keyboard-mode="manual" mode="text-math"></math-field>
                        </div>
                        <div class="image-enter-field option-image-hide-${i}1">
                            <div class="input-option-image-1">
                                <form class="text-center"> 
                                    <div class="image-container">
                                        <label for="imageUpload${i}2">Choose Option Image 1:</label>
                                        <input type="file" id="imageUpload${i}2" name="imageUpload${i}2" accept="image/*" onchange="previewImage(event, 'imagePreview${i}2')">
                                        <br><br>
                                        <img id="imagePreview${i}2" src="" alt="Image Preview ${i}2" style="display:none; width:90%; margin-left: 5%;"/> 
                                        <input class="upload-image-op-btn" type="submit" value="Upload Image ${i}1">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 options-field">
                        <div class="d-flex flex-row justify-content-between">
                            <div class="icons-container-margin">
                                <label class="options-container-${i}">
                                    <input type="radio" name="option-group-${i}" value="option${i}2">
                                </label>
                            </div>
                            <div class="icons-container-margin">
                                <img class="formula-btn" src="asserts/formula.png"/>
                                <img class="add-image-btn" onclick="showOptImage('.option-image-hide-${i}2')" src="asserts/add-image.png"/>
                            </div>
                        </div>
                        <div class="option-enter-field">
                            <!--
                            <input class="input-option-2" id="op_2_${i}" type="text" placeholder="Type Option 2 here." />
                            -->

                            <math-field class="input-option-2 math-enabled" id="op_2_${i}" placeholder="Type\\ Option\\ 2\\ here." virtual-keyboard-mode="manual" mode="text-math"></math-field>
                        </div>
                        <div class="image-enter-field option-image-hide-${i}2">
                            <div class="input-option-image-2">
                                <form class="text-center"> 
                                    <div class="image-container">
                                        <label for="imageUpload${i}3">Choose Option Image 2:</label>
                                        <input type="file" id="imageUpload${i}3" name="imageUpload${i}3" accept="image/*" onchange="previewImage(event, 'imagePreview${i}3')">
                                        <br><br>
                                        <img id="imagePreview${i}3" src="" alt="Image Preview ${i}3" style="display:none; width:90%; margin-left: 5%;"/>
                                        <input class="upload-image-op-btn" type="submit" value="Upload Image ${i}2">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 options-field">
                        <div class="d-flex flex-row justify-content-between">
                            <div class="icons-container-margin">
                                <label class="options-container-${i}">
                                    <input type="radio" name="option-group-${i}" value="option${i}3">
                                </label>
                            </div>
                            <div class="icons-container-margin">
                                <img class="formula-btn" src="asserts/formula.png"/>
                                <img class="add-image-btn" onclick="showOptImage('.option-image-hide-${i}3')" src="asserts/add-image.png"/>
                            </div>
                        </div>
                        <div class="option-enter-field">
                            <!--
                            <input class="input-option-3" id="op_3_${i}" type="text" placeholder="Type Option 3 here." />
                            -->

                            <math-field class="input-option-3 math-enabled" id="op_3_${i}" placeholder="Type\\ Option\\ 3\\ here." virtual-keyboard-mode="manual" mode="text-math"></math-field>
                        </div>
                        <div class="image-enter-field option-image-hide-${i}3">
                            <div class="input-option-image-3">
                                <form class="text-center"> 
                                    <div class="image-container">
                                        <label for="imageUpload${i}3">Choose Option Image 3:</label>
                                        <input type="file" id="imageUpload${i}4" name="imageUpload${i}4" accept="image/*" onchange="previewImage(event, 'imagePreview${i}4')">
                                        <br><br>
                                        <img id="imagePreview${i}4" src="" alt="Image Preview ${i}4" style="display:none; width:90%; margin-left: 5%;"/>
                                        <input class="upload-image-op-btn" type="submit" value="Upload Image ${i}3">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 options-field">
                        <div class="d-flex flex-row justify-content-between">
                            <div class="icons-container-margin">
                                <label class="options-container-${i}">
                                    <input type="radio" name="option-group-${i}" value="option${i}1">
                                </label>
                            </div>
                            <div class="icons-container-margin">
                                <img class="formula-btn" src="asserts/formula.png"/>
                                <img class="add-image-btn" onclick="showOptImage('.option-image-hide-${i}4')" src="asserts/add-image.png"/>
                            </div>
                        </div>
                        <div class="option-enter-field">
                            <!--
                            <input class="input-option-4" id="op_4_${i}" type="text" placeholder="Type Option 4 here." />
                            -->

                            <math-field class="input-option-4 math-enabled" id="op_4_${i}" placeholder="Type\\ Option\\ 4\\ here." virtual-keyboard-mode="manual" mode="text-math"></math-field>
                        </div>
                        <div class="image-enter-field option-image-hide-${i}4">
                            <div class="input-option-image-4">
                                <form class="text-center"> 
                                    <div class="image-container">
                                        <label for="imageUpload${i}5">Choose Option Image 4:</label>
                                        <input type="file" id="imageUpload${i}5" name="imageUpload${i}5" accept="image/*" onchange="previewImage(event, 'imagePreview${i}5')">
                                        <br><br>
                                        <img id="imagePreview${i}5" src="" alt="Image Preview ${i}5" style="display:none; width:90%; margin-left: 5%;"/>
                                        <input class="upload-image-op-btn" type="submit" value="Upload Image ${i}4">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="horizontal-line"/>
            `;
            wrapper.appendChild(newQuestion);
        }
    }
    else {
        const qnDiv = document.querySelector('.admin-page-2');
        qnDiv.style.display='none';
        Swal.fire({
            title: "Dear Faculty!",
            text: "Please check the number of questions.",
            icon: "warning",
            confirmButtonText: "OK",
            background: "#dedede",
            color: "#000000",
            confirmButtonColor: "#fcdf00",
            customClass: {
                confirmButton: 'custom-ok-button'
            }
        });
    }
}

