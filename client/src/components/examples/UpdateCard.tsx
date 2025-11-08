import UpdateCard from '../UpdateCard';

export default function UpdateCardExample() {
  return (
    <div className="space-y-4 p-4">
      <UpdateCard
        versionName="2.5.0"
        releaseDate="Mar 2024"
        majorFeatures={["New Weapon: FAMAS", "Erangel 2.0", "Metro Royale Season 3"]}
        weaponChanges={["M416 recoil reduced", "AWM damage buffed"]}
        mapChanges={["Erangel visual overhaul", "New compounds added"]}
        testId="update-card-1"
      />
      <UpdateCard
        versionName="2.4.0"
        releaseDate="Jan 2024"
        majorFeatures={["Ranked Season 31", "New Mode: Arena Training", "UI Improvements"]}
        testId="update-card-2"
      />
    </div>
  );
}
