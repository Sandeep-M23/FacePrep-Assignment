# FacePrep-Assignment

An Task of Create an responsive infinite scrolling list in react for a fixed array of items as an Assignment for [Face Prep](https://www.faceprep.in/).

Technologies Used -  Frontend: ReactJS , Components: Chakra UI , Language: TypeScript

## Specs

- The app must be a authenticated app. It can accept fake login with details, username: foo, password: bar.

-  Post login route is '/home. This route shows our main list Ul. This page shouldn't be accessible by non

logged in users.

- logged in pages must show logout button. On click of this logout it will redirect to the login page

- There's no need to implement a server for fake login functionality. We're not going to judge you for doing so.

- UI must be built using react.

-  The list is a contact list of user and photo. It can look like this (https://imgur.com/MIHGR). This design is just for your reference. Any deviations from this design is fine. There's no need for drop down or drawers Just a list is sufficient.

- It should look correct at least for a 320x480 sized view-port

-  You can use a static list of users like this (https://randomuser.me/api/?results-500) or use this (https://randomuser.me/documentation#howto) free random user api if you fancy that 9. Initially only load a partial list and when user scrolls to end of page. App shown loading feedback loads more contacts after a delay of 1 sec

-  You can use any open source lib. That's fine

## Bonus Points if you can

- Use typescript
- Make a decent looking and responsive Ul.
- If you implement a skeleton loader during loading
- Add unit tests, or even better follow TDD
- If you can write neat well formatted code.
- Use git. We'll judge you for sending zip
