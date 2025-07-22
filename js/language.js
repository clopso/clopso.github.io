const firstText = `Always<br>work smart!`

const secondText = `
    I was born in Londrina-PR in 2005.
    <br>
    I currently live in <b>Rolândia-PR</b>.
    <br><br>
    Embedded Systems Developer.
    <br>
    Currently studying <b>C</b>, <b>JS</b>, and <b>Python</b>.
    <br><br>
    Studying <b>Software Engineering</b>.
    <br>
    Working as a developer at PADO.
    <br><br>
    `

const talkText = `My Projects`

function detectLanguage(){
    const language = navigator.language || navigator.userLanguage;
    console.log(language)
    
    if (language != "pt-BR") {
        const firstParagraph = document.getElementById("main");
        firstParagraph.innerHTML = firstText

        const secondParagraph = document.getElementById("second");
        secondParagraph.innerHTML = secondText

        const talkParagraph = document.getElementById("talkButton");
        talkParagraph.innerHTML = talkText

        const sectionTitle = document.getElementById("section-title");
        sectionTitle.innerHTML = talkText
    }
}

detectLanguage();