export type Contaminent = {
  description: string;
  code: number;
  maxCrosswind: number;
  callDxp: boolean;
};

export const contaminentGravel = [
  { description: "Select...", code: 6, maxCrosswind: 36, callDxp: false },
  { description: "Frost", code: 5, maxCrosswind: 30, callDxp: false },
  { description: "Dry Snow 1.0 in or less depth: -15ºC and Colder OAT", code: 5, maxCrosswind: 30, callDxp: false },
  { description: "Dry Snow 1.0 in or less depth: Warmer than -15ºC OAT", code: 4, maxCrosswind: 25, callDxp: false },
  { description: "Dry Snow more than 1.0 in depth", code: 3, maxCrosswind: 20, callDxp: true },
  { description: "Wet Snow 0.13 in or less depth.", code: 3, maxCrosswind: 20, callDxp: false },
  { description: "Wet Snow greater than 0.13 in depth over Compacted snow/gravel mix", code: 0, maxCrosswind: 0, callDxp: true },
  { description: "Water Greater than 0.13 in depth", code: 2, maxCrosswind: 15, callDxp: true },
  { description: "Wet (Damp and 0.13 in or less depth of water)", code: 5, maxCrosswind: 30, callDxp: false },
  { description: "Slush 0.13 in or less depth", code: 3, maxCrosswind: 20, callDxp: true },
  { description: "Slush Greater than 0.13 in depth", code: 1, maxCrosswind: 10, callDxp: true },
  { description: "Ice: -25ºC and colder OAT", code: 3, maxCrosswind: 20, callDxp: true },
  { description: "Ice: -15ºC to -24ºC OAT", code: 2, maxCrosswind: 15, callDxp: true },
  { description: "Ice: -8ºC to -14ºC OAT", code: 1, maxCrosswind: 10, callDxp: true },
  { description: "Ice: -7ºC and warmer OAT", code: 0, maxCrosswind: 0, callDxp: true },
  { description: "Over Ice: Dry Snow, Wet Snow, Slush, Water", code: 0, maxCrosswind: 0, callDxp: true },
];

export const contaminentPaved = [
  { description: "Select...", code: 6, maxCrosswind: 36, callDxp: false },
  { description: "Frost", code: 5, maxCrosswind: 30 },
  { description: "Dry Snow or Wet Snow (Any depth) over 100% Compacted Snow", code: 3, maxCrosswind: 20, callDxp: true },
  { description: "Dry Snow more than 1.0 in depth", code: 3, maxCrosswind: 20, callDxp: true },
  { description: "Dry Snow 1.0 in or less depth", code: 5, maxCrosswind: 30, callDxp: false },
  { description: "Wet Snow 0.13 in or less depth", code: 5, maxCrosswind: 30, callDxp: false },
  { description: "Wet Snow greater than 0.13 in depth", code: 3, maxCrosswind: 20, callDxp: false },
  { description: "100% Compacted Snow: -15ºC and Colder OAT", code: 4, maxCrosswind: 25, callDxp: false },
  { description: "100% Compact Snow: Warmer than -15ºC OAT", code: 3, maxCrosswind: 20, callDxp: false },
  { description: "Water Greater than 0.13 in depth", code: 2, maxCrosswind: 15, callDxp: true },
  { description: "Water on top of 100% Compacted Snow", code: 0, maxCrosswind: 0, callDxp: true },
  { description: "Wet (Damp and 0.13 in or less depth of water)", code: 5, maxCrosswind: 30, callDxp: false },
  { description: "Wet (“Slippery when wet” runway)", code: 3, maxCrosswind: 20, callDxp: true },
  { description: "Slush 0.13 in or less depth", code: 3, maxCrosswind: 20, callDxp: true },
  { description: "Slush Greater than 0.13 in depth", code: 1, maxCrosswind: 10, callDxp: true },
  { description: "Ice: -25ºC and colder OAT", code: 3, maxCrosswind: 20, callDxp: true },
  { description: "Ice: -15ºC to -24ºC OAT", code: 2, maxCrosswind: 15, callDxp: true },
  { description: "Ice: -8ºC to -14ºC OAT", code: 1, maxCrosswind: 10, callDxp: true },
  { description: "Ice: -7ºC and warmer OAT", code: 0, maxCrosswind: 0, callDxp: true },
  { description: "Over Ice: Dry Snow, Wet Snow, Slush, Water", code: 0, maxCrosswind: 0, callDxp: true },
];
