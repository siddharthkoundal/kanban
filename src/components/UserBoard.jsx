import React from "react";
import "../styles/UserBoard.css";

const UserBoard = ({ groupedTickets = {} }) => {
  return (
    <div className="user-board">
      {Object.entries(groupedTickets).map(([userName, tickets]) => (
        <div key={userName} className="user-column">
          <div className="user-header">
            <h4>{userName}</h4>
            <span>{tickets.length} Tickets</span>
          </div>
          <div className="ticket-list">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="user-card">
                <div className="card-header">
                  <span className="card-id">{ticket.id}</span>
                  <div className="card-menu">⋮</div>
                </div>
                <h4 className="card-title">{ticket.title}</h4>
                <div className="card-footer">
                  <div className="card-icon">❗</div>
                  <span className="card-tag">{ticket.tag.join(", ")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserBoard;
