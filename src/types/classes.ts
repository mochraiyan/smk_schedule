export interface ClassConfig {
  id: string;
  name: string;
  scheduleFile: string;
}

export const classList: ClassConfig[] = [
  {
    id: "xrpl1",
    name: "X RPL 1",
    scheduleFile: "/schedules/xrpl1.json",
  },
  {
    id: "xrpl2",
    name: "X RPL 2",
    scheduleFile: "/schedules/xrpl2.json",
  },
  {
    id: "xrpl3",
    name: "X RPL 3",
    scheduleFile: "/schedules/xrpl3.json",
  },
];
