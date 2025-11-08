import StatCard from '../StatCard';
import { Trophy, Target, TrendingUp } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <StatCard 
        icon={Trophy} 
        label="Win Rate" 
        value="68%" 
        trend="+12% this week"
        testId="stat-winrate"
      />
      <StatCard 
        icon={Target} 
        label="K/D Ratio" 
        value="3.2" 
        trend="+0.4"
        testId="stat-kd"
      />
      <StatCard 
        icon={TrendingUp} 
        label="Top 10" 
        value="142" 
        trend="Last 30 days"
        testId="stat-top10"
      />
    </div>
  );
}
