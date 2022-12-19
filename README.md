# DevBun's Reactjs Portfolio Tutorial

Some may say that building a Reactjs portfolio is a waste of Reactjs power, as in, it can be used for much more powerful applications. To that, I say, "yes, yes that's true, but I don't care you elitist", so here is a simple react portfolio tutorial to help you both learn the framework and also get a great portfolio out of the exercise. 

I am using elements from multiple react portfolios I have seen on the internet because when it comes to bragging about myself via the format of a portfolio my cup of creativity drains into my cup of imposter syndrome. While I am using elements from many different portfolios, this tutorial is loosely based on two main ones, the portfolio style by Chetan Verma and the Free React Template (cruip.com). 

## Getting Started: 

Brad Travery Courses

Before we get started, make sure you know at least beginner-level javascript. Here is a good starter Udemy course in javascript or you can choose from a list of courses and decide for yourself. If you need a refresher, I highly recommend the Brad Traversy youtube series. 

Reactjs Website/ Documentation

## Step 1: Get yourself to the React documentation. Skim through it. 

When learning a new technology it's a good idea to start with the documentation first. 

## Step #2: Create React App

npx create-react-app my-app
cd my-app
npm start

This creates a standard react app when you start the app you can see the default react image. It's likely that yarn will be installed by default instead of npm. They are both package managers and yarn can be faster than npm, but we will be using npm for the purposes of this tutorial. Here is an explanation of the differences between npm and yarn. To install npm instead of yarn, you have two options. 

1) Remove yarn.lock, and run npm i,
or
2) Run create-react-app app --use-npm

Step #3: What's in the default react app?

You'll have node_modules, public, and src folders in your app. For the purposes of our portfolio, we are going to get rid of many files in the default app. 

I only keep the index.html file within the public folder. A manifest. json is a simple JSON file in your website that tells the browser about your website on the user's mobile device or desktop. Having a manifest is required by Chrome to show the Add to Home Screen prompt. It is not a necessary file. You need to use it or you should use it when you are designing a web app that can run offline.

I also only keep the files within the src folder that are necessary so the App.js, index.js, and index.css files. 

Note: There are a number of files that get imported into these files we decided to keep, so make sure to delete the import statements for files we have deleted, otherwise when you run "npm start" the app will not build successfully, and react will tell you that you are importing nonexistent files. 

## Step #4: Deciding on a File Structure

React doesn't actually have one particular file structure that they recommend, but it can be daunting to decide on a file structure. For this tutorial, we will be using components and pages, loosely following the Atomic Design methodology. 

## Step #5: Using Components - Refer to Repository

Components are like javascript functions, except they use something called JSX. The way I think of JSX is as a tool that combines HTML and javascript. 

Note: JSX has particular syntax rules, e.g. you can't use <div class = " ">, it has to be, <div className = " "> instead, because the React DOM uses camel-casing. 

Decide on what components you'll be using, refer to the GitHub repository linked here. We will be using a UIkit, you could use Bootstrap or any of the other front-end design libraries/ frameworks. Link the library to your app by placing it within the index.html file within the public. 

## Step #6: Decide on the Content - Refer to the Repository 

We'll have an about, a portfolio, skills, and a contact section. You could also attach a resume as a modal or a link to a popup pdf, but I prefer to keep my information slightly more private so I usually avoid placing a resume in my public portfolio. 

## Step #7: Using Pages 

A react Page folder essentially puts together the react components. Think of it like lego pieces being put together or a room that gets filled with a bed and a nightstand (the room is the Pages folder, the house is the App.js file). 

In this folder, you'll put the About, Portfolio, and TechnicalSkills( or Skills) page. See the GitHub repository for more details. 

## Step #8: Using a utils folder for the content

Here we'll have portfolio data and skills data in the store in objects. Below, you'll see that a constructor function, called ProjectCard, is being used in order to create a new object. 

import upliftPic from "../pages/assets/images/uplift.png";
import budgetTrackerPic from "../pages/assets/images/budgetTracker.png";
import WorkoutTrackerPic from "../pages/assets/images/workoutTracker.png";
import dayPlannerPic from "../pages/assets/images/dayPlanner.png"

function ProjectCard(title, about, imgURL, siteURL, repoURL) {
    this.title = title;
    this.about = about;
    this.imgURL = imgURL;
    this.siteURL = siteURL;
    this.repoURL = repoURL;
};

const uplift = new ProjectCard(
    "Uplift",
    "Uplift is a full-stack application that aims to support Black-owned businesses. The user can search for black-owned businesses in their vicinity/ neighborhood or anywhere else. The application is intended to be a resource for business owners as well as consumers who are searching to support this community. The visitor to the website can make an account and add a business.",
    upliftPic,
    "https://www.netlify.com/",
    "https://github.com/"
);

const BudgetTracker = new ProjectCard(
    "Budget Tracker",
    "Budget Tracker is a progressive web application that allows the user to add and subtract funds onile or offline. Additionally, the application allows the user to visualize a graph of their total spendings in a day over a period of time.",
    budgetTrackerPic,
    "https://www.netlify.com/",
    "https://github.com/"
);
const WorkoutTracker = new ProjectCard(
    "Workout Tracker",
    "Workout Tracker is a full-stack application that allows the user to add and complete workouts or exercises. Additionally, the user can check their workout dashboard to visualize graphics of their workout progress and data.",
    WorkoutTrackerPic,
    "https://www.netlify.com/",
    "https://github.com/avaarm/workout-tracker"
);

const dayPlanner = new ProjectCard(
    "Day Planner",
    "This is a frontend Javascript application that utilizes a third-party API called Moment, a time and date library.",
    dayPlannerPic,
    "https://www.netlify.com/",
    "https://github.com/"
);

let portfolioData = [uplift, BudgetTracker, WorkoutTracker,  dayPlanner];

export default portfolioData;

## Step #9: The App.js file and using Routing

The App.js file is the file for App Component, which is the main component in React and acts as a container for all other components. Think of it as the house of the application. 

## Step #10: Deploy using Github Pages/ Netlify 

Deploy your application using GitHub Pages or Netlify. Both are super easy to use and I've linked instructions on how to deploy your portfolio sites. Pay attention to what needs to go into the package.json folder prior to deploying. 

## Map of Folder Structure:
  
  

## Resources:

Sample portfolio GitHub repository here

Sample portfolio lives site here:


[Project Tree](https://tree.nathanfriend.io/?s=(%27optiVs!(%27fancy!true~fullPathG~trailingSlashG~rootDotG)~X(%27X%27react_p50build0node_modules0public0*870srczcompVentYQBackgroundIm96KQCVtact6FootW6HeadW6Navbar6OthWP5K6P5K6JKzp9Y4qassetsLim91.jpgLim92.jpg%20...6P54qTechnicalJ43utils6othWP5U6p5U6TechJUzApp7z8.cssz870.gitignore0.browsWlistrcZ7VZ-lock7V0README.md%27)~vWsiV!%271%27)*%20%200%5Cnq*-%204L87Lstyle.css05ortfolio60q7.js8index9ageG!falseJSkillsKCardL0*qQCVtainW6UData7VonWerXsource!Ys6AboutZ0pack9q*3z03%01zqZYXWVUQLKJG98765430*)
