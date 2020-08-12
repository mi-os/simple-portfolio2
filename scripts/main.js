document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val);
    }

    get observers() {
        return this._observers;
    }

    _init() {
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._scrollInit();
    }

    // _sideAnimation(el, inview) {
    //     if(inview) {
    //         this.sides.forEach(side => side.classList.add('inview'));
    //     } else {
    //         this.sides.forEach(side => side.classList.remove('inview'));
    //     }
    // }

    // _destroyObservers() {
    //     this.observers.forEach(ob => {
    //         ob.destroy();
    //     });
    // }

    // destroy() {
    //     this._destroyObservers();
    // }

    _scrollInit() {
        console.log("This is makoto's portfolio site!");
        // this.observers = new ScrollObserver('.appear', this._inviewAnimation);
        // this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation, {rootMargin: "-200px 0px"});
        // this.observers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), {once: false, rootMargin: "-300px 0px"});
    }
}