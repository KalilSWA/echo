class Session {
  id: number;
  duration: number;
  date: Date;
  sessionType: "rugby" | "boxing";
  static sessionInputs: string[] = [
    "session_ID",
    "Duration",
    "Date_and_time",
    "sport",
  ];
  constructor(
    id: number,
    duration: number,
    date: Date,
    sessionType: "rugby" | "boxing"
  ) {
    this.id = id;
    this.duration = duration;
    this.date = date;
    this.sessionType = sessionType;
  }
}

export { Session };
