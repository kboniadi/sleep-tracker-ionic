import { Component, OnInit } from "@angular/core";
import { PickerController, ToastController } from "@ionic/angular";
import { StanfordSleepinessData } from "src/app/data/stanford-sleepiness-data";
import { SleepService } from "src/app/services/sleep.service";

@Component({
  selector: "app-daytime-sleepiness",
  templateUrl: "./daytime-sleepiness.page.html",
  styleUrls: ["./daytime-sleepiness.page.scss"],
})
export class DaytimeSleepinessPage implements OnInit {
  dateTime: string;
  rating: number;
  mostRecentSleepiness: StanfordSleepinessData[];

  constructor(
    private service: SleepService,
    private pickerCtrl: PickerController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.mostRecentSleepiness = SleepService.AllSleepinessData.slice(-10).reverse();
  }

  async presentToast(duration: number, message: string, color: "success" | "primary" | "warning" | "danger" = "success") {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: 'top',
      color: color,
    });

    await toast.present();
  }

  async onAddLogClick() {
    if (!this.rating || !this.dateTime) {
      await this.presentToast(1500, "failed to add log", "danger")
      return;
    }

    let standfordSleepinessData: StanfordSleepinessData = new StanfordSleepinessData(
      this.rating,
      new Date(this.dateTime)
    );

    this.service.logSleepinessData(standfordSleepinessData);
    
    this.mostRecentSleepiness = SleepService.AllSleepinessData.slice(-10).reverse();
  }

  async openPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: "ratings",
          options: StanfordSleepinessData.ScaleValues.slice(1).map((x, i) => ({
            text: x,
            value: i + 1,
          })),
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Confirm",
          handler: (value) => {
            this.rating = value.ratings.value;
          },
        },
      ],
    });

    await picker.present();
  }
}
