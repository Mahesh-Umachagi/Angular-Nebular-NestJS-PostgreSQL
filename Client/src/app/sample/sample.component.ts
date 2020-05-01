import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sample",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.scss"],
})
export class SampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
