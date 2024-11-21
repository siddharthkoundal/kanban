import React, { useState, useEffect } from "react";
import DisplayDropdown from "./DisplayDropdown";
import StatusBoard from "./StatusBoard";
import UserBoard from "./UserBoard";
import PriorityBoard from "./PriorityBoard";
import "../styles/KanbanBoard.css";

const KanbanBoard = ({ tickets, users }) => {
  const [groupBy, setGroupBy] = useState(
    localStorage.getItem("groupBy") || "status"
  );
  const [sortBy, setSortBy] = useState(
    localStorage.getItem("sortBy") || "priority"
  );

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("sortBy", sortBy);
  }, [groupBy, sortBy]);

  const groupTickets = (groupBy) => {
    switch (groupBy) {
      case "user":
        return tickets.reduce((groups, ticket) => {
          const user = users.find((u) => u.id === ticket.userId);
          const userName = user ? user.name : "Unassigned";
          groups[userName] = [...(groups[userName] || []), ticket];
          return groups;
        }, {});
      case "priority":
        return tickets.reduce((groups, ticket) => {
          const priorityLabel = [
            "No Priority",
            "Low",
            "Medium",
            "High",
            "Urgent",
          ][ticket.priority];
          groups[priorityLabel] = [...(groups[priorityLabel] || []), ticket];
          return groups;
        }, {});
      case "status":
      default:
        return tickets.reduce((groups, ticket) => {
          groups[ticket.status] = [...(groups[ticket.status] || []), ticket];
          return groups;
        }, {});
    }
  };

  const sortTickets = (tickets, sortBy) => {
    return [...tickets].sort((a, b) => {
      if (sortBy === "priority") return b.priority - a.priority;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const groupedTickets = Object.entries(groupTickets(groupBy)).reduce(
    (sortedGroups, [key, tickets]) => {
      sortedGroups[key] = sortTickets(tickets, sortBy);
      return sortedGroups;
    },
    {}
  );

  return (
    <div>
      <div className="dropdown-container">
        <DisplayDropdown
          groupBy={groupBy}
          setGroupBy={setGroupBy}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <div className="kanban-board">
        {groupBy === "status" && (
          <StatusBoard groupedTickets={groupedTickets} />
        )}
        {groupBy === "user" && (
          <UserBoard groupedTickets={groupedTickets} users={users} />
        )}
        {groupBy === "priority" && (
          <PriorityBoard groupedTickets={groupedTickets} />
        )}
      </div>
    </div>
  );
};

export default KanbanBoard;
