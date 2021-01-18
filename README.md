# Hack the North 2021 Submission

Check out the demo [here](https://when-vaccine.herokuapp.com/)!

A web app allowing users to recieve an estimated date for receiving the COVID-19 vaccine. Built with a React.js frontend and an Express.js backend. The backend uses specifications listed in the COVID-19 Vaccination Update released by the government of Ontario [here](https://files.ontario.ca/moh-covid-19-vaccine-technical-briefing-en-january-13-2021-2021-01-13.pdf)

## Collaborators:
This project was made for Hack the North 2021. It was a collaborative effort between four members. 

- [Dhruv R.](https://github.com/Pop0097)
- [Jimmy H.](https://github.com/huynhj02)
- [Justin L.](https://github.com/leungjch) (Owner of the repository)
- [Uzair A.](https://github.com/Uzair5162)

## Build/Running

### Start the server
1. cd into the project directory
2. Run `npm install` to install dependencies.
3. Run `npm run start` to get the back end started!

### Start the client
1. cd into the project directory.
2. cd into the client directory: `cd client`.
3. Run `npm install` to install dependencies.
4. Run `npm run start` to start the front end!

# Hackathon Formalities

## Inspiration

With COVID-19 extending its wrath into 2021, a lot of us are losing patience as we wait our turn for the vaccine. We decided to channel this energy into building a web app that could tell us when we would be able to receive our dose. We also considered the potential such an app has to ease the burden on our front-line workers and at-risk population as it provides a quick way for them to organize themselves while governments worldwide execute their distribution plans.

## What it does

“When Vaccine?” crowdsources data pertaining to users’ occupation, type of residence, the health and age of their family, and their own health and identity. Using this information, When Vaccine? then uses an algorithm designed around Ontario’s [COVID-19 Vaccination Update](https://files.ontario.ca/moh-covid-19-vaccine-technical-briefing-en-january-13-2021-2021-01-13.pdf) from January 13, 2021 to determine which month and phase the user will have the opportunity to become vaccinated. 

The website stores the form inputs and algorithm results in a MongoDB cluster. Using the information, When Vaccine? creates graphs that users can view on the website to see trends in the collected data. As these graphs are based on data aggregated from the website, it becomes more accurate as more people use the website.

It is important to note that the website does not store any identifying information, so all submissions are anonymous.

## How we built it

The front end of the website was built using React.js, CSS, and Bootstrap, while the graphs were made using Chart.js. MongoDB was chosen as the database and we connected to it using Node.js and Express.js. The algorithm that determines when the user will become vaccinated was programmed in JavaScript.

## Challenges we ran into

The challenges that we faced mainly fell under the following two categories:
1. Decision-making:
    - Coming up with a way to determine the relative vaccine priority between different users 
    - Accounting for user confidentiality/anonymity while providing visualized feedback from the data
    - Wireframing an interface that presents the long and somewhat intimidating form in an elegant and inviting way
    - Incorporating all the factors included in Ontario’s COVID-19 Vaccination Update

2. Technical:
    - Translating the Ontario’s Vaccination Plan into an algorithm that maintains the plan’s focuses
    - Determining the user’s rank among all responses by fetching from the database
    - Integrating with the right type of database
    - Connecting the React.js frontend with the Express.js and Node.js backend and communicating data between the two
    - Finding the right framework for presenting the charts on the data page

## Accomplishments that we are proud of

We are proud to have created a clean and intuitive website that informs users about their vaccination dates via a custom algorithm. We are also proud to have created a way to aesthetically and concisely express our collected data. Moreover, we are pleased to have created a project that featured both a front and back end. 

## What we learned

Prior to completing this project, many of our members hadn’t used a JavaScript framework before. Despite this, we managed to integrate not one, but three frameworks to create a neat and fully functional application. Additionally, many of our members got exposed to back-end programming and creating graphs for the first time. We were also left with key learnings in the collaborative software development process, especially when working on multiple functionalities simultaneously. All in all, this project included many firsts and we are proud to have created it in a short period of time.

## What's next for When Vaccine?

While we are satisfied with our product, we definitely have a lot that we can expand on if given the chance. Currently, When Vaccine?’s algorithm is solely designed around Ontario’s COVID-19 Vaccination Update and we recognize that other regions may have different plans. Adding the ability to provide accurate region-based results in all parts of Canada would make the app useful for a larger population. Additionally, working to improve the accuracy of the algorithm and provide more graph options would make the website more helpful. Moreover, integrating the app with the medical clinics administering the vaccine could allow for us to provide specific dates as opposed to just the month in which the user can expect to receive the vaccine.
