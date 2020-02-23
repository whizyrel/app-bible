import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { ScripturesService } from '../services/scriptures.service';
import { ResourceHandlerService } from '../services/resource-handler.service';
import { PlayerService } from '../services/player.service';
import { SpeechSynthesisService } from '../services/speech-synthesis.service';

import { AppComponent } from '../app.component';
import { ReadComponent } from './read.component';
import { SearchPaneComponent } from '../search-pane/search-pane.component';
import { ScrollViewDirective } from '../directives/scroll-view.directive';
import { ActionScrollDirective } from '../directives/action-scroll.directive';
import { ScriptureNavigatorDirective } from '../directives/scripture-navigator.directive';
import { ScriptureItemComponent } from '../scripture-item/scripture-item.component';
import { ReactionConsoleComponent } from '../reaction-console/reaction-console.component';
import { ToggleReactionsVisibilityDirective } from '../directives/toggle-reactions-visibility.directive';
import { ScriptureContainerComponent } from '../scripture-container/scripture-container.component';
import { ScripturePlayerComponent } from '../scripture-player/scripture-player.component';
import { ReadRoutingModule } from './read-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    SearchPaneComponent,
    ScrollViewDirective,
    ActionScrollDirective,
    ScriptureNavigatorDirective,
    ScriptureItemComponent,
    ReactionConsoleComponent,
    ToggleReactionsVisibilityDirective,
    ScriptureContainerComponent,
    ScripturePlayerComponent
  ],
  imports: [
    CommonModule,
    ReadRoutingModule,
    CoreModule,
    TypeaheadModule.forRoot(),
  ],
  exports: [ CoreModule, ReadRoutingModule],
  providers: [
    ScripturesService,
    ResourceHandlerService,
    PlayerService,
    SpeechSynthesisService
  ]
})
export class ReadModule { }