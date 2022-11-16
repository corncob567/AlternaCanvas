# How to run

install node v14  
npm i  
npm start  

# Baranvas Documentation
Members: _Daniel Hackney, Alex Mills, Liz Tremblay, Baru Yogesh_

## Initial Requirements
Main goal: Create a tool for dialogue between students and instructors.  

Subgoals (ideal):
- Users can create conversations around assignments or other course content
- Users can access a public & private forums with the class or the professor, or their team (respectively)
- Users will be able to tag messages with a particular assignment or module
- Users can privately message students or groups
- Users @ message individuals or teams

## Interview Findings

Prior to the design on this project, each team member conducted two interviews to gather understanding about what people think of Canvas. The following interview questions were asked, and the responses to these questions are provided below:

1. What do you use Canvas for the most? (Followed up with ‘why’ and clarify which functions are used most)
2. What functions do you use the least? What functions are frustrating to use, if any?
3. How do you communicate questions and confusion with their professor?
4. How do you prefer to interact with content and individuals in class?
5. Are you satisfied with the current communication functions on Canvas? If not, how do you think they could be improved? What makes them good/bad?


Daniel (Interview 1):  
- Check assignments, generally in Modules to get notes, checking grades
- To-do list is basically never used (since it lumps in announcements from the professor with actual assignments), never uses built-in email system, didn’t know calendar existed but agrees it is cool, rarely uses groups
- 90% of the time Outlook email is used, sometimes video conferences or in-person communication is required.
- GroupMe is frequently used, sometimes direct messages through text (less frequent since people don’t always like giving out their phone numbers)
- Having an easily accessible group chat within Canvas would be nice - especially for team projects. Would prefer the chat to be private to just the group members (no fear of stuff being seen by the professor or other students). Inbox system is so terrible, and nothing will convince them to use it over Outlook.

Daniel (Interview 2):  
- Checking class notes, viewing assignments and due dates
- History tab, inbox tab, group communication is only useful when you don’t know how else to communicate with someone
- Outlook (finding email through Canvas)
- Text messages or Discord, canvas messaging isn’t good for real-time messaging (it is good for forum-type communication though)
- They are alright, but it wouldn’t be my only choice. Making it more streamlined and real-time would be more reliable. It feels too much like email.

Baru (Interview 1):  
- Calendar feature, lays out HW schedule, what's due etc
- Inbox, usually use emails to talk to professor, assignments don't show on calendar at sometimes, requires u to look at page, “hidden page”
- Mainly email
- Group chat on groupme, google office for essays. Prefer to work async, meet to sync 
- “It does the job”, discussion posts aren't fun but the feature is fine.

Baru (Interview 2):  
- Check for assignments; use the calendar. Grades page
- Inbox, doesn't always come to the email folder. groups/orgs are combined with classes
- Email, in person after class
- School onedrive to share files, teams for virtual meetings. Regular meetings with regular work
- Inbox is bad, discussion board is underutilized, but is a good feature

Liz (Interview 1):  
- Checking assignments and grades, looking back at course materials, getting updates on assignments
- The pages and modules functions are almost the same but they’re different for whatever reason. Modules are organized better so they should dissolve the Pages tab. I don’t use the updates tab since it's all combined updates. I usually only look at updates per class.
- I send them an email normally or talk to them after class
- It would be nice to message people on Canvas through the people page. I hate that you can’t see emails when you’re put into groups. 
- There really aren't any communication functions that I’m aware of. You only really get announcements from professors which are one-sided so I guess no?

Liz (Interview 2):  
- Getting updates on assignments and turning in assignments
- The syllabus tab is useless since not a lot of professors use it, I also don’t use the notifications tab much since it's pretty much the “to-do” tab
- Send the professor an email or talk to them after class. Also talks to TA via email too
- I like using Discord or Teams for calls. Then we can voice call or video call and react to messages and whatnot. It makes for more efficient work
- I like that you can respond to announcements via email if they come in your inbox but I already just use GroupMe or text for project work. If Canvas had any communications function, I don’t know that I’d use it anyway.

Alex (Interview 1):  
- I primarily use canvas to access course content and submit assignments.
- I have never used some of the tabs at the bottom, like “chat” or “collaborations”, and many of these seem to never be used by any class.
- I always just send them an email, or ask them in person if I happen to have the chance.
- I usually use email to start the conversation with team members; especially during covid when I did not see them in person, and from there we just make a group chat.
- I am pretty satisfied with Canvas how it is. It is much better than blackboard. I think the only main complaint that I have is that teachers do not use it consistently and put their content in much different places. For example, some just put everything in docs under pages, while others use the modules tabs to make everything divided by week. This can be extremely frustrating and confusing.

Alex (Interview 2):  
- To turn in assignments and check due dates.
- Besides the main functions such as assignments, modules, and pages, the extra tabs at the bottom are pretty much never used, except maybe “echo 360” for some hybrid classes I have taken.
- I send an email or attend office hours if I need extended help.
- I have always used group chats, either over iMessage or GroupMe. 
- My biggest complaint is that teachers use it in much different ways to organize their courses. I often have a hard time trying to figure out where a teacher put their slides or zoom links for a class, and there really needs to be less options so there is more consistency between all of our classes.

## Contextual Inquiry Notes

For our contextual inquiries, we observed two individuals as they accessed Canvas and navigated the system. We thought it would be helpful to have the people we observed simply talk through their thought processes and specify any frustrations or preferences as they went about their work. If they did anything particularly interesting, we would ask about why they chose to do it that way. The following are our observations:

Contextual Inquiry 1 Notes:
- User is checking grades and upcoming assignments for 2 classes, doesn’t navigate to the calendar at any point, rather just goes to the class then the “Assignment” tab for each course.
- User always needs to spend an extra step clicking away from the course syllabus page, which is the default for both of the courses.
- User checks the average grade for the assignments for both courses.
- User doesn’t use Canvas to communicate with teammates - prefers to use a Discord group chat.

Contextual Inquiry 2 Notes:
- User opens calendar to view all of their assignments at once
- User selects an assignment but then navigates to module section to gain the full info on the assignment
- User opens discord to discuss with classmates about group assignment

## Survey Results

The following [survey results](https://docs.google.com/forms/d/1U4Fa1motRzKF2liUU1iyU8bS-pHGopvPX86E_N0U2MU/edit#responses) were collected prior to the creation of this project. They were used to guide our implementation direction, which was to facilitate better communication between students, their peers, and their professors throughout the application.

## Interface Description

Baranvas, is a Canvas alternative that facilitates better communication between users, their peers, and members of faculty. With this in mind, we divide user's screens into 4 primary columns:  

1. Course Selection - this column contains three distinct functions: switching between users (for the purposes of demonstration, this can be done by clicking the Baranvas logo and selecting an account name), selecting what course you want to navigate and view chats for, and adding additional courses through a modal that pops up when the plus button is selected. Typing in a valid courseid (only 'seniordesign' works for our initial implementation), will add this course to the selection column.

![Course Select Panel](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/CourseSelector.png)
![Change User Dropdown](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/ChangeUserDropdown.png)
![Add Course Popup](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/AddCoursePopup.png)

2. Course Navigation - this column allows users to navigate to various pages and chats specific to the course they have selected. It also contains basic information about the course at the top.

![Course Navigation Panel](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/CourseNavBar.png)

3. Page View - the meat and potatoes of our website lies in the page view. It displays whatever page was selected from the course navigation bar. We have 5 pages, outlined below:

- Syllabus Page - Simply displays the dyllabus for the course.

![Syllabus Page](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/SyllabusPage.png)

- Assignments Page - Allows users to access a list of each assignment for that course, with assignment names and due dates shown. Selecting an assignment will navigate the user to the assignment's submission/detail page. On this page, users can read the assignment info and submit either a file or text entry for the assignment.

![Assignment Page](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/image.png)
![Assignment Detail Page](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/AssignmentDetail.png)
![Assignment Submission](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/AssignmentSubmission.png)

- Grade Page - Allows users to view their current grades for the course, including their per-assignment grade breakdown and a table showing the weighting scheme the professor uses.

![Grade Page](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/GradesPage.png)

- Modules Page - Allows users to easily access course materials in one space. It includes links to assignments and downloads for presentation materials grouped into professor-defined dropdowns/modules.

![Module Page](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/ModulesPage.png)

- Announcements Page - Displays a listing of announcements made by the course professor. The recent announcements are highlighted to draw attention to them.

![Announcement Page](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/AnnouncementsPage.png)

- Zoom Page - Displays a listing of Zoom meetings scheduled for the course (if any). This is intended to replicate what Zoom integration would look like.

![Zoom Page](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/ZoomPage.png)


4. Chat Panel - To facilitate an ongoing conversation between users, the rightmost panel is reserved for live chats specified by the chat channel chosen in the course navigation bar under the 'Chat' section. The user can submit text which will display alongside replies from other users in those chats. Going to an assignment and clicking on the dialog bubble will open the assignment's specific chat. This way, relevant info for an assignment in confined to that assignment's chat.

![Chat Panel](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/ChatPanel.png)
![Chat Select Section](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/screenshots/ChatSelectPanel.png)

## Demo Video

https://streamable.com/ndrtti

## Sketches

### Design Exploration

![Notifications Panel Sketches](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/designs/NotificationsPanel.JPG)
![Chat Member Panel Sketches](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/designs/ChatMemberPane.JPG)
![Chat Dialog Bubble Sketches](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/designs/ChatDialogBubbles.JPG)
![Course Navigation Sketches](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/designs/CourseNav.JPG)
![Course Select Sketches](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/designs/CourseSelect.JPG)

### Storyboard

![Storyboard](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/designs/storyboard.jpg)

### Prototype Interface Designs

![Digital Design 1](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/designs/Design%201.png)
![Digital Design 2](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/designs/Design%202.png)
![Digital Design 3](https://github.com/corncob567/AlternaCanvas/blob/main/src/assets/designs/Design%203.png)

## Division of Work
- Alex: Grades Page, chat select styling
- Baru: All chat functionality, timestamps, state management, minor chat styling, user switching, demo video
- Daniel: Basic layout, Modules Page, Syllabus Page, Zoom Page, Announcements Page, styling and documentation, bug fixes
- Liz: Design mockups, add course functionality, course selector, Assignments page and detail view, site routing, styling
