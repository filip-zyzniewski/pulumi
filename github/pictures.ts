import * as github from "@pulumi/github";

const repo = new github.Repository(
    "pictures",
    {
        description: "My attempts at photography with code",
        allowSquashMerge: false,
        deleteBranchOnMerge: true,
        hasIssues: true,
        hasProjects: true,
        hasWiki: false,
        visibility: "public",
    },
);
