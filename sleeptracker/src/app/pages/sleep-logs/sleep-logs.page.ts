import { Component, OnInit } from "@angular/core";
import { OvernightSleepData } from "src/app/data/overnight-sleep-data";
import { StanfordSleepinessData } from "src/app/data/stanford-sleepiness-data";
import { SleepService } from "src/app/services/sleep.service";

@Component({
  selector: "app-sleep-logs",
  templateUrl: "./sleep-logs.page.html",
  styleUrls: ["./sleep-logs.page.scss"],
})
export class SleepLogsPage implements OnInit {
  private showSleepData: boolean;
  private showSleepinessData: boolean;
  overnightSleepData: OvernightSleepData[];
  sleepinessData: StanfordSleepinessData[];

  constructor(private service: SleepService) {}

  ngOnInit() {
    this.showSleepData = true;
    this.showSleepinessData = false;
    this.overnightSleepData = SleepService.AllOvernightData;
    this.sleepinessData = SleepService.AllSleepinessData;
  }

  onTabChange(event: any) {
    if (event.detail.value == "sleep-data") {
      this.showSleepData = true;
      this.showSleepinessData = false;
    } else if (event.detail.value == "sleepiness-data") {
      this.showSleepinessData = true;
      this.showSleepData = false;
    }
  }

  getSleepGoalPercent(overnightSleepSet: OvernightSleepData): number {
    let differenceSec = overnightSleepSet.totalSleepCycle() / 1000;

    return (differenceSec / (8.0 * 60 * 60)) * 100;
  }

  getSleepPercentColor(percent: number): string {
    if (percent < 20) {
      return "red";
    } else if (percent < 70) {
      return "orange";
    }
    return "green";
  }
}
