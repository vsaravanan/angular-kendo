import { Component } from '@angular/core';


@Component({
selector: 'my-app',
template: `
<div class="example-config">
    Selected range: {{ range | json }}
</div>
<kendo-daterange>
    <label>
        Start:
        <kendo-dateinput kendoDateRangeStartInput [(value)]="range.start"></kendo-dateinput>
    </label>
    <label>
        End:
        <kendo-dateinput kendoDateRangeEndInput [(value)]="range.end"></kendo-dateinput>
    </label>
</kendo-daterange>
`
})
export class AppComponent {
    public range = { start: null, end: null };
}
