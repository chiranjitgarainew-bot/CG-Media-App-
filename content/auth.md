# Authentication & Account System

## Signup
- Email + Password
- System auto-generates Student ID
- Student ID is permanent and read-only

Example Student ID:
YS-2026-000123

## Login
- Email + Password
- Restores all previous data automatically

## Security
- Password hashing (bcrypt/argon2)
- JWT / session-based auth
- Rate limiting & brute-force protection
- CSRF & XSS protection