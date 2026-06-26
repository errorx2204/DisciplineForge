# DisciplineForge API Documentation

## Authentication

### Register

POST /api/auth/register

```json
{
  "name": "Rushov",
  "email": "rushov@gmail.com",
  "password": "123456"
}
```

---

### Login

POST /api/auth/login

```json
{
  "email": "rushov@gmail.com",
  "password": "123456"
}
```

---

### Profile

GET /api/auth/profile

Requires Bearer Token

---

## Habits

### Create Habit

POST /api/habits

```json
{
  "habitName": "Workout",
  "xpAwarded": 50
}
```

---

### Get Habits

GET /api/habits

---

### Complete Habit

PUT /api/habits/:id/complete

---

## Shadow Seal

### Get Shadow Seal

GET /api/shadow-seal

---

### Daily Discipline Check

POST /api/shadow-seal/check

---

### Relapse

POST /api/shadow-seal/relapse

---

## Assignments

### Create Assignment

POST /api/assignments

```json
{
  "subject": "CN",
  "title": "Assignment 1",
  "deadline": "2026-07-10",
  "priority": "Red"
}
```

---

### Get Assignments

GET /api/assignments

---

### Complete Assignment

PUT /api/assignments/:id/complete

---

## Weight Tracker

### Add Weight

POST /api/weights

```json
{
  "weight": 95,
  "notes": "Starting Weight"
}
```

---

### Get Weight History

GET /api/weights

---

## Journal

### Create Journal Entry

POST /api/journal

```json
{
  "title": "Reflection",
  "content": "Today was productive.",
  "mood": "Motivated"
}
```

---

### Get Journal Entries

GET /api/journal

---

## Analytics

### Dashboard Analytics

GET /api/analytics/dashboard