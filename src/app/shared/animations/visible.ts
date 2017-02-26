import {
	trigger,
	state,
	animate,
	transition,
	style
} from '@angular/core';


const timing = 250;

// Should be used together with `*ngIf`.
// http://stackoverflow.com/a/39356145/1092007
export const visible = trigger('visible', [
	state('in', style({opacity: 1})),
	transition('void => *', [
		style({opacity: 0}),
		animate(timing)
	]),
	transition('* => void', [
		animate(timing, style({opacity: 0}))
	])
]);
