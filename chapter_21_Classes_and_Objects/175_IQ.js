class Browser {
    // Param Constructor (arguments)
    constructor(name) {
        this.name = name;
        this.isopen = true;
        console.log(name + " launched ");
    }

    openBrowser() {
        console.log("starting the browser");
    }

    closeBrowser() {
        console.log("closing the browser");
    }
}

let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");

console.log(chrome.isopen);

// Chrome launched 
// Firefox launched 
// true
