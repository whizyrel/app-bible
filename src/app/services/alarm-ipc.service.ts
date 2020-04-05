import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ElectronService } from 'ngx-electron';

import { IAlarmDetail } from '../interfaces/i-alarm-detail';

@Injectable({
  providedIn: 'root'
})
export class AlarmIpcService {
  private allAlarmsSubject: Subject<Array<IAlarmDetail>> = new Subject();
  private addAlarmSubject: Subject<Array<IAlarmDetail>> = new Subject();
  private editAlarmSubject: Subject<{message: string}> = new Subject();

  constructor(
    private _electron?: ElectronService,
  ) { }

  public editAlarmProp(data: {i: number, [key: string]: any}): void {
    this._electron.ipcRenderer
      .send(
        'edit-alarm-prop',
        data,
      );
  }

  public editComplete(): void {
    this._electron.ipcRenderer
      .on('edit-alarm-prop-success', (e, data) => {
        this.editAlarmSubject.next(data);
      });
  }

  public submitAlarm(alarm: IAlarmDetail): void {
    this._electron.ipcRenderer
      .send('add-alarm', alarm);
  }

  public alarmAdditionSuccess(): void {
    this._electron.ipcRenderer
      .on('add-alarm-success', (e, data) => {
        this.addAlarmSubject.next(data);
      });
  }

  public getAlarms(): void {
    this._electron.ipcRenderer.send('get-all-alarms');

    this._electron.ipcRenderer
      .on('all-alarms', (e, data) => {
        this.allAlarmsSubject.next(data);
      });
  }

  public getSubjects(): { [ key in string ]: Subject<any> } {
    return {
      addAlarmSubject: this.addAlarmSubject,
      allAlarmsSubject: this.allAlarmsSubject,
      editAlarmSubject: this.editAlarmSubject
    };
  }
}