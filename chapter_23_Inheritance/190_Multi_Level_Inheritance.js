// Grand Father -> Father -> Son
// Base Page -> Auth Page -> Admin Page

class BasePage {
    constructor (name) {
        this.name = name;
    }

    open() {
        console.log("[OPEN]" + this.name);
    }
}

class AuthPage extends BasePage {
    login(user) {
        console.log("[LOGIN] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }

    manageUsers() {
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();
admin.open();
admin.login("Superadmin");
admin.manageUsers();

// Output:
// [OPEN]Admin Panel
// [LOGIN] Superadmin
// [ADMIN] Managing users