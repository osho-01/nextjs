#  Next.js Assessment - React.js Developer

##  Project Overview  
This is a Next.js project built as part of the assessment for the React.js Developer role at Basic Enterprises Pvt. Ltd. The project follows the given requirements, including **SSG (getStaticProps)** for the home page and **SSR (getServerSideProps)** for the post detail page.

---

##  Features Implemented  
- **Next.js 15 Setup**  
- **Home Page (SSG) - Fetch posts using `getStaticProps`**  
- **Post Detail Page (SSR) - Fetch post details using `getServerSideProps`**  
- **Search Functionality (Client-side Filtering)**  
- **Reusable UI Component (PostCard)**  
- **Styled with CSS Modules**  
- **Unit Testing with Jest & React Testing Library**  

---

##  **Approach Taken**  
- **Used `getStaticProps`** for faster initial load on the home page.  
- **Used `getServerSideProps`** for real-time data on the post detail page.  
- **Created a reusable `PostCard` component** to maintain clean code.  
- **Added client-side search functionality** for a better user experience.  
- **Used CSS Modules for scoped styling.**  
- **Implemented Unit Testing using Jest and React Testing Library.**  

---

##  **Assumptions Made**  
 -**Used JSONPlaceholder API** as per the requirement.  
 -**Used `getStaticProps` for Home Page** (as per JD).  
 - **Used `getServerSideProps` for Post Detail Page** (as per JD).  
 -**Used Jest for Unit Testing** on the PostCard component.  

---

##  **How to Run the Project**  
1- **Clone the repository:**  

git clone https://github.com/osho-01/nextjs.git
 cd nextjs-assessment


2- Install dependencies:
 npm install

 3-Run the development server:
 npm run dev

 4-Visit: http://localhost:3000/

 5-How to Run Tests
  npm test
 This will run the unit tests using Jest and React Testing Library.

 6-Live Demo 

🔗 Live Project-https://nextjs-ddb2.vercel.app/
