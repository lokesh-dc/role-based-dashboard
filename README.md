# GG-Dashboard: Task Management Application

GG-Dashboard is a full-stack web application built with Next.js and MongoDB that provides a clean and efficient interface for managing your daily tasks. It features user authentication, a main dashboard to view and manage todos, and statistics to track your productivity.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** JWT-based authentication with cookies

## Features

- User signup and login
- Secure, cookie-based session management
- A central dashboard to view all tasks
- Statistics for total and completed tasks
- A clean, modern, and responsive user interface

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running [MongoDB](https://www.mongodb.com/try/download/community) instance (local or cloud-hosted)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd gg-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of the project and add the following variables.

    ```env
    # Your MongoDB connection string
    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

    # The public URL of your application
    NEXT_PUBLIC_API_PUBLIC_URL=http://localhost:3000
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Future Enhancements & Advanced Features

This project has a solid foundation, but there are many ways it could be extended. Here are some ideas for future development:

### Core Feature Enhancements

-   **Task Priorities:** Implement priority levels for tasks (e.g., Low, Medium, High) with corresponding UI indicators.
-   **Due Dates & Reminders:** Add a date picker to assign due dates to tasks and implement email or in-app notifications.
-   **Advanced Filtering & Sorting:** Allow users to filter tasks by status (pending, completed), priority, or due date. Add sorting options for different fields.
-   **Search Functionality:** Add a search bar to quickly find specific tasks by title or description.
-   **Task Categories/Tags:** Enable users to create and assign tags or categories to tasks for better organization.

### Advanced Functionality

-   **Real-time Updates:** Integrate WebSockets (e.g., using Socket.io) to enable real-time updates across different devices or browser tabs without needing to refresh.
-   **Drag-and-Drop Reordering:** Allow users to reorder their tasks intuitively using a drag-and-drop interface.
-   **User Profile Management:** Create a dedicated page for users to update their profile information, such as name, password, or profile picture.
-   **Collaboration & Sharing:**
    -   Allow users to create multiple task lists.
    -   Implement functionality to share lists with other users for collaborative task management.
-   **Analytics Dashboard:** Create a separate analytics page with charts and graphs visualizing user productivity, such as tasks completed over time or distribution of tasks by priority.

### UI/UX Improvements

-   **Dark Mode:** Add a toggle to switch between light and dark themes.
-   **Animations & Transitions:** Incorporate subtle animations to improve the user experience when adding, completing, or deleting tasks.
-   **Empty States & Onboarding:** Design helpful empty states for when there are no tasks and create a simple onboarding flow for new users.