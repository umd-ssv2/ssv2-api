const time =
  new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

//TODO: Get actual time signature of upload

const CMSC131 = {
  id: "CMSC131",
  instructor: "Anwar Mamat",
  description: "Object-Oriented Programming I",
  projects: [],
};

const CMSC132 = {
  id: "CMSC132",
  instructor: "Fawzi Emad",
  description: "Object-Oriented Programming II",
  projects: [
    {
      projid: 1,
      title: "Project 1",
      due: "3/19/2020",
      submissions: [
        {
          dirid: "tbeal",
          ts: time,
        },
      ],
    },
  ],
};

const CMSC216 = {
  id: "CMSC216",
  instructor: "Nelson Padua-Perez",
  description: "Introduction to Computer Systems",
  projects: [
    {
      projid: 1,
      title: "Project 1",
      due: "3/19/2020",
      submissions: [],
    },
    {
      projid: 2,
      title: "Project 2",
      due: "3/19/2020",
      submissions: [
        {
          dirid: "kbeal",
          ts: time,
        },
        {
          dirid: "tbeal",
          ts: time,
        },
        {
          dirid: "tbeal",
          ts: time,
        },
        {
          dirid: "tbeal",
          ts: time,
        },
      ],
    },
  ],
};

const courses = {
  2020: {
    winter: [],
    spring: [CMSC132, CMSC216],
    summer: [CMSC131, CMSC132, CMSC216],
    fall: [CMSC131, CMSC216],
  },
  2019: {
    winter: [],
    spring: [],
    summer: [],
    fall: [],
  },
};

const students = [
  {
    dirid: "tbeal",
    courses: courses,
  },
  {
    dirid: "kbeal",
    courses: courses,
  },
];

module.exports = students;
