
export interface AnnouncementConfig {
  enabled: boolean;
  title: string;
  shortText: string;
  longText: string;
  date?: string;
}

export const announcement: AnnouncementConfig = {
  enabled: true,
  title: "Season 4 Launch",
  shortText: "Season 4 starts on November 1st! Join now for early access rewards!",
  longText: `
# Season 4 is coming!

Get ready for our biggest update yet. Season 4 launches on November 1st with:

- **New Map**: A completely redesigned world with custom biomes
- **New Economy**: Balanced economy system with shops and player markets
- **Custom Enchants**: 25+ new enchantments exclusive to Season 4
- **Early Access**: Join before launch to receive exclusive rewards

Early access will be granted to players who have voted at least 10 times in the last month.
Don't miss out on the most exciting season of FearMC yet!
  `
};
