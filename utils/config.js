export const chartFilterOptions = [
  {
    name: "All",
    value: null,
    timeFormat: null
  },
  {
    name: "Last 30 days",
    timeFormat: "day",
    value: 30
  },
  {
    name: "Last 24 hours",
    timeFormat: "hour",
    value: 24
  }
];

export const summarySection = [
  { summary: "⚡️ 1.4kW", subtitle: "Power draw" },
  { summary: "☀️️ 5.8kW", subtitle: "Solar power production" },
  { summary: "🔌️ 4.4kW", subtitle: "Fed into grid" }
];

export const deviceSection = [
  {
    title: "Air conditioner",
    usage: "0.3093kW"
  },
  {
    title: "Wi-Fi router",
    usage: "0.0033kW"
  },
  {
    title: "Humidifer",
    usage: "0.0518kW"
  },
  {
    title: "Smart TV",
    usage: "0.1276kW"
  },
  {
    title: "Diffuser",
    usage: "0.0078kW"
  },
  {
    title: "Refrigerator",
    usage: "0.0923kW"
  }
];
