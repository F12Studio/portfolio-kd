yarn build

cd dist

git init
git add -A
git commit -m 'NewDeployment'
git push -f git@github.com:FLoW02/portfolio-kd.git master:gh-pages
