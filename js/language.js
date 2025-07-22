const firstText = `Always<br>work smart!`

const secondText = `
    Born in 2005, Londrina-PR.
    <br>
    Living in <b>Rolândia-PR</b>.
    <br><br>
    Fullstack Developer.
    <br>
    <b>Node.js</b>, <b>NestJS</b>, <b>React</b>.
    <br>
    <b>Python</b>, <b>Express</b>, <b>MongoDB</b>.
    <br>
    <b>Redis</b>, <b>Docker</b>, <b>Linux</b>.
    <br>
    <b>GCP</b>, <b>Cloud Run</b>, <b>K8s</b>.
    <br><br>
    Software Engineering — UNOPAR.
    <br>
    Developer at <b>PADO</b>.
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