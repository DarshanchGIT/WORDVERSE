const mainBox = document.createElement("div"),
    chatBoxTextdiv = document.createElement("div"),
    chatBoxTextContent = document.createElement("p"),
    chatBox = document.createElement("div"),
    chatBoxImage = document.createElement("img"),
    chatBoxCloseIcon = document.createElement("div"),
    chatBoxTextClose = document.createElement("div"),
    BACKEND_BASE_URL = "https://staging-api.exei.ai";


const updateTextDivWidth = () => {
    if (window.innerWidth <= 480) {
        chatBoxTextdiv.style.display = "none";
    } else {
        chatBoxTextdiv.style.display = "flex";
        chatBoxTextdiv.style.fontSize = "14px";
        chatBoxTextdiv.style.minWidth = "50px";
        chatBoxTextdiv.style.maxWidth = "250px";
    }
};

const showChatBoxTextIfNotMobile = () => {
    if (window.innerWidth <= 480) {
        chatBoxTextdiv.style.display = "none";
    } else {
        chatBoxTextdiv.style.display = "flex";
    }
};

updateTextDivWidth();
setTimeout(() => {
    updateTextDivWidth();
}, 100);

window.addEventListener("resize", updateTextDivWidth);

mainBox.id = "mainBox";
mainBox.style.display = "none";
mainBox.style.flexDirection = "row";
mainBox.style.alignItems = "center";
mainBox.style.position = "fixed";
mainBox.style.bottom = "20px";
mainBox.style.right = "20px";
mainBox.style.padding = "10px";
mainBox.style.borderRadius = "10px";
mainBox.style.zIndex = 99999;
mainBox.style.gap = "10px";
mainBox.style.overflow = "visible";

chatBoxTextdiv.id = "chatBoxTextdiv";
chatBoxTextdiv.style.display = "none";
chatBoxTextdiv.style.marginLeft = "10px";
chatBoxTextdiv.style.marginTop = "0px";
chatBoxTextdiv.style.marginBottom = "0px";
chatBoxTextdiv.style.fontSize = "14px";
chatBoxTextdiv.style.fontWeight = "bold";
chatBoxTextdiv.style.color = "#333";
chatBoxTextdiv.style.minWidth = "50px";
chatBoxTextdiv.style.background = "#FFF";
// chatBoxTextdiv.style.border = "1px solid gray";
chatBoxTextdiv.style.padding = "10px";
chatBoxTextdiv.style.borderRadius = "20px";
chatBoxTextdiv.style.position = "relative";
chatBoxTextdiv.style.maxHeight = "130px";
chatBoxTextdiv.style.overflow = "visible";
chatBoxTextdiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

chatBox.id = "chatBox";
chatBox.style.display = "none";
chatBox.style.background = "#fff";
chatBox.style.bottom = "60px";
chatBox.style.width = "60px";
chatBox.style.height = "60px";
chatBox.style.right = "20px";
chatBox.style.justifyContent = "center";
chatBox.style.alignItems = "center";
chatBox.style.borderRadius = "9999px";
chatBox.style.border = "none";
// chatBox.style.border = "1px solid gray";
chatBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
chatBox.style.zIndex = 99999;
chatBox.style.cursor = "pointer";

chatBoxTextClose.id = "chatBoxId";
chatBoxTextClose.style.position = "absolute";
chatBoxTextClose.style.top = "-10px";
chatBoxTextClose.style.right = "-10px";
chatBoxTextClose.style.width = "20px";
chatBoxTextClose.style.height = "20px";
chatBoxTextClose.style.backgroundColor = "#d1d1d1";
chatBoxTextClose.style.borderRadius = "50%";
chatBoxTextClose.style.cursor = "pointer";
chatBoxTextClose.style.display = "none";
chatBoxTextClose.style.alignItems = "center";
chatBoxTextClose.style.justifyContent = "center";
chatBoxTextClose.style.zIndex = "10";

const crossLine1 = document.createElement("div");
crossLine1.style.position = "absolute";
crossLine1.style.width = "12px";
crossLine1.style.height = "2px";
crossLine1.style.backgroundColor = "#4a4a49";
crossLine1.style.transform = "rotate(45deg)";

const crossLine2 = document.createElement("div");
crossLine2.style.position = "absolute";
crossLine2.style.width = "12px";
crossLine2.style.height = "2px";
crossLine2.style.backgroundColor = "#4a4a49";
crossLine2.style.transform = "rotate(-45deg)";

chatBoxTextdiv.addEventListener("mouseenter", () => {
    chatBoxTextClose.style.display = "flex";
});

chatBoxTextdiv.addEventListener("mouseleave", () => {
    chatBoxTextClose.style.display = "none";
});


chatBoxTextClose.appendChild(crossLine1);
chatBoxTextClose.appendChild(crossLine2);

chatBoxTextClose.onclick = () => {
    chatBoxTextdiv.style.display = "none";
};

chatBoxTextClose.onclick = () => {
    chatBoxTextdiv.style.display = "none";
};

chatBoxImage.id = "chatBoxImage";
chatBoxImage.style.borderRadius = "9999px";
chatBoxImage.width = 50;
chatBoxImage.height = 50;

chatBoxTextdiv.style.textWrap = "auto";

const iframe = document.getElementById("myIframe");
const SourceData = iframe.src,
    id = SourceData.split("/sdk/")[1].split("?")[0];
let settingsDataVariable;

function loadGoogleFont(fontName) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(
        / /g,
        "+",
    )}&display=swap`;
    document.head.appendChild(link);

    mainBox.style.fontFamily = `${fontName}, 'sans - serif'`;
}

const updateIframeSize = () => {
    if (window.innerWidth <= 480) {
        iframe.style.width = "90vw";
        iframe.style.height = "75vh";
        iframe.style.right = "5%";
    } else {
        iframe.style.width = "500px";
        iframe.style.height = "85%";
        iframe.style.right = "20px";
    }
};

updateIframeSize();
window.addEventListener("resize", updateIframeSize);

fetch(`${BACKEND_BASE_URL}/project/${id}`)
    .then((t) => t.json())
    .then((t) => fetch(`${BACKEND_BASE_URL}/settings/${t?.data?.clientId}`))
    .then((t) => t.json())
    .then((t) => {
        t = t?.data;
        console.log("settings", t);
        chatBoxImage.src = t.s3Response.Location;
        chatBoxImage.onload = function () {
            mainBox.style.display = "flex";
            chatBoxImage.style.width = "50px";
            chatBoxImage.style.height = "50px";
            if (window.innerWidth <= 480) {
                chatBoxTextdiv.style.display = "none";
            } else {
                updateTextDivWidth();
            }
        };
        chatBoxTextContent.textContent = t?.labelText || t?.greet;
        settingsDataVariable = t;
        loadGoogleFont(t?.selectedFont || "Poppins");
    })
    .catch((t) => {
        console.error("Error:", t);
    });

chatBoxImage.width = 50;
chatBoxImage.height = 50;
chatBoxTextdiv.style.textWrap = "auto";
chatBoxImage.style.borderRadius = "9999px";
chatBoxImage.style.objectPosition = 'contain';

chatBoxCloseIcon.src =
    "https://iframe-cdn.exei.ai/cross.svg";
chatBoxCloseIcon.style.borderRadius = "9999px";

mainBox.append(chatBoxTextdiv);
mainBox.append(chatBox);
chatBoxTextdiv.appendChild(chatBoxTextContent);
chatBoxTextdiv.appendChild(chatBoxTextClose);
// chatBoxTextClose.appendChild(chatBoxCloseIcon);
chatBox.appendChild(chatBoxImage);
document.body.appendChild(mainBox);

let interval,
    position = 0,
    direction = 1,
    bounceHeight = 20,
    speed = 0.3;

function bounceChatBox() {
    position += direction * speed;
    mainBox.style.transform = `translateY(${position}px)`;
    if (position >= bounceHeight) direction = -1;
    if (position <= 0) direction = 1;
}

interval = setInterval(bounceChatBox, 10);

iframe.style.display = "none";
const poweredByDiv = document.createElement('div');

poweredByDiv.id = "chatBoxTextdiv";
poweredByDiv.style.display = "flex";
poweredByDiv.style.marginLeft = "10px";
poweredByDiv.style.fontSize = "14px";
poweredByDiv.style.fontWeight = "bold";
poweredByDiv.style.color = "#333";
poweredByDiv.style.minWidth = "50px";
poweredByDiv.style.background = "#FFF";
// poweredByDiv.style.border = "1px solid gray";
poweredByDiv.style.padding = "10px";
poweredByDiv.style.borderRadius = "20px";
poweredByDiv.style.position = "relative";
poweredByDiv.style.maxHeight = "130px";
poweredByDiv.style.overflow = "visible";
poweredByDiv.style.display = "none";
poweredByDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

mainBox.append(poweredByDiv);

window.addEventListener("message", (event) => {
    console.log(event.data?.type)
    if (event.data?.type === "VOICE_CLICKED") {
        iframe.style.height = "90%";
        iframe.style.width = "400px";
        updateIframeSize()
    }

    if (event.data?.type === "CHAT_CLICKED") {
        iframe.style.height = "90%";
        iframe.style.width = "400px";
        iframe.style.background = "transparent";
        iframe.allowTransparency = "true";
        updateIframeSize()
    }

    if (event.data?.type === "IS_VOICE") {
        iframe.style.height = "100px";
        iframe.style.width = "120px";
        iframe.style.background = "transparent";
        iframe.allowTransparency = "true";
    }

    if (event.data?.type === "RESET_IFRAME_VOICE") {
        iframe.style.height = "100px";
        iframe.style.width = "120px";
        iframe.style.background = "transparent";
        iframe.allowTransparency = "true";
    }

    if (event.data?.type === "RESET_IFRAME_CHAT") {
        iframe.style.height = "90%";
        iframe.style.width = "400px";
        iframe.style.background = "transparent";
        iframe.allowTransparency = "true";
        updateIframeSize()
    }

    if (event.data?.type === "HIDE_AI_AGENT") {
        iframe.style.display = 'none';
        mainBox.style.display = 'none';
        chatBoxTextdiv.style.display = 'none';
        chatBoxTextContent.style.display = 'none';
        chatBox.style.display = 'none';
        chatBoxImage.style.display = 'none';
        chatBoxCloseIcon.style.display = 'none';
        chatBoxTextClose.style.display = 'none';
    }

    if (event.data?.type === "SHOW_AI_AGENT") {
        iframe.style.display = 'none';
        mainBox.style.display = 'flex';
        showChatBoxTextIfNotMobile();
        chatBoxTextContent.style.display = 'block';
        chatBox.style.display = 'flex';
        chatBoxImage.style.display = 'block';
        chatBoxCloseIcon.style.display = 'flex';
        chatBoxTextClose.style.display = 'none';
    }
});


chatBox.onclick = () => {
    if (iframe.style.display === "none") {
        iframe.style.display = "block";
        iframe.style.borderRadius = "20px"
        mainBox.style.transition = "all 0.3s ease"
        chatBoxTextdiv.style.display = "none";
        poweredByDiv.style.display = "none";

        mainBox.style.flexDirection = "row-reverse"
        bounceHeight = 0;
        speed = 0;
        position = 15;
        mainBox.style.transform = "none";

        chatBoxImage.onload = function () {
            chatBoxImage.style.width = "20px";
            chatBoxImage.style.height = "20px";
        };

        chatBoxImage.style.transition = "opacity 0.5s ease";
        chatBoxImage.style.opacity = "0";
        setTimeout(() => {
            chatBoxImage.src =
                "https://exei-bkt-important-object.s3.ap-south-1.amazonaws.com/cross-19.svg";
            chatBoxImage.style.transition = "opacity 0.5s ease";
            chatBoxImage.style.opacity = "1";
            chatBox.style.transition = "transform 0.5s ease";
            chatBox.style.transform = "rotate(180deg)";
        }, 500);
    } else {

        if (iframe.contentWindow) {
            iframe.contentWindow.postMessage({
                type: 'STOP_VOICE',
                timestamp: Date.now()
            }, '*');
        }
        chatBox.style.transition = "transform 0.5s ease";
        chatBox.style.transform = "rotate(0deg)";
        chatBoxImage.style.transition = "opacity 0.3s ease";
        chatBoxImage.style.opacity = "0";
        setTimeout(() => {
            mainBox.style.flexDirection = "row";
            poweredByDiv.style.display = "none";
            iframe.style.display = "none";
            mainBox.style.transform = `translateY(${position}px)`;
            showChatBoxTextIfNotMobile();
            chatBoxTextdiv.style.alignItems = "center";
            chatBoxTextdiv.style.justifyContent = "space-between";
            bounceHeight = 20;
            speed = 0.3;
            chatBoxImage.src = settingsDataVariable.s3Response.Location;
            chatBox.style.transition = "none";
            chatBox.style.transform = "rotate(0deg)";

            chatBoxImage.onload = function () {
                chatBoxImage.style.width = "50px";
                chatBoxImage.style.height = "50px";
                chatBoxImage.style.transition = "opacity 0.5s ease";
                chatBoxImage.style.opacity = "1";
                chatBox.style.transition = "transform 0.5s ease";
                chatBox.style.transform = "rotate(0deg)";
            };
        }, 400)
    }
};