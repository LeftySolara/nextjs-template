# Julianne's Barebones NextJS Template

This is a basic template that I use for my NextJS projects. It includes configurations for TypeScript, ESLint, Prettier, Vitest, and React Testing Library.

This was created by taking the template from [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app), removing the boilerplate, and adding configurations for the modules listed above. I also included a few sample unit tests and a sample route.

The version of NextJS used is `13.4.19`, which was the latest stable version at the time that this template was created. I will try to keep this updated as new versions are released, though I cannot guarantee that I'll be able to do it for _every_ version.

Some things to note about this template:

1. There is no CSS or other styling included. This is so you can choose whatever styling method you want for your project, such as Sass, TailwindCSS, CSS Modules, Styled Components, etc.
2. ESLint is configured to follow the Airbnb style guide. You can change this if you wish by editing `.eslintrc.json`.
3. TypeScript is configured with import aliases to `@/app/*` and `@/public/*`, which will find everything in the `src/app` and `public` directories.
4. This template uses the NextJS app router.

## How to Use This Template

### Quick Start

To get up and running quickly, just clone the repository and run the following commands:

```
npm install
npm run dev
```

This will install all dependencies and run the project in dev mode.

### Customizing

There are a few housekeeping tasks you'll want to perform if you're planning to use this for a real project. Do the following after cloning the repository:

1. Delete the `.git` directory and create a new repo with the `git init` command.
2. Update your project's information in `package.json`. This includes the project's name, description, version, homepage, and author info.
3. Update the LICENSE file with your own name and the current year.
4. Update this README.md file with your own content.

After that last step, you should be good to go! You might want to run `npm run test` and verify that the tests pass, but it's not required.

## Notice

This template was originally created for my own personal use, so it is configured for my specific use case. It is very barebones and is only meant to reduce the amount of time I have to spend removing the boilerplate that comes with create-next-app. **Feel free to use it in your own projects and modify it as you wish**. If you enjoy this template or have feedback on what could be improved, please send me an email. My email address can be found on my [GitHub profile](https://github.com/LeftySolara).

## TODO

- [ ] Add configuraion for debugging in VS Code
