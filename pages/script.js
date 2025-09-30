const questionGroups = [
    {
        title: "Steganography",
        questions: [
            { id: 31, title: "Focus", question: "Find the Flag", answer: "b11548cc5ed7905e2f1de337a42888ba2daaea449c555b8f2c4edbc53a9099ff", description: "Think Peter Think​‌​​‌‌‌​​‌​​​‌​‌​‌​‌​‌​​​‌​‌​​‌‌​‌​​​‌​‌​‌​​​​‌‌​‌‌‌‌​‌‌​​‌‌​​​​​‌‌​‌‌​‌​‌‌​‌‌‌​​​‌‌​​​‌​‌​‌‌‌‌‌​‌​​‌‌​‌​‌‌​​​​‌​‌‌​‌‌‌​​‌‌‌‌‌​‌‍ (https://stegzero.com/)"},
            { id: 32, title: "Data of the Data", question: "Find the Flag", answer: "c95f79f492636bd75f18644ca2cb53c9ecd5950ba0f7ad941e2c329cf9be102e", description: "", image: "Photos/MchelBureau_min.jpg" ,linktext: "Download the Image" ,link:'Photos/MchelBureau_min.jpg' },
            { id: 33, title: "Titanic", question: "Find the Flag", answer: "152116bfabcaf86f916c6708277609bcb4376b36cb1b925c80f5d28c1ca361a3", description: "Least Significant bit", image: "Photos/Titanic.png"  ,linktext: "Download the Image" ,link:'Photos/Titanic.png' },
            { id: 34, title: "Winou Jaw", question: "Find the Flag", answer: "b89045ca25c0addf1669f61a09ac562d0774ab81da32c7b0eef0aa6e6e81f64d", description: "Search Through the Planes of colors", image: "Photos/7affeli.png"  ,linktext: "Download the Image" ,link:'Photos/7affeli.png' },
            { id: 35, title: "Besbess", question: "Find the Flag", answer: "cfe264952ace6753c8101284f8612101228a9e8c1abb54142b62b6f7c45f0d03", description: "No Password Required", image: "Photos/besbessteg.jpg" ,linktext: "Download the Image" ,link:'Photos/besbessteg.jpg' },
            { id: 36, title: "PolyGlot", question: "Challenge Not Availble", answer: "c95f79f492636bd75f18644ca2cb53c9ecd5950ba0f7ad941e2c329cf9be102e", description: "In Prgress", image: "Photos/s.jpg" ,linktext: "Download the File" ,link:'Photos/s.jpg' },
        ],
    },
    {
        title: "Forensics",
        questions: [
            { id: 3, title: "Web Inspection", question: "Find the Flag", answer: "773cdab325932559739e4f8bd485deaf5e478194bfcc8aac2cc0cb44ecc3bf12", description: "Have you ever tried F12 or Inspecting a Page?" },
            { id: 4, title: "Nkot", question: "Guidesh Za3ma?", answer: "a176eeb31e601c3877c87c2843a2f584968975269e369d5c86788b4c2f92d2a2", description: "Flag : 'result in number'" ,linktext: "Download the Audio" ,link:'files/morse.wav' },
        ],
    },
    {
        title: "Cryptography",
        questions: [
            {id:20, title: "Secret Ingredient", question:"What is the secret for the smell?", answer:"9206fe5a9ce6c64f04a6a55777db32e745db7c690986cc52e0f5e47feb5b0a85",description:"Rypqkjqwu yi dej q cuqb, rkj q secckdqb uludj—q whyc wqjxuhydw sudjuhut qhekdt q ixqhut, fkdwudj rhejx. Jxu bygkyt yjiubv yi cqtu vhec hejjud veet ishqfi tybkjut yd mqjuh.Jxu uludj'i tuvydydw vuqjkhu yi yji eluhfemuhydw, vyixo icubb, mxysx secui vhec q iydwbu auo ydwhutyudj: wqhdyj. Kdbyau ejxuh luhiyedi, xuhu wqhdyj yi q fqiju ev vuhcudjut esjefki, qdt q icqbb qcekdj yi ijyhhut ydje jxu fej. Yji fejudj, rhydo uiiudsu ydijqdjbo tecydqjui jxu qyh, cqhaydw jxu jhku ijqhj ev jxu rypqkjqwu."
            },
            {id:21, title: "Singing", question:"What's the first name of the singer?", answer:"f69be6015b419c5fe8de1f64c9a1f952624e5b68316797f9b6f22b133bd3844e", linktext: "Download the Text" ,link:'files/ghne.txt'
            },
            { id: 22, title: "Layn l5asara", question: "Decrypt this RSA Cipher", answer: "ec236d5876b5dd4a1e19ce5a57dcb0789d4c3b0dda46cef726875f920b20903b", description: "Why is everyone so obsessed with multiplying two primes for RSA. Why not just use one?" , linktext: "Download the Text" ,link:'files/Rsa_One_Prime.txt'},
            { id: 23, title: "Lazreg", question: "What is the book name?", answer: "ab906be12ca6d9f28ad5687f2b0ab8bc5e4535060485ee9c6eec3580777424ee",linktext: "Download the Text" ,link:'files/Viginere.txt'},
            { id: 24, title: "Vroom Vroom", question: "Find the original from the hash", answer: "a6e892240e2300cac96dfbfe36c0f07aa414a5f9fc40bea215e50f9d625a675d", description: "You will have to find the hash first (hint: the word is 5 character long (alphanumeric and lowercase))" },
            { id: 25, title: "Murica", question: "Who are we talking about", answer: "153b20bbbd687216aa6ee4adf712c31934dbee030705f0b58905102b0430b9d2", description: "The answer format is 'firstname_middlename_lastname'" , linktext: "Download the Audio" ,link:'files/In_the_neck.wav'},
        ],
    },
    {
        title: "OSINT",
        questions: [
            { id: 40, title: "Archive", question: "Find the flag", answer: "3d5bd53ec783519dc9188b5acdae7780226e8147cae687d80a367a8e37142bc3", description: "The page above has the flag",linktext: "Link to page" ,link:'archive.html'},
            { id: 41, title: "Ba77ar", question: "Find the boat", answer: "849abd5fdb2c5185742e0dc4c91346c561237d605d82da34a4e1901ba19fd983", description: "There is a boat expected to arrive to TNTUN the 06.10 (NETSEC{MMSI_FULL_NAME})"},
            { id: 42, title: "51 State", question: "Name the building", answer: "a8b8ac266c64334630d94bf9a6ab8f7856b0ff4f89552ea0453ed81a4350d855", description: "Name the building from which this photo was taken (NETSEC{Building_Number_Street_Name})", image: "Photos/SkyScrapper.jpeg" },
            { id: 43, title: "Lamet La7beb", question: "Who's the guy in the middle", answer: "c14ac7cb7813f0bbee33f5941ccdb66b7bd5ea1082c4efe904612d60a62aac28", description: "Name the guy typing on the computer (NETSEC{Firstname_Middlename_Lastname})", image: "Photos/BIn_Laden.jpg" },
            { id: 44, title: "Dork", question: "Expose the weakeness of rnu.tn", answer: "deabf3204936f39cfd75ea6a3ff35c4b2ec256250ee90b311d09d68a5c186667", description: "Find the cin of the first person on the list of 'etudiant de mastere de recherche iot et tratement de donnees' of EPT 21-22 (NETSEC{cin})"},
        ],
    },
    {
        title: "Reverse Engineering",
        questions: [
            { id: 12, title: "Overflow", question: "Run the file and crack the code", answer: "bbbb396f4aa15d52e7d5206b5b11f1b0570758b638b7cd3558c7b8c49f3429b0",    links: [
                { url: "files/overflow", text: "For Linux users" },
                { url: "files/overflow.exe", text: "For Windows users" }
            ],}
        ],
    },
];

// Initialize localStorage for correct answers if not already set
if (!localStorage.getItem("correctAnswers")) {
    localStorage.setItem("correctAnswers", JSON.stringify({}));
}

// Get the correct answers from localStorage
let correctAnswers = JSON.parse(localStorage.getItem("correctAnswers"));

// Generate the grid of buttons with group titles and button lists
const gridContainer = document.getElementById("grid-container");
questionGroups.forEach((group) => {
    // Create a container for the group
    const groupContainer = document.createElement("div");
    groupContainer.className = "group-container";

    // Add a title for the group
    const title = document.createElement("h3");
    title.className = "group-title";
    title.textContent = group.title;
    groupContainer.appendChild(title);

    // Create a container for the buttons
    const buttonList = document.createElement("div");
    buttonList.className = "button-list";

    // Add buttons for each question in the group
    group.questions.forEach((q) => {
        const button = document.createElement("button");
        button.textContent = q.title; // Display the question title on the button
        button.setAttribute("data-id", q.id); // Add a data-id attribute to identify the button
        button.addEventListener("click", () => openOverlay(q));
        buttonList.appendChild(button);
    });

    // Add the button list to the group container
    groupContainer.appendChild(buttonList);

    // Add the group container to the grid container
    gridContainer.appendChild(groupContainer);
});

// Overlay elements
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");
const questionText = document.getElementById("question");
const overlayImage = document.getElementById("overlay-image");
const answerInput = document.getElementById("answer-input");
const checkAnswerBtn = document.getElementById("check-answer-btn");
const resultMessage = document.getElementById("result-message");
const descriptionElement = document.getElementById("description");
const linkelement = document.getElementById("hyperlink");
const loader = document.getElementById("loader");
let currentQuestion = null;

// Function to open the overlay

function openOverlay(question) {
    currentQuestion = question;
    questionText.textContent = question.question;
    
    // Handle multiple links
    const linksContainer = document.getElementById('links-container');
    linksContainer.innerHTML = '';
    
    if (question.links && question.links.length > 0) {
        question.links.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.text || 'Download';
            linkElement.target = '_blank';
            linkElement.classList.add('download-link');
            linksContainer.appendChild(linkElement);
            
            if (index < question.links.length - 1) {
                linksContainer.appendChild(document.createElement('br'));
            }
        });
        linksContainer.classList.remove("hidden");
    } else if (question.link) {
        const linkElement = document.createElement('a');
        linkElement.href = question.link;
        linkElement.textContent = question.linktext || 'Download';
        linkElement.target = '_blank';
        linkElement.classList.add('download-link');
        linksContainer.appendChild(linkElement);
        linksContainer.classList.remove("hidden");
    } else {
        linksContainer.classList.add("hidden");
    }
    
    // Handle image
    if (question.image) {
        loader.style.display = "flex";
        overlayImage.style.display = "none";
        overlayImage.src = question.image;
        overlayImage.onload = () => {
            loader.style.display = "none";
            overlayImage.style.display = "block";
        };
        overlayImage.onerror = () => {
            loader.style.display = "none";
            overlayImage.style.display = "none";
            console.error("Failed to load image:", question.image);
        };
    } else {
        loader.style.display = "none";
        overlayImage.style.display = "none";
    }
    
    // Handle description
    if (question.description) {
        descriptionElement.textContent = question.description;
        descriptionElement.classList.remove("hidden");
    } else {
        descriptionElement.classList.add("hidden");
    }

    // Reset answer input and result message
    answerInput.value = "";
    resultMessage.textContent = "";
    
    // Show overlay
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scrolling
    
    // Trigger animation
    setTimeout(() => {
        overlay.classList.add("active");
    }, 10);
}

// Fixed closeOverlay function
function closeOverlay() {
    overlay.classList.remove("active");
    
    // Reset the overlay state completely
    setTimeout(() => {
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
        
        // Clear any ongoing image loading
        overlayImage.src = "";
        if (overlayImage.onload) overlayImage.onload = null;
        if (overlayImage.onerror) overlayImage.onerror = null;
        
        // Clear current question reference
        currentQuestion = null;
    }, 300);
}

// Ensure close button works properly
closeBtn.addEventListener("click", closeOverlay);

// Make sure overlay closes when clicking outside content
overlay.addEventListener("click", function(e) {
    if (e.target === overlay) {
        closeOverlay();
    }
});
// Check answer function - THIS IS THE CRUCIAL FIX
checkAnswerBtn.addEventListener("click", () => {
    if (!currentQuestion) {
        console.error("No current question selected");
        return;
    }
    
    const userAnswer = answerInput.value.trim();
    if (!userAnswer) {
        resultMessage.textContent = "Please enter an answer";
        resultMessage.style.color = "#0c0c0c";
        return;
    }

    const hashedUserAnswer = hashAnswer(userAnswer);
    const hashedCorrectAnswer = currentQuestion.answer;

    if (hashedUserAnswer === hashedCorrectAnswer) {
        resultMessage.textContent = "Correct!";
        resultMessage.style.color = "green";
        correctAnswers[currentQuestion.id] = true;
        localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
        updateButtonColor(currentQuestion.id);
    } else {
        resultMessage.textContent = "Incorrect!";
        resultMessage.style.color = "#0c0c0c";
    }
});

// Hash function remains the same
function hashAnswer(answer) {
    return CryptoJS.SHA256(answer).toString(CryptoJS.enc.Hex);
}

// Button color update functions remain the same
function updateButtonColor(questionId) {
    const buttons = document.querySelectorAll(".button-list button");
    buttons.forEach((button) => {
        if (button.getAttribute("data-id") === questionId.toString()) {
            button.style.backgroundColor = correctAnswers[questionId] ? "lightgreen" : "";
        }
    });
}

function updateAllButtonColors() {
    questionGroups.forEach((group) => {
        group.questions.forEach((q) => {
            updateButtonColor(q.id);
        });
    });
}
// Call this function to update button colors when the page loads
updateAllButtonColors();