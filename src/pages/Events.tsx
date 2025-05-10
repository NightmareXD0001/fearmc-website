
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageLayout from "@/components/layout/PageLayout";
import { useToast } from "@/hooks/use-toast";
import EventRegistrationForm from "@/components/events/EventRegistrationForm";

// Dummy events data
const events = [
  {
    id: 1,
    title: "FearMC Summer Tournament",
    date: "2025-06-15",
    description: "Join us for an epic PvP tournament with amazing prizes!",
    image: "/placeholder.svg",
    registrationOpen: false,
  },
];

const Events = () => {
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  // Mock API call for server status
  const { data: serverStatus } = useQuery({
    queryKey: ["serverStatus"],
    queryFn: async () => {
      // This would be a real API call in production
      return { online: true, playerCount: 128, maxPlayers: 500 };
    },
  });

  const handleRegister = (eventId: number) => {
    setSelectedEvent(eventId);
  };

  const handleCloseForm = () => {
    setSelectedEvent(null);
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto py-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bungee text-white mb-2">
            <span className="text-fear-red text-glow">Server</span> Events
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Join our exciting events to win exclusive prizes and have fun with the community. Check 
            out our upcoming events below and register to participate!
          </p>
        </div>
        
        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-fear-darkgray/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-fear-red/30 transition-all hover:shadow-md hover:shadow-fear-red/20 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.registrationOpen
                      ? "bg-green-500/70 text-white"
                      : "bg-gray-500/70 text-white"
                  }`}>
                    {event.registrationOpen ? "Registration Open" : "Coming Soon"}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bungee text-lg">{event.title}</h3>
                  <span className="text-sm text-gray-400">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm flex-grow">{event.description}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => handleRegister(event.id)}
                    disabled={!event.registrationOpen}
                    className={`w-full py-2 rounded-md font-medium transition-all ${
                      event.registrationOpen
                        ? "bg-fear-red hover:bg-fear-red/80 text-white"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {event.registrationOpen ? "Register Now" : "Coming Soon"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show registration form when an event is selected */}
        {selectedEvent !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-fear-darkgray w-full max-w-xl rounded-xl overflow-hidden shadow-xl">
              <EventRegistrationForm 
                eventId={selectedEvent} 
                eventName={events.find(e => e.id === selectedEvent)?.title || ''}
                onClose={handleCloseForm}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Events;
