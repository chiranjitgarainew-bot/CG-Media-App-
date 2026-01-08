
# Your Study Requirements Document (Final Version)

## 1. Application Overview

### 1.1 Application Name
Your Study\n
### 1.2 Application Description
A comprehensive educational web platform providing structured access to premium study materials, video lectures, notes, and PDFs across multiple classes and subjects. The platform features a hierarchical navigation system from classes to chapters to individual lectures, with an advanced custom video playback functionality, a complete admin panel control system, a flexible authentication system with auto-generated Student IDs, an advanced user profile management system, a private in-app messaging system for student communication, high-security authentication and authorization with batch-wise video protection, a robust Student Progress & Analytics system for real-time tracking and performance monitoring, an advanced Watch History & Resume system for seamless learning continuity, a powerful Notes & Highlight system for capturing and organizing key learning moments, an Announcement & Notice system for broadcasting important updates, a Coupon & Referral system for promotions and organic growth, a Device & Session Control system for enhanced security and account protection, an Advanced Lecture Management & Playback System with auto-generated lecture titles, video URL integration, thumbnail support, and custom video player, and a complete Batch Purchase & Payment System with multiple payment methods including special coupon override logic, QR code auto-success verification, UPI payment request, and PhonePe direct redirect.\n
## 2. Core Features
\n### 2.1 Admin Authentication & Security
\n#### 2.1.1 Admin Login (Initial Setup)
Initial Admin Credentials (for first-time setup only):
- Admin Email: chiranjit9734@gmail.com
- Admin Password: password\n\nSecurity Rules:
- Store admin password ONLY in hashed form (bcrypt/argon2)
- Force password change on first login
- Protect admin routes with role-based middleware
- No hardcoded credentials in frontend
\n#### 2.1.2 Admin Security Features
- Secure admin login system using Email + Password
- JWT or session-based authentication
- Admin-only protected routes
- Admin roles:\n  - Super Admin: full control over all system functions
  - Content Admin: content management only
- Logout, token expiry, and strict route protection
- All admin actions protected and secured
- Admin actions can be logged (optional)
- Security question during admin password reset and sensitive admin actions
- Optional 2-step verification for admin login

### 2.2 Authentication Guard (Global)

#### 2.2.1 Page Protection Rules
- Every page must be protected by authentication middleware
- No access allowed without valid login token/session
- Block direct URL access (deep links) without authentication
- Show login page if token/session is missing or expired
\nApplies to:\n- Study platform page
- Class page
- Subject page
- Chapter page
- Lecture page\n- Video player page
\n#### 2.2.2 Page-Level Security
- Subjects list visible ONLY after login
- Chapters visible ONLY if user has batch access
- Lecture list locked if batch not owned
- Video page unreachable without permission
\n### 2.3 Role-Based Access Control (RBAC)

Roles:\n- Admin\n- Student (Free)
- Student (Premium / Batch Owner)
\nRules:
- Admin: Full access\n- Student (Free): No video access
- Student (Batch Owner): Access ONLY purchased batch content

### 2.4 Advanced Authentication & Account Continuity System

#### 2.4.1 User Sign Up (No Student ID Required)
Signup fields:
1. Email Address
2. Password
3. Confirm Password
\nSign Up Rules:
- Email must be unique
- Password must be securely hashed (bcrypt/argon2)
- No Student ID input field shown to user
- On successful signup:\n  - System auto-generates a unique Student ID
  - Student ID is permanently linked to that account
  - Student ID is NOT editable by user
\nAuto Student ID Format (Example):
- YS-2026-000123
- Must be unique and non-guessable
\n#### 2.4.2 Auto Student ID Generation
System must:\n- Generate Student ID automatically at signup
- Store Student ID in database
- Link Student ID to: User account, Purchases, Progress, Messages, Profile data
\nStudent ID is:
- Visible in user profile (read-only)
- Used internally for all access control
\n#### 2.4.3 User Login\nLogin fields:
- Email\n- Password

Login Rules:
- Authenticate using Email + Password only
- If credentials are valid:
  - Restore full user session
  - Load all previous data linked to that account
\n#### 2.4.4 Account Continuity
On every successful login, system must restore:
- Purchased batches
- Premium access status
- Video watch history
- Progress (chapter percentage, lecture resume time)
- Saved notes / bookmarks
- Profile information
- Friend list & chat history

Rule:
- Data restoration is based on User ID / Student ID mapping
- No data loss even after logout or long inactivity
- Same email account → same data forever
- New account with different email → no old data

#### 2.4.5 Purchase & Batch Access Linking
When a user purchases a batch:
- Batch ID is linked to: User ID, Auto-generated Student ID\n- Purchase record stored permanently
\nOn next login:
- System checks purchase history
- Re-enables access to all purchased batches automatically
\n#### 2.4.6 Password Security
- Minimum password length: 8 characters
- Must support: Uppercase, Lowercase, Number\n- Password stored only in encrypted/hashed form
- Password reset via email (optional)

#### 2.4.7 Session & Token Management
- Generate secure JWT / session on login
- Token payload must include: User ID, Student ID, Role, Purchased Batch IDs
- Token expiry enforced
- Auto logout on invalid token
\n#### 2.4.8 Access Control
- No login → No page access
- No batch purchase → No video access
- User can only access their own purchased batches
- Direct URL access blocked without permission

#### 2.4.9 Security Rules
- Passwords never stored in plain text
- Rate limit login attempts
- Prevent duplicate account abuse
- Protect against session hijacking
- CSRF / XSS protection
- Lock account after multiple failures
- Prevent brute-force attacks

### 2.5 Advanced User Profile Edit & Management

#### 2.5.1 Profile Access & Security
- Profile page accessible only after login
- Profile routes protected by authentication
- Student can edit ONLY their own profile
- Admin can view/edit profiles from admin panel
- All profile updates require valid session

#### 2.5.2 Profile Basic Information
Editable fields:
- Profile Photo (upload or change)
- Full Name
- Username (unique, editable once)
- Email (view only or change with verification)
- Mobile Number
- Date of Birth (optional)
- Gender (optional)
\n#### 2.5.3 Academic Information
Editable fields:
- Student ID (read-only, auto-generated by system)
- Study Platform (auto-assigned)
- Current Class
- Stream (Science / Arts / Commerce, if applicable)
- Purchased Batches (view only)
\n#### 2.5.4 Account & Login Information
- Change Password\n- View last login time
- View account status (Active / Blocked)
- View premium status (Active / Expired)
- View purchased batches and expiry dates
- Logout from all devices (optional)

#### 2.5.5 Profile Settings & Preferences
Editable settings:
- Language preference
- Theme mode (Light / Dark)
- Notification preferences
- Autoplay video (On / Off)
\n#### 2.5.6 Profile Privacy Controls
User can control:
- Profile visibility (Public / Private)
- Show / hide email
- Show / hide mobile number
- Activity visibility (last seen, progress)

#### 2.5.7 Profile Progress & Activity (View Only)
- Recently watched lectures
- Last accessed chapter
- Course completion progress (percentage)
- Saved / bookmarked lectures (optional)

#### 2.5.8 Data Validation & Rules
- All inputs must be validated\n- Email changes require verification
- Password change requires old password
- Username uniqueness check mandatory
- Profile photo size & format restrictions

#### 2.5.9 Profile Update Flow
User edits profile → Client-side validation → Secure API request → Server-side validation → Database update → Success confirmation

#### 2.5.10 UI/UX Requirements
- Clean, modern profile layout
- Editable fields clearly marked
- Save / Cancel buttons\n- Loading indicators during update
- Error and success messages
\n#### 2.5.11 Security & Data Protection
- Protect against unauthorized profile access
- Prevent mass data editing
- Rate-limit profile update requests
- Encrypt sensitive data\n\n### 2.6 Advanced User Messaging & Friend Chat System

#### 2.6.1 Friend System
Users can:
- Send friend requests\n- Accept / Reject friend requests
- Remove friends
- Messaging allowed ONLY between accepted friends
- Blocked users cannot send messages

#### 2.6.2 Messaging Access Rules
- Messaging available only after login
- Only friends can start a chat
- No public or anonymous messaging
- Admin can block messaging for a user if required

#### 2.6.3 Chat Types
- One-to-One (Private Chat)
- No group chat (optional, future-ready)
\n#### 2.6.4 Chat Interface
Chat screen includes:
- Friend name & profile photo at top
- Online / Offline status indicator
- Scrollable message area
- Fixed message input box at bottom
\nMessage input supports:
- Text messages
- Emojis
- Basic formatting (optional)

#### 2.6.5 Message Features
Each message includes:
- Sender ID
- Receiver ID
- Message content
- Timestamp
- Read status (Sent / Delivered / Seen)
\nUser actions:
- Send message
- Delete message (for self only)
- Copy message text
\n#### 2.6.6 Real-Time Message Delivery
- Use WebSocket / real-time listener
- Messages delivered instantly
- Typing indicator (optional)
- Online presence detection (optional)

#### 2.6.7 Message Storage & Security
- Messages stored securely in database
- Messages linked to sender & receiver IDs
- No public access to messages
- Prevent message data leakage
- Optional end-to-end encryption support

#### 2.6.8 Chat List / Inbox
User inbox shows:
- List of friends with chat history
- Last message preview
- Unread message count
- Last message timestamp

#### 2.6.9 Notifications
- In-app notification for new messages
- Badge count for unread chats
- Push notification support (optional)

#### 2.6.10 Block & Report System
Users can:
- Block a friend (chat disabled immediately)
- Report a user for misuse
\nAdmin can:
- Review reports\n- Block chat access for users
- Delete abusive messages if required

#### 2.6.11 Admin Control Over Messaging
Admin can:
- Enable / Disable messaging globally
- Block messaging for specific users
- View reported chats (only if reported)
- Take action without accessing private chats directly

#### 2.6.12 Message Data Flow
User A sends message → Message validated → Stored securely → Delivered to User B in real-time → Read status updated

#### 2.6.13 Performance & UX Rules
- Fast message sending
- Smooth scrolling
- No message loss on network drop
- Auto-retry on failure

#### 2.6.14 Privacy Rules
- Messages are private by default
- No user can read others' messages
- Admin access limited to moderation only
- No indexing of private messages for search

### 2.7 Student Progress & Analytics System

#### 2.7.1 Progress Tracking Scope
Track progress at multiple levels:
- Video / Lecture level
- Chapter level
- Subject level
- Class level
- Batch level\n\nProgress must be:
- Automatic\n- Real-time
- Accurate\n- Persistent across sessions

#### 2.7.2 Video / Lecture Progress Tracking
For each lecture video, system must track:
- Total video duration
- Watched duration (in seconds)
- Last watched timestamp (resume point)
- Completion status: Not Started, In Progress, Completed
\nRules:
- Save progress every X seconds (e.g., every 10 seconds)
- Mark lecture as Completed only if watched ≥ 90% of video
- Resume video from last saved timestamp on next play

#### 2.7.3 Chapter Progress Calculation
Chapter progress must be calculated automatically:
- Chapter Progress (%) = (Completed Lectures / Total Lectures) × 100
\nChapter status:
- Not Started\n- In Progress
- Completed

#### 2.7.4 Subject Progress Calculation
Subject progress is derived from chapters:
- Subject Progress (%) = Average of all chapter progress percentages

Display:
- Progress bar per subject
- Completed / Remaining chapters count
\n#### 2.7.5 Class & Batch Progress
Class progress:\n- Average of all subject progress
\nBatch progress:
- Average of all class or subject progress linked to batch
- Used for: Certificate eligibility (future), Completion analytics\n
#### 2.7.6 Student Dashboard (User View)
Student must see:
- Overall learning progress (%)
- Continue Learning (last watched lecture)
- Recently watched lectures
- Subject-wise progress bars
- Chapter completion indicators

#### 2.7.7 Admin Analytics Dashboard
Admin must be able to view:
- Student-wise progress report
- Batch-wise completion statistics
- Class-wise average progress
- Subject-wise difficulty analysis
- Top active students
- Inactive / dropped students

#### 2.7.8 Activity & Engagement Metrics
Track:
- Daily watch time
- Weekly active users
- Lecture completion rate
- Drop-off points in videos (optional)
- Most replayed lectures

#### 2.7.9 Data Storage & Structure
Progress data must store:
- User ID
- Student ID
- Batch ID
- Class ID
- Subject ID
- Chapter ID
- Lecture ID
- Watched seconds
- Completion status
- Last updated timestamp

Ensure:\n- Indexed queries for fast access
- No duplicate progress records
- One progress record per user per lecture
\n#### 2.7.10 Login & Data Restore Integration
On every login:\n- Restore all progress data
- Resume last watched lecture automatically
- Sync progress across devices
\n#### 2.7.11 Access & Security Rules
- Only logged-in users can access progress data
- Users can see ONLY their own analytics
- Admin can view analytics of all users
- Progress APIs protected by authentication middleware

#### 2.7.12 Error Handling & Consistency
- Prevent progress loss on network failure
- Retry failed progress saves
- Ignore duplicate progress updates
- Gracefully handle video duration mismatch

#### 2.7.13 Performance Optimization
- Use background sync for progress updates
- Batch progress updates when possible
- Lightweight analytics queries
- Avoid heavy calculations on client\n
### 2.8 Advanced Watch History & Resume System

#### 2.8.1 Watch History Tracking
System must track for each user:
- User ID
- Student ID
- Batch ID\n- Class ID
- Subject ID
- Chapter ID
- Lecture ID\n- Video duration (seconds)
- Last watched timestamp (seconds)
- Total watched time
- Completion status\n- Last watched date & time

Rule:
- One watch history record per user per lecture
\n#### 2.8.2 Auto Save Mechanism
Save watch progress automatically:
- Every X seconds (e.g., every 10 seconds)
- On pause\n- On exit / tab close
- Use background sync for reliability
- Avoid excessive DB writes (debounce/throttle)

#### 2.8.3 Resume Playback Logic
When user clicks a lecture:
- Check if watch history exists
- If exists and not completed:
  - Resume video from last watched timestamp
- If completed:
  - Start from beginning or allow restart option

#### 2.8.4 Continue Watching Feature
Provide a Continue Watching section that shows:
- Last watched lecture
- Thumbnail / title\n- Resume button
- Progress bar indicator
\nDisplay this on:\n- Home page
- Student dashboard
\n#### 2.8.5 Completion Rules
Mark lecture as Completed only if:
- Watched ≥ 90% of total duration
\nOnce completed:
- Resume timestamp resets to 0 (optional)
- Mark visually as completed
\n#### 2.8.6 Cross-Device & Session Restore
- Watch history stored server-side
- On login:\n  - Restore last watched lecture
  - Sync resume timestamp across all devices
- Latest timestamp always overrides older ones

#### 2.8.7 Admin Visibility (Read-Only)
Admin can view:
- Lecture watch counts
- Average watch duration per lecture
- Drop-off points (optional)
- Top resumed lectures

Admin cannot:
- Modify individual user watch history directly
\n#### 2.8.8 Access & Security Rules
- Watch history accessible only after login
- Users can see ONLY their own history
- Watch history APIs protected by auth middleware
- Batch access validated before resume

#### 2.8.9 Data Integrity & Error Handling
- Prevent duplicate history records
- Handle video duration mismatch safely
- Retry failed save attempts
- Fallback to last valid timestamp

#### 2.8.10 Performance Optimization
Index watch history by:
- User ID
- Lecture ID\n- Use lightweight updates
- Minimize write frequency
- Cache recent watch data locally (optional)

### 2.9 Advanced Notes & Highlight System

#### 2.9.1 Notes Types
Support the following note types:
- Personal Notes (private to the student)
- Highlighted Notes (timestamp-linked)
- Admin Notes (optional, visible to all students in a batch)
\n#### 2.9.2 Video-Timestamp Linked Notes
- Allow students to add notes while video is playing
- Each note must be linked to:\n  - Lecture ID
  - Exact video timestamp (seconds)
- Clicking a note should:\n  - Jump video to that exact timestamp
  - Resume playback from there

#### 2.9.3 Highlight System
Students can highlight:
- Important moments in a lecture
- Key explanations or formulas
\nHighlight properties:
- Color (multiple options)
- Short title or tag
\nHighlights must appear:
- On video progress bar (small markers)
- In notes list\n\n#### 2.9.4 Note Creation & Editing
Students can:
- Add new notes
- Edit their own notes
- Delete their own notes
- Organize notes with:\n  - Tags
  - Titles
\nRule:
- Notes are auto-saved
- No page reload required
\n#### 2.9.5 Notes View & Management (Student Side)
Provide a Notes Panel that shows:
- All notes for the current lecture
- Filter by:\n  - Highlights only
  - Personal notes only
- Sort by:
  - Timestamp
  - Creation date
\n#### 2.9.6 Global Notes Library
Student can view all their notes across:\n- Classes
- Subjects
- Chapters
- Search notes by keyword
- Export notes as PDF (optional)

#### 2.9.7 Admin / Teacher Notes (Optional)
Admin can:\n- Add official notes to a lecture
- Pin important notes\n- Make notes visible to:\n  - Entire batch
  - Specific class

Admin notes must:\n- Be read-only for students
- Clearly marked as Official
\n#### 2.9.8 Data Storage & Structure
Each note record must store:
- Note ID
- User ID (nullable for admin notes)
- Batch ID\n- Class ID
- Subject ID
- Chapter ID
- Lecture ID
- Timestamp (seconds)
- Note content
- Highlight color (if any)
- Tags\n- Created at / Updated at

#### 2.9.9 Access & Security Rules
- Only logged-in users can create notes
- Users can access ONLY their own personal notes
- Admin notes visible only to authorized batches
- Notes APIs protected by authentication middleware

#### 2.9.10 Performance & UX Rules
- Notes panel must load instantly
- Lazy load notes for long lectures
- Smooth jump-to-timestamp behavior
- No video playback interruption when saving notes

#### 2.9.11 Error Handling & Data Safety
- Auto-retry note save on failure
- Prevent duplicate notes
- Offline note caching (optional)
- Sync notes when connection restores

### 2.10 Announcement & Notice System

#### 2.10.1 Admin Features
Admin can:
- Create announcements/notices
- Set announcement type:\n  - General
  - Batch-wise
  - Class-wise\n  - Subject-wise
- Set priority:
  - Normal
  - Important
  - Urgent
- Schedule:\n  - Immediate publish
  - Future publish
  - Expiry date
- Enable / Disable announcements
- Edit or delete announcements

#### 2.10.2 Student View
Students can see:
- Announcement banner on dashboard
- Notice list page
- Popup modal for urgent notices
\nRules:
- Only logged-in users can view notices
- Only relevant notices shown based on:
  - Purchased batch
  - Class\n  - Subject
\n#### 2.10.3 Data Fields
- Announcement ID
- Title
- Message body
- Target scope (global/batch/class/subject)
- Priority\n- Publish time
- Expiry time
- Created by (admin)\n- Status (active/inactive)

2.11 Coupon & Referral System
2.11.1 Coupon System (Admin)
Admin can:

Create coupon codes
Coupon properties:
Code
Discount type (percentage / flat)
Discount value
Max usage limit
Per-user usage limit
Valid start & end date
Applicable batches
Enable / Disable coupon anytime
2.11.2 Coupon Usage (Student)
Apply coupon during batch purchase
Validate coupon:
Active?
Expired?
Usage limit reached?
Show applied discount instantly
Rules:

One coupon per purchase
Coupon tied to user account
2.11.3 Referral System
Each user gets a unique referral code
User can share referral code
When a new user signs up using referral code:
Referrer gets reward (discount / wallet credit / free days)
New user may get signup discount
Admin can:

Configure referral rewards
Track referral performance
Disable referral system globally 
2.11.4 Referral Data Fields
Referrer User ID
Referred User ID
Referral code
Reward type
Reward status
2.12 Device & Session Control System
2.12.1 Session Tracking
System must track:

User ID
Device ID (hashed)
Device type (mobile / desktop)
OS & browser (optional)
IP address (masked)
Login timestamp
Last activity timestamp
2.12.2 Device Limit Rules
Admin can set max allowed devices per user (e.g., 1–2 devices)
If limit exceeded:
Block new login OR
Logout oldest session
2.12.3 User Controls
User can:

View all active sessions
Logout from:
Specific device
All devices
2.12.4 Admin Controls
Admin can:

View active sessions of any user
Force logout a user from all devices
Block login from suspicious devices
Set global device/session limits
2.12.5 Security Rules
Sessions expire automatically after inactivity
Token rotation on re-login
New login invalidates old tokens (optional)
Detect suspicious behavior (rapid IP change)
