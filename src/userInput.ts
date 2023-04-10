import LoveNest from "./assets/images/LoveNest.png";
import MFE from "./assets/images/DBS_Webview.png";
import BookingImg from "./assets/images/automation.png";

export const coverStory = 
    "From a Chemical Engineer working in a oil refinery, Jayden's passion for Software enabled a smooth transition into the industry. " + 
        "He has performed several roles, including a Data Engineer specializing in SQL queries and data migration into Hadoop, as well as a Front-end React specialist working on trading applications. " +
            "In his spare time, Jayden enjoys a good comic book, playing basketball and travelling.";



export const projectArray = [{ 
    title: "MicroFrontends", 
    image: MFE, 
    desc: {
        title: "Trading WebApp", 
        body: "Build a trading platform for crypto and equities in the browser and mobile webviews",
        techStack: ["Micro-FrontEnds", "React", "Redux", "TypeScript", "Module Federation", "Jest", "Cypress", "Pact"]} }, 
    { title: "Native Mobile App", image: LoveNest, 
    desc: {
        title: "LoveNest - App for Couples", 
        body: "Build a native application for couples to chat, share photos and keep track of events",
        techStack: ["React-Native", "TypeScript", "Websockets", "Parse", "NodeJS", "MongoDB", "AWS Cloud"]} 
    }, 
    { title: "Automation", image: BookingImg, 
    desc: {
        title: "Automated Booking System", 
        body: "Build a simple cron job for users to automate their booking in ActiveSG website",
        techStack: ["Python", "Web Scraping", "Beautiful Soup", "Cron Job", "Re-Captcha", "dev-tools"]}   
    }];


export const linkedinUrl = "https://www.linkedin.com/in/jun-wei-ng-039b60105/";
export const redditUrl = "https://www.reddit.com/user/chickenworshipper";
export const twitterUrl = "https://twitter.com/NgJunWei14";