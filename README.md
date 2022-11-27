--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

20/20
- 2/2 The ability to log overnight sleep
- 2/2 The ability to log sleepiness during the day
- 2/2 The ability to view these two categories of logged data
- 4/4 Either using a native device resource or backing up logged data
- 4/4 Following good principles of mobile design
- 4/4 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
    24hrs


3. What online resources did you consult when completing this assignment? (list specific URLs)
https://ionicframework.com/docs/components
https://capacitorjs.com/docs/apis

4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
N/A


5. Is there anything special we need to know in order to run your code?
Emulator needs to be run in Chrome. NOT SAFARI


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
- I designed the app for a highschool/college aged user. This meant adding the ability to add
entries asynchronously. The app is really designed to make sleep logs after you've already slept


7. Did you design your app specifically for iOS or Android, or both?
My focus was on iOS. But Android should also work fine. I used cross platform components. 


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
- when a user wakes up from an overnight sleep, they can go to the app and entire when they went to bed and when they woke up. This mechanism is pretty standard among other apps in the app store. This also prevents the posibility of a user entring a start time before going to bed and forgetting to entire a end time when they wake up


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
- they just directly log the time of day they were fealing sleepiness, and then rate it using the pre-selected options.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
- In a separate page, they can view each entire that they've entered. This data is separated between overnight sleep and daytime sleepiness. This seems to be the cleanest organizationally format.


11. Which feature choose--using a native device resource, backing up logged data, or both?
sing a native device resource


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
- I utilized the mobile devices haptic engine to generate vibrations when an error has occured. Oftent times
visual queues are not enough to get a message accross. with vibration, someone can better know that something has happened.


13. If you backed up logged data, where does it back up to?
N/A

14. How does your app implement or follow principles of good mobile design?
- finger friendly buttons
- bottom tab navigation instead of top fore better reachability
- larger text
