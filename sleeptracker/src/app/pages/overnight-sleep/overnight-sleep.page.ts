import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { OvernightSleepData } from "src/app/data/overnight-sleep-data";
import { SleepService } from "src/app/services/sleep.service";
import { Haptics } from '@capacitor/haptics';

@Component({
  selector: "app-overnight-sleep",
  templateUrl: "./overnight-sleep.page.html",
  styleUrls: ["./overnight-sleep.page.scss"],
})
export class OvernightSleepPage implements OnInit {
  sleepStart: string;
  sleepEnd: string;
  mostRecentSleepLogs: OvernightSleepData[];

  constructor(private service: SleepService, private toastController: ToastController) {}

  ngOnInit() {
    this.mostRecentSleepLogs = SleepService.AllOvernightData.slice(-10).reverse();
  }

  async presentToast(
    duration: number,
    message: string,
    color: "success" | "primary" | "warning" | "danger" = "success"
  ) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: "top",
      color: color,
    });

    await toast.present();
  }

  hapticsVibrate = async () => {
    await Haptics.vibrate();
  };

  async onAddLogClick() {
    if (!this.sleepStart || !this.sleepEnd) {
      await this.hapticsVibrate();
      await this.presentToast(1500, "failed to add log", "danger");
      return;
    }

    let overnightSleepData: OvernightSleepData = new OvernightSleepData(
      new Date(this.sleepStart),
      new Date(this.sleepEnd)
    );

    this.service.logOvernightData(overnightSleepData);
    this.mostRecentSleepLogs = SleepService.AllOvernightData.slice(-10).reverse();
  }
}
