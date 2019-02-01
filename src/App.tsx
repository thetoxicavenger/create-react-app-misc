import React, { Component } from 'react';
import InstructorsList from './components/InstructorsList'
import { AppState } from './types'

// const posts = [{
//   id: 0,
//   title: "Hey my vacay was great!",
//   body: "Lorem ipsum....",
//   comments: [{
//     id: 0,
//     comment: "It looks amazing",
//     replies: [{
//       id: 0,
//       text: "Yeah it does!" // need to edit ths text
//     }]
//   }]
// }]

// "No it doesn't!"
// id = 0
// const updatedPosts = posts.reduce((acc, post) => {
//   if (post.id === id) {
//     return {
//       ...post,
//       comments: post.comments.reduce() // if the id of the comment matches the one the user clicked on
//     }
//   }
// }, [])

// 
// const myName : string = "Mitchell Cravens"
// type instructors = {
//   id: number,
//   firstName: string,
//   lastName: string,
//   role: string,
//   skills: array,
//   tenure : array
// }
// const instructors = [{
//   id: 0,
//   firstName: "Jeff",
//   lastName: "Klier",
//   role: "Associate Web Development Instructor",
//   skills: ["java", "javascript", "sql"],
//   tenure: "3 years",
// }]

// interface Instructors {
//   byId: {};
//   allIds: number[];
// }




class App extends Component<{}, AppState> {
  state: AppState = {
    instructors: [
      {
        id: 0,
        firstName: "Jeff",
        lastName: "Klier",
        role: "Associate Web Development Instructor",
        skills: ["java", "javascript", "sql"],
        tenure: "3 years",
      },
      {
        id: 1,
        firstName: "Mitch",
        lastName: "Cravens",
        role: "Associate Web Development Instructor",
        skills: ["javascript", "sql", "nosql"],
        tenure: "4 months",
      },
      {
        id: 2,
        firstName: "John",
        lastName: "Armbruster",
        role: "Associate Web Development Instructor",
        skills: ["java", "c#", "react"],
        tenure: "2 years",
      },
      {
        id: 3,
        firstName: "Troy",
        lastName: "Amelotte",
        role: "Associate Web Development Instructor",
        skills: ["devops", "python", "ruby"],
        tenure: "2 years",
      },
      {
        id: 4,
        firstName: "Nick",
        lastName: "D'Errico",
        role: "Resident Instructor",
        skills: ["javascript", "vue", "angular"],
        tenure: "1 year",
      },
    ]
  }
  // state = {
    // instructors: {
    //   byId: {
    //     0: {
    //       id: 0,
    //       firstName: "Jeff",
    //       lastName: "Klier",
    //       role: "Associate Web Development Instructor",
    //       skills: ["java", "javascript", "sql"],
    //       tenure: "3 years",
    //     },
    //     1: {
    //       id: 1,
    //       firstName: "Mitch",
    //       lastName: "Cravens",
    //       role: "Associate Web Development Instructor",
    //       skills: ["javascript", "sql", "nosql"],
    //       tenure: "4 months",
    //     },
    //     2: {
    //       id: 2,
    //       firstName: "John",
    //       lastName: "Armbruster",
    //       role: "Associate Web Development Instructor",
    //       skills: ["java", "c#", "react"],
    //       tenure: "2 years",
    //     },
    //     3: {
    //       id: 3,
    //       firstName: "Troy",
    //       lastName: "Amelotte",
    //       role: "Associate Web Development Instructor",
    //       skills: ["devops", "python", "ruby"],
    //       tenure: "2 years",
    //     },
    //     4: {
    //       id: 4,
    //       firstName: "Nick",
    //       lastName: "D'Errico",
    //       role: "Resident Instructor",
    //       skills: ["javascript", "vue", "angular"],
    //       tenure: "1 year",
    //     },
    //   },
    //   allIds: [0, 1, 2, 3, 4]
  //   }
  // }
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Skills</th>
            <th>Tenure</th>
          </tr>
          <InstructorsList instructors={this.state.instructors} />
        </table>
      </div>
    );
  }
}

export default App;
