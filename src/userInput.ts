import LoveNest from "./assets/images/LoveNest.png";
import MFE from "./assets/images/DBS_Webview.png";
import BookingImg from "./assets/images/automation.png";

export const coverStory = 
    "From a Chemical Engineer working in a oil refinery, Jayden began his transition into Software by working as Data Engineer. " + 
        "His tasks involved migrating data from various sources into the Hadoop Ecosystem, and to perform complex SQL queries defined by the business. " +
            "Jayden later moved on to Web Development, specializing in React applications. He was involved in the creation of a Crypto & Equities Trading application, " +
                "utilizing React, TypeScript, Redux, MicroFE Architecture tech stacks to develop them. " +
                    "In his free time, Jun Wei loves to experiment with new tech stacks, including React Native where he developed a Mobile Native application for Couples called LoveNest. "



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