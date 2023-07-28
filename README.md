# ZAKKI Website

Zakki is a non profit social civic-tech organization in Indonesia that aims to build inclusive integrated communities for marginalized people. They required a website that is develop for users as "volunteers", "donars".

The project was develop after finished its UI/UX design. (Figma link here: https://www.figma.com/file/UiUglBbnxgVxiF9x6EL265/Front-end-Project?type=design&node-id=1%3A4512&mode=design&t=rn2rKN4UeehwHo1F-1)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Introduction

This project is available on mobile, tablet and desktop.

* The site allow users to subscribe by fill in email to get ZAKKI's information
  * If the email submit is valid there will be a popup show "The news will sent to..."
  * If the email submit is invalid there will be a popup show "Oops...is invalid, please try again"
* The site homepage is a Carousel to show ZAKKI's latest information
  * The user could click on the three dot the see different page information immediately
* The site allow users to view all ZAKKI's program
  * The user could use filter to see program from old to new and from new to old
  * The user could search program through search bar
  * The user could click on the program card to see more information about the program
* The site allow user to see program detail (include donate status event, etc. )
  * The user could click on the donate button to donate money, if submission success the web will link to paypal (temporary)
* The site allow user to see all the team members (employees and volunteers). Click on the social media button could lead to their social media page
* The site could view all the event in the Event page. Recommend event is the most upcomming event that encourage user's to attend.
  * The user could click on the event to link to event detail
  * Same as program, the user could search program through search bar
  * The user could use filter to see event from old to new and from new to old (default will be from new to old)
* The user could use Join Us page to become the volunteer, the job option cards show the position that currently available
  * The user could fill in the apply form and preview at the summary page.


## Demo Page Link



## Demo Feature (Mobile)
(Number description same as Demo Feature (Desktop))

<!-- ![Alt text](src/MarkDown/Taipei_parking_mobile-02.png) -->

## Demo Feature (Desktop)

<!-- ![Alt text](src/MarkDown/Taipei_parking_desktop.png) -->

## Develp Environment and Tools

* node.js @16.15.0
* react @18.2.0
* react-router-dom @6.14.2
* styled-components @6.0.5
* sweetalert2 @11.7.20
* vite-plugin-svgr @3.2.0

## Getting Start

1. Clone the project to local, enter:

```
git clone https://github.com/tonia83731/ZAKKI-vite.git
```

2. Go into the project(cd), later enter to install npm:

```
npm install
```

3. Start the project by enter:

```
npm start
```

4. If you wish to end the project, enter:

```
ctrl + c
```

## For Future Development

This is for future development, will not include in current project

* User can see website in different language
* User can login/signup for ZAKKI's member

