import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import "./History.css";
import historyGraphic from "../../Assets/A3.jpg";

const History = () => {
  const stats = [
    { label: "Years of Experience", value: 15, icon: "mdi:timeline-clock-outline" },
    { label: "Qualified Experts", value: 36, icon: "mdi:account-cowboy-hat-outline" },
    { label: "Clients", value: 129, icon: "mdi:briefcase-outline" },
    { label: "International Partners", value: 9, icon: "mdi:earth" },
  ];

  const [counts, setCounts] = useState(Array(stats.length).fill(0));

  useEffect(() => {
    const timers = stats.map((stat, index) =>
      setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 30) // Faster update interval
    );

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [stats]);

  return (
    <div className="history-section">
      <motion.header
        className="history-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Journey</h1>
        <p>
          Discover the milestones we've achieved and the trust we've built over the years with our clients and partners.
        </p>
      </motion.header>

      <div className="history-content">
        <motion.img
          src={historyGraphic}
          alt="History Graphic"
          className="history-graphic"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="history-stats-horizontal"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="history-stat-horizontal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Icon icon={stat.icon} width={50} color="#f39c12" />
              <h2>
                {counts[index]}
                {stat.value > 10 && "+"}
              </h2>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default History;
