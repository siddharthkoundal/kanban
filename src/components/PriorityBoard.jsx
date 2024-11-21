import React from "react";
import "../styles/PriorityBoard.css";

const PriorityBoard = ({ groupedTickets = {} }) => {
  return (
    <div className="priority-board">
      {Object.entries(groupedTickets).map(([priority, tickets]) => (
        <div key={priority} className="priority-column">
          <div className="priority-header">
            <h4>{priority}</h4>
            <span>{tickets.length} Tickets</span>
          </div>
          <div className="ticket-list">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="priority-card">
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

export default PriorityBoard;
