const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { google } = require("googleapis");
require("dotenv").config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Step 1: Redirect user to Google OAuth login
app.get("/auth/google", (req, res) => {
  const scopes = ["https://www.googleapis.com/auth/calendar.readonly"];
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  res.redirect(url);
});

// Step 2: Handle Google OAuth callback and get access token
app.get("/auth/google/callback", async (req, res) => {
  const code = req.query.code;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    res.cookie("googleToken", tokens.access_token, {
      httpOnly: true,
      sameSite: "none",
    });
    res.redirect(process.env.FRONTEND_URL); // Redirect to React app
  } catch (error) {
    res.status(400).send("Authentication failed");
  }
});

// Step 3: Fetch user's Google Calendar events
app.get("/api/calendar", async (req, res) => {
  const token = req.cookies.googleToken;
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  oauth2Client.setCredentials({ access_token: token });
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  try {
    const events = await calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });
    res.json(events.data.items);
  } catch (error) {
    res.status(500).send("Failed to retrieve calendar events");
  }
});

app.get("/", (req, res) => {
  res.json("Hello");
});
app.get("/auth/logout", (req, res) => {
  res.clearCookie("googleToken", { httpOnly: true });
  res.send("Logged out successfully");
});
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
