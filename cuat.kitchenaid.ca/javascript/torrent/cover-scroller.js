'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var CoverScroller = (function (_Messenger) {
    function CoverScroller(opts, timeline) {
        _classCallCheck(this, CoverScroller);

        _get(Object.getPrototypeOf(CoverScroller.prototype), 'constructor', this).call(this);
        var _self = this;
        if (opts) {
            this.duration = opts.duration * 1000 || 1000;
        }
        this.target = $jq('.coverscroller > div');
        this.numElements = $jq(this.target).find('.cover').length;
        this.curCover = 0;
        this.animating = false;
        this.quedScroll = false;
        this.coverState = {};
        this.color = 'red';
        timeline ? this.timeline = timeline : undefined;

        var _loop = function () {
            _self.coverState[i] = false;
            var index = i;

            //track when a frameset loads
            if (_self.timeline) {
                _self.timeline.on('loaded' + index, function () {
                    _self.coverState[index] = true;
                });
            }
        };

        for (var i = 0; i <= this.numElements - 1; i++) {
            _loop();
        }

        $jq('.cover-picker li').click(function () {
            var index = $jq(this).index();
            if (_self.coverState[index]) _self.scrollTo(index);else {
                //if a frameset is still loading, activate the loading overlay and wait until it's done
                _self.showLoader();
                if (_self.timeline) {
                    _self.timeline.on('loaded' + index, function () {
                        _self.timeline.off('loaded' + index);
                        _self.hideLoader();
                        _self.scrollTo(index);
                    });
                }
            }
        });

        $jq('.cover-picker li').hover(function () {
            $jq(this).find('div').eq(0).animate({ opacity: 1 }, 400);
        }, function () {
            if (_self.curCover == 0) $jq(this).find('div').eq(0).animate({ opacity: 0.5 }, 400);
        });

        this.redraw();
    }

    _inherits(CoverScroller, _Messenger);

    _createClass(CoverScroller, [{
        key: 'redraw',
        value: function redraw() {
            var menuSize = isPhone ? 50 : 116; //magical
            var height = $jq(window).height() - menuSize;
            var width = $jq(window).width();

            var coverSelector = isMobile ? '.cover-wrapper' : '.cover-wrapper,.cover';

            $jq(coverSelector).css({
                width: width,
                height: height,
                'min-height': height
            });

            if (!isMobile) {
                this.elHeight = height;
                this.emit('redraw');
                $jq(this.target).css('top', -this.elHeight * this.curCover);

                $jq('#loader').css({ width: width, height: height, top: menuSize });

                var coverTop = this.elHeight * this.curCover + this.elHeight / 2 - parseInt($jq('.cover-picker').height()) / 2;
                $jq('.cover-picker').css({ top: coverTop });

                var multiplier = this.curCover === 0 ? 1 : this.curCover;
                var colorTop = this.elHeight * multiplier + this.elHeight / 2 - parseInt($jq('.color-picker').height()) / 2;
                if (this.curCover == 0) {
                    $jq('.cover-picker li').not('.selected').find('div:first-child').css({ opacity: 0.5 });
                } else {
                    $jq('.cover-picker li div:first-child').css({ opacity: 1 });
                }
                $jq('.color-picker').css({ top: colorTop });

                $jq.each($jq('.color-picker li'), function (i, v) {
                    if (i == 0) return;
                    var t = $jq(this).find('div').eq(0).position().top;
                    $jq(this).find('div').eq(1).css('top', t);
                });
            }
        }
    }, {
        key: 'showLoader',
        value: function showLoader() {
            this.coverState = {};
            $jq('#loader').fadeIn();
            this.emit('loading');
        }
    }, {
        key: 'hideLoader',
        value: function hideLoader() {
            $jq('#loader').fadeOut();
            this.emit('loaded');
        }
    }, {
        key: 'disableCover',
        value: function disableCover(id) {
            if (id < 0 || id >= this.coverState.length) {
                return;
            }this.coverState[id] = false;
        }
    }, {
        key: 'enableCover',
        value: function enableCover(id) {
            if (id < 0 || id >= this.coverState.length) {
                return;
            }this.coverState[id] = true;
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(id) {
            if (this.timeline && this.timeline.playing && !this.timeline.looping) {
                return;
            }if (this.quedScroll) {
                return;
            }var _self = this;

            this.direction = id < this.curCover ? 0 : 1;

            if (this.animating || this.curCover == id) {
                return;
            }if (id > this.numElements - 1) {
                if (this.curCover == this.numElements - 1) {
                    return;
                }id = this.numElements - 1;
            }
            if (id < 0) {
                if (this.curCover === 0) {
                    return;
                }id = 0;
            }

            if (isMobile) {
                $jq('.cover-wrapper').animate({ scrollTop: $jq('.cover-item-' + (id + 1)).offset().top });
            } else {
                if (id == 0) $jq('.cover-picker li div:first-child').animate({ opacity: 0.5 }, 400);else $jq('.cover-picker li div:first-child').animate({ opacity: 1 }, 400);

                if (this.timeline.looping) {
                    this.timeline.stopLoop(this.direction);
                }

                //animate cover
                this.animating = true;
                $jq(this.target).velocity({ top: -this.elHeight * id }, { duration: this.duration, complete: function complete() {
                        _self.emit('scrollEnd');
                        _self.animating = false;
                    } });

                //animate color and cover pickers, don't animate them to the first cover
                var multiplier = id === 0 ? 1 : id;
                var coverTop = this.elHeight * id + this.elHeight / 2 - parseInt($jq('.cover-picker').height()) / 2;
                $jq('.cover-picker').velocity({ top: coverTop }, { duration: this.duration });
                $jq('.cover-picker').find('li').removeClass('selected');
                $jq('.cover-picker').find('li').eq(id).addClass('selected');

                var colorTop = this.elHeight * multiplier + this.elHeight / 2 - parseInt($jq('.color-picker').height()) / 2;
                $jq('.color-picker').velocity({ top: colorTop }, { duration: this.duration });
            }

            this.curCover = id;
            this.emit('scroll');
        }
    }, {
        key: 'scroll',
        value: function scroll() {
            var direction = arguments[0] === undefined ? 1 : arguments[0];

            if (this.timeline && this.timeline.playing && !this.timeline.looping) {
                return;
            }this.scrollTo(direction ? this.curCover + 1 : this.curCover - 1);
        }
    }]);

    return CoverScroller;
})(Messenger);