# Welcome to WorkPro
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)
[![Generic badge](https://img.shields.io/badge/<Springboot>-<2>-<COLOR>.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/<React>-<16.7>-<COLOR>.svg)](https://shields.io/)

Using **Work pro** you can visually depict works of your project at various stages of a process using cards to represent project tasks and with columns to represent each stage of the process. Cards are moved from left to right to show progress

WorkPro is **Full-stack application** with **React**, **Redux** and **Spring Boot( JWT Authentication)** 

**Application Architecture** :
 Check the live site running on heroku with clever free tier msql db 
 here https://workp.herokuapp.com/
```mermaid
graph LR
X -- Spring Data mysql --> X
X -- Spring Web MVC --> X
X -- Spring Security --> X
X((Java spring-boot <br/> Back-end)) -->Y((Redux <br/> Store))

Y-->Z((React application <br/> Front-end))
```

Site is up and running on heroku here https://workp.herokuapp.com/
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://bitbucket.org/lbesson/ansi-colors)
