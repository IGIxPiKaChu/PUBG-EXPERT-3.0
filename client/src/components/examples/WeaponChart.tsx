import WeaponChart from '../WeaponChart';

export default function WeaponChartExample() {
  const mockData = [
    { version: "2.0", damage: 41, recoil: 35, fireRate: 75 },
    { version: "2.1", damage: 43, recoil: 38, fireRate: 75 },
    { version: "2.2", damage: 43, recoil: 32, fireRate: 78 },
    { version: "2.3", damage: 45, recoil: 30, fireRate: 78 },
    { version: "2.4", damage: 45, recoil: 28, fireRate: 80 },
  ];

  return (
    <div className="p-4">
      <WeaponChart weaponName="M416" data={mockData} testId="weapon-chart" />
    </div>
  );
}
