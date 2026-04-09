import type { Assignment } from "@/components/dashboard/assignment-card"
import type { Announcement } from "@/components/dashboard/announcement-card"

export const assignments: Assignment[] = [
  {
    id: "1",
    title: "Digital Citizenship Reflection Essay",
    dueDate: "Apr 10, 2026",
    dueTime: "11:59 PM",
    status: "upcoming",
    type: "Essay",
    points: 100,
  },
  {
    id: "2",
    title: "Week 10 Discussion Post: Online Privacy",
    dueDate: "Apr 8, 2026",
    dueTime: "11:59 PM",
    status: "overdue",
    type: "Discussion",
    points: 20,
  },
  {
    id: "3",
    title: "Creative Project - Part 1",
    dueDate: "Apr 15, 2026",
    dueTime: "11:59 PM",
    status: "upcoming",
    type: "Project",
    points: 150,
  },
  {
    id: "4",
    title: "DT Quiz: Chapter 8",
    dueDate: "Apr 5, 2026",
    dueTime: "11:59 PM",
    status: "graded",
    type: "Quiz",
    points: 25,
    grade: 23,
  },
  {
    id: "5",
    title: "Week 9 Discussion Post: Digital Equity",
    dueDate: "Apr 1, 2026",
    dueTime: "11:59 PM",
    status: "submitted",
    type: "Discussion",
    points: 20,
  },
  {
    id: "6",
    title: "Midterm Exam",
    dueDate: "Mar 15, 2026",
    dueTime: "2:00 PM",
    status: "graded",
    type: "Exam",
    points: 200,
    grade: 178,
  },
]

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Assignment 3 Deadline Extended",
    excerpt: "Due to the technical issues with the submission portal yesterday, I am extending the deadline for Assignment 3 by 48 hours. The new deadline is April 12th at 11:59 PM.",
    date: "Today",
    author: "Dr. Claudia Sicondolfo",
    isPinned: true,
    isNew: true,
  },
  {
    id: "2",
    title: "Office Hours Cancelled - April 9th",
    excerpt: "Please note that my office hours on April 9th are cancelled due to a faculty meeting. Alternative office hours will be available on April 10th from 2-4 PM.",
    date: "Yesterday",
    author: "Dr. Claudia Sicondolfo",
    isNew: true,
  },
  {
    id: "3",
    title: "Guest Speaker Next Week: Digital Rights Advocate",
    excerpt: "We will have a special guest speaker next week - Maya Rodriguez, a digital rights advocate from the Electronic Frontier Foundation. Please come prepared with questions!",
    date: "Apr 5",
    author: "Dr. Claudia Sicondolfo",
  },
  {
    id: "4",
    title: "Study Guide Posted for Final Exam",
    excerpt: "The study guide for the final exam has been posted under Course Materials. It covers all topics from Weeks 1-12. Please review and bring any questions to office hours.",
    date: "Apr 3",
    author: "Dr. Claudia Sicondolfo",
  },
  {
    id: "5",
    title: "Reminder: Group Project Sign-ups",
    excerpt: "Don't forget to sign up for your final project groups by this Friday. Groups of 3-4 students are required. Use the sign-up sheet in the Discussions section.",
    date: "Apr 1",
    author: "Dr. Claudia Sicondolfo",
  },
]

export const deadlineItems = [
  {
    id: "2",
    title: "Week 10 Discussion Post",
    type: "discussion" as const,
    dueDate: "Apr 8",
    dueTime: "11:59 PM",
    isToday: true,
  },
  {
    id: "1",
    title: "Reflection Essay",
    type: "assignment" as const,
    dueDate: "Apr 10",
    dueTime: "11:59 PM",
    isTomorrow: false,
  },
  {
    id: "3",
    title: "Accessibility Audit - Part 1",
    type: "assignment" as const,
    dueDate: "Apr 15",
    dueTime: "11:59 PM",
  },
  {
    id: "7",
    title: "Chapter 9 Reading",
    type: "reading" as const,
    dueDate: "Apr 12",
    dueTime: "Class time",
  },
  {
    id: "8",
    title: "Module 11 Quiz",
    type: "quiz" as const,
    dueDate: "Apr 18",
    dueTime: "11:59 PM",
  },
]

export const courseMaterials = [
  {
    id: "1",
    title: "Week 10: Online Privacy & Data Protection",
    type: "module",
    items: [
      { id: "1-1", title: "Lecture Slides: Privacy in the Digital Age", type: "slides" },
      { id: "1-2", title: "Reading: Chapter 10 - Data Protection Laws", type: "reading" },
      { id: "1-3", title: "Video: GDPR Explained", type: "video", duration: "15 min" },
      { id: "1-4", title: "Activity: Privacy Policy Analysis", type: "activity" },
    ],
  },
  {
    id: "2",
    title: "Week 9: Digital Equity & Access",
    type: "module",
    items: [
      { id: "2-1", title: "Lecture Slides: The Digital Divide", type: "slides" },
      { id: "2-2", title: "Reading: Chapter 9 - Equity in Technology", type: "reading" },
      { id: "2-3", title: "Case Study: Rural Internet Access", type: "reading" },
    ],
  },
  
  {
    id: "3",
    title: "Week 8: Accessible Design Principles",
    type: "module",
    items: [
      { id: "3-1", title: "Lecture Slides: WCAG Guidelines", type: "slides" },
      { id: "3-2", title: "Reading: Chapter 8 - Universal Design", type: "reading" },
      { id: "3-3", title: "Tutorial: Screen Reader Testing", type: "video", duration: "22 min" },
    ],
  },
  {
    id: "4",
    title: "Course Resources",
    type: "resources",
    items: [
      { id: "4-1", title: "Syllabus - SOC 224 Winter 2026", type: "document" },
      { id: "4-2", title: "Assignment Rubrics", type: "document" },
      { id: "4-3", title: "APA Citation Guide", type: "document" },
      { id: "4-4", title: "Writing Center Resources", type: "link" },
    ],
  },
]

export const courseInfo = {
  code: "SOC 224",
  title: "Digital Citizenship and Learning Technologies",
  instructor: "Dr. Claudia Sicondolfo",
  term: "Winter 2026",
  university: "University of Alberta",
  credits: 3,
  schedule: "Mon/Wed 10:00 AM - 11:20 AM",
  location: "York Markham Building",
}
