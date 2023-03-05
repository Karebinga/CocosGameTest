
import { _decorator, Component, Node, KeyCode, input, Input, systemEvent, SystemEventType, EventKeyboard, macro, Vec2, RigidBody2D, Collider2D, BoxCollider2D, Contact2DType, IPhysics2DContact, Label} from 'cc';
import bridge from '@vkontakte/vk-bridge';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property({type: Label})
    private scoreLabel: Label | null = null;
    private score: number = 0;

    private collider: any;

    private rigidbody: any;
    private direction: number = 0;
    private walk_force: number = 1000;
    private jump_force: number = 35000;
   

    onLoad() {
        bridge.send("VKWebAppInit", {});
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    start () {
        this.rigidbody = this.node.getComponent(RigidBody2D);

        this.collider = this.node.getComponent(BoxCollider2D);
        if( this.collider ) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update (deltaTime: number) {
        this.rigidbody.applyForceToCenter( new Vec2( this.direction * this.walk_force, 0 ), true );
    }

    onBeginContact( selfCollider: BoxCollider2D, otherCollider: BoxCollider2D, contact: IPhysics2DContact | null ) {
        
        if( otherCollider.name == "star<BoxCollider2D>" ){
            otherCollider.node.getComponent("Star").destroyStar();
            this.score++;
            this.scoreLabel.string = "Score: " + this.score;
        }

    }

    onKeyDown(event: EventKeyboard) {
        switch ( event.keyCode ) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT: {
                this.direction = -1;
                break;
            }
            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT: {
                this.direction = 1;
                break;
            }
            case KeyCode.SPACE:
            case KeyCode.ARROW_UP: {
                this.rigidbody.applyForceToCenter( new Vec2( 0, this.jump_force ), true );
                break;
            }
            default:
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch ( event.keyCode ) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT: {
                this.direction = 0;
                break;
            }
            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT: {
                this.direction = 0;
                break;
            }
            default:
                break;
        }
    }
}

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
