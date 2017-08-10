husky
------------------
* pre-commit hook to run action on files before commit

lint-staged
------------------
* lints all stages *.js files with prettier then does another git add
* gitDir ../ is because our package.json isn't top level in the repository 

prettier
------------------
* formats the files passed to it by lint-staged and re-writes - so we don't have to!

![](prettier.png)
