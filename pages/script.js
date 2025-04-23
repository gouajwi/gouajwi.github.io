const questionGroups = [
    {
        title: "Steganography",
        questions: [
            { id: 1, title: "Hidden In PlainSight", question: "Hidden In PlainSight", answer: "8915806ec7874437badd97696141cc7aeb5c6192fb809cbfa9403e92f407d332", description: "Plainsight‌‌‌‌‍‌﻿‌‌‌‌‌‍‬‍﻿‌‌‌‌‍‬‬‍‌‌‌‌‍﻿‍‌‌‌‌‌‍‬‬‌‌‌‌‌‍‬‌‍"},
            { id: 2, title: "Taswira", question: "Find the Key", answer: "e2f28132513fef604f19eb7c8caaa3c134b8543a130facf6064b98e05be9f081", description: "Who is the artist behind this image?", image: "Photos/Taswira.jpg" },
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
            { id: 5, title: "Weld Rouma", question: "What is he saying?", answer: "ed4b4654c17fbedbedca2258a0efcc62811e63dd16a696e0db181c5aa066964d", description: "'atlaneajya eo pda pawydan kb whh pdejco.'" },
            { id: 6, title: "Jwebeti", question: "Can you figure out what's for dinner?", answer: "afedad05a0da7b1f0705c47f2929320203bf91d7607d12e65130ee8c8a217e8e", linktext: "Download the Text" ,link:'files/Jwebi.txt'},
            { id: 7, title: "RSA", question: "RSA", answer: "c3ea99f86b2f8a74ef4145bb245155ff5f91cd856f287523481c15a1959d5fd1", description: "Encrypt the number 12 using the exponent e=65537 and the primes p=17 and q=23. What number do you get as the ciphertext?" },
        ],
    },
    {
        title: "OSINT",
        questions: [
            { id: 8, title: "9ahwa", question: "Find the Closest coffee shop", answer: "0f8ef3377b30fc47f96b48247f463a726a802f62f3faa03d56403751d2f66c67", description: "What's the price of their LVC tamper", image: "Photos/Coffee Shop.png" },
            { id: 9, title: "Chkoun l banay", question: "Chkoun l banay", answer: "eb5af8ab99b55cda453f70e6a92c7b327bd8f76f49ff6a81c18ade4c26690057", description: "What year was the architect of this space born in ?", image: "Photos/Space.png" },
            { id: 10, title: "Aliens?", question: "Guess the country", answer: "6f189bf077b6247d094153352f5ae79f011fb02ab137e7f4ec72db6f8db163f6", description: "", image: "Photos/Aliens.png" },
            { id: 11, title: "Taga3 w raga3", question: "Where is he coming from?", answer: "dd76f2ca984500e7fe09a7dd5eae4c64b0e089138831dd417ed4c0baaeffbb5e", description: "My friend sent me this RMT/NTAM and told me that he is landing there"}
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