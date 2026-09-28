// How we use the interfaces in Bug Report

interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];
}

const bugReport1: BugReport = {
    id: 1,
    title: "title",
    severity: "High",
    stepsToReproduce: ["step1", "step2"]
}

const bugReport2: BugReport = {
    id: 1,
    title: "title",
    severity: "High",
    stepsToReproduce: ["step1", "step2"]
}

const bugReport3: BugReport = {
    id: 1,
    title: "title",
    severity: "Low",
    stepsToReproduce: ["step1", "step2"]
}