const employees = [
  {
    id: 1,
    name: "John",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [{
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design" 
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "category": "Development"
            },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Update website",
        taskDescription: "Revamp the company homepage",
        taskDate: "2024-10-24",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Submit timesheet",
        taskDescription: "Submit weekly timesheet",
        taskDate: "2024-10-22",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Fix website bugs",
        taskDescription: "Resolve bugs reported on the company website",
        taskDate: "2024-10-23",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    name: "David Johnson",
    email: "david.johnson@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Design brochure",
        taskDescription: "Create new brochure design for marketing",
        taskDate: "2024-10-25",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Logo design update",
        taskDescription: "Revise company logo for the rebranding project",
        taskDate: "2024-10-20",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Create social media graphics",
        taskDescription: "Design new visuals for social media posts",
        taskDate: "2024-10-24",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Analyze survey data",
        taskDescription: "Analyze data from recent customer survey",
        taskDate: "2024-10-26",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare research report",
        taskDescription: "Summarize key findings from Q3 customer survey",
        taskDate: "2024-10-20",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare presentation for the upcoming sales meeting",
        taskDate: "2024-10-27",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Follow up with leads",
        taskDescription: "Reach out to potential clients post-webinar",
        taskDate: "2024-10-22",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Draft sales proposal",
        taskDescription: "Prepare a proposal for a potential new client",
        taskDate: "2024-10-25",
        category: "Sales",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Kushik",
    email: "admin@me.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  // Set initial data only if local storage is empty
  if (!localStorage.getItem("employees") && !localStorage.getItem("admin")) {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  // No need to call setLocalStorage here
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};

