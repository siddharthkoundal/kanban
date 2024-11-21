import React from "react";
import "../styles/StatusBoard.css";

const StatusBoard = ({ groupedTickets = {} }) => {
  return (
    <div className="status-board">
      {Object.entries(groupedTickets).map(([status, tickets]) => (
        <div key={status} className="status-column">
          <div className="status-header">
            <h4>{status}</h4>
            <span>{tickets.length} Tickets</span>
          </div>
          <div className="ticket-list">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="status-card">
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

export default StatusBoard;
