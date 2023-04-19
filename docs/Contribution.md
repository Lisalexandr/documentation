**This website's purpose is to store different QA documentation and keep it up to date.**

### QA Documentation repo
To start working with the docs, you need to have this repository on your local machine.
1. Clone the QA documentation repo.
2. Create a working branch from the **_master_** branch.

### How to add or update an article

### 1. Installation
1. Run `npm run install` to install packages.
2. Run `npm run build` to build the existing documentation.

### 2. Making changes
#### Create a new document
1. Create a new document in `*.md` format inside the `docs/` folder.
2. Write and format an article inside your `*.md` file.
3. Add your documents' file name in the corresponding section of the `sidebar.js` file.
4. Run `npm run build` and make sure there are no errors or warnings during the build.

#### Edit an existing document
1. Search for the required `*.md` file in the `docs/` folder.
2. Make the required changes and updates.
3. If you changed the file name, your document name in the `sidebar.js` file also should be updated.
4. Run `npm run build` and make sure there are no errors or warnings during the build.

### 3. Local preview
It is always a good idea to verify the changes you made before pushing them to the repo:
1. Run `npm run start` command. It will compile docs in watch mode and serve them.
2. Documentation will be available on [http://localhost:3000](http://localhost:3000).

### 4. Merge changes
1. Commit and push your changes.
2. Create a PR to the **_master_** branch.
3. Ask for the approvals.
4. Merge your PR after you get the approvals. 

## Markdown Syntax
Please read and follow the [GitLab Flavored Markdown](https://docs.gitlab.com/ee/user/markdown.html) article to know more about the markdown syntax.

## Grammar and spelling
Please **always** check your article is grammatically correct and has no typos or spelling errors.
- *VS CODE*: use [Grammarly](https://marketplace.visualstudio.com/items?itemName=znck.grammarly) or [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) or any other popular extensions.
- *WebStorm*: use [Graze](https://plugins.jetbrains.com/plugin/12175-grazie?_ga=2.215343255.1086528367.1673871545-251924261.1673871545) plugin.
- *Google Translate* is better than nothing if you don't want to use IDE tools.

### Absolute URLs
If you are copy-pasting documents from other repositories, the document URL may be *relative*. In this case, you will receive a warning during the build.
All URLs in documentation files should be *absolute*!

### Adding images
If you want to add an image to an article, it should be stored inside the `docs/images/` folder.
The image markdown example:
```
![test image](images/test.jpg)
```
![test image](images/test.jpg)