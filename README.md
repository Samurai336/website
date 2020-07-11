#### Resume Generator (React - Gatsby)

This project will create for you a resume with a simple template.

[![Build Status](https://travis-ci.org/nimahkh/resume_generator.svg?branch=master)](https://travis-ci.org/nimahkh/resume_generator)

##### How to use?

- Edit `src/components/ProfileAndSkills/Education/education.js` for your educations.
- Edit `src/components/ProfileAndSkills/Experience/experiences.js` to list your experiences.
- Edit `src/components/ProfileAndSkills/Skills/skills.js` to list your skills.
- Edit `src/pages/Index/ProfileAndSkills/index.js` summary constant, to have a detail about yourself.


#### Deploy on your github.io

- Edit `gatsby-config.js` and edit `pathPrefix` to your repository name. ex : /nima_habibkhoda .
- Create a repository named you `pathPrefix` value.
- Run `npm run deploy` .

#### Run Developer mode

- Run `npm run develop` .

#### Build the project

- Run `npm run build` .

#### Lint and Prettier

- Run `npm run lint && npm run prettier` .

#### The Husky

- Before any push on Github, your project will run `lint and prettier` itself.

#### Tests

`soon...`
