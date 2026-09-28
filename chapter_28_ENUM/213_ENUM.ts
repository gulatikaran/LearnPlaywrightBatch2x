enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}

function launchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chrome Chromium");
            break;

        case Browser.Firefox:
            console.log("Launching Gecko");
            break;

        case Browser.Safari:
            console.log("Launching Webkit");
            break;

        case Browser.Edge:
            console.log("Launching Edge Chromium");
            break;
    }
}

launchBrowser(Browser.Chrome);

// Output:
// Launching Chrome Chromium
