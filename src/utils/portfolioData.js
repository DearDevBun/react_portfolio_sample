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
// need to fix app deployed version
// could add animation
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