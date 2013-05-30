amd-require-workshop
====================

A workshop about using AMD/Require to create and optimize modular javascript

Each step of the workshop is in a separate branch. After cloning the repo you can automatically create all of the local branches with the following shell command.

for branch in `git branch -a | grep remotes | grep -v HEAD | grep -v master`; do git branch --track ${branch##*/} $branch; done

Then you will be able to do a 

git checkout stepX

If you don't want to run the scary command above you can create and checkout the branches individually

git branch stepX origin/stepX
git checkout stepX
