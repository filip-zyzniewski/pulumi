import * as github from "@pulumi/github";

const repo = new github.Repository(
    "butlerd",
    {
        name: "butlerd",
        description: "Home automation system",
        hasDownloads: true,
        hasIssues: true,
        hasProjects: true,
        hasWiki: true,
        vulnerabilityAlerts: true,
    },
);
