import react from "react";

function pct(val: number): number {
  return Math.min(Math.floor(val * 100), 100);
}

export default function Location({ percent }: { percent: number }) {
  return (
    <react.Fragment>
      {percent !== undefined &&
        <p className="mono">{pct(percent)}% of goal</p>
      }
      {percent === undefined &&
        <p className="mono">Loading goal tracker...</p>
      }
      <div style={{ width: '100%', height: 10, backgroundColor: '#ededed', position: 'relative' }}>
        <div className="color-light-green-bg loading-bar" style={{ position: 'absolute', width: `${pct(percent)}%`, height: '100%' }}></div>
      </div>
    </react.Fragment>
  );
}