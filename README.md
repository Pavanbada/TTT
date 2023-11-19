Project Name:- TTT Stories
Project Overview:-
The TTT Stories project is a React application that showcases a collection of blog posts written by Pavan
Bada, co-founder of PP INFOTECH. These posts delve into various topics related to the company's work,
its commitment to generative AI, and the advantages of working there.
Key Features:-
- A comprehensive list of posts
- Detailed information for each post, including title, body, author, date, and view count
- A navigation bar with a link to the Courses section
- Responsive design that adapts seamlessly to different screen sizes
Technologies Used:-
- React: The core JavaScript library for building user interfaces
- Next.js: A framework that extends React's capabilities, enabling server-side rendering and static site
generation
- JavaScript: The primary scripting language for web development
- HTML: The markup language for defining the structure and content of web pages
- CSS: The style sheet language for controlling the appearance of web pages
Preview:-
![image](https://github.com/Pavanbada/TTT/assets/128687789/5eba8e79-2bb1-44b8-90ec-bb16dbe1f179)

Usage:-
1. Open the application in your web browser.
2. Browse the list of posts.
3. Click on a post to read it in full.
4. Click on the Courses button to learn more about TTT's courses.
Overall Structure:-
The code consists of four main components: `App`, `Profile`, `Post`, and `Navbar`. Each component is
responsible for rendering a specific part of the application's user interface.
App Component:-
The `App` component is the main entry point for the application. It renders the overall layout of the
application, including the navigation bar, profile section, and post list.
Navigation Bar: The navigation bar is rendered using the `Navbar` component. It displays the
application's title and a button to navigate to the Courses section.
Profile Section: The profile section is rendered using the `Profile` component. It displays information
about the author of the blog posts, including their name, profile picture, follower count, and a link to
their LinkedIn profile.
Post List: The post list renders each blog post using the `Post` component. Each post displays the title,
body, author name, date, and number of views.
Profile Component:-
The `Profile` component renders the profile section of the application. It uses the `Image` component
from the `next/image` package to display the author's profile picture. It also includes links to the
author's LinkedIn profile and social media accounts.
Post Component:-
The `Post` component renders a single blog post. It displays the title, body, author name, date, and
number of views. It uses a simple footer to indicate the author and publication date.
Navbar Component:-
The `Navbar` component renders the application's navigation bar. It uses a simple black background
with white text and a button to navigate to the Courses section.
