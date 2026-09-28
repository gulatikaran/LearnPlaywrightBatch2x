// ReadOnly means we can 1 time set by using constructor.

class PlayrightConfig {
    readonly baseURL: string;
    readonly timeout: number;
    readonly retries: number;

    constructor(url: string, timeout: number, retries: number) {
        this.baseURL = url;
        this.timeout = timeout;
        this.retries = retries;
    }

    showConfig(): void {
        console.log("URL: " + this.baseURL);
        console.log("Timeout: " + this.timeout + "ms");
        console.log("Retries: " + this.retries);
    }
}

let config = new PlayrightConfig("https://staging.app.com", 30000, 2);
config.showConfig();

// Output is
// URL: https://staging.app.com
// Timeout: 30000ms
// Retries: 2


//config.baseURL = "https://other.com"; Cannot re-assign as it is Readonly.