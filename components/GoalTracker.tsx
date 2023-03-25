import react from "react";

function pct(val: number): number {
  return Math.min(Math.floor(val * 100), 100);
}

export default function Location({ percent }: { percent: number }) {
  return (
    <react.Fragment>
      <p className="mono">{pct(percent)}% of goal</p>
      <div style={{ width: '100%', height: 10, backgroundColor: '#ededed', position: 'relative' }}>
        <div className="color-light-green-bg" style={{ position: 'absolute', width: `${pct(percent)}%`, height: '100%' }}></div>
      </div>
    </react.Fragment>
  );
}