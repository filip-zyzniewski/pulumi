import * as github from "@pulumi/github";

const repo = new github.Repository(
    "pulumi",
    {
        name: "pulumi",
        description: "Pulumi code that I use to manage my infrastructure",
        allowSquashMerge: false,
        deleteBranchOnMerge: true,
        hasIssues: true,
        hasProjects: true,
        hasWiki: false,
        visibility: "public",
    },
);
