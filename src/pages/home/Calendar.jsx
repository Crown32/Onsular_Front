import "./style/calendar.css";

import React, { useState, useEffect } from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { DataView } from "primereact/dataview";
import { Menubar } from "primereact/menubar";

// eslint-disable-next-line
import { Calendar } from "@fullcalendar/core";
import { FullCalendar } from "primereact/fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";

function App() {
  const fullCalendarOptions = {
    plugins: [dayGridPlugin],
    defaultView: "dayGridMonth",
  };

  const colors = {
    twitter: {
      background: "blue",
      color: "white",
    },
    youtube: {
      background: "red",
      color: "white",
    },
    discord: {
      background: "#5865F2",
      color: "white",
    },
  };

  const [display, setDisplay] = useState("calendar");
  const [events, setEvents] = useState([
    { title: "Capitalismo...", date: "2021-11-01" },
    { title: "Forças din...", date: "2021-11-02" },
    { title: "Debate sobr...", date: "2021-11-22" },
    { title: "Prova biolog..", date: "2021-11-12" },
  ]);
  const navBar = [
    {
      label: "Calendar",
      icon: "pi pi-fw pi-calendar",
      command: () => {
        setDisplay("calendar");
      },
    },
    {
      label: "List",
      icon: "pi pi-fw pi-list",
      command: () => {
        setDisplay("list");
      },
    },
  ];

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) =>
        data.sort((a, b) => new Date(a.start) - new Date(b.start))
      )
      .then((data) => setEvents(data));
  }, []);

  return (
    <main>
      <FullCalendar
        className='p-mx-3 p-mt-6 p-mb-3 p-mx-md-6'
        options={fullCalendarOptions}
        events={events}
      />
    </main>
  );
}

export default App;
