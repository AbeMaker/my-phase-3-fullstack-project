##Create a new repository on GitHub.
####2. Initialize the local directory as a Git repository.

##git init

##Add the files in your new local repository. This stages them for the first commit.

##git add .
##or:

##git add --all
##git commit -m 'First commit'
##git remote add origin 'remote repository URL'
##Sets the new remote:

##git remote -v
##Push the changes in your local repository to GitHub.

##git push origin master

##In case of the errors below:
<!-- ##! [rejected] master -> master (fetch first)
error: failed to push some refs to 'https://github.com/zhaohany/Rutgers-CS211.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details. -->

##use:
##git push -u -f origin 'your branch'