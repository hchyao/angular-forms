import {Component} from '@angular/core';
import {Hero}    from './hero';

@Component({
    moduleId: module.id,    // ?    属性设置了以相对于模块的路径加载 templateUrl 时使用的基地址
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    click
    // 增加一个 diagnostic 属性，它返回这个模型的 JSON 形式。 它会帮我们看清开发过程中发生的事，等最后做清理时我们会丢弃它。
    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}