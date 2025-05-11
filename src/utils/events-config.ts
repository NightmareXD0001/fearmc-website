
// Define the event interface
export interface EventConfig {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  registrationOpen: boolean;
  formUrl: string; // URL to the external form
}

// External form base URL - can be changed to any form provider
export const FORM_BASE_URL = "https://tally.so/r/";

// Events configuration
export const events: EventConfig[] = [
  {
    id: 1,
    title: "FearMC Summer Tournament",
    date: "2025-06-15",
    description: "Join us for an epic PvP tournament with amazing prizes!",
    image: "/placeholder.svg",
    registrationOpen: true,
    formUrl: `${FORM_BASE_URL}mDVQlj`, // Unique ID for this form
  },
  {
    id: 2,
    title: "Build Competition",
    date: "2025-07-10",
    description: "Show off your creativity in our monthly themed building contest. This month's theme: Medieval Castles!",
    image: "/placeholder.svg",
    registrationOpen: true,
    formUrl: `${FORM_BASE_URL}nLgzkR`, // Unique ID for this form
  },
  {
    id: 3,
    title: "Survival Games",
    date: "2025-08-05",
    description: "Battle against other players in our custom survival games arena with special abilities and custom loot.",
    image: "/placeholder.svg",
    registrationOpen: false,
    formUrl: `${FORM_BASE_URL}wgE8jO`, // Unique ID for this form
  },
];
