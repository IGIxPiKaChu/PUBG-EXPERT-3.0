import StrategyCard from '../StrategyCard';

export default function StrategyCardExample() {
  return (
    <div className="space-y-4 p-4">
      <StrategyCard
        title="Final Circle Positioning"
        category="Late Game"
        content="Position yourself on the edge of the final circle with cover at your back. This gives you the advantage of seeing enemies running towards the safe zone while minimizing exposure from behind. Use smoke grenades to reposition if caught in the open."
        testId="strategy-1"
      />
      <StrategyCard
        title="Hot Drop Survival"
        category="Early Game"
        content="When hot dropping, prioritize finding a weapon over looting. Land on rooftops for quick weapon spawns and high ground advantage. If you can't find a weapon in 10 seconds, rotate to a nearby building rather than fighting unarmed."
        testId="strategy-2"
      />
    </div>
  );
}
