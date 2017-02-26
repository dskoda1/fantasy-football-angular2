import {
	APP_INITIALIZER,
	NgModule,
	Optional,
	SkipSelf,
	ModuleWithProviders
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ViewTitleService} from './view-title.service';


export function provideViewTitleHandler(viewTitle: ViewTitleService): () => void {
	return () => {
		// Subscribe to view title changes and update the document title.
		viewTitle.title.subscribe((title) => {
			document.title = title ? `Angular Lab - ${title}` : 'Angular Lab';
		});
	};
}


/**
 * Module with service singletons.
 * Check https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-module for details why.
 */
@NgModule({
	imports: [
		BrowserModule
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('angular-lab#CoreModule has already been loaded. Import it in the AppModule only.');
		}
	}

	// tslint:disable-next-line: member-ordering
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			// These services are only going to be created once (one instance for the entire app),
			// not per module import.
			providers: [
				// We don't have any reason for a component in the rendered component tree to know about these (at this time).
				// As such, we'll be using the APP_INITIALIZER multi-collection
				// (which is kind of like a run block in Angular 1.x).
				{
					provide: APP_INITIALIZER,
					useFactory: provideViewTitleHandler,
					deps: [
						ViewTitleService
					],
					multi: true
				},
				ViewTitleService
			]
		};
	}
}
