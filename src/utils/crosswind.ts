export type Wind = {
  direction: number;
  speed: number;
  gust: number;
};

export type Runway = {
  direction: number;
};

const degreesToRadian = (d: number) => {
  return d * (Math.PI / 180);
};

export const crosswind = (w: Wind, r: Runway) => {
  let diff = w.direction - r.direction;
  let crosswindComp = w.speed * Math.sin(degreesToRadian(diff));
  let gustComp = w.gust * Math.sin(degreesToRadian(diff));
  let crosswind = { crosswindComp: Math.ceil(crosswindComp), gustComp: Math.ceil(gustComp) };
  console.log("Crosswind is: ", crosswind);
  return crosswind;
};
