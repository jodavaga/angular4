import {Component} from '@angular/core'

@Component({
    selector: 'app-left-section',
    template: `
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <ul class="left-list">
            <li>item $</li>
            <li>item $</li>
            <li>item $</li>
        </ul>
    </div>
    `,
    styles: [`
        .left-list{
            border: 1px solid red;
            height: 300px;
        }
    `]
})

export class LeftComponent{

}