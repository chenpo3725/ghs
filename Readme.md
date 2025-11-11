echo "# ghs" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/chenpo3725/ghs.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/chenpo3725/ghs.git
git branch -M main
git push -u origin main