#!/bin/bash

# Configuration
UPSTREAM_REPO="git@github.com:jakobhoeg/nextjs-ollama-llm-ui.git"
# If using https, use this instead.
# UPSTREAM_REPO =  https://github.com/jakobhoeg/nextjs-ollama-llm-ui.git
FORK_REPO="git@github.com:TheCypher/fetchit_dashboard_ui.git"
# If using https, use this instead.
# UPSTREAM_REPO =  https://github.com/TheCypher/fetchit_dashboard_ui.git
BRANCH="master"  # Change to 'main' if the primary branch is named 'main'

# Sync with upstream
function sync_with_upstream() {
    git fetch upstream
    git checkout $BRANCH
    git merge upstream/$BRANCH
    git push origin $BRANCH
}

# Rebase your branch
function rebase_branch() {
    git checkout $1
    git rebase $BRANCH
    git push --force-with-lease origin $1
}

# Main menu
echo "Select an option: "
echo "1) Sync fork's $BRANCH with upstream"
echo "2) Rebase a specific branch"
read -p "Enter choice [1-2]: " choice

case $choice in
    1)
        echo "Syncing your fork's $BRANCH with upstream..."
        sync_with_upstream
        ;;
    2)
        read -p "Enter the name of the branch to rebase: " branch_name
        echo "Rebasing the branch $branch_name..."
        rebase_branch $branch_name
        ;;
    *)
        echo "Invalid option."
        ;;
esac