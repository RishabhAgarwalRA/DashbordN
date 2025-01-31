// app/inbox/page.tsx
"use client";

import React, { useState } from "react";

const emailsData = [
  {
    id: 1,
    subject: "Meeting Reminder",
    from: "boss@example.com",
    content: "Don’t forget about the meeting tomorrow at 10 AM.",
  },
  {
    id: 2,
    subject: "Project Update",
    from: "team@example.com",
    content:
      "The project deadline is approaching. Please review the latest files.",
  },
  {
    id: 3,
    subject: "Weekly Newsletter",
    from: "newsletter@example.com",
    content: "Check out our latest updates and news.",
  },
];

const InboxPage: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);

  const handleEmailClick = (id: number) => {
    setSelectedEmail(id === selectedEmail ? null : id);
  };

  return (
    <div className="inbox">
      <h1>Inbox</h1>
      <ul className="email-list">
        {emailsData.map((email) => (
          <li
            key={email.id}
            className="email-item"
            onClick={() => handleEmailClick(email.id)}
          >
            <div className="email-summary">
              <strong>From:</strong> {email.from} <br />
              <strong>Subject:</strong> {email.subject}
            </div>
            {selectedEmail === email.id && (
              <div className="email-content">
                <p>{email.content}</p>
                <button onClick={() => setSelectedEmail(null)}>Close</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InboxPage;
