export interface Subject {
  name: string;
  teacher: string;
  start_time: string;
  end_time: string;
}

export interface TestSubject {
  name: string;
  teacher: string;
  age: number;
}

export interface Schedule {
  days: {
    [key: string]: Subject[];
  };
}
