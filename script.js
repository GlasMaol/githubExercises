//första steg för att koppla ihop mappen med repot i main.
echo "# githubExercises" >> README.md

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin ....

git push -u origin main


//skapa dev och en branch till.
git branch DEV
    git checkout DEV
        git push -u origin DEV

git branch feature/one
    git checkout feature/One
        git push -u origin feature/One
        //skriva/ändra kod och push upp till feature/One

//Push and merge från feature/One till DEV
git checkout DEV
    git pull origin DEV
        git merge feature/One
            git push origin DEV


//om vi bara ska merge en specific fil till DEV till ex script.js
git checkout DEV
    git checkout feature/One script.js
        git commit -m "merged script.js from feature/one to DEV"
            git push origin DEV

//kommentar för att testa script.js merge med DEV

//en till ändring