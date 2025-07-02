# What is Git?

Git is a distributed version control system (DVCS) used to track changes in source code and collaborate on software development projects.

---

## features of Git : 
1. Version Control:

Git keeps a record of every change made to files in a project over time. This makes it easy to:

Go back to previous versions of the code

Compare changes between versions

See who made changes and when


2. Distributed:

Git is distributed, meaning:

Every developer has a full copy of the entire project history (not just the latest version)

You can work offline and still access the full project history


3. Repository:

A Git repository (repo) is like a container that stores:

All your project files

All your version history (commits)



---
## Uses of Git : 

| Use Case                    | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
|  **Version Tracking**     | Keep track of changes to source code over time                              |
|  **Collaboration**        | Multiple developers can work on the same project simultaneously              |
|  **Undo Mistakes**        | Easily revert to previous versions of code                                  |
| **Branching & Merging**  | Create isolated branches for new features, then merge back safely           |
|  **Remote Development**   | Use platforms like GitHub, GitLab, Bitbucket to host and collaborate online |
|  **Change History**       | See who made what changes and why (with commit messages)                     |
|  **Safe Experimentation** | Test new features or fixes in a branch without affecting the main code       |



---


# Basic Git Commands: 
| Command                 | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| `git init`              | Initializes a new Git repository                                            |
| `git clone <url>`       | Copies a remote repo to your local machine                                 |
| `git status`            | Shows the current state of the working directory and staging area          |
| `git add <file>`        | Stages file(s) for the next commit                                          |
| `git add .`             | Stages **all** modified and new files                                       |
| `git commit -m "msg"`   | Saves staged changes with a message                                         |
| `git log`               | Shows commit history                                                        |
| `git diff`              | Shows the difference between tracked files and changes                     |
| `git branch`            | Lists all branches                                                          |
| `git branch <name>`     | Creates a new branch                                                        |
| `git checkout <branch>` | Switches to the specified branch                                            |
| `git merge <branch>`    | Merges the specified branch into the current one                            |
| `git pull`              | Fetches and merges changes from the remote repo                             |
| `git push`              | Sends your commits to the remote repository                                 |
| `git remote -v`         | Shows connected remote repositories                                         |
| `git stash`             | Temporarily saves uncommitted changes                                       |
| `git stash pop`         | Applies and removes the last stash                                          |
| `git stash list`        | Lists all stashed entries



