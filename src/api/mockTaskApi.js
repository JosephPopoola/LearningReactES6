import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tasks = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    complete: "false"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    complete: "false"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    complete: "false"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    complete: "false"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    complete: "false"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (task) => {
  return replaceAll(task.title, ' ', '-');
};

class taskApi {
  static getAlltasks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks));
      }, delay);
    });
  }

  static savetask(task) {
    task = Object.assign({}, task); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const mintaskTitleLength = 1;
        if (task.title.length < mintaskTitleLength) {
          reject(`Title must be at least ${mintaskTitleLength} characters.`);
        }

        if (task.id) {
          const existingtaskIndex = tasks.findIndex(a => a.id == task.id);
          tasks.splice(existingtaskIndex, 1, task);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new tasks in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          task.id = generateId(task);
          tasks.push(task);
        }

        resolve(task);
      }, delay);
    });
  }

  static deletetask(taskId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOftaskToDelete = tasks.findIndex(task => {
          task.id == taskId;
        });
        tasks.splice(indexOftaskToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default taskApi;