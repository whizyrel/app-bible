import { Injectable } from '@angular/core';

import { Observable, asyncScheduler } from 'rxjs';
import { observeOn, mergeAll } from 'rxjs/operators';

import { SpeechSynthesisService } from './speech-synthesis.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private _speechSynth: SpeechSynthesisService
  ) {  }

  public play(content: string): Observable<any> {
    this.initSpeechSynth();

    return this._speechSynth.play(content);
  }

  public pause(): void {
    this._speechSynth.pause();
  }

  public stop(): void {
    this._speechSynth.stop();
  }

  private initSpeechSynth(): void {
    this._speechSynth.__init__();
  }

  public get isPending(): boolean {
    return this._speechSynth.isPending();
  }
}
