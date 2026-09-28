class F1 {
    money() {
        console.log("1 cr");
    }
}

class F2 {
    money() {
        console.log("1.5 cr");
    }
}

class Son extends F1, F2 {

}

// O/p:
// SyntaxError: Unexpected token ','