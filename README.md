## Installation 
### Installing the latest version of NEXT app (13.4 for now) in the same diractory
- % npx create-next-app@latest ./
- Option that I picked for this project

#### Would you like to use TypeScript with this project?  No 
#### Would you like to use ESLint with this project?  No
#### Would you like to use Tailwind CSS with this project? Yes
#### Would you like to use `src/` directory with this project? No 
#### Use App Router (recommended)?  Yes
#### Would you like to customize the default import alias? Yes
#### What import alias would you like configured? … @/*   I pressed enter

## Getting Started

First, running the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. (boilerplate)

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Additional dependencies 

I installed additional dependencies to make my project come to life

- npm install bcrypt mongodb mongoose next-auth
## Arranging the Folders
### New app folder
I deleted the app folder to start from complete scratch, then I created a new one in the root of the directory.
### components folder
I created another folder for my reuseable components, not in the app folder but in the root directory and call it components.
### models folder
Then I created another folder calls models. This is going to be for Mongodb Mongoose DB models.
### New public folder
I deleted the public folder and provided another new one.
### styles folder
I created an empty folder for styles.
### utils folder
I created another folder called utils for my utility functions that I'm going to use throughout my application 

### .env file
I created a file called .env for environment variables inside of which I can store secure keys

#### Before starting building my app 
I compiled a list of assets icons and styles this project will use, to make the development of the parts that really matter in this app easier. 
For this I updated the tailwind.config.js file, provided a CSS file named globals.css 








## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


