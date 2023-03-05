System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, KeyCode, input, Input, Vec2, RigidBody2D, BoxCollider2D, Contact2DType, Label, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      KeyCode = _cc.KeyCode;
      input = _cc.input;
      Input = _cc.Input;
      Vec2 = _cc.Vec2;
      RigidBody2D = _cc.RigidBody2D;
      BoxCollider2D = _cc.BoxCollider2D;
      Contact2DType = _cc.Contact2DType;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96321jFZ6dFwpYTu9YhkTX9", "player", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'KeyCode', 'input', 'Input', 'systemEvent', 'SystemEventType', 'EventKeyboard', 'macro', 'Vec2', 'RigidBody2D', 'Collider2D', 'BoxCollider2D', 'Contact2DType', 'IPhysics2DContact', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scoreLabel", _descriptor, this);

          this.score = 0;
          this.collider = void 0;
          this.rigidbody = void 0;
          this.direction = 0;
          this.walk_force = 1000;
          this.jump_force = 35000;
        }

        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        start() {
          this.rigidbody = this.node.getComponent(RigidBody2D);
          this.collider = this.node.getComponent(BoxCollider2D);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        update(deltaTime) {
          this.rigidbody.applyForceToCenter(new Vec2(this.direction * this.walk_force, 0), true);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.name == "star<BoxCollider2D>") {
            otherCollider.node.getComponent("Star").destroyStar();
            this.score++;
            this.scoreLabel.string = "Score: " + this.score;
          }
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT:
              {
                this.direction = -1;
                break;
              }

            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT:
              {
                this.direction = 1;
                break;
              }

            case KeyCode.SPACE:
            case KeyCode.ARROW_UP:
              {
                this.rigidbody.applyForceToCenter(new Vec2(0, this.jump_force), true);
                break;
              }

            default:
              break;
          }
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT:
              {
                this.direction = 0;
                break;
              }

            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT:
              {
                this.direction = 0;
                break;
              }

            default:
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=989edae9b180f4ca61fffc951f6409deb333b504.js.map