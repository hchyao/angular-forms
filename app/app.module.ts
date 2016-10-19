import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
    // 如果一个组件、指令或管道出现在模块的 imports 数组中，就说明它是外来模块， 不要 再到 declarations 数组中声明它们。
    // 如果你自己写的它，并且它属于当前模块， 就要 把它声明在 declarations 数组中。
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeroFormComponent ], //把 HeroFormComponent 添加到 ngModule 装饰器的 declarations 列表中。
                                                         // 这让 HeroFormComponent 组件在本模块中随处都可访问
    bootstrap: [ AppComponent ]
})

export class AppModule { }