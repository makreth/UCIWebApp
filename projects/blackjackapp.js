function getEmbed(){
    const embedString = `
    <iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@makreth/BlackJack?lite=true"></iframe>
    `
    return embedString;
}

document.getElementById("content").innerHTML = getEmbed();