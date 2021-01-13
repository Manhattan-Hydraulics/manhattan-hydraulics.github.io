# Manhattan Hydraulics Web Site ™

🚨 Pushing directly to `main` branch will deploy the website, so do this with care. When in doubt, create a new branch and submit a PR.

## Tech overview
For ease of use, this website uses the following technologies:
* [jQuery](https://jquery.com/), a javascript library intended to make it easier to create interactinons with HTML elements and content.
* [Eleventy](https://www.11ty.dev/), a javascript-based "static site generator". This lets us very simply manage the website copy without needing to touch any of the code. Each bit of copy is simply a Markdown file.

### File structure
```js
- _site/       // compiled website, don't touch
- assets/       // contains css, fonts, images, js
- views/        // site matter
  - elements/        // contains all site content in .md files
    - content/        // main body content of left/right sections
    - footer/        // footer content for left/right sections
    - header/        // just contains our studio name
    - footer.md        // layout file, do not edit
    - panel.md        // layout file, do not edit
  - layouts/        // contains layout files that content is compiled into by Eleventy. SEO information is stored here.
  - index.md        // assembles all the elements
- .*.js        // config files, leave them be
- package.json        // site dependencies
- README.md        // the thing you are reading rn
```

## Tools you need
- [GitHub Desktop](https://desktop.github.com/) — [Here's how to use it](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop)
  - Skip this if you know how to use the git CLI
- A code editor like Atom or VS Code
- A command line app. Every OS has one by default, or you can use Hyperterm or iTerm.


## Setup
1. Install latest version of [node.js](https://nodejs.org/en/download/)

2. Grab your favorite code editor. If you don't have one, I suggest Atom or VS Code.

2. Clone this repository to your computer
   - I suggest you all use [GitHub Desktop](https://desktop.github.com/) unless you are comfortable in the terminal
   - Or you can use your command line: `git clone https://github.com/Manhattan-Hydraulics/site.git`
     - More info on what Git is can be found [here](https://guides.github.com/introduction/git-handbook/)
     - I won't include more instructurions here, but if you've never used git, you'll need to set that up locally
     
4. Open your terminal! You can use Terminal.app if on Mac, or use your terminal of choice (I use iTerm but it doesn't matter what you use)
    - `cd` into your local clone of this repo. The command would look like `cd [path to your local folder]`. You can also type `cd ` (with the space) then drag the folder into your terminal and hit enter.
    
3. Install website dependencies
    - `npm install -g @11ty/eleventy`
    - `npm install`

## Serving the site locally
Now you should be able to serve the site locally by running `eleventy --serve`

Any changes you make to the code should live-reload the page in your browser so you can see changes live
    
## Editing the site
### Editing content online
You have two options to edit the content without touching any code.
- You can sign into [Prose.io](https://prose.io/) and edit the content with their text editor
  - Make sure you are only editing the `.md` files specified above in the file structure section
- You can also find the `.md` file you want to edit here on Github, click on it, and hit the little edit button in the top right. Then make your edits and follow the instructions to commit them.
  
### Editing content and code locally
If you want to edit content locally in a Markdown or text editor, or if you want to edit the code, you'll need to create a branch and submit a PR.
- [Here is an overview](https://guides.github.com/introduction/flow/) from Github on what branches, PRs, etc are.
- The simplest way to do this, if you're not already comfortable with git, is to use the Github Desktop app.
#### Steps
- Create a new branch, name it something like `dh/content-update`. The name doesn't matter too much here.
- Edit the site code in your code editor, or edit the markdown content in your favorite Markdown editor (eg. iA Writer, Bear)
- Commit your changes.
- Push your new branch to Github.
- Create a pull request
- Request review by someone (probably @devinhalladay)
- Merge into `main` branch when approved

## Deploying the site
The site is deployed automatically when we push to `main`
