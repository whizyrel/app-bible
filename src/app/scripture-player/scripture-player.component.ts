import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

import { PlayerService } from '../services/player.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-scripture-player',
  templateUrl: './scripture-player.component.html',
  styleUrls: ['./scripture-player.component.css']
})
export class ScripturePlayerComponent implements OnInit, OnChanges {
  @Input() public passages: Array<string>;
  @Output() public watchFocus: EventEmitter<number> = new EventEmitter();
  public repeatAll = <boolean>false;
  public playerState = <boolean> false;
  public initial = <number> 0;

  constructor(
    private _player: PlayerService,
    private _snackbar: SnackbarService
  ) { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.passages !== undefined) {
      this.passages = this.passages;
    }
  }

  public toggleRepeat(): void {
    this.repeatAll = !this.repeatAll;
  }

  public previous(): void {
    this.stopPlay();

    this.initial -= 1;

    if (this.passageUnderflow) {
      this.initial = 0;
    }

    console.log({ _init: this.initial });
    this.playChapter();
  }

  public next(): void {
    this.stopPlay();

    this.initial += 1;
    if (this.passageOverflow) {
      this.initial = 0;
    }

    console.log({ init_: this.initial });
    this.playChapter();
  }

  public playChapter() {
    this.playerState = true;

    this.watchFocus.emit(this.initial + 1);
    console.log({ playInit: this.initial });
    this._player
      .play(this.passages[ this.initial ])
      .subscribe(
        (data) => console.log({ data }),
        // scrollIntoView
        (error) => {
          console.log({ error });
          this.stopPlay();
          this._snackbar
            .showSnackbar(
              `
              Internet isn't available. Please retry when the internet is available
              `);
        },
        () => {
          // console.log('done!');
          // console.log('last played => ', { lastPlayed: this.initial + 1 });

          // end of list EOL
          if (this.EOPassage) {
            this.stopPlay();
            this.initial = 0;

            // repeat all if repeat enabled
            if (this.repeatAll === true) {
              this.playChapter();
            }
          }

          // play next on the list
          if (this.playerState === true) {
            this.initial += 1;
            // console.log('currently being played', { currentlyPlayed: this.initial + 1 });
            this.watchFocus.emit(this.initial + 1);
            this.playChapter();
          }
        }
      );
  }

  public pause(): void {
    this._player.pause();
  }

  public stopPlay(): void {
    this._player.stop();
    this.togglePlayerState();
  }

  public togglePlayerState(): void {
    this.playerState = !this.playerState;
  }

  private get passageUnderflow(): boolean {
    return this.initial < 0;
  }

  private get passageOverflow(): boolean {
    return this.initial >= this.passages.length;
  }

  private get EOPassage(): boolean {
    return (this.initial + 1) >= this.passages.length;
  }
}
