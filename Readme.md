### **README for WORDVERSE**

```markdown
# WORDVERSE

WORDVERSE is a full-stack blogging platform designed to provide a seamless and user-friendly experience for both readers and writers. With a rich set of features, it empowers users to explore, create, and manage blogs effortlessly.

---

## **Features**

### 🌟 **Landing Page**
- A beautifully designed, responsive landing page to captivate users and provide an overview of the platform.

### 🔑 **User Authentication**
- Secure JWT-protected authentication system.
- Features include:
  - Sign up
  - Sign in
  - Log out

### ✍️ **Blog Management**
- Explore blogs shared by others.
- Like and share blogs.
- Create and publish blogs using a feature-rich **Quill Rich Text Editor**:
  - Document-like formatting tools.
  - Seamless writing experience.
- Manage personal blogs:
  - Update and delete blogs from the `/myblogs` page.

### 🚀 **Tech Stack**
#### **Backend:**
- **Framework:** [Hono](https://hono.dev/)
- **Language:** Node.js with TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT-protected APIs
- **Input Validation:** Zod (published as `@darshanpm/wordverse` on npm)
- **Deployment:** Backend deployed on Cloudflare

#### **Frontend:**
- **Framework:** React
- **Styling:** Tailwind CSS
- **UI Components:** TSShadcn Magic UI
- **Text Editor:** Quill (Rich Text Editor)

---

## **Setup Instructions**

### Prerequisites
- Node.js (v16+)
- PostgreSQL (v14+)
- pnpm (preferred)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wordverse.git
   cd wordverse/backend
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the backend directory:
     ```plaintext
     DATABASE_URL=your_database_url
     JWT_SECRET=your_secret_key
     ```
4. Run migrations:
   ```bash
   pnpm prisma migrate dev
   ```
5. Start the development server:
   ```bash
   pnpm dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```

---

## **Contributing**
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## **Future Enhancements**
- Advanced search and filtering for blogs.
- Commenting system.
- User profiles with customizable avatars.
- Analytics for blog views and interactions.

---

## **License**
This project is licensed under the MIT License.

Let me know if you'd like to add anything else! 😊