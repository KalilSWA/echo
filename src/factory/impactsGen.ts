class Impact {
  id: number;
  impact: number;
  time: Date;
  static inputs: string[] = ["Impacts", "Zscore", "av_max", "ang_rotation"];

  constructor(id: number, impact: number, time: Date) {
    this.id = id;
    this.impact = impact;
    this.time = time;
  }
}

export { Impact };
